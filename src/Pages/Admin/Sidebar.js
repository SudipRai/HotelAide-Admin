import { Collapse } from "bootstrap";
import React from "react";
import "../../App.css"
import { SidebarRequest } from "./Sidebar-request";
import {SidebarData} from'./SidebarData'
import { SidebarMedia } from "./SidebarMedia";
function Sidebar() {
    return (
      <div className="sidebar">
      <div  data-toogle="collapse">
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
      <hr className="hrow"></hr>
      <h6 className="request">Requests</h6>

<div className="sidebar1" data-toogle="collapse">
<ul className="SidebarList">
{SidebarRequest.map((val,key)=>{
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

<hr className="hrow"></hr>
      <h6 className="request">Social Media</h6>

      <div className="sidebar1" data-toogle="collapse">
<ul className="SidebarList">
{SidebarMedia.map((val,key)=>{
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

</div>

      
    );
  }
  
  export default Sidebar;