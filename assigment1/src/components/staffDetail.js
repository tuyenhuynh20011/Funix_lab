import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import dateFormat from "dateformat";

function StaffDetail({staff}) {
  
    return (
      <div className="container bdy">
        <a className="mt-5">Nhân Viên / {staff.name}</a>
        <div className="row mt-5">
          <div className="col-12 col-md-4 col-lg-3  ">
            <CardImg src={staff.image}></CardImg>
          </div>
          <div className="mt-5 col-12 col-md-8 col-lg-9">
            <CardTitle>Họ và Tên: {staff.name}</CardTitle>
            <CardTitle>
              Ngày Sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
            </CardTitle>
            <CardTitle>
              Ngày vào công ty:{" "}
              {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </CardTitle>
            <CardTitle>
                Phòng Ban : {staff.department.name}
            </CardTitle>
            <CardTitle>
              Số ngày nghỉ còn lại: {staff.annualLeave}
            </CardTitle>
            <CardTitle>
              Số ngày đã làm thêm: {staff.overTime}
            </CardTitle>
          </div>
        </div>
      </div>
    );

}

export default StaffDetail;
