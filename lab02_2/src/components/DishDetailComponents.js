import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card key={dish.id}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardTitle>{dish.name}</CardTitle>
        <CardTitle>{dish.description}</CardTitle>
      </Card>
    </div>
  );
}
function RenderComments({dish}) {
  console.log(dish);
  return (
    <div className="col-12 col-md-5 m-1">
      <div key={dish.id}>
         <h2> Comments</h2>
          abcde
      </div>
    </div>
  );
}

const DishDetail = (props) => {
  return (
    <>
      <div key={props.dish.id} className="container">
        <div className="row">
          {props.dish && props.dish.map((dish) => <RenderDish dish={dish} />)}
          {props.dish && props.dish.map((dish) => <RenderComments dish={dish} />)}

        </div>
      </div>
    </>
  );
};
export default DishDetail;
