import React,{Component} from 'react';
import { Card, CardImg,CardTitle,Button,Input, Form, Row,Col, Modal, ModalHeader, ModalBody,Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
 function RenderMenuItem ({staffs}) {
        return (
            <Card style ={{border:'0px'}}>
                <Link to={`/menu/${staffs.id}`} style ={{margin:'0px'}} >
                    <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                    <CardTitle style = {{color:"black", textAlign: "center"}}>{staffs.name}</CardTitle>
                </Link>
            </Card>
        );      
}

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state={
            staffs:this.props.staffs,
            name:'',
            isModalOpen: false,
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch(event){
        
        event.preventDefault();
        const result = this.props.staffs.filter(s => s.name.toLowerCase().match(this.state.name.toLowerCase()));
        this.setState({
            staffs:result,
            name:this.name.value,
        });
        
    }
    handleInputChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
    }
    handleSubmit(values) {
        // event.preventDefault();
        this.props.parentCallback(values);

    }
    
        render(){
            const chuanhap = (val) => val&&(val.length>=0);
            const isNumber = (val) => !isNaN(Number(val));
            const minNum = (val)=> !chuanhap(val)||!isNumber(val)||val>=1 ;
            const maxNum = (val)=> val<=3||!isNumber(val);
            const minLength = (len) => (val) => !chuanhap(val)||(val && (val.length >= len));
            const maxLength = (len) => (val) => !(val) || (val.length <= len);
            const soDuong = (val)=> !(isNumber(val))||val>=0;
            console.log(this.state);
            const menu = this.state.staffs.map((staffs) => {
                return (
                    <div  className="col-12 col-md-4 col-lg-2">
                        <RenderMenuItem staffs = {staffs} />
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className="row">
                            <div className="col-9 col-md-3 col-lg-2" style={{marginTop:"10px"}} >
                                <h4>Nhân viên</h4>
                            </div>
                            <div className="col-1">
                                <Col style={{marginTop:"10px"}}>
                                            <Button type="submit" color="primary" onClick={this.toggleModal}
                                            >+</Button>
                                        </Col>
                            </div>
                            <div className='col-12 col-md-8'>
                                <Form onSubmit={this.handleSearch}>
                                    <Row className="form-group">
                                        <Col md={{size: 6, offset: 2}}  style={{marginTop:"10px"}}>
                                            <Input type="text" id="name" name="name" 
                                            innerRef={(input) => this.name = input}
                                            onChange ={this.handleInputChange} />
                                        </Col>
                                        <Col md={{size:2, offset: 1}}  style={{marginTop:"10px"}}>
                                            <Button type="submit" color="primary"
                                            >Search</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <hr />
                        </div>                
                    <div className="row">
                            {menu}
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username" md={4}>Tên</Label>
                                <Col md={8}>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Name"
                                        defaultValue ='Nhân viên mới'
                                        className="form-control"
                                        validators={{
                                            chuanhap,
                                            minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            chuanhap: 'Chưa nhập ',
                                            minLength: 'Ít nhất 3 kí tự',
                                            maxLength: 'Tối đa 30 kí tự'

                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                <Col md={8}>
                                    <Control.text model=".doB" id="doB" name="doB"
                                        className="form-control" type='date'
                                        defaultValue ="2000-01-01"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                <Col md={8}>
                                    <Control.text model=".startDate" id="startDate" name="startDate"
                                        className="form-control" type='date'
                                        defaultValue ="2020-01-01"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="department" md={4}>Phòng ban</Label>
                                <Col md={8}>
                                    <Control.select model=".department" id="department" name="department"
                                        defaultValue ='Sale'
                                        className="form-control"> 
                                            <option>Sale</option>
                                            <option>HR</option>
                                            <option>Marketing</option>
                                            <option>IT</option>
                                            <option>Finance</option>
                                         </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                <Col md={8}>
                                    <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                        placeholder ="1->3"
                                        defaultValue ='1'
                                        className="form-control"
                                        validators={{
                                            chuanhap,
                                            isNumber,
                                            minNum,
                                            maxNum
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".salaryScale"
                                        show="touched"
                                        messages={{
                                            chuanhap: 'Chưa nhập ',
                                            isNumber: 'Phải là số ',
                                            minNum: 'Phải >= 1 ',
                                            maxNum: 'Phải <=3 '
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                <Col md={8}>
                                    <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                        defaultValue ='0'
                                        className="form-control"
                                        validators={{
                                            chuanhap,
                                            isNumber,
                                            soDuong
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".annualLeave"
                                        show="touched"
                                        messages={{
                                            chuanhap: 'Chưa nhập ',
                                            isNumber: 'Phải là số',
                                            soDuong: 'Phải >=0'

                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="overTime" md={4}>Số ngày làm thêm</Label>
                                <Col md={8}>
                                    <Control.text model=".overTime" id="overTime" name="overTime"
                                        defaultValue='0'
                                        className="form-control"
                                        validators={{
                                            chuanhap,
                                            isNumber,
                                            soDuong
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".overTime"
                                        show="touched"
                                        messages={{
                                            chuanhap: 'Chưa nhập ',
                                            isNumber: 'Phải là số',
                                            soDuong: 'Phải >=0'

                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col xs ={6}  md ={4} style ={{margin:'auto'}}>
                                    <Button type="submit" color="primary">
                                    Thêm mới
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
            );
    }
}

export default Menu;

  