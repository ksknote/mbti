import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/main.css";
import mainPic from "./style/img/main-pic.jpeg";

function Main(props) {
  let navigate = useNavigate();
  let [showSmall, setShowSmall] = useState(false);
  const validateNickName = () => {
    if (props.username.length === 0) {
      setShowSmall(true);
    } else {
      navigate("/testpage");
      props.setEI(0);
      props.setSN(0);
      props.setTF(0);
      props.setJP(0);
    }
  };

  return (
    <div className="body">
      <div className="root">
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
            <div className="input-wrap">
              <input
                type="text"
                value={props.username}
                placeholder="별명을 입력해주세요."
                onChange={(e) => {
                  props.setUsername(e.target.value);
                  console.log(props.username);
                }}
              />
            </div>
            {showSmall && <small>별명을 입력해주세요.</small>}

            <div className="btn-container">
              <button
                className="main-btn"
                onClick={() => {
                  validateNickName();
                }}
              >
                <p>테스트 시작하기</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
