import React ,{useState , useEffect} from 'react';
import axios from 'axios'; 
import SearchBar from './searchBar';


function LifeHacksLists(props) { 
    const[lifeHack , setLifeHack] = useState([]); 
     useEffect(() => {
          axios.get(`https://lambda-howto-app.herokuapp.com/api/v1/lifehack`)
          .then(response => {
               setLifeHack(response.body.guides) 
               console.log(response.body.guides)
          })
          .catch(error => {
              console.log(error);
          })
     },[]); 
     console.log(lifeHack);
     return(
         <div> 
             
         </div>
     )
} 
export default LifeHacksLists;