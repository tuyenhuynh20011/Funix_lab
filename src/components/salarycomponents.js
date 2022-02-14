import React from 'react';
import { Card,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function tinh_luong(staff){
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const salary = (staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary);
    return salary;
}
function Render_Item({staff}){
    return(
        <Card>
            <CardTitle>&nbsp;{staff.name}</CardTitle>
            <CardText>Mã nhân viên:&nbsp; {staff.id}</CardText>
            <CardText>Hệ số lương:&nbsp; {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm:&nbsp; {staff.overTime}</CardText>
            <CardText style ={{backgroundColor:"#1e7e34",height :"30px", color:"#FFFFFF"}}>&nbsp;Lương:&nbsp;{tinh_luong(staff).toFixed()} </CardText>
        </Card>
    )

} 

function Breadcrumb1({allItem, id}){
if (allItem == true ){
    return(
        <Breadcrumb style={{marginTop:"5px"}}>
            <BreadcrumbItem><Link to="/menu">Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
    )
}
else{
    return(
        <Breadcrumb style={{marginTop:"5px"}}>
            <BreadcrumbItem><Link to="/department">Phòng ban</Link></BreadcrumbItem>
            <BreadcrumbItem active>{id}</BreadcrumbItem>
        </Breadcrumb>
    )
}
}

const Salary= (props)=>{
    const listItem = props.staffs.map((staff) => {
        return (
            <div  className="col-12 col-md-6 col-lg-4">
              <Render_Item staff = {staff} />
            </div>
          );
      })
      if(props.staffs.length===0){
        return(
            <div></div>
        )
       }
       else{
        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb1 allItem={props.allItem} id = {props.id}/>
                        <div className="col-12">
                            <hr />
                        </div>                
                    </div> 
            <div className="row">
                {listItem}
            </div>
            </div>
        )
       }
}



export default Salary;