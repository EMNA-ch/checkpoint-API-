import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardWeather = ({ imageUrl, day, comment, minTemp, maxTemp }) => {
  return (
    <Card style={{ minWidth: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title> {day}</Card.Title>
        <Card.Text>{comment}</Card.Text>
        Min-Temp:
        <Button variant="info" className="p-2 m-3">
          {minTemp}
        </Button>
        Max-Temp:
        <Button variant="info" className="p-2 m-3">
          {maxTemp}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardWeather;
