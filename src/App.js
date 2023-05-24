import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./components/main";
import Testpage from "./components/testpage";
import Resultpage from "./components/resultpage";

function App() {
  const [EI, setEI] = useState(0);
  const [SN, setSN] = useState(0);
  const [TF, setTF] = useState(0);
  const [JP, setJP] = useState(0);
  let [datas, setDatas] = useState("");
  let [MBTI, setMBTI] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    let data = [];

    EI > 0 ? data.push("E") : data.push("I");
    SN > 0 ? data.push("S") : data.push("N");
    TF > 0 ? data.push("T") : data.push("F");
    JP > 0 ? data.push("J") : data.push("P");

    setDatas(data.join(""));
    setMBTI(datas);
  }, [EI, SN, TF, JP, datas]);

  useEffect(() => {
    let data = [];
    if (EI > 0) {
      data.push("E");
    } else if (EI < 0) {
      data.push("I");
    }
    if (SN > 0) {
      data.push("S");
    } else {
      data.push("N");
    }
    if (TF > 0) {
      data.push("T");
    } else {
      data.push("F");
    }
    if (JP > 0) {
      data.push("J");
    } else {
      data.push("P");
    }
    setDatas(data.join(""));
    setMBTI(datas);
  }, [EI, SN, TF, JP, datas]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
              username={username}
              setUsername={setUsername}
            />
          }
        ></Route>
        <Route
          path="/testpage"
          element={
            <Testpage
              EI={EI}
              SN={SN}
              TF={TF}
              JP={JP}
              setEI={setEI}
              setSN={setSN}
              setTF={setTF}
              setJP={setJP}
            />
          }
        ></Route>
        <Route
          path="/resultpage"
          element={<Resultpage MBTI={MBTI} username={username} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
