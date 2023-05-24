import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/main.css";
import mainPic from "./style/img/main-pic.jpeg";

function Main(props) {
  let navigate = useNavigate();
  const [participated, setParticipated] = useState(0);
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">
          <h1>
            나와 어울리는 <br />
            말풍선 짤 찾기!
          </h1>
          <p>말풍선 짤로 보는 내 성격</p>
        </div>

        <div>
          <img src={mainPic} alt="mainPic" />
        </div>
        <div className="btn-container">
          <button
            className="main-btn"
            onClick={() => {
              navigate("/testpage");
              props.setEI(0);
              props.setSN(0);
              props.setTF(0);
              props.setJP(0);

              setParticipated((cur) => cur + 1);
            }}
          >
            <p>테스트 시작하기</p>
            <p>총 {participated}명이 참여했어요!</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
