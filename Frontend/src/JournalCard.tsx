import React from "react";

interface JournalCardProps {
    name: string;
    birthdate: string;
    description: string;
}

const JournalCard: React.FC<JournalCardProps> = ({ name, birthdate, description }) => {
    return (
        <li className="card">
            <h3 data-testid="journal-name">{name}</h3>
            <p data-testid="journal-birthdate"><strong>Födelsedatum:</strong> {birthdate}</p>
            <p data-testid="journal-description"><strong>Beskrivning:</strong> {description}</p>
        </li>
    );
};

export default JournalCard;