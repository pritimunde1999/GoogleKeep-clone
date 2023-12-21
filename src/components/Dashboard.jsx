import React, { useState } from 'react'
import Cards from './Cards';

const Dashboard = () => {
    const[title,setTitle] = useState('');
    const[content,setContent] = useState('');
    const[notes,setNotes] = useState([]);

    function handleClick(){
        setNotes([...notes,{title:title,content:content}])
        setTitle('')
        setContent('')
    }

  return (
    <div>
        <input type='text' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <input type='text' placeholder='Take a note...' onChange={(e)=>setContent(e.target.value)} value={content} required/>
        <button onClick={handleClick}>Add a Note</button>

        <Cards note={notes} setNote={setNotes}/>
    </div>
  )
}

export default Dashboard