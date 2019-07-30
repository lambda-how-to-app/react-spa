import React from "react";

const CreatorDashboard = () => {
  return (
    <>
      <span>{/*user card */}
        <img src={/*pulled in from the back end*/} alt="your uploaded user-photo" />
        <h4>Creator_name</h4>
        <link to="/settings"><p>edit</p></link>
      </span>
      <div>{/*grey line under the user card */}</div>
     
      <div> {/* guide-links card container */}
        
        <link to="/Guides">
          <div>{/*box link thing*/}
            <p>Browse Guides</p>
          </div>
        </link>

        <link to="/Myguides">
          <div>{/*box link thing*/}
            <p>My Guides</p>
          </div>
        </link>

        <link to="/AddGuide">
          <div>{/*box link thing*/}
            <p>Add Guide</p>
          </div>
        </link>

        <link to="/EditGuide">
          <div>{/*box link thing*/}
            <p>Edit Guide</p>
          </div>
        </link>

        <link to="/Followers">
          <div>{/*box link thing*/}
            <p>Followers</p>
          </div>
        </link>

        <link to="/Settings">
          <div>{/*box link thing*/}
            <p>Settings</p>
          </div>
        </link>
      </div>
    </>
  )


};

export default CreatorDashboard;
