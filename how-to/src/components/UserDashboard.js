import React from "react"; 

function UserDashboard (props) {
  return ( 
   <div className ="ui card"> 
   <div className = "ui content">
    <div class="ui comments">
     
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/matt.jpg" />
        </a>
        <div class="content">
        <h4 class="ui dividing header">Make Choclate Milk</h4>
          <div class="metadata">
           Make the chocolate syrup: Combine the sugar and 1/3 cup water in a small saucepan
           . Bring to a simmer over medium heat, then whisk in the cocoa powder until smooth. ..
          </div>
        </div>
      </div>
    </div>  
    </div> 
    </div>

  );
};

export default UserDashboard;
