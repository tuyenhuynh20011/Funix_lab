import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from "dateformat";

const StaffDetail = (props) => {
    const department = props.department.filter((department)=>department.id===props.staff.departmentId)[0];
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
                        <CardTitle style = {{color:"black"}}>Họ và tên:&nbsp;{props.staff.name}</CardTitle>
                         <CardText>Ngày sinh:&nbsp;{dateFormat(props.staff.doB,'dd/mm/yyyy')} </CardText>
                         <CardText>Ngày vào công ty:&nbsp;{dateFormat(props.staff.startDate,'dd/mm/yyyy')} </CardText>
                         <CardText>Phòng ban:&nbsp;{department.name} </CardText> 
                         <CardText>Số ngày nghỉ còn lại:&nbsp;{props.staff.annualLeave} </CardText>
                         <CardText>Số ngày làm thêm:&nbsp;{props.staff.overTime} </CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
            <br/>
        </div>
    );
}
export default StaffDetail;