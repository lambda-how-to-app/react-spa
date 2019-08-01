import React, { useEffect } from "react";
import { Card } from "semantic-ui-react";

const GuideCard = ({ guide, users }) => {
  const guideUserId = guide.guide_auth_id;
  return (
    <div>
      <Card.Group>
        {" "}
        {/* add onClick funct here to link to individual user guide page */}
        {/* <Image src={choco} avatar /> */}
        <Card>
          <Card.Content>
            <Card.Header>{guide.title}</Card.Header>
            <Card.Description>
              Short description about this guide here!
            </Card.Description>
            <Card.Meta>Date: {guide.created_at}</Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default GuideCard;
