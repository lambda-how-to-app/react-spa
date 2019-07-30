import React from "react";
// import {  } from "semantic-ui-react";
import styled from 'styled-components'

const KeyDiv = styled.div `
  margin-top: 10px;
  margin-bottom: 30px;
`

const GuideKeywords = (props) => {
  return ( 
    <KeyDiv>
      {/* to be replaced with back end data */}
      <p>keywords: {props.keywords}</p>
    </KeyDiv> 
  );
};

export default GuideKeywords;
