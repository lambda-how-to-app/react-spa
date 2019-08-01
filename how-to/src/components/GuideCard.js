import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";

const GuideCard = ({ guide, users }) => {
  const guideUserId = guide.guide_auth_id;
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{guide.title}</Card.Header>
          <Card.Meta>Date: {guide.created_at}</Card.Meta>

          <Card.Description>
            Created by:
            {users
              ? users
                  .filter(user => user.id === guideUserId)
                  .map((item, index) => (
                    <p key={index}>
                      {item.username} <br />
                      {item.email}
                    </p>
                  ))
              : null}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default GuideCard;
