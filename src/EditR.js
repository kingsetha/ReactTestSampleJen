import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function EditR() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:1002/Movie/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:1002/Movie", data).then((res) => {
      alert("Data Updated Successfully");
      navigate("/");
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE Movie DATA</h1>
            <br />
            <div>
              <lable role="id1"htmlFor="id">Movie ID :</lable>
              <br />
              <br />
              <input
                type="number"
                disabled
                name="mid" role="id"
                className="form-control"
                value={data.mid}
                //onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>
            <br />
            <div>
              <lable role="name1"htmlFor="mname">Movie name :</lable>
              <br />
              <br />
              <input
                type="text"
                name="mname" role="name"
                className="form-control"
                value={data.mname}
                onChange={(e) => setData({ ...data, mname: e.target.value })}
              />
            </div>
            <br />
            <div>
              <lable role="type1"htmlFor="type">Movie type :</lable>
              <br />
              <br />
              <input
                type="text"
                name="type" role="type"
                className="form-control"
                value={data.type}
                onChange={(e) => setData({ ...data, type: e.target.value })}
              />
            </div>
            <div>
              <lable role="time1" htmlFor="timing">Timing :</lable>
              <br />
              <br />
              <input
                type="text"
                name="timing" role="timing"
                className="form-control"
                value={data.timing}
                onChange={(e) => setData({ ...data, timing: e.target.value })}
              />
            </div>
            <br />

            <button className="btn btn-info " role="update">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditR;
