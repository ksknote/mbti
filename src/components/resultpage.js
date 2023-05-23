import { useNavigate } from "react-router-dom";

function Resultpage(props) {
  let data = {
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
  };

  let navigate = useNavigate();
  return (
    <div>
      <div>{data[props.MBTI].title};</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        다시하기
      </button>
    </div>
  );
}

export default Resultpage;
