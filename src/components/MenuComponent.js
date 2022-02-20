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
        }
        this.handleSearch=this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
            name: event.target.value
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
                    <Form onSubmit={this.handleLogin}>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label  htmlFor="username">Tên</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </Col>
                        </div>

                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="doB">Ngày sinh</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="doB" name="doB"
                                    innerRef={(input) => this.doB = input}  />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                            <Label htmlFor="startDate">Ngày vào công ty</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="date" id="startDate" name="startDate"
                                    innerRef={(input) => this.startDate = input}  />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="salaryScale" name="salaryScale"
                                    innerRef={(input) => this.salaryScale = input}  />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="annualLeave" name="annualLeave"
                                    innerRef={(input) => this.annualLeave = input}  />
                            </Col>
                        </div>
                        <div className="form-group row">
                            <Col className="col-4">
                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                            </Col>
                            <Col className="col-8">
                                <Input type="text" id="overTime" name="overTime"
                                    innerRef={(input) => this.overTime = input}  />
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

  