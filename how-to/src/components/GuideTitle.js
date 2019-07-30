import React from "react";
import { Header } from "semantic-ui-react";
import styled from 'styled-components'

const Head = styled.div `
  margin-bottom: 30px;
`

const GuideTitle = () => {
  return ( 
    <Head>
      {/* to be replaced with back end data */}
      <Header as="h3" textAlign='center'>Make Chocolate Milk</Header>
    </Head> 
  );
};

export default GuideTitle;
