import React from "react";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import EventIcon from '@material-ui/icons/Event';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';

export const SidebarRequest=[
    {
        title:"Food",
        icon:<FastfoodIcon/>,
        link:"/food"
    },
    {
        title:"Service",
        icon:<RoomServiceIcon/>,
        link:"/service"
    },
    {
        title:"Booking",
        icon:<EventIcon/>,
        link:""
    },
    {
        title:"Checkout",
        icon:<TransitEnterexitIcon/>,
        link:"/user"
    }
   
    

]
 