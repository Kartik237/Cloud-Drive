import React from "react";
import { Container } from "react-bootstrap";

function CenteredContainer({ children }) {
  return (
    <Container
      className="main-container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      {children}
      </div>
    </Container>
  );
}

export default CenteredContainer;
