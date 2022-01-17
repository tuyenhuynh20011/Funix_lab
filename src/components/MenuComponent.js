import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';
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
                <div></div>
            )
        }
        else{
            console.log(staffs);
            return(
                <Card>
                    <CardImg width="100%" src = {staffs.image} alt={staffs.name}/>
                    <CardBody>
                        <CardTitle>{staffs.name}</CardTitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            )
        }
    }
     render(){
         const menu = this.props.nhanvien.map((staffs)=>{
             return( <div key={staffs.id} className= "col-12 col-md-3">
             <Card onClick={()=>this.onnvSelect(staffs)}>
                <CardImg width="100%" src = {staffs.image} alt={staffs.name}/>
                 <CardImgOverlay >
                     <CardTitle>{staffs.name}</CardTitle>
                     {/*<CardText>{dish.description}</CardText>*/}
                 </CardImgOverlay>
             </Card>
         </div>);   
         });
         return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className='row'>
                    <div className="col-12 col-md-4">
                        {this.rendernhanvien(this.state.selected_nhanvien)}
                    </div>
                
                </div>
            </div>
         );
     }
}
export default Menu;