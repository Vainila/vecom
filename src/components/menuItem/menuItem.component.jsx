
import React from "react";
import { useNavigate } from "react-router-dom";
import "./menuItem.styles.scss";


const MenuItem = ({ title, subtitle, imgUrl, imgSize , url}) => {
   const navigate = useNavigate();
   const handleClickNavigate = () =>{
      navigate(url, {replace: true});
   }
   return (

      <div className={`menu-item ${imgSize}`} onClick={handleClickNavigate}>
         <div className="menu-item-inner" style={{ background: `url(${imgUrl})` }}>
         </div>
         <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">{subtitle}</span>
         </div>
      </div>

   )
}

 

// export default withRouter(MenuItem);
export default MenuItem;