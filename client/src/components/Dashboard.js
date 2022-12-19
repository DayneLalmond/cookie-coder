import Accordion from "react-bootstrap/Accordion";
import DashHeader from "../images/dashboard-header.png";

export function Dashboard() {
  return (
    <Accordion defaultActiveKey="0">
      <div>
        <img src={DashHeader} className="App-logo" alt="logo" height="100px" />
      </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>About This Project</Accordion.Header>
        <Accordion.Body>
          <div>
            Esse quis ad cillum labore excepteur consequat consequat cillum do
            proident aute ea aliqua deserunt. Cillum ipsum laborum velit
            consectetur labore sint eu ex aute ullamco minim adipisicing non.
            Nisi fugiat ex consequat magna ut tempor nulla deserunt eiusmod
            officia laborum consectetur. Pariatur non irure sint excepteur duis
            adipisicing enim ea. Eu cillum ex nostrud incididunt ipsum eu est
            voluptate qui ex.
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
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

export default Dashboard;
