import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";
const DishDetail = (props) => {
    return(
        <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <hr />
                    </div>                
                </div> 
        <div className="row">
            <div  className="col-12 col-md-4 col-lg-3">
                <Card style ={{border:'0px'}}>
                    <CardImg top src={props.staff.image} alt={props.staff.name} />
                </Card>
            </div>
            <div  className="col-12 col-md-8 col-lg-9">
                <Card>
                    <CardBody>
                        <CardTitle style = {{color:"black"}}>Họ và tên: {props.staff.name}</CardTitle>
                         <CardText>Ngày sinh: {dateFormat(props.staff.doB,'dd/mm/yyyy')} </CardText>
                         <CardText>Ngày vào công ty:{dateFormat(props.staff.startDate,'dd/mm/yyyy')} </CardText>
                         <CardText>Phòng ban:{props.staff.departmentId} </CardText> 
                         <CardText>Số ngày nghỉ còn lại: {props.staff.annualLeave} </CardText>
                         <CardText>Số ngày làm thêm: {props.staff.overTime} </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
            <br/>
        </div>
    );
}
export default DishDetail;