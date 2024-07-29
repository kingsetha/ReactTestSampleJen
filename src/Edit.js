import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";
 
function Edit() {
 
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1002/Customer/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);
 
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1002/Customer" , data).then((res) => {
      alert("Data Updated Successfully");
      navigate("/");
    });
  };
 
 
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE Customer DATA</h1>
            <br/>
            <div>
              <lable role="id1" htmlFor="id">Customer ID :</lable><br/><br/>
              <input
                type="text"
                disabled
                name="cid" role="id"
                className="form-control"
                value={data.cid}
                //onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable role="name1"htmlFor="ename">Customer Name :</lable><br/><br/>
              <input
                type="text"
                name="cname" role="name"
                className="form-control"
                value={data.cname}
                onChange={(e) => setData({ ...data, cname: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable role="count1"htmlFor="dept">Count :</lable><br/><br/>
              <input
                type="text"
                name="location" role="count"
                className="form-control"
                value={data.count}
                onChange={(e) => setData({ ...data, count: e.target.value })}
              />
            </div>
            <div>
              <lable role="address1"htmlFor="desig">Address :</lable><br/><br/>
              <input
                type="text"
                name="address" role="address"
                className="form-control"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <br/>
            
            <br />
 
            <button className="btn btn-info " role="update">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Edit;
 