import axios from "axios";
import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";

export default function EventSignup() {
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");

  const [workshop, setWorkShop] = useState({});

  const postId = "5ffa4eb8b13c4a5ccdf031aa";
  useEffect(() => {
    axios
      .get(`http://localhost:3333/workshop/${postId}`)
      .then((data) => {
        setWorkShop(data.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const image =
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png";

  const timeConvert = (t) => {
    return new Date(t).toLocaleTimeString("en-US");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3333/workshop/${postId}/createTicket`, {
        name,
        email,
        phone_number,
        people: count,
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="eventSignupContent">
      {/* dynamic change by the api catching */}
      <h1>{workshop.name}</h1>
      <p>Business name</p>

      <div className="eventContent" style={{ width: "100%" }}>
        <img src={image} className="eventSignupImg" />

        <div className="textDiv">
          <p>MENTOR NAME: {workshop.mentor_name}</p>
          <div>
            <label>Info: </label>
            <p>{workshop.description}</p>
          </div>

          <div>
            <label>INCLUDES: </label>
            <p></p>
          </div>

          <div>
            <p>Price: ${workshop.price} </p>
          </div>
        </div>
      </div>
      <div>
        <h1>SCHEDULE</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "80px",
            justifyContent: "space-between",
            borderBottom: "2px solid #000",
            padding: "20px",
          }}>
          <div>
            <p>Location: {workshop.location}</p>
            <p>
              Time: {timeConvert(workshop.start_time)} ~{" "}
              {timeConvert(workshop.end_time)}
            </p>
          </div>
          <p>{workshop.max_attendance} Space Available</p>
          <button
            onClick={() => {
              setOpen(!open);
            }}>
            RSVP NOW!
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
          }}>
          <div>
            <p>Location: {workshop.location}</p>
            <p>
              Time: {timeConvert(workshop.start_time)} ~{" "}
              {timeConvert(workshop.end_time)}
            </p>
          </div>
          <p>{workshop.max_attendance} Space Available</p>
          <button>RSVP NOW!</button>
        </div>

        <Collapse in={open}>
          <div className="ticket">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <img src={image} width="100px" height="100px" />
              <div>
                <p>Event Name</p>
                <p>Location</p>
                <p>Time</p>
              </div>
              <div>
                <input
                  form="createTicket"
                  type="number"
                  placeholder="1"
                  name="people"
                  value={count}
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                  style={{ width: "50px", padding: 3 }}
                />
                &nbsp;X Person
              </div>
              <p>Total: $xxx.xx</p>
            </div>

            <form method="post" id="createTicket" onSubmit={handleSubmit}>
              <div className="inputGrp">
                <label>NAME</label>
                <br />
                <input
                  name="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  required
                />
              </div>

              <div className="inputGrp">
                <label>EMAIL</label>
                <br />
                <input
                  name="email"
                  placeholder="123@123.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  required
                />
              </div>

              <div className="inputGrp">
                <label>PHONE NUMBER</label>
                <br />
                <input
                  name="phone_number"
                  placeholder="(012)-345 6789"
                  value={phone_number}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="inputGrp">
                <label>CREDIT CARD NUMBER</label>
                <br />
                <input />
              </div>

              <div className="inputGrp">
                <label>CVV</label>
                <br />
                <input />
              </div>

              <div className="inputGrp">
                <label>EXP.DATE (MM / YEARS)</label>
                <br />
                <input />
              </div>
              <input
                className="formSubmitBtn"
                type="submit"
                form="createTicket"
                value="CONFIRM"
              />
            </form>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
