import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';
import dateFormat, { masks } from "dateformat";
class Menu extends Component {
     constructor(props){
         super(props);
         this.state ={
             selected_nhanvien:null
         }  
     }
     onnvSelect(staffs) {
        this.setState({ selected_nhanvien:staffs});
        console.log(staffs);
    };
    rendernhanvien(staffs){
        console.log("ckick");
        if(staffs == null){
            console.log("null");
            return(
                <div>
                    <p>Bấm vào tên nhân viên để xem thông tin</p>
                </div>
            )
        }
        else{
            console.log(staffs);
            return(
                <div className='row thongtinnhavien'>
                <div className="col-12 col-sm-5 col-md-3">
                <Card>
                    {/*<CardImg width="100%" src = {staffs.image} alt={staffs.name}/>*/}
                    <CardBody>
                        <h6> Họ và tên: {staffs.name}</h6>
                        <p>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}</p>
                        <p>Phòng ban: {staffs.department.name}</p>
                        <p>Số ngày nghỉ còn lại:{staffs.annualLeave}</p>
                        <p>Số ngày đã làm thêm:{staffs.overTime}</p>
                        <CardText></CardText>
                    </CardBody>
                </Card>
                </div>
                </div>
            )
        }
    }
     render(){
         const menu = this.props.nhanvien.map((staffs)=>{
             return( <div key={staffs.id} className= "col-12 col-sm-5 col-md-3 m-1">
             <Card onClick={()=>this.onnvSelect(staffs)}>
                 
                     <CardTitle>{staffs.name}</CardTitle>
                     {/*<CardText>{dish.description}</CardText>*/}
                
             </Card>
         </div>);   
         });
         return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                    {this.rendernhanvien(this.state.selected_nhanvien)}
                </div>
         );
     }
}
export default Menu;