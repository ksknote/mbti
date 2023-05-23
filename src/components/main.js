import { useNavigate } from "react-router-dom";

function Main(props) {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/testpage");
          props.setEI(0);
          props.setSN(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        시작
      </button>
    </div>
  );
}

export default Main;
