import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;
function Create(props) {
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [itemCity, setItemCity] = useState("vancover");
  const [itemDesc, setItemDesc] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  return (
    <div className="container fluid ">
      <h3>Create Record</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post("/items/", {
              itemName: itemName,
              itemDescription: itemDesc,
              itemQuantity: itemQuantity,
              itemPrice: itemPrice,
              itemCity: itemCity,
            })
            .then(function (response) {
              if (response.status !== 200) {
                alert("Creation failed");
              }
              alert("Creation sucess");

              navigate("/");
            });
        }}
      >
        <div className="form-group">
          <label>Item Name</label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Item Description</label>
          <input
            className="form-control"
            value={itemDesc}
            onChange={(e) => setItemDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Item Quantity</label>
          <input
            className="form-control"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Item Price</label>
          <input
            className="form-control"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Item City: </label>

          <select onChange={(event) => setItemCity(event.target.value)}>
            <option value="toronto">Toronto</option>
            <option value="halifax">Halifax</option>
            <option value="vancouver">Vancouver</option>
            <option value="edmonton">Edmonton</option>
            <option value="calgary">Calgary</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
