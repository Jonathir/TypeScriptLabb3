import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddPersonForm from './AddPersonForm';

interface Person {
  id: number;
  name: string;
  email: string;
  birthdate: string;
}

function App() {

  const [persons, setPersons] = useState<Person[]>([]);

  const fetchPersons = async () => {
    try {
      const response = await axios.get('http://localhost:3000/persons');
      setPersons(response.data);
    } catch (error) {
      console.error('Error fetching persons: ', error);
    }
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div className='container'>
      <h1>Personer</h1>
      <AddPersonForm onPersonAdded={fetchPersons} />
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            <span data-testid="person-name">{person.name}</span>
            {' - '}
            <span data-testid="person-birthdate">{person.birthdate}</span>
            {' - '}
            <span data-testid="person-email">{person.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
