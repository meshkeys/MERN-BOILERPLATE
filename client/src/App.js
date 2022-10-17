import React from 'react';
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateStudent from './Components/CreateStudent';
import EditStudent from './Components/EditStudent';
import StudentList from './Components/StudentList';

function App() {


  return (
    <Router>
  <div className='App'>
<header className='App-header'>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to={"/create-student"} className="nav-link">
          React MERN Stack App
        </Link>
      </Navbar.Brand>

      <Nav className='justify-container-end'>
        <Link to={"/create-student"} className="nav-link">
          Create Student
        </Link>
      </Nav>
      <Nav className='justify-container-end'>
        <Link to={"/student-list"} className="nav-link">
          Student List
        </Link>
      </Nav>
    </Container>
  </Navbar>
</header>
<Container>
  <Row>
    <Col md={12}>
      <div className='wrapper'>
        <Routes>
          <Route exact path ="/" 
          component={CreateStudent}/>
          <Route path ="/Create-student" 
          component={CreateStudent}/>
          <Route path ="/EditStudent" 
          component={EditStudent}/>
          <Route path ="/StudentList" 
          component={StudentList}/>
        </Routes>
      </div>
    </Col>
  </Row>
</Container>
  </div>
</Router>
  )
}

export default App