import React,{Component} from 'react';
import { Card, CardImg,CardTitle,Button,Input, Form, Row,Col} from 'reactstrap';
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
            name: event.target.value
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
                            <div className="col-12 col-md-5 col-lg-4" style={{marginTop:"10px"}} >
                                <h4>Nhân viên</h4>
                            </div>
                            <div className='col-12 col-md-6'>
                                <Form onSubmit={this.handleSearch}>
                                    <Row className="form-group">
                                        <Col md={{size: 6, offset: 2}}  style={{marginTop:"10px"}}>
                                            <Input type="text" id="key_" name="key_" 
                                            innerRef={(input) => this.name = input}
                                            onChange ={this.handleInputChange} />
                                        </Col>
                                        <Col md={{size:3, offset: 1}}  style={{marginTop:"10px"}}>
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
                </div>
            );
    }
}

export default Menu;

  