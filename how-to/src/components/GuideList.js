import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { getGuides, getUsers } from "../store/actions";
import GuideCard from "./GuideCard";
import UserCard from "./UserCard";

const GuideList = ({ getGuides, getUsers, guides, users }) => {
  useEffect(
    () => {
      getGuides();
      getUsers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="guide-list-container">
      <h3>Browse All Guides</h3>

      {guides
        ? guides
            .sort((a, b) => {
              return new Date(b.created_at) - new Date(a.created_at);
            })
            .map(guide => (
              <Link to={`/guide/${guide.id}`}>
                <GuideCard users={users} guide={guide} />
              </Link>
            ))
        : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    guides: state.guides,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuides, getUsers }
)(GuideList);
