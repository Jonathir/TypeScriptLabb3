import React from "react";

interface JournalCardProps {
    name: string;
    birthdate: string;
    description: string;
}

const JournalCard: React.FC<JournalCardProps> = ({ name, birthdate, description }) => {
    return (
        <li className="card">
            <h3>{name}</h3>
            <p><strong>Födelsedatum:</strong> {birthdate}</p>
            <p><strong>Beskrivning:</strong> {description}</p>
        </li>
    );
};

export default JournalCard;