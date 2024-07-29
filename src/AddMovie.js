import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios  from 'axios';
 
import React from 'react'
 
function AddRepair() {
    const [inputData, setInputData] = useState({    
    
        timing:"",
        mname: "",
        type: ""
            
        }
      );
      
     
   
      const nav = useNavigate();
   
      let handleAdd = (e) => {
        e.preventDefault();
        let ans = validate(inputData);
        if (ans === true) {
          axios
            .post("http://localhost:1002/Movie", inputData)
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
   
      const validate = (inputData) => {
       
         if (inputData.mname.length === 0) {
          alert("Enter the correct name ");
          return false;
        }
        else if (inputData.timing.length === 0) {
          alert("department should be in the format of yyy");
          return false;
        } else if (inputData.type.length === 0) {
          alert("designation fill");
          return false;
          }
        else {
          return true;
        }
      };
   
      return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center"
        >
          <div className="bg-light w-50  bordered  ">
            <form onSubmit={handleAdd}>
              <h1 role="Movie-heading">ADD Movie details </h1>
              <div>
                <lable role="name1">Movie Name</lable>
                <input type="text" name="mname" role="name"className="form-control" onChange={(e) => setInputData({ ...inputData, mname: e.target.value }) } />
              </div>
              <div>
                <lable role="type1">Movie type :</lable>
                <input type="text" name="type"role="type" className="form-control" onChange={(e) =>setInputData({ ...inputData, type: e.target.value })}/>
              </div>
   
              <div>
                <lable role="timing1">Timing :</lable>
                <input type="text"  name="timing" role="timing"className="form-control" onChange={(e) =>setInputData({ ...inputData, timing: e.target.value })}/>
              </div>
   
 
 
              <br />
              <button className="btn btn-dark text-center justify-content-center w-100 " data-testid="submit">Submit</button>
            </form>
   
           
          </div>
        </div>
      );
    }
 
export default AddRepair
 