import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/pag.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Home = ({specificdata}) => {
   const[data, setData] = useState([])
  

  const callApi =async ()=>{
    try{
        const res = await axios.get('https://capstone-bachend.onrender.com/users');
        setData(res.data)
    }catch(err){
        console.log("There is an error");
    }
  }


  useEffect(()=>{
    callApi()
  },[])

  const lastdata =(data.slice(-1));
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Link to="/recquery" class="btn btn-primary btn-icon-split">
          <span class="icon text-white-50">
            <i style={{ fontWeight: "700", fontSize: "20px" }}>+</i>
          </span>
          <span class="text">Add Query</span>
        </Link>
      </div>
      
      <div className="boxs" >
        <div className="first-box">
        {data.map((data)=>(
          <div className="first-box-up" key={data.id} onClick={() => {
            specificdata(data)
            navigate('/useform')}}>
            <div className="box-details">
              <div className="container" >
              <div className="left-box">
                <div className="detail-id-name">{`QN${data.id}-${data.quDescription}`}</div>
                <div className="detail-doubt-name">{data.category}</div>
              </div>
                <div className="right-box">
                <div className="box-assign">Assigned</div>
                <div className="box-date">{data.date}</div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        
        <div className="second-box">
        <div className="second-box-up">
        <div className="detailedbox">
        {lastdata.map((data)=>(
        <div className="container" key={data.id}>
        <div className="con-detaile" >
          <div className="box-title"><h5>Recent query</h5></div>
          <div className="description2"><h4>{`QN${data.id} - ${data.queTitle}`}</h4></div>
          <div className="assigned2"><h5 >Assigned</h5></div>
          <div className="box-created">Created at:<br/><span className="inner-line">{data.date}</span></div>
          <div className="box-des">Description:<br/><span className="inner-line">{data.quDescription}</span></div>
          <div className="box-assig">Assigned to:{}</div>
          <div className="box-attach">Attachments:<img alt=""></img></div>
          <div className="but2"><button className="query-btn2" onClick={() => {
            specificdata(data);
            navigate('/useform');
          }}>Go to query</button></div>
          </div>
        </div>
        ))}
        </div> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
