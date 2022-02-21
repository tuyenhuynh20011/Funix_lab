import React,{Component} from 'react';
import { Card, CardImg,CardTitle,Button,Input, Form, Row,Col, Modal, ModalHeader, ModalBody,Label,FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

 function RenderMenuItem ({staffs},{keyWord}) {

        return (
            <Card>
                <Link to={`/menu/${staffs.id}`} >
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
            staffs :this.props.staffs,
            name:'',
            username:'',
            doB:'2000-01-01',
            salaryScale:1,
            startDate:'2022-01-01',
            department:'Sale',
            annualLeave: 0,
            overTime: 0
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleAddstaff=this.handleAddstaff.bind(this);
    }

    handleAddstaff(event){
        event.preventDefault();
        console.log(this.state);
    }
    handleSearch(event){
        event.preventDefault();
        const result = this.props.staffs.filter(s => s.name.toLowerCase().match(this.state.name.toLowerCase()));
        this.setState({
            staffs:result,
            name:this.name.value,
            isModalOpen: false,
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
    render(){
        const menu = this.state.staffs.map((staffs) => {
            return (
              <div  className="col-12 col-md-4 col-lg-2">
                <RenderMenuItem staffs = {staffs} keyWord ={this.state.key} />
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
                                            <Input type="text" id="key_" name="key_" 
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
                    <Form onSubmit={this.handleAddstaff}>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label  htmlFor="username">Tên</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="username" name="username"
                                    placeholder ="Lã Ngọc Quang"
                                    value={this.state.username}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </div>

                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="doB">Ngày sinh</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="doB" name="doB"
                                      value={this.state.doB}
                                      onChange={this.handleInputChange} />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                            <Label htmlFor="startDate">Ngày vào công ty</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="startDate" name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}   />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                            <Label htmlFor="department">Phòng ban</Label>
                            </Col>
                            <Col className="col-8">

                                <Input type="select" id="department" name="department"
                                    value={this.state.department}
                                    onChange={this.handleInputChange} 
                                    ><option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                    </Input>
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="salaryScale" name="salaryScale"
                                    placeholder ="1->3"
                                    value={this.state.salaryScale}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="annualLeave" name="annualLeave"
                                    value={this.state.annualLeave}
                                    onChange={this.handleInputChange}  />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="overTime" name="overTime"
                                    value={this.state.overTime}
                                    onChange={this.handleInputChange}  />
                            </Col>
                        </div> 
                        <div class="form-group row">
                             <div class="col-12  text-center">
                                <Button type="submit" color="primary"
                                >Thêm nhân viên</Button>
                            </div>
                        </div>  
                        </Form>
                    
                    
                    </ModalBody>
                </Modal>
                </div>
            );
    }
}

export default Menu;

  