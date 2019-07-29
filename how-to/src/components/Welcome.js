import React from 'react';


function Welcome() {
    return (
        <div> 
            <div className ="field">
            <button class="ui button"> Creator Account </button>  
            <div class="content">
           <div class="header"><i class="right triangle icon"></i> Organize how-to tutorials</div>
            <div class="header">  <i class="right triangle icon"></i> Use Photos and videos</div>
            <div class="header">  <i class="right triangle icon"></i> Gain followers</div>
            <div class="header">  <i class="right triangle icon"></i> Share guides privately OR publicly</div>
           </div>
           
           <button class="ui button"> General Account </button>  
            <div class="content">
           <div class="header"><i class="right triangle icon"></i> find tutorials and other guides</div>
            <div class="header">  <i class="right triangle icon"></i>easily search/filter how-to guides</div>
            <div class="header">  <i class="right triangle icon"></i> follow your favorite creators</div>
            <div class="header">  <i class="right triangle icon"></i> share guides with friends</div>
           </div>  

           <button class="ui button"> Sign Up </button>

        </div> 
        </div>
    );
}

export default Welcome;