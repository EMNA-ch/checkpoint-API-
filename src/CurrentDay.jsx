import React from "react";
import { Button, Card } from "react-bootstrap";

const CurrentDay = ({ imageUrl, day, comment, temp, wind, humidity }) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title> {day}</Card.Title>
        <Card.Text>{comment}</Card.Text>
        Temperature:
        <Button variant="info" className="p-2 m-3">
          {temp}
        </Button>
        wind:
        <Button variant="info" className="p-2 m-3">
          {wind}
        </Button>
        <Card.Text> {humidity}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CurrentDay;
