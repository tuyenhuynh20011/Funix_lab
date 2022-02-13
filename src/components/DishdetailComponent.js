import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

       
//  function CommentForm ({comment}){
//     const comment1 = comment.map((comment1)=>{
//         return(
//             <div>
//             <p>{comment1.comment}</p>
//             <p>{"-- "+comment1.author+ ", "+dateFormat(comment1.date,"dd/mm/yyyy")}</p>
//             </div>
//         )
//     });
//     return(
//         <div className="col-12 col-md-5 m-1">
//             <h4 style={{textAlign: "left"}}>Comments</h4>
//                     {comment1}
//         </div>
//     )
// }
 
const DishDetail = (props) => {
    return(
        <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.staff.name}</h3>
                        <hr />
                    </div>                
                </div> 
        <div className="row">
            <div  className="col-12 col-md-4 col-lg-3 m-1">
                <Card>
                    <CardImg top src={props.staff.image} alt={props.staff.name} />
                    <CardBody>
                        <CardTitle>{props.staff.name}</CardTitle>
                        {/* <CardText>{props.dish.description}</CardText> */}
                    </CardBody>
                </Card>
                </div>
               {/* <CommentForm comment = {props.comments}/>*/}
        </div>
        </div>
    );
}
export default DishDetail;