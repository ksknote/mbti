import { useNavigate } from "react-router-dom";

function Resultpage(props) {
  let data = {
    ENTP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ENTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ENFP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ENFJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESFP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ESFJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    INTP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    INTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    INFP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    INFJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ISTP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ISTJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ISFP: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
    ISFJ: { title: "짱쏀ESTJ", cont: "ESTJ는 아주 강합니다." },
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
