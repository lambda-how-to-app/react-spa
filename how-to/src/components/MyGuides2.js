import React, { useState } from "react";
import { Header, Card, Image, Pagination } from "semantic-ui-react";
import styled from "styled-components";

import choco from "../chocomilk.jpg";
import "./MyGuides.css";
import MyGuidesPage2 from "./MyGuidesPage2.js";
import Paginate from './Paginate.js';

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

function MyGuides2() {

    const [pages, setPages] = useState([
        {
            id: 0,
            pageTitle: "Make Chocolate Milk",
            pageDesc: "short description about this guide here!!!"
        },
        {
            id: 1,
            pageTitle: "Make Chocolate Milk2",
            pageDesc: "short description about this guide here!!!"
        },
        {
            id: 2,
            pageTitle: "Make Chocolate Milk3",
            pageDesc: "short description about this guide here!!!"
        },
        {
            id: 3,
            pageTitle: "Make Chocolate Milk4",
            pageDesc: "short description about this guide here!!!"
        }
    ]);
    // const [loading, setLoading] = useState("false");
    const [currentPage, setCurrentPage] = useState(1);
    const [guidesPerPage, setGuidesPerPage] = useState(3);

    // Get current posts
    // const indexOfLastPost = currentPage * guidesPerPage;
    // const indexOfFirstPost = indexOfLastPost = guidesPerPage;
    // const currentPage = page.slice(indexOfFirstPost, indexOfLastPost); 

    return (
        <div>
            <GuideContainer>
                <Header as="h1">MY GUIDES</Header>
                <LineDiv>{/*grey line under the user card */}</LineDiv>

                {/* input sort/filter functionality here */}
                <p>Sort/Filter</p>
                <MyGuidesPage2 page={pages} />

                <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={null}
                />
            </GuideContainer>
        </div>
    );
}

export default MyGuides2;


{/* <Card.Group onClick={handleClick}>  */}
{/* add onClick funct here to link to individual user guide page */}
    {/* <Image src={choco} avatar />
    <Card>
        <Card.Content>
            <Card.Header>Make Chocolate Milk</Card.Header>
            <Card.Description>short description about this guide here!!!</Card.Description>
        </Card.Content>
    </Card>
</Card.Group> 

<Card.Group onClick={handleClick}>
    <Image src={choco} avatar />
    <Card>
        <Card.Content>
            <Card.Header>Make Chocolate Milk</Card.Header>
            <Card.Description>short description about this guide here!!!</Card.Description>
        </Card.Content>
    </Card>
</Card.Group> */}