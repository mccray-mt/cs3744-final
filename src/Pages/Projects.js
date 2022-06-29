import P1 from "./Projects/P1";
import P2 from "./Projects/P2";
import P3 from "./Projects/P3";
import P4 from "./Projects/P4";
import { Link, Route, Routes } from "react-router-dom";


function Projects() {
    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div>
                <Link to="/projects/p1" className = "proj-link">Project 1</Link>
                <Link to="/projects/p2" className = "proj-link">Project 2</Link>
                <Link to="/projects/p3" className = "proj-link">Project 3</Link>
                <Link to="/projects/p4" className = "proj-link">Project 4</Link>
            </div>
            <Routes>
                <Route path="/p1" element={<P1 />} />
                <Route path="/p2" element={<P2 />} />
                <Route path="/p3" element={<P3 />} />
                <Route path="/p4" element={<P4 />} />
            </Routes>
        </div>
    );
}

export default Projects;

