import { Accordion, Image, Tab, Col, Row, Nav, Container, ListGroup } from "react-bootstrap";
import profilepic from "../rsc/profile.png";

function Home() {
  return (
    <div className="home">
      <Container fluid className="top">
        <Row className="justify-content-md-center">
          <Col md="auto"><Image src={profilepic} alt="Picture of Mason" width="300" height="300" /></Col>
          <Col md="auto">
            <div className="info">
              <h1>Hi, I'm Mason McCray</h1>
              <p> I'm a graduating senior at Virginia Tech majoring in robotics and mecchatronics in the engineering department with a minor in computer science</p>
              <h2>Education</h2>
              <ul>
                <li>
                  <h3>Virginia Tech, Blacksburg Virginia (Graduation in Spring 2023)</h3>
                  <p>Overall GPA: 3.95, In-Major GPA: 4.00</p>
                </li>
                <li>
                  <h3>Maggie L. Walker Governor’s School, Richmond Virginia (Graduation in Spring 2019)</h3>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Tab.Container defaultActiveKey="activities">
        <Row>
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="activities">Activities</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="jobs">Jobs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="projects">Personal Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skills">Skills</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="activities">
                <Activities />
              </Tab.Pane>
              <Tab.Pane eventKey="jobs">
                <JobExperience />
              </Tab.Pane>
              <Tab.Pane eventKey="projects">
                <PersonalProjects />
              </Tab.Pane>
              <Tab.Pane eventKey="skills">
                <Skills />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function JobExperience() {
  return (
    <>
      <h2>Job Experience</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Assistant Instructor for Black Rocket Camps (April 2020-August 2020)</Accordion.Header>
          <Accordion.Body>
            Managed students and taught coding and software to groups of 40 middle school students
            in a completely online setting using a variety of virtual software and tools.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>UTA for Thermodynamics at Virginia Tech (January 2021-May 2021)</Accordion.Header>
          <Accordion.Body>
            Assisted Dr. Ng in teaching Thermodynamics (ME 2134) to mechanical engineering students.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Engineering Intern at General Dynamics (May 2021-November 2021)</Accordion.Header>
          <Accordion.Body>
            Updated process instructions and ensured smooth shop floor operation in a project engineering
            capacity. Gained knowledge of the entire manufacturing process and worked to resolve setbacks.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Exoskeleton Development with the Assistive Robotics Lab (May 2022-Present)</Accordion.Header>
          <Accordion.Body>
            Applied mechanical engineering principles to assist in the calculation, design, and manufacturing
            of a lower body exoskeleton. Additionally, worked with the electornics and control systems to faciliatae
            sensor data collection and transmission to controllers via a CAN bus.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

function Activities() {
  return (
    <>
      <h2>Activities</h2>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Chassis Lead: BOLT Electric Bike Design Team at Virginia Tech</Accordion.Header>
          <Accordion.Body>
            Work to fully redesign, manufacture, and rebuild a stock gas motorcycle into a fully electric
            motorcycle for competitive racing alongside a team of 50 students to compete in the AHRMA Formula
            Lightning series.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Structures Lead: Human Powered Submarine Team at Virginia Tech</Accordion.Header>
          <Accordion.Body>
            Create a pedal-powered and single-rider underwater submarine to compete in a national
            competition alongside a team of 50 students. SCUBA certified to help with underwater assembly. Lead
            engineer for the structures subteam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ListGroup>
        <ListGroup.Item>Excellent oral and written communication skills in a technical setting</ListGroup.Item>
        <ListGroup.Item>Proficiency in Microsoft Office Suite (Word, Excel)</ListGroup.Item>
        <ListGroup.Item>Experience programming with Python, Java, C, Lua, and Matlab</ListGroup.Item>
        <ListGroup.Item>Computer Aided Design (CAD) and Analysis using Fusion360 and SolidWorks</ListGroup.Item>
        <ListGroup.Item>Experience with CAM, CAE, FEA, and Fluid Dynamics tools</ListGroup.Item>
        <ListGroup.Item>Experience in working with diverse teams in solving engineering problems</ListGroup.Item>
        <ListGroup.Item>Problem solving with engineering design processes, manufacturing, and testing</ListGroup.Item>
        <ListGroup.Item>Manual and CNC Machining using mills, lathes, bandsaws, and hand tools</ListGroup.Item>
      </ListGroup>
    </>
  )
}

function PersonalProjects() {
  return (
    <>
      <h2>Personal Projects</h2>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Custom Built Voron 2.4 3D Printer</Accordion.Header>
          <Accordion.Body>
            Sourced and built a custom 3D printer using an online open source schematic. Incorperated multiple cameras and a 
            web app for remote control and monitoring, along wih a discord bot for status updates. Prints most materials at 
            roughly 300mm/s
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Custom Built Electric Scooter</Accordion.Header>
          <Accordion.Body>
            Designed a scooter frame and body with an integrated motor and brakes from scratch using machined and off the
            shelf components. Sized and designed the power and controls system to include a display and allow various
            sensor inputs to control speed between 0 and 35 mph. Integrated with an arduino to allow for data logging and
            monitoring of temperature and battery health characteristics.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}


export default Home;
