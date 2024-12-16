import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import JournalCard from './JournalCard';
import Button from './Button';

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

  const handleClick = () => {
    console.log('Knappen klickad');
  }

  return (
    <div className='container'>
      <h1 className='title'>Journaler</h1>
      <ul className='list'>
        {journals.map((journal) => (
          <JournalCard
            key={journal.id}
            name={journal.name}
            birthdate={journal.birthdate}
            description={journal.description}
          />
        ))}
      </ul>
      <Button  label='Klicka här!' onClick={handleClick}/>
    </div>
  );
}

export default App
