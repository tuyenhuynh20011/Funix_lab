import React from "react";
import { Card } from "reactstrap";
const RenderDepartment = ({ department }) => {
  return (
    <Card className="p-3">
      <h4 className="py-3">{department.name}</h4>
      <p>Số lượng nhân viên: {department.numberOfStaff}</p>
    </Card>
  );
};

function Departments(props) {
  const department = props.department.map((department) => {
    return (
      <div className="col-lg-4 col-md-6 col-12 mt-5" key={department.id}>
        <RenderDepartment department={department} />
      </div>
    );
  });

  return (
    <div className="container bdy">
      <div className="row mt-5">{department}</div>
    </div>
  );
}

export default Departments;
