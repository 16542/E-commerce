import "./Sidebar.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  Home,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/" className="link">
              <li className="sideBarListItem active">
                <Home className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analitics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quic Menu</h3>
          <ul className="sideBarList">
            <Link to="/users" className="link">
              <li className="sideBarListItem active">
                <li className="sideBarListItem">
                  <PermIdentity className="sideBarIcon" />
                  Users
                </li>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sideBarListItem">
                <Storefront className="sideBarIcon" />
                Products
              </li>
            </Link>
            <li className="sideBarListItem">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analitics
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
