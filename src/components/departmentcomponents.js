import React from 'react';
import { Card,CardTitle,CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderMenuItem ({departments}){
    return (
        <Card style={{margin:'10px'}}>
            <Link to={`/department/${departments.name}`}>
                <CardTitle style = {{color:"black",marginTop:'5px',marginLeft:'5px'}}>{departments.name}</CardTitle>
                <CardText style={{margin:'20px'}}>Số lượng nhân viên: {departments.numberOfStaff}</CardText>
            </Link>
        </Card>
    );
}
const Department= (props)=>{
    const menu = props.department.map((department) => {
        return (
          <div  className="col-12 col-md-4 col-lg-3 m-1">
            <RenderMenuItem departments = {department} />
          </div>
        );
    });
    return (
        <div className="container">
            <div className="row">                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

   }
export default Department;