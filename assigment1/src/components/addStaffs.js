import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";
import { useState } from "react";
import  {ADD}  from "../redux/action";
import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const AddStaffs = () => {
  const [modal, setModal] = useState(true);
  const [value,setValue] = useState({
  });
  const dispatch=useDispatch()
  const toggle = () => {
    setModal(!modal);
  };
  const handleChange= (e) => {
    setValue({
      ...value,
      id:uuidv4(),
      [e.target.name]:e.target.value
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD(value))
  };
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <Form className="form" onSubmit={formSubmit}>
            <FormGroup className="row">
              <Label for="name" className="col-4">
                Tên
              </Label>
              <Input className="col-8" type="name" name="name" id="name" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="row">
              <Label for="doB" className="col-4 mt-2">
                Ngày Sinh{" "}
              </Label>
              <Input className="col-8" type="date" name="doB" id="doB"  onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="row">
              <Label for="startdate" className="col-4 mt-2">
                Ngày vào công ty{" "}
              </Label>
              <Input
                className="col-8"
                type="date"
                name="startDate"
                id="startDate"
              />
            </FormGroup>
            <FormGroup className="row">
              <Label for="Departments" className="col-4 mt-2">
                Phòng Ban{" "}
              </Label>
              <select className="col-8" id="departments" name="departments">
                <option value="IT">IT </option>
                <option value="Sale">Sale </option>
                <option value="Marketing">Marketing </option>
                <option value="Finance">Finance </option>
                <option value="HR">HR </option>
              </select>
            </FormGroup>
            <FormGroup className="row">
              <Label for="salaryScale" className="col-4 mt-2">
                Ngày vào công ty{" "}
              </Label>
              <Input
                className="col-8"
                type="number"
                name="salaryScale"
                id="salaryScale"
              />
            </FormGroup>
            <FormGroup className="row">
              <Label for="annualLeave" className="col-4">
                Số ngày nghĩ còn lại
              </Label>
              <Input
                className="col-8"
                type="number"
                name="annualLeave"
                id="annualLeave"
              />
            </FormGroup>
            <FormGroup className="row">
              <Label for="overTime" className="col-4">
                Số ngày làm thêm
              </Label>
              <Input
                className="col-8"
                type="number"
                name="overTime"
                id="overTime"
              />
            </FormGroup>
            <Button type="submit" color={"primary"}>
            Thêm
          </Button>
          </Form>
        </ModalBody>
        <ModalFooter className="modal-footer border-0">
        </ModalFooter>
      </Modal>
    </>
  );
};
export default AddStaffs;
