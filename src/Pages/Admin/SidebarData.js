import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import FeedbackIcon from '@material-ui/icons/Feedback';
import GroupIcon from '@material-ui/icons/Group';
import TimelineIcon from '@material-ui/icons/Timeline';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/dashboard"
    },
    {
        title:"Mailbox",
        icon:<EmailIcon/>,
        link:""
    },
    {
        title:"Feedbacks",
        icon:<FeedbackIcon/>,
        link:""
    },
    {
        title:"Users",
        icon:<GroupIcon/>,
        link:"/user"
    },
    {
        title:"Analytics",
        icon:<TimelineIcon/>,
        link:""
    },
    

]
 