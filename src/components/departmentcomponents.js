import React from 'react';
import { Card,CardTitle, Breadcrumb, BreadcrumbItem, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderMenuItem ({departments}){
    console.log(departments);
    return (
        <Card style={{margin:'10px'}}>
                <CardTitle style = {{color:"black",marginTop:'5px',marginLeft:'5px'}}>{departments.name}</CardTitle>
                <CardText style={{margin:'20px'}}>Số lượng nhân viên: {departments.numberOfStaff}</CardText>
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
                <div className="col-12">
                    <h4>Phòng ban</h4>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

   }
export default Department;