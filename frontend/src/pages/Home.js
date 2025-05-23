import React from 'react';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title>Welcome to User App</Card.Title>
        <Card.Text>
          You can register a new account or log in if you already have one.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
