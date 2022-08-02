import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { useState } from "react";

function RenderItem({ staff }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.25) translateY(-50%)",
      }}
    >
      <Card className="mt-3">
        <CardTitle>&nbsp;{staff.name}</CardTitle>
        <CardText>Mã nhân viên:&nbsp; {staff.id}</CardText>
        <CardText>Hệ số lương:&nbsp; {staff.salaryScale}</CardText>
        <CardText>Số giờ làm thêm:&nbsp; {staff.overTime}</CardText>
        <CardText
          style={{
            backgroundColor: 'rgb(201 194 27)',
            height: "30px",
            color: "#FFFFFF",
          }}
        >
          &nbsp;Lương:&nbsp;{staff.salary}{" "}
        </CardText>
      </Card>
    </FadeTransform>
  );
}

function Breadcrumb1({ allItem, id }) {
  if (allItem === true) {
    return (
      <Breadcrumb style={{ marginTop: "5px" }}>
        <BreadcrumbItem>
          <Link to="/menu">Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb style={{ marginTop: "5px" }}>
        <BreadcrumbItem>
          <Link to="/department">Phòng ban</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{id}</BreadcrumbItem>
      </Breadcrumb>
    );
  }
}

const Salary = (props) => {
  const [state, setState] = useState(props.staffs);
  const [q, setQ] = useState(true);
  const [btn, setbtn] = useState(" Sắp xếp theo Lương");

  let sortedSalary = [...props.staffs];
  sortedSalary.sort((a,b) => ((a.salaryScale * 3000000 + a.overTime * 200000) > (b.salaryScale * 3000000 + b.overTime * 200000)) ? 1 : -1 )
  const sortSolary = () => {
    setQ(!q);
    if (q) {
      setState(sortedSalary);
      setbtn("sắp xếp theo tên");
    } else {
      setState(props.staffs);
      setbtn("sắp xếp theo lương");
    }
  };
  const listItem = state.map((staff, index) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 " key={index}>
        <RenderItem staff={staff} />
      </div>
    );
  });
  if (props.staffs.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb1 allItem={props.allItem} id={props.id} />
          <div className="col-12">
            <hr />
          </div>
        </div>
        <Button color="info" outline onClick={sortSolary}>
          {btn}
        </Button>
        <div className="row mt-2">{listItem}</div>
      </div>
    );
  }
};

export default Salary;
