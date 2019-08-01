import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { getGuides, getUsers } from "../store/actions";
import GuideCard from "./GuideCard";
import UserCard from "./UserCard";
import styled from "styled-components";
import "./MyGuides.css";

const GuideContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LineDiv = styled.div`
  width: 353px;
  height: 8px;
  top: 9px;
  background: #5c5c5c;
  margin-bottom: 14px;
`;

const GuideList = ({ getGuides, getUsers, guides, users }) => {
  useEffect(() => {
    getGuides();
    getUsers();
  }, [getGuides, getUsers]);

  return (
    <div className="guide-list-container">
      <h3>Browse All Guides</h3>
      <GuideContainer>
        {guides
          ? guides
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .map((guide, index) => (
                <Link key={index} to={`/guide/${guide.id}`}>
                  <GuideCard key={index} users={users} guide={guide} />
                </Link>
              ))
          : null}
      </GuideContainer>
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
