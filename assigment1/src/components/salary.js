import React from "react";
import { Card, Button } from "reactstrap";
import { useState,useEffect } from "react";
const RenderSalary = ({ staff,totalsalary }) => {

  return (
    <>
      <Card className="p-3">
        <h4 className="py-3">{staff.name}</h4>
        <p>Mã số nhân viên: {staff.id}</p>
        <p>Hệ số lương : {staff.salaryScale}</p>
        <p>Số ngày làm thêm :{staff.overTime}</p>
        <div className="bg-warning d-flex justify-content-center">
          Lương :{totalsalary.toFixed()}
        </div>
      </Card>
    </>
  );
};

function Salary(props) {
    const [state,setState] = useState(props.staff);
    const [q,setQ] = useState(true)
    let sortedSalary = [...props.staff];
    sortedSalary.sort((a,b) => ((a.salaryScale * 3000000 + a.overTime * 200000) > (b.salaryScale * 3000000 + b.overTime * 200000)) ? 1 : -1 )
    const sortSolary=() => {
      setQ(!q)
      if(q)
      {
        setState(sortedSalary)
      }
      else{
        setState(props.staff)
      }
    }
    const staff = state.map((staff) => {
        const totalsalary = staff.salaryScale * 3000000 + staff.overTime * 200000;
        return (
          <div className="col-lg-4 col-md-6 col-12" key={staff.id}>
            <RenderSalary staff={staff} totalsalary={totalsalary}  />
          </div>
        );
      });
  return (
    <div className="container ">
      <h5 className="mt-3 d-flex text-danger">
        {" "}
        <p className="text-secondary">Bảng Lương</p>{" "}
      </h5>
      {/* <Button color="primary" outline>
        Sắp xếp theo tên
      </Button>{" "} */}
      <Button color="info" outline onClick={sortSolary} > 
        Sắp xếp theo Lương
      </Button>
      <div className="row mt-3">{staff}</div>
    </div>
  );
}

export default Salary;
