import React, { useEffect } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SET } from "../redux/action";

function RenderStaffList({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/staff/${staff.id}`}>
        <CardImg
          width="100%"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
          alt={staff.name}
        />
        <div>
          <CardTitle>{staff.name}</CardTitle>
        </div>
      </Link>
    </Card>
  );
}
function Staff() {
  const stafflistvalue=useSelector(state=> state)
  console.log(stafflistvalue);
  useEffect(() => {
  
  }, []);

  
  const staffList = stafflistvalue.staffs.map((staff) => {
    return (
      <div className="col-lg-2 col-md-4 col-6" key={staff.id}>
        <RenderStaffList staff={staff} onClick={stafflistvalue.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="staff">Nhân Viên</h3>
          <br />
        </div>
      </div>
      <div className="row" key={stafflistvalue.id}>
        {staffList}
      </div>
    </div>
  );
}

export default Staff;
