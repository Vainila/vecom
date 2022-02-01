

import React from "react";

import MenuItem from "../../components/menuItem/menuItem.component";

import { connect } from "react-redux";
import { selectDirectorySections } from './../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


import "./directory.styles.scss";

const Directory = ({sections}) => (
   <div className="directory-menu">
      {
         sections.map(item => {
            return <MenuItem
               key={item.id}
               imgUrl={item.imgUrl}
               title={item.name}
               subtitle={"SHOP NOW"}
               imgSize={item.imgSize || ""}
               url={item.url}
            />
         })
      }
   </div>
);



const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);