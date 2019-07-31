import React from "react";
import { Card } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>username</Card.Header>
        <Card.Meta>description</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
