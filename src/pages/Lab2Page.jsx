import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';
import { Card, ListGroup } from 'react-bootstrap';

function Lab2Page() {
    const { id } = useParams();
    const person = data.find(person => person.id === parseInt(id));

    return (
        <>
            {person ? (
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Szukana osoba</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>ID:</strong> {person.id}</ListGroup.Item>
                        <ListGroup.Item><strong>Imię:</strong> {person.name}</ListGroup.Item>
                        <ListGroup.Item><strong>Data urodzenia:</strong> {person.birth}</ListGroup.Item>
                        <ListGroup.Item><strong>Kolor oczu:</strong> {person.eyes}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ) : (
                <p>Person not found</p>
            )}
        </>
    );
}

export default Lab2Page;