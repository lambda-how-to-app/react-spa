import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { connect } from "react-redux";
import { logout, getSingleUser } from "../store/actions";
import decode from "jwt-decode";
//
import UsersList from "./UsersList";

const BodyWrap = styled.div`
  background-color: #e5e5e5;
  width: 374px;
  height: auto;
`;

const Span = styled.div`
  width: 344px;
  height: 219px;
  background: #b89498;
  margin-top: 61px;
  margin-left: 12px;
`;

const ProfileImage = styled.img`
  width: 116px;
  height: 116px;
  border-radius: 50%;
`;

const H3 = styled.h3`
  width: 198px;
  height: 44px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #000000;
`;
const LineDiv = styled.div`
  width: 362px;
  margin-left: 6px;
  height: 8px;
  top: 9px;
  background: #5c5c5c;
`;

const CardContainer = styled.div`
  width: 372px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 132px;
  height: 132px;
  margin-top: 15px;
  background: #678650;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardP = styled.p`
  width: 100%;
  height: 50px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 7px;
  color: #ffffff;
`;
const CreatorDashboard = props => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    userImg: "",
    userEmail: ""
  });

  let userId;
  if (localStorage.token) {
    userId = decode(localStorage.getItem("token")).userId;
  }

  useEffect(
    () => {
      props.getSingleUser(userId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <BodyWrap>
      <Span>
        {" "}
        {/*user card */}
        <ProfileImage
          src={props.user ? props.user.profileImage : null}
          alt="your uploaded user-photo"
        />
        <h2>{props.user ? props.user.fullname : null}</h2>
        <h3>{props.user ? props.user.username : null}</h3>
        <Link to="/settings">
          <img src="" alt="edit icon" />
        </Link>
      </Span>

      <LineDiv>{/*grey line under the user card */}</LineDiv>
      <button onClick={() => props.getSingleUser(userId)}>
        Get Single User
      </button>
      <CardContainer>
        {" "}
        {/* guide-links card container */}
        <Link to="/guides">
          <Card>
            {/*box link thing*/}
            <CardP>Browse Guides</CardP>
          </Card>
        </Link>
        <Link to="/my-guides">
          <Card>
            {/*box link thing*/}
            <CardP>My Guides</CardP>
          </Card>
        </Link>
        <Link to="/guide-form">
          <Card>
            {/*box link thing*/}
            <CardP>Add Guide</CardP>
          </Card>
        </Link>
        <Link to="/Settings">
          <Card>
            {/*box link thing*/}
            <CardP>Log Out</CardP>
          </Card>
        </Link>
      </CardContainer>
    </BodyWrap>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { logout, getSingleUser }
)(CreatorDashboard);
