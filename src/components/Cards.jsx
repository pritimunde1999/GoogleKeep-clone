import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Cards = ({note,setNote}) => {
  const[isEdit,setIsEdit] = useState(false);
  const[editedContent,setEditedContent] = useState("")
  const[editIdx,setEditIdx] = useState();
  
  function handleDelete(id){
     const updatedList = note.filter((ele,i)=>i!==id)
     setNote(updatedList)
  }


  function handleEdit(id){
    setIsEdit(!isEdit)
    setEditIdx(id)
  }

  function handleSave(id){
     
     const updatedList = note.map((ele,i)=>{
        if(i==id)
        {
            return {
              ...ele,
              content : editedContent || ele.content
            }
        }
        return ele;
     })

     setNote(updatedList);
     setIsEdit(!isEdit);
  }


  return (
    <div>
        <ul>
      { 
        note.map((ele,i)=>(
           <li key={i}>
            {
                ele.title ? 
                <>
                <h4>{ele.title}</h4>
                <p>{ele.content}</p>
                </>
                :
                <>
                <p>{ele.content}</p>
                 
                </>
            }
            <div>
            <button className='btn' onClick={()=>handleDelete(i)}><MdDelete/></button>
            <button className='btn' onClick={()=>handleEdit(i)}><MdEdit/></button>
            { isEdit && editIdx==i ?
              <>
               <input type='text' placeholder='Add a text here...' onChange={(e)=>setEditedContent(e.target.value)}/>
               <button onClick={()=>handleSave(i)}>Save</button>
              </>
              :
              <></>
            }
            </div>
           </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Cards