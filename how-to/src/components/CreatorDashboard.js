import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <BodyWrap>
      <UsersList />
      <Span>
        {" "}
        {/*user card */}
        <ProfileImage
          src="{/*pulled in from the back end*/}"
          alt="your uploaded user-photo"
        />
        <H3>Creator_name{/*actual name will be pulled in from backend*/}</H3>
        <Link to="/settings">
          <img src="" alt="edit icon" />
        </Link>
      </Span>

      <LineDiv>{/*grey line under the user card */}</LineDiv>

      <CardContainer>
        {" "}
        {/* guide-links card container */}
        <Link to="/guides">
          <Card>
            {/*box link thing*/}
            <CardP>Browse Guides</CardP>
          </Card>
        </Link>
        <Link to="/Myguides">
          <Card>
            {/*box link thing*/}
            <CardP>My Guides</CardP>
          </Card>
        </Link>
        <Link to="/AddGuide">
          <Card>
            {/*box link thing*/}
            <CardP>Add Guide</CardP>
          </Card>
        </Link>
        <Link to="/EditGuide">
          <Card>
            {/*box link thing*/}
            <CardP>Edit Guide</CardP>
          </Card>
        </Link>
        <Link to="/Followers">
          <Card>
            {/*box link thing*/}
            <CardP>Followers</CardP>
          </Card>
        </Link>
        <Link to="/Settings">
          <Card>
            {/*box link thing*/}
            <CardP>Settings</CardP>
          </Card>
        </Link>
      </CardContainer>
    </BodyWrap>
  );
};

export default CreatorDashboard;
