import Accordion from "react-bootstrap/Accordion";
import { Editor2 } from "../components/Editor2";
import { Editor3 } from "../components/Editor3";

export function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Full Stack Certificate</Accordion.Header>
        <Accordion.Body>
          <div>
            <Editor2 />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About This Project</Accordion.Header>
        <Accordion.Body>
          <div>
            <Editor3 />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Portfolios & Contact Info</Accordion.Header>
        <Accordion.Body>
          Deserunt eiusmod nulla laborum irure ut sit in enim qui aliqua. Sint
          velit cupidatat non irure. Exercitation occaecat adipisicing minim qui
          aute anim et aute amet est veniam mollit. Adipisicing reprehenderit
          reprehenderit nisi proident fugiat et ad minim commodo esse. Amet anim
          dolor laborum nulla dolore ea amet dolore culpa incididunt.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
