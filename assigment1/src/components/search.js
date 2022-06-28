import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";
import dateFormat from "dateformat";

function Search({ staff }) {
 if(staff.length!=0)
 {
  return (
    <div className="container mt-5 bdy ">
      <a className="mt-5">Nhân Viên </a>
      <div className="row">
        {staff.map((e) => (
          <>
            <div key={e.id} className="col-12 col-md-4 col-lg-3  mt-5  ">
              <CardImg src={e.image}></CardImg>
            </div>
            <div className="mt-5 col-12 col-md-8 col-lg-3">
              <CardTitle>Họ và Tên: {e.name}</CardTitle>
              <CardTitle>
                Ngày Sinh: {dateFormat(e.doB, "dd/mm/yyyy")}
              </CardTitle>
              <CardTitle>
                Ngày vào công ty: {dateFormat(e.startDate, "dd/mm/yyyy")}
              </CardTitle>
              <CardTitle>Phòng Ban : {e.department.name}</CardTitle>
            </div>
          </>
        ))}
      </div>
    </div>
  );
 }
    else{
    return(
        <div className="container">
            <h4>Don`t have data match </h4>
        </div>
    )
}

}

export default Search;
