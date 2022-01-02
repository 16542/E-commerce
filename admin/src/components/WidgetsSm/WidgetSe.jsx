import "./WidgetSe.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../RequestMethods";
const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers()
  },[]);
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(

          <li className="widgetSmListItem" key={user._id}>
          <img
            className="widgetSmImage"
            src={user.img || "https://conference.pecb.com/wp-content/uploads/2017/10/no-profile-picture-300x216.jpg"}
            alt=""
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
            ))}
        
        
       
      </ul>
    </div>
  );
};

export default WidgetSm;
