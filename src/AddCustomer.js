import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
function FindMobile() {  
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    cid: "",
    cname: "",
    count: "",
    address: "",
    repair:{
      timing:"",
      mname: "",
      type: ""
    }
  });
 
 
  const nav = useNavigate();
 
  let handleAdd = (e) => {
    e.preventDefault();
    let ans = validate(inputData);
    if (ans === true) {
      axios
        .post("http://localhost:1002/Customer", inputData)
        .then((response) => {
          alert("Data added Successfully");
          nav("/");
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      alert("valid data needed");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:1002/Movie/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
 
  const handleSelectChange = (e) => {
    const selectedRecordId = e.target.value;
    if (selectedRecordId) {
      axios
        .get(`http://localhost:1002/Movie/${selectedRecordId}`)
        .then((response) => {
          const selectedRepair = response.data;
          setInputData((prevState) => ({
            ...prevState,
            movie: {
                mname:selectedRepair.mname,
                type: selectedRepair.type,
                timing:selectedRepair.timing,
            }
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
 
 
 
 
  const validate = (inputData) => {
   
     if (inputData.cname.length === 0) {
      alert("Enter the correct name ");
      return false;
    }
    else if (inputData.address.length === 0) {
      alert("department should be in the format of yyy");
      return false;
    } else if (inputData.count.length === 0) {
      alert("designation fill");
      return false;
    }  
    else {
        // alert("done");
      return true;
    }
  };
 
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center"
    >
      <div className="bg-light w-50  bordered  ">
        <form onSubmit={handleAdd}>
          <h1 role="login-heading" >ADD CUSTOMERS DETAILS </h1>
          
          <div>
            <lable role="name1" >Name :</lable>
            <input type="text" name="cname" role="name" className="form-control" onChange={(e) =>setInputData({ ...inputData, cname: e.target.value })}/>
          </div>
 
          <div>
            <lable role="count1">Count :</lable>
            <input type="text"  name="location" role="count" className="form-control" onChange={(e) =>setInputData({ ...inputData, count: e.target.value })}/>
          </div>
 
          <div>
            <lable role="address1">Address :</lable>
            <input type="text"   name="address"  role="address" className="form-control" onChange={(e) =>setInputData({ ...inputData, address: e.target.value }) } />
          </div>
          <br />
 
          <div>
            <lable>Fetch the id :</lable>
            <select onChange={handleSelectChange} className="form-control">
              <option value="">Select a record</option>
              {records.map((record) => (
                <option key={record.mid} value={record.mid}>
                  {record.mid}
                </option>
              ))}
            </select>          </div>
          <br />
          <button className="btn btn-dark text-center justify-content-center w-100 " data-testid="submit">Submit</button>
        </form>
 
       
      </div>
    </div>
  );
}
 
export default FindMobile
 
 
 