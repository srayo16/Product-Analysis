import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewPagePro = ({item}) => {
    const {name ,  review , ratings} = item;
    return (
        <div>
            <Card className="text-center container mb-5">
  <Card.Header><h5>Reviewer Name: <span className='text-danger'>{name}</span></h5></Card.Header>
  <Card.Body>
    <Card.Title>Ratings: {ratings}</Card.Title>
    <Card.Text>
      {review}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
        </div>
    );
};

export default ReviewPagePro;