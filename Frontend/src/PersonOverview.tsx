import React, { useEffect, useState } from 'react';

interface MedicalRecord {
    journal_id: number;
    description: string;
    created_at: string;
    person_id: number;
    person_name: string;
    person_birthdate: string;
}

const PersonOverview: React.FC = () => {
    const [records, setRecords] = useState<MedicalRecord[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMedicalRecords = async () => {
            try {
                const response = await fetch('http://localhost:3000/journal');
                if (!response.ok) {
                    throw new Error('Failed to fetch medical records');
                }
                const data = await response.json();
                setRecords(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchMedicalRecords();
    }, []);

    if (loading) return <p data-testid="loading-message">Laddar journaler...</p>;
    if (error) return <p data-testid="error-message">Fel: {error}</p>;
    
    return (
        <div data-testid="medical-records-page">
            <h2>Översikt personer</h2>
            <button data-testid="fetch-medical-records-button">Fetch Medical Records</button>
            <table>
                <thead>
                    <tr>
                        <th>Journal ID</th>
                        <th>Beskrivning</th>
                        <th>Skapad:</th>
                        <th>Namn</th>
                        <th>Födelsedatum</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.journal_id}>
                            <td>{record.journal_id}</td>
                            <td data-testid="medical-record-description">{record.description}</td>
                            <td data-testid="medical-record-created-at">{new Date(record.created_at).toLocaleDateString()}</td>
                            <td data-testid="person-name">{record.person_name}</td>
                            <td data-testid="person-birthdate">{new Date(record.person_birthdate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonOverview;
