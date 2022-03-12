import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Col,Button } from 'reactstrap';
import { Link, useHistory} from 'react-router-dom';
import dateFormat from "dateformat";

const StaffDetail = (props) => {
    let history =  useHistory();
    const department = props.department?.filter((department)=>department.id===props.staff?.departmentId)[0];
    function delStaff(){
        props.deleteStaff(props.staff?.id);   
        history.push('/menu')
    }
   if (props.staff){
    return(
        <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff?.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <hr />
                    </div>                
                </div> 
        <div className="row">
            <div  className="col-12 col-md-4 col-lg-3">
                <Card style ={{border:'0px'}}>
                    <CardImg top src={props.staff?.image} alt={props.staff?.name} />
                </Card>
            </div>
            <div  className="col-12 col-md-8 col-lg-9">
                <Card>
                    <CardBody>
                        <CardTitle style = {{color:"black"}}>Họ và tên:&nbsp;{props.staff?.name}</CardTitle>
                         <CardText>Ngày sinh:&nbsp;{dateFormat(props.staff?.doB,'dd/mm/yyyy')} </CardText>
                         <CardText>Ngày vào công ty:&nbsp;{dateFormat(props.staff?.startDate,'dd/mm/yyyy')} </CardText>
                         <CardText>Phòng ban:&nbsp;{department?.name} </CardText> 
                         <CardText>Số ngày nghỉ còn lại:&nbsp;{props.staff?.annualLeave} </CardText>
                         <CardText>Số ngày làm thêm:&nbsp;{props.staff?.overTime} </CardText>
                    </CardBody>
                </Card>
                <div>
                <Col style={{marginTop:"10px"}}>
                                            <Button type="submit" color="primary"
                                            >Edit</Button>
                                            <Button type="submit" color="primary" style={{marginLeft: '10px'}} onClick={delStaff}
                                            >Delete</Button>
                                        </Col>
                            </div>
            </div>
        </div>
            <br/>
        </div>
    );

   } else return(<div></div> );
   
}
export default StaffDetail;