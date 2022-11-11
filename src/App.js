import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import WorkoutView from "./views/WorkoutView";
import AddView from "./views/AddView";
import { ContextProvider } from './Context';

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Workout</Link>
        </li>
        <li>
          <Link to="/add">Creat new workout</Link>
        </li>
        <li>
          <Link to="/docs">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <Container>
        <Router>
          <Nav />
          <Routes>
            <Route path="/docs" element={<DocumentationView />} />
            <Route path="/" element={<WorkoutView />} />
            <Route path="/add" element={<AddView />} />
          </Routes>
        </Router>
      </Container>
    </ContextProvider>
  );
};

export default App;
