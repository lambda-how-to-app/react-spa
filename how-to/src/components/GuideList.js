import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { getGuides, getUsers } from "../store/actions";
import GuideCard from "./GuideCard";
import UserCard from "./UserCard";

const GuideList = props => {
  return (
    <div className="guide-list-container">
      <h3>Browse All Guides</h3>
      <button onClick={props.getGuides}>Get All Guides</button>
      <button onClick={props.getUsers}>Get All Users</button>
      {props.guides
        ? props.guides
            .sort((a, b) => {
              return new Date(b.created_at) - new Date(a.created_at);
            })
            .map(guide => (
              <Link to={`/${guide.id}`}>
                <GuideCard guide={guide} />
              </Link>
            ))
        : null}

      {props.users ? props.users.map(user => <UserCard user={user} />) : null}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    guides: state.guides,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuides, getUsers }
)(GuideList);
