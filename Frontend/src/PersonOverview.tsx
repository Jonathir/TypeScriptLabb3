import React, { useEffect, useState } from 'react';

interface Person {
    id: number;
    name: string;
    birthdate: string;
    email?: string;
}

interface JournalEntry {
    journal_id: number;
    description: string;
    created_at: string;
    person_id: number;
}

const PersonOverview: React.FC = () => {
    const [persons, setPersons] = useState<Person[]>([]);
    const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);
    const [journals, setJournals] = useState<JournalEntry[]>([]);
    const [loadingPersons, setLoadingPersons] = useState<boolean>(true);
    const [loadingJournals, setLoadingJournals] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [newJournalDescription, setNewJournalDescription] = useState<string>('');
    const [isAddingJournal, setIsAddingJournal] = useState<boolean>(false);

    useEffect(() => {
        const fetchPersons = async () => {
            try {
                const response = await fetch('http://localhost:3000/persons');
                if (!response.ok) {
                    throw new Error('Failed to fetch persons');
                }
                const data = await response.json();
                setPersons(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoadingPersons(false);
            }
        };

        fetchPersons();
    }, []);

    const fetchJournalsForPerson = async (personId: number) => {
        setLoadingJournals(true);
        setJournals([]);
        try {
            const response = await fetch(`http://localhost:3000/journal`);
            if (!response.ok) {
                throw new Error('Failed to fetch journals');
            }
            const data = await response.json();
            const filteredJournals = data.filter((journal: JournalEntry) => journal.person_id === personId);
            setJournals(filteredJournals);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoadingJournals(false);
        }
    };

    const handleAddJournal = async () => {
        if (!selectedPersonId || !newJournalDescription.trim()) return;

        try {
            const response = await fetch('http://localhost:3000/journal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    person_id: selectedPersonId,
                    description: newJournalDescription,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add journal entry');
            }

            const newJournal = await response.json();
            setJournals((prevJournals) => [...prevJournals, newJournal]);
            setNewJournalDescription('');
            setIsAddingJournal(false);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    if (loadingPersons) return <p data-testid="loading-message">Loading persons...</p>;
    if (error) return <p data-testid="error-message">Error: {error}</p>;

    return (
        <div 
            data-testid="medical-records-page"
            style={{paddingTop: '30rem'}}>
            <h2>Persons Overview</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <h3>Personer</h3>
                    <ul data-testid="person-list">
                        {persons.map((person) => (
                            <li key={person.id} data-testid="person-item">
                                <button
                                    data-testid={`person-name-${person.id}`}
                                    onClick={() => {
                                        setSelectedPersonId(person.id);
                                        fetchJournalsForPerson(person.id);
                                    }}
                                >
                                    {person.name}
                                    <br></br>
                                    <span data-testid="person-birthdate">{person.birthdate}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Journaler</h3>
                    {loadingJournals && <p data-testid="loading-journals-message">Loading journals...</p>}
                    {!loadingJournals && selectedPersonId && journals.length === 0 && (
                        <p data-testid="no-journals-message">No journals found for this person.</p>
                    )}
                    <ul data-testid="journal-list">
                        {journals.map((journal) => (
                            <li key={journal.journal_id} data-testid="journal-item">
                                <p>
                                    <strong data-testid="medical-record-description">{journal.description}</strong> <br />
                                    <span data-testid="medical-record-created-at">
                                        Skrivet: {new Date(journal.created_at).toLocaleDateString()}
                                    </span>
                                </p>
                            </li>
                        ))}
                    </ul>

                    {selectedPersonId && (
                        <div style={{ marginTop: '20px' }}>
                            <h4>Add New Journal Entry</h4>
                            {isAddingJournal ? (
                                <div data-testid="add-journal-form">
                                    <textarea
                                        data-testid="journal-description-input"
                                        value={newJournalDescription}
                                        onChange={(e) => setNewJournalDescription(e.target.value)}
                                        placeholder="Enter journal description"
                                        rows={3}
                                        style={{ width: '100%' }}
                                    ></textarea>
                                    <button data-testid="save-journal-button" onClick={handleAddJournal}>
                                        Spara
                                    </button>
                                    <button
                                        data-testid="cancel-journal-button"
                                        onClick={() => setIsAddingJournal(false)}
                                    >
                                        Avbryt
                                    </button>
                                </div>
                            ) : (
                                <button
                                    data-testid="add-journal-button"
                                    onClick={() => setIsAddingJournal(true)}
                                >
                                    Lägg till journalanteckning
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PersonOverview;
