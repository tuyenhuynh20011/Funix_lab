import React, { Component } from 'react'
import dateFormat from "dateformat";
import {Button,ButtonGroup,ButtonToolbar} from 'reactstrap'
import {Card,CardBody,CardTitle} from "reactstrap"
export class StaffListComponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            selectStaff:null
        }
        this.state={
          number:4
        }
    }
    onStaffSelect(staff) {
      this.setState({selectStaff:staff})
    }
    onButtonSelect(number) {
      this.setState({number:number})
    }
    renderStaff(selectStaff)
    {
    
      if(selectStaff!=null) {
        
        return (
           <Card>
            <CardBody>
              <CardTitle>Họ và Tên: {selectStaff.name}</CardTitle>
              <CardTitle>Ngày Sinh: {dateFormat(selectStaff.doB, "dd/mm/yyyy")}</CardTitle>
              <CardTitle>Ngày vào công ty: {dateFormat(selectStaff.startDate, "dd/mm/yyyy")}</CardTitle>
              <CardTitle>Số ngày nghỉ còn lại: {selectStaff.annualLeave}</CardTitle>
              <CardTitle>Số ngày đã làm thêm: {selectStaff.overTime}</CardTitle>
            </CardBody>
          </Card>

          )
      }
      else{
        return(
            <div></div>
        );
    }
    }

  render() {
    let string = `col-12 col-md-6 col-lg-${this.state.number} mt-5`
    let tmp = [1,2,3,4,5]
    const staffList =this.props.staff.map((staff)=> {
      return (
          <div key={staff.id} className={string}>
              <Card onClick={()=>this.onStaffSelect(staff)}>
                  <CardTitle>{staff.name}</CardTitle>
              </Card>
          </div>
      )
  })
  const buttonList = tmp.map((e, key)=> {
    return (
      <Button key={key} onClick={()=>this.onButtonSelect(e)}>
        {e}
      </Button>
    )
  })
  return (
      <div className="container">
          <div className="row">
                  {staffList}
          </div>
          <div className="row mt-5">
                  {this.renderStaff(this.state.selectStaff)}
          </div>
          <div className="row mt-5">
            <div className=" m-auto d-flex">
             <p className="mt-3 mr-4">SỐ HÀNG MUỐN HIỂN THỊ :  </p>
          <ButtonToolbar>
             <ButtonGroup>
              {buttonList}
            </ButtonGroup>
          </ButtonToolbar>
          </div>
          </div>
      </div>
  );
}
}

export default StaffListComponent