import React,{useState, useEffect} from 'react'
import AddContacs from './AddContacs'
import ContactList from './ContactList'
import Home from "./Home"
import Contact from "../image/contact.jpg";
import Navbar from './Navbar';

// getting item from the local storage
const getlocalItem =()=>{
  let contactlist =localStorage.getItem("contactlist");
  if(contactlist){
   return JSON.parse(contactlist)
  }
  else{
   return []
  }
}

export default function HomePage() {
  const [user, setUser] = useState(getlocalItem())
  const [searchuser, setSearchUser] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
 
  const addNewUser=(newRecord)=>{
       setUser([...user, newRecord]);
  }
  const deleteUser=(id)=>{
     const newArr = user.filter((e, i)=>{
      return i!==id;
     })
     setUser(newArr)
  }

  const searchHandler = (key)=>{
    setSearchTerm(key)
    if(searchTerm !==""){
      const newContactList = user.filter((contact, index)=>{
        return Object.values(contact).join(" ").toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      })
      setSearchUser(newContactList)
    }
    else{
      setSearchUser(user)
    }
    console.log(searchuser)
  }

  useEffect(()=>{
    localStorage.setItem("contactlist", JSON.stringify(user))
},[user])
  return (
    <div>
    <Navbar searchHandler={searchHandler} searchTerm={searchTerm}/>
    <div className="homecontainer">
        <Home/><hr />
        <div className="contactImg"><img src={Contact}   alt="" /></div>
        <hr />
        <AddContacs addNewUser={addNewUser}/><hr /><hr />
        
        <ContactList user={searchTerm.length<1? user: searchuser}  delete={deleteUser}/>
        </div>
    </div>
  )
}
