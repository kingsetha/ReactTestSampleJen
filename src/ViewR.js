import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";
 
function ViewR(){
  const [columns] = useState([]);
  const [records] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    // axios
    //   .get("http://localhost:1002/Movie/all")
    //   .then((response) => {
    //     setColumns(Object.keys(response.data[0]));
    //     setRecords(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
 
 
 
  let handleSubmit = (eid) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:1002/Movie/" + eid)
        .then((res) => {
          alert("record has deleted");
          navigate("/ViewR");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
 
  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-bg-success " style={{padding:'0.5rem',justifyContent:"space-around",marginTop:'70px'}} >
          MOVIE TICKET MANAGEMENT SYSTEM
        </h1>
        <h1 id="app2" className="text-center text-bg-secondary ">
          Movie Informations
        </h1>
 
        <div className="text-end">
          <Link to="/AddMovie" className="btn btn-primary">
            Add +
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
 
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.mid}</td>
                <td>{d.mname}</td>
                <td>{d.type}</td>
                <td>{d.timing}</td>
                <td>
                  <Link
                    to={`/EditR/${d.rid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.rid)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
 
              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default ViewR;