import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const UML: React.FC = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    
    mermaid.contentLoaded();
  }, []);

  return (
    <div>
      <h3>ER Diagram using Mermaid</h3>
      <pre className="mermaid">
        {`
          erDiagram
            persons }o--|| journal : "has (many)"

            persons {
            integer id PK
            varchar name
            date birthdate
            varchar email
            }

            journal {
            integer id PK
            integer person_id FK
            text description
            timestamp created_at
            }
        `}
      </pre>
    </div>
  );
};

export default UML;