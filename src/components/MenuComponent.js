import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({staffs, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${staffs.id}`} >
                <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                    <CardTitle>{staffs.name}</CardTitle>
            </Link>
        </Card>
    );
}

   const Menu= (props)=>{
    const menu = props.staffs.map((staffs) => {
        return (
          <div  className="col-12 col-md-4 col-lg-2">
            <RenderMenuItem staffs = {staffs} onClick ={props.onClick} />
          </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4>Nhân viên</h4>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

   }
export default Menu;

  