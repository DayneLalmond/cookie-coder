import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Donate() {
  return (
    <Card>
      <Card.Header>Donate</Card.Header>
      <Card.Body>
        <Card.Title>Help purchase water for children in Africa.</Card.Title>
        <Card.Text>
          Below you'll find a Deep Link configured to Venmo.
        </Card.Text>
        <a
          href="https://urlgeni.us/venmo/ca8I"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="sm">
            As You Wish
          </Button>
          {""}
        </a>
      </Card.Body>
    </Card>
  );
}

export default Donate;
