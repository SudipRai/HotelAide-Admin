import { Collapse } from "bootstrap";
import React from "react";
import "../../App.css"
import {SidebarData} from'./SidebarData'
function Sidebar() {
    return (
      
      <div className="sidebar" data-toogle="collapse">
          <ul className="SidebarList">
          {SidebarData.map((val,key)=>{
              return (
              <li 
              className="SidebarRow"
                key={key} 
                id={window.location.pathname==val.link ? "active" : ""}
                onClick={()=>{
                    window.location.pathname=val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>

          )})
          }
        </ul>
  
      </div>
      
    );
  }
  
  export default Sidebar;