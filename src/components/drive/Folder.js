import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Folder({ folder }) {
  return (
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      variant="outline-dark"
      as={Link}
    >
      {folder.name}
    </Button>
  );
}
