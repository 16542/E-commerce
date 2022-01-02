import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
         <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
             <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/249196108_558770555226568_1068100540236550408_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6A_a2Fa3jqMAX_WWlDS&tn=kQCxa5EPuj5ciNow&_nc_ht=scontent.ftun16-1.fna&oh=00_AT_mjaW1iAcK-He3g4sD9nv4khvFrnybD_LPS7g_iakt0A&oe=61C9CC2D" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
