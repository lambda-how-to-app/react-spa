import React, { useEffect } from "react";
import { Header, Card, Image, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import GuideCard from "./GuideCard";
import { getGuides, getUsers } from "../store/actions";
import decode from "jwt-decode";

import choco from "../chocomilk.jpg";
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

// to edit with user's guide id
const handleClick = () => {
  console.log("guide clicked!");
};

let userId;
if (localStorage.token) {
  userId = decode(localStorage.getItem("token")).userId;
}

function MyGuides({ guides, users, getGuides, getUsers }) {
  useEffect(() => {
    getGuides();
    getUsers();
  }, [getGuides, getUsers]);
  return (
    <div>
      <GuideContainer>
        <Header as="h1">MY GUIDES</Header>
        <LineDiv>{/*grey line under the user card */}</LineDiv>

        {/* input sort/filter functionality here */}
        <p className-="sortTag">Sort/Filter</p>
        {guides && userId
          ? guides
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .filter(guide => guide.guide_auth_id === userId)
              .map((guide, index) => (
                <Link key={index} to={`/guide/${guide.id}`}>
                  <GuideCard key={index} users={users} guide={guide} />
                </Link>
              ))
          : null}

        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          // totalPages={10}
        />
      </GuideContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    guides: state.guides,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuides, getUsers }
)(MyGuides);
