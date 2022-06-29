import { Card, Button, CardGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import pic1 from "../rsc/P1.png";
import pic2 from "../rsc/P2.png";
import pic3 from "../rsc/P3.png";
import pic4 from "../rsc/P4.png";


function Projects() {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <CardGroup>
                <Card className="proj-card">
                    <Card.Img variant="top" src={pic1} />
                    <Card.Body>
                        <Card.Title className="proj-card-title">Astronomy Pic of the Day</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Project 1</Card.Subtitle>
                        <Card.Text>
                            A simple button that when clicked displays the NASA Astronomy Pic of the Day (APOD) alongside some relevant information
                        </Card.Text>
                        <LinkContainer to="/projects/1">
                            <Button variant="primary">See this project</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>

                <Card className="proj-card">
                    <Card.Img variant="top" src={pic2} />
                    <Card.Body className="proj-card">
                        <Card.Title className="proj-card-title">Number Array</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Project 2</Card.Subtitle>
                        <Card.Text>
                            A react component that scales the number of objects displayed and changes the visuals based on each value
                        </Card.Text>
                        <LinkContainer to="/projects/2">
                            <Button className = "Button">See this project</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>

                <Card className="proj-card">
                    <Card.Img variant="top" src={pic3} />
                    <Card.Body className="proj-card">
                        <Card.Title className="proj-card-title">Space Travel in P5</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Project 3</Card.Subtitle>
                        <Card.Text>
                            A p5.js canvas that allows for a simple game to be played in which a ship is flown around space using the arrow keys and spacebar
                        </Card.Text>
                        <LinkContainer to="/projects/3">
                            <Button variant="primary">See this project</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
                
                <Card className="proj-card">
                    <Card.Img variant="top" src={pic4} />
                    <Card.Body className="proj-card">
                        <Card.Title className="proj-card-title">Stock Graph</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Project 4</Card.Subtitle>
                        <Card.Text>
                            A d3 graph that displayes JSON data taken from the Yahoo Finanace API
                        </Card.Text>
                        <LinkContainer to="/projects/4">
                            <Button variant="primary">See this project</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Projects;

