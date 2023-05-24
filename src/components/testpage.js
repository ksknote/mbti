import "./style/testpage.css";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Testpage(props) {
  let navigate = useNavigate();
  let [num, setNum] = useState(1);
  let [data] = useState({
    1: {
      ques: "주말이 되었다.\n소중한 주말을 어떻게 보내볼까?",
      ans1: "나가자! 집에만 있기에는 주말이 아까워",
      ans2: "포근한 침대에서 여유를 만끽해야지!",
    },
    2: {
      ques: "자주 가는 단골 식당에 갔다.",
      ans1: "사장님 저 또 왔어요~~",
      ans2: "내가 너무 자주 오나 ..? 뭔가 민망하다",
    },
    3: {
      ques: "다 놀고 집에 돌아가는 길이다.",
      ans1: "오늘 너무 알찼다! 재밌었당 !!",
      ans2: "휴 드디어 집에간다. 재밌긴 했는데 그래도 집이 최고야",
    },
    4: {
      ques: "오늘 꿈에서 술 먹고 있는데\n두꺼비가 술집에 들어왔다.",
      ans1: "두꺼비가 술집에 왜 들어가",
      ans2: "두꺼비는 진로 마시려나 ..?",
    },
    5: {
      ques: "멍 때리고 있는데 친구가 말을 걸어온다.\n“너 뭐해 ?”",
      ans1: "응? (꼬리에 꼬리를 무는 잡생각으로 현실을 잊었다.)",
      ans2: "응? (진짜 아무 생각 안하는 중)",
    },
    6: {
      ques: "노래를 듣는데 멜로디가 좋다.",
      ans1: "저장!",
      ans2: "멜로디가 좋네? 가사에 집중해본다.",
    },
    7: {
      ques: "친구가 “나 꿈에서 손톱이 빠졌어.\n진짜 너무 아팠어ㅠㅠㅠ” 라고 한다면? ",
      ans1: "꿈인데 왜 아파? 흉몽인가?",
      ans2: "헐ㅠㅠ 손톱이 빠졌다고 ? 으으 상상만해도 아파",
    },
    8: {
      ques: "친구가\n“오늘 기분 별론데 카페 가자 내가 살게”\n라고 한다면?",
      ans1: "콜. 어디 카페?",
      ans2: "무슨 일 있어?",
    },
    9: {
      ques: "친구가 약속 시간에 많이 늦었다.\n내가 원하는 친구의 반응은?",
      ans1: "왜 늦었는지 구체적으로 납득 가능하게 설명",
      ans2: "늦어서 미안하다고 사과 먼저!",
    },
    10: {
      ques: "지금 나는 해야할 일이 있다.",
      ans1: "바로 하던지 어떻게 할 지 계획을 세운다.",
      ans2: "굳이 지금 해야할지 생각해본다.",
    },
    11: {
      ques: "친구가 갑자기 약속을 취소했다.",
      ans1: "뭐야 미리 말해주지",
      ans2: "오히려 좋아!",
    },
    12: {
      ques: "친한 친구의 생일이 다가오고 있다.",
      ans1: "뭐 살지 생각 다 해놨다. 미리 주문해야지!",
      ans2: "뭐사지?",
    },
  });

  return (
    <div className="container">
      <hr />
      <QuestionIdx className="que-idx" idx={num}>
        {num}
      </QuestionIdx>
      <h1 className="que">{data[num].ques}</h1>
      <button
        className="test-btn"
        onClick={() => {
          setNum((num) => num + 1);
          if (num <= 3) {
            props.setEI(props.EI + 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN + 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF + 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP + 1);
          }
          if (num === 12) {
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans1}
      </button>
      <button
        className="test-btn"
        onClick={() => {
          setNum((num) => num + 1);
          if (num <= 3) {
            props.setEI(props.EI - 1);
          } else if (num >= 4 && num <= 6) {
            props.setSN(props.SN - 1);
          } else if (num >= 7 && num <= 9) {
            props.setTF(props.TF - 1);
          } else if (num >= 10 && num <= 12) {
            props.setJP(props.JP - 1);
          }
          if (num === 12) {
            navigate("/resultpage");
          }
        }}
      >
        {data[num].ans2}
      </button>
    </div>
  );
}

export default Testpage;

const QuestionIdx = styled.div`
  left: ${(props) => (400 * (props.idx - 1)) / 12}px;
`;
