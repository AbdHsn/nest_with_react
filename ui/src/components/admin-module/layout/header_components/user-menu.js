import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//images import
import man from "../../../../assets/images/dashboard/man.png";

const logOut = () => {
  localStorage.clear();
  window.location.href = "/";
};

const UserMenu = () => {
  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="media align-items-center">
          <img
            className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
            src={man}
            alt="header-user"
          />
          <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div>
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          <li>
            <Link to={`${process.env.PUBLIC_URL}/settings/profile`}>
              <i data-feather="user"></i>Profile
            </Link>
          </li>
          <li>
            <a href="#javaScript">
              <i data-feather="settings"></i>Settings
            </a>
          </li>
          <li>
            <Link onClick={logOut}>
              <i data-feather="log-out"></i>Logout
            </Link>
          </li>
        </ul>
      </li>
    </Fragment>
  );
};

export default UserMenu;
