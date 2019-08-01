import  React , {useState} from 'react';

function SearchBar()
{    
    const[state , setState] = useState({term:''});

 const onInputChange = (event) =>
    {
        console.log(setState({term: event.target.value}));
    }  
     
    const onInputSubmit = (event) => {
        event.preventDefault(); 
          console.log(state);
    }

  return (
      <div className = 'ui segment'>
          <form onSubmit = {onInputSubmit} className = "ui form"> 
          <div className = 'field'>
          <label></label> 
          <input type ='text' onChange ={onInputChange} />
          <button>SEARCHNOW</button>
            </div>
       </form>
      </div> 
  )
} 
export default SearchBar;