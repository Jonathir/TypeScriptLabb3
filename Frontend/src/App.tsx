import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Journal {
  id: number;
  name: string;
  description: string;
  birthdate: string;
}

function App() {

  const [journals, setJournals] = useState<Journal[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/journal')
      .then(response => {
        setJournals(response.data);
      })
      .catch(error => {
        console.error('Error fetching data for journals', error)
      });
  }, []);

  return (
    <>
      <h1>Journaler</h1>
      <ul>
        {journals.map((journal) => (
          <li key={journal.id}>
            <h3>{journal.name}</h3>
            <p><strong>Födelsedatum:</strong> {journal.birthdate}</p>
            <p><strong>Beskrivning:</strong> {journal.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
