import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm rounded-3 mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            223578
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/users">User List</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container style={{ maxWidth: '600px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Container>
    </Router>

  );
}

export default App;
