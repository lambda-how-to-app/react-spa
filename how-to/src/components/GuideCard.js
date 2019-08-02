import React from "react";
import { Card, Image } from "semantic-ui-react";

const GuideCard = ({ guide, users }) => {
  const guideUserId = guide.guide_auth_id;
  return (

    <Card>
      <Card.Content>
        <Image src={guide.banner_image} size='small' circular />
        <Card.Header>{guide.title}</Card.Header>
        <Card.Meta>{guide.created_at}</Card.Meta>
        <Card.Description>Guide description goes here</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default GuideCard;
