import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillBagFill } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";

export default function DashboardActions() {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <CgProfile /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <BsFillBagFill /> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <FaAddressBook />
        Add Education
      </Link>
    </div>
  );
}
