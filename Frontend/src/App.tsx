import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import AddPersonForm from './AddPersonForm';
import PersonOverview from './PersonOverview';
import ERDiagram from './ERDiagram';

interface Person {
  id: number;
  name: string;
  email: string;
  birthdate: string;
}

const App: React.FC = () => {

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
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          
          <Route path="/person-overview" element={<PersonOverview />} />

          <Route
            path="/about"
            element={<ERDiagram />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
