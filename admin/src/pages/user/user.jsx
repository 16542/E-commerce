import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const user = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">ferjani sassi</span>
              <span className="userShowUserTitle">Football player</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Ferjani Sassi99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />

              <span className="userShowInfoTitle">+216 222 55 99</span>
            </div>
            <div className="userShowInfo">
              <MailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">FerjaniSA@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">TUNISIA | MALASSIN </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Ferjani Sassi99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="ferjani sassi"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="FerjaniSA@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+216 222 55 99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adress</label>
                <input
                  type="text"
                  placeholder="TUNISIA | M ALASSIN"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="userUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className="userUpadateIcon" />
                </label>
                <input type="file" id="file"  style={{display:'none'}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default user;
