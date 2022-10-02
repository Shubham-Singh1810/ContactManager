import React, { useState } from "react";

export default function AddContacs(props) {
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [birthday, setBirthday] = useState("");
  const [userImg, setUserImg] = useState("http://www.zooniverse.org/assets/simple-avatar.png");
  const submit = () => {
    const newRecord = {
      nameFirst: nameFirst,
      nameLast: nameLast,
      phone: phone,
      address: address,
      note: note,
      birthday: birthday,
      website: website,
      email: email,
      userImg: userImg,
    };
    props.addNewUser(newRecord);
    setAddress("");
    setNameFirst("");
    setNameLast("");
    setBirthday("");
    setEmail("");
    setNote("");
    setWebsite("");
    setPhone("");
    setUserImg("http://www.zooniverse.org/assets/simple-avatar.png")
   

    document.getElementById("successMessage").innerHTML = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>${nameFirst} ${nameLast}</strong> is registered Successfully &#128512;
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`
  };
  const Imagehandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUserImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="Addcontact" id="AddNew">
    <div id="successMessage"></div>
      <h1 style={{ textAlign: "center", fontFamily: "monospace", color:"blue" }}> <i class="fas fa-file"></i>  AddNew</h1><hr /><hr />
      <form className="row g-3 needs-validation" onSubmit={submit}>
        <div className="col-md-3 ">
        <div className="adduserImgDiv">
          <img src={userImg} alt="" className="addUserImg" />
          </div>
          <hr />
          <input
            type="file"
            className="form-control"
            id="validationCustom01"
            onChange={Imagehandler}
          />
        </div>
        <div className="col-md-9 row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              required="true"
              placeholder="First Name"
              value={nameFirst}
              onChange={(e) => setNameFirst(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              required="true"
              placeholder="Last Name"
              value={nameLast}
              onChange={(e) => setNameLast(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <div className="input-group has-validation">
              <input
                type="email"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required=""
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              id="validationCustom01"
              required="true"
              placeholder="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Website"
              className="form-control"
              id="validationCustom01"
              required="true"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              placeholder="Date OF Birth"
              className="form-control"
              id="validationCustom01"
              required="true"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            id="validationCustom01"
            required="true"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            required="true"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <div className="col-md-12">
          <button
            className="btn btn-primary"
            type="submit"
            style={{ width: "100%" }}
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
