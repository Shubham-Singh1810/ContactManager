import React from 'react'
import ContactCard from './ContactCard'
import lightBar from "../image/lightBar.gif";

export default function ContactList(props) {
  const deleteUser=(id)=>{
    props.delete(id)
  }
  return (
    
    <div id="Contacts">
    <div className="contactListHeading">
       <h1> Contacts</h1> <img src={lightBar}  alt="" />
       </div>
       <hr />
    <div className="ContactList">
         {
          props.user.length<1 ? <h3>You haven't added any contacts yet! <br /> fill the above form to store the information</h3> :
          props.user.map((user, index)=>{
            return(
              <ContactCard user={user} key={index} id={index} deleteUser={deleteUser}/>
            )
          })
         }
       
        
    </div>
    <hr /><hr />
    </div>
  
  )
}
