import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Span = styled.span`
width: 344px;
height: 219px;
background: #B89498;

`

const ProfileImage = styled.img `
  width: 116px;
  height: 116px;
  border-radius: 50%;
`

const H3 = styled.h3 `
  width: 198px;
  height: 44px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #000000;
  `
const LineDiv = styled.div `
  width: 362px;
  height: 8px;
  top: 9px;
  background: #5C5C5C;
`
const CreatorDashboard = () => {


  return (
    <>
      <Span>{/*user card */}
        <ProfileImage src={/*pulled in from the back end*/} alt="your uploaded user-photo" />
        <H3>Creator_name{/*actual name will be pulled in from backend*/}</H3>
        <Link to="/settings"><img src="../../public/images/edit-icon.png" alt="edit icon"/></Link>
      </Span>

      <LineDiv>{/*grey line under the user card */}</LineDiv>
     
      <div> {/* guide-links card container */}
        
        <Link to="/Guides">
          <div>{/*box link thing*/}
            <p>Browse Guides</p>
          </div>
        </Link>

        <Link to="/Myguides">
          <div>{/*box link thing*/}
            <p>My Guides</p>
          </div>
        </Link>

        <Link to="/AddGuide">
          <div>{/*box link thing*/}
            <p>Add Guide</p>
          </div>
        </Link>

        <Link to="/EditGuide">
          <div>{/*box link thing*/}
            <p>Edit Guide</p>
          </div>
        </Link>

        <Link to="/Followers">
          <div>{/*box link thing*/}
            <p>Followers</p>
          </div>
        </Link>

        <Link to="/Settings">
          <div>{/*box link thing*/}
            <p>Settings</p>
          </div>
        </Link>
      </div>
    </>
  )


};

export default CreatorDashboard;
