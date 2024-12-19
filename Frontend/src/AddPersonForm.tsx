import React, { useState } from 'react';
import axios from 'axios';

function AddPersonForm({ onPersonAdded }: { onPersonAdded: () => void }) {
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/persons', { name, birthdate, email });
            onPersonAdded();
            setName('');
            setBirthdate('');
            setEmail('');
        } catch (err) {
            console.error('Error adding person: ', err);
        }
    };

    return (
        <form data-testid="add-person-form" onSubmit={handleSubmit}>
            <input
                data-testid="input-name"
                type="text"
                placeholder="Namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {' '}
                        <input
                data-testid="input-birthdate"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            {' '}
                        <input
                data-testid="input-email"
                type="email"
                placeholder="E-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button data-testid="submit-button" type="submit">Lägg till person</button>
        </form>
    );
}

export default AddPersonForm;