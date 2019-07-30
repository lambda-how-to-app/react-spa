import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const BodyWrap = styled.div `
  background-color: #E5E5E5;
  height: auto;
`

const Span = styled.span`
  width: 344px;
  height: 219px;
  background: #B89498;
  top: 61px;
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

const CardContainer = styled.div `
  width:372px;
  margin: 0 auto;
`

const Card = styled.div `
  width: 132px;
  height: 132px;
  background: #678650;
`

const CardP = styled.p `
  width: 83px;
  height: 50px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 21px;
  color: #FFFFFF;
`
const CreatorDashboard = () => {


  return (
    <BodyWrap>
      <Span>{/*user card */}
        <ProfileImage src={/*pulled in from the back end*/} alt="your uploaded user-photo" />
        <H3>Creator_name{/*actual name will be pulled in from backend*/}</H3>
        <Link to="/settings"><img src="../../public/images/edit-icon.png" alt="edit icon"/></Link>
      </Span>

      <LineDiv>{/*grey line under the user card */}</LineDiv>
     
      <CardContainer> {/* guide-links card container */}
        
        <Link to="/Guides">
          <Card>{/*box link thing*/}
            <CardP>Browse Guides</CardP>
          </Card>
        </Link>

        <Link to="/Myguides">
          <Card>{/*box link thing*/}
            <CardP>My Guides</pCardP>
          </Card>
        </Link>

        <Link to="/AddGuide">
          <Card>{/*box link thing*/}
            <CardP>Add Guide</CardP>
          </Card>
        </Link>

        <Link to="/EditGuide">
          <Card>{/*box link thing*/}
            <CardP>Edit Guide</CardP>
          </Card>
        </Link>

        <Link to="/Followers">
          <Card>{/*box link thing*/}
            <CardP>Followers</CardP>
          </Card>
        </Link>

        <Link to="/Settings">
          <Card>{/*box link thing*/}
            <CardP>Settings</CardP>
          </Card>
        </Link>
      </CardContainer>
    </BodyWrap>
  )


};

export default CreatorDashboard;
