import React from "react";

export default function ContactCard(props) {
  const deleteuser=()=>{
    props.deleteUser(props.id)
  }
  return (
      <div className="row g3 mx-2 my-2 contactCard">
        <div className="col-md-4 avtar row g-3">
            <img className="col-md-12" src={props.user.userImg} alt="" />
        </div>
        <div className="col-md-8 row g-3">
            <div className="col-md-12"><b>Name</b> : {props.user.nameFirst} {props.user.nameLast}</div>
            <div className="col-md-12"><b>Email</b> : {props.user.email}</div>
            <div className="col-md-6"><b>Phone.no</b> : {props.user.phone}</div>
            <div className="col-md-6"><b>Birtday</b> : {props.user.birthday}</div>
            <div className="col-md-12"><b>Website</b> : {props.user.website}</div>
        </div>
        <div className="col-md-12 row g-3">
            <div className="col-md-6"><b>Address :</b> {props.user.address}</div>
            <div className="col-md-6"><b>Note :</b> {props.user.note} </div>
            <div className="col-md-12"><button type="button" className="btn btn-danger" onClick={deleteuser} style={{width:"100%"}}>Delete</button></div>
        </div>
      </div>

  );
}
