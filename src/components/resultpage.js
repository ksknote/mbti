import { useNavigate } from "react-router-dom";
import "./style/resultpage.css";
import html2canvas from "html2canvas";

import ENTP from "./style/img/ENTP.jpg";
import ENTJ from "./style/img/ENTJ.jpg";
import ENFP from "./style/img/ENFP.jpg";
import ENFJ from "./style/img/ENFJ.jpg";
import ESTP from "./style/img/ESTP.jpg";
import ESTJ from "./style/img/ESTJ.jpg";
import ESFP from "./style/img/ESFP.jpg";
import ESFJ from "./style/img/ESFJ.jpg";
import INTP from "./style/img/INTP.jpg";
import INTJ from "./style/img/INTJ.jpg";
import INFP from "./style/img/INFP.jpg";
import INFJ from "./style/img/INFJ.jpg";
import ISTP from "./style/img/ISTP.jpg";
import ISTJ from "./style/img/ISTJ.jpg";
import ISFP from "./style/img/ISFP.jpg";
import ISFJ from "./style/img/ISFJ.jpg";
import linkIcon from "./style/img/link-icon.png";

function clip() {
  // var url = "";
  var textarea = document.createElement("textarea");

  document.body.appendChild(textarea);
  // url = window.document.location.href;
  textarea.value = "https://mongry-mbti.netlify.app/";
  textarea.select(); //textarea를 설정
  console.log("텍스트에리아 선택완료!");
  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("URL이 복사되었습니다.");
}

const onCapture = () => {
  console.log("onCapture");
  html2canvas(document.querySelector("#result-container")).then((canvas) => {
    onSaveAs(canvas.toDataURL(), "image-download.png");
  });
};

const onSaveAs = (uri, name) => {
  console.log("onSaveAs");
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
};

function Resultpage(props) {
  let data = {
    ENFP: {
      title: "인생 한방을 외치는 해맑은 햄찌",
      cont: [
        "모두가 행복했으면 좋겠어",
        "관심 받는 거 좋아!",
        "하고 싶은 것도 많아!",
        "가끔은 고독하고 허무해질 때도 있어..아주 가끔?",
        "내 충동구매 누가 좀 말려줘..아니 말리지마",
        "나름 비상한 두뇌를 갖고있어. 벼락치기 전문이야!",
      ],
      img: ENFP,
    },
    ENFJ: {
      title: "열정왕 당당도치",
      cont: [
        "붙임성이 좋고 사교적이야!",
        "귀가 살짝 팔랑이는 편?",
        "인싸 같다는 말을 종종 들어!",
        "퍼주는 걸 좋아하는 게 아니라 정이 많은 거야",
        "해피 바이러스를 전파하고 다녀",
        "대범하지만 은근 상처를 잘받아. 나한테 뭐라 하지 마!",
        "세상이 평화로웠으면 좋겠어",
      ],
      img: ENFJ,
    },
    ENTJ: {
      title: "한다면 하는 강한 햄찌",
      cont: [
        "내 안목, 생각, 철학 모든 것에 자부심이 있어",
        "지는 경쟁은 하지 않아. 이길 거거든",
        "논리적으로 말해줬으면 좋겠어",
        "솔직하고 직설적이야. 할 말은 해야지?",
        "답답한 게 제일 참기 힘들어",
        "항상 언제나 그렇듯이 리더",
        "어려운 건 나를 더 자극시키지",
      ],
      img: ENTJ,
    },
    ESTP: {
      title: "내맘대로 자유분방 햄찌",
      cont: [
        "재미있는 게 최고야!",
        "생각하기 전에 행동하는 편",
        "사실 별 고민 없이 살아",
        "나는 영업을 해도 잘할 것 같아",
        "계획이 꼭 지키라고 있는 건 아니야",
        "솔직해! 뒷끝도 없어",
        "오늘 할일은 내일 하면 되지~",
      ],
      img: ESTP,
    },
    ESTJ: {
      title: "호불호가 확실한 고양이🐱",
      cont: [
        "나에게 소중한 사람에게는 누구보다 잘해",
        "나의 일과 중 계획에 없는 건 없어",
        "책임감이 강해! 일 못한다는 소리는 못들어봤어",
        "추진력이 강해 빠릿빠릿!",
        "게으른 사람 보면 이해가 안가",
        "공감 그거 어떻게 하는 건데..",
        "여유로우면 오히려 불안해",
      ],
      img: ESTJ,
    },
    ENTP: {
      title: "자신감 넘치는 야옹이",
      cont: [
        "나 자신을 사랑해",
        "팔방미냥이야. 이것 저것 다 잘해!",
        "끈기 부족한 편이야. 내가 제대로 마무리 한게 뭐더라 ...?",
        "나무보다는 숲을 보는 편이야",
        "관심 있는 것에 대해서는 빠삭하게 알고 있어",
        "관심 밖의 것들에는 몰라. 아니 그냥 몰라",
        "충동적인 편이야. 하지만 내 선택에 후회하지 않아!",
      ],
      img: ENTP,
    },
    ESFP: {
      title: "꼬리 헬리콥터 멍뭉이",
      cont: [
        "사실 내 머릿 속엔 꽃밭이 있어",
        "긍정적이야! 좋은 게 좋은 거니까~",
        "내 친구가 네 친구고, 네 친구가 내 친구야",
        "지루한 게 제일 힘들어..",
        "재치있고 유쾌해!",
        "서프라이즈 너무 좋아!!",
        "관대한 성격이야! 정이 많아서 사람을 좋아해!",
      ],
      img: ESFP,
    },
    ESFJ: {
      title: "마음이 따뜻한 야옹이",
      cont: [
        "내가 사랑하는 사람은 내가 챙긴다!",
        "예의 바르고 친절해!",
        "생각이 많은 편이야. 상처도 잘 받아",
        "다른 사람의 말을 잘 들어줘. 입 무거우니 걱정X",
        "다른 사람에게 맞춰주는 게 편해",
        "혼자 있으면 조금 답답해",
        "무관심에 상처받을 수도 있어 관심 줘!",
      ],
      img: ESFJ,
    },
    INTP: {
      title: "고독한 야옹이",
      cont: [
        "많이 게으른 편이야.. 그래도 한다면 해!",
        "어딘가 모르게 조금 특이해!",
        "혼자가 편해! 인간관계도 좁고 깊어",
        "스트레스 받는 게 제일 싫어! 시끄러운 것도 싫어",
        "나를 규정하고 평가하는 걸 싫어해",
        "연락을 잘 안해. 읽씹, 안읽씹도 잘해",
        "내 속마음은 잘 이야기 하지 않아",
      ],
      img: INTP,
    },
    INTJ: {
      title: "까칠한 햄찌",
      cont: [
        "냉정한 편이지만 속이 깊어!",
        "뭔가 사는 게 허무해",
        "입에 발린 말은 하지 않아",
        "다른 사람들과 적당히 거리를 두는 게 좋아",
        "용건이 없으면 굳이 연락하지 않아",
        "평소엔 조용한데 관심있는 분야에는 적극적이야",
        "히키코모리 같달까?",
      ],
      img: INTJ,
    },
    INFP: {
      title: "소심한 관종 고양이",
      cont: [
        "쿠크다스 멘탈이야.. 개복치 같달까?",
        "나만의 공간에서 온전히 편안함을 느껴",
        "생각이 많아! 머릿 속으로 영화 시나리오 뚝딱이야",
        "과한 관심은 부담스럽지만 아예 안주면 슬퍼",
        "착한 사람이 좋아 예쁘게 말하는 사람이 좋아!",
        "상대방의 말을 들을 때 내 경험을 떠올리며 몰입하고 공감해",
        "평범한 건 싫어 특별하고 싶어",
      ],
      img: INFP,
    },
    INFJ: {
      title: "꿈꾸는 사막여우",
      cont: [
        "생각이 많아! 그래서 혼자 생각 정리가 필요할 때도 종종 있어",
        "혼자 있는 걸 좋아해!",
        "무례한 사람을 보면 도리도리..",
        "계획 세우는 게 재밌어",
        "근거 없이 말하는 거 싫어해!",
        "관심 있는 사람이 있어도 먼저 다가와주길 바라고 표현은 잘 안해",
        "현실을 살지만 이상을 생각해",
        "모든 말과 행동이 신중해",
      ],
      img: INFJ,
    },
    ISTP: {
      title: "게으른데 똑똑한 고양이",
      cont: [
        "사람 많은 곳은 별로 안좋아해..",
        "생각은 짧고 굵게! 복잡하게 생각하는 건 싫어",
        "나만의 공간이 꼭 필요해!",
        "미루는 거 잘하는 편이야",
        "다른 사람한테 관심이 없어!",
        "영혼 없다는 말을 가끔 들어",
        "과한 감정표현은 조금 부담스러워",
      ],
      img: ISTP,
    },
    ISTJ: {
      title: "인생 n회차 고양이",
      cont: [
        "남에게 의지하지 않아! 누가 나에게 의지하는 것도 그닥..",
        "말보다 결과로 보여주는 타입이야",
        "뭐든 혼자 하는게 제일 편하고 빨라!",
        "의젓한 성격이라 첫째냐는 말을 많이 들어",
        "입에 발린 말 별로 안좋아해",
        "익숙한 게 좋아 늘 하던대로!",
        "약속 어기는 거 너무 싫어!",
      ],
      img: ISTJ,
    },
    ISFP: {
      title: "소파에 붙은 고양이",
      cont: [
        "그냥 귀찮아..",
        "관심 받기 싫어, 근데 관종이야",
        "사람 만나는 것도 좋은데 싫어!",
        "내 속마음을 잘 이야기 하지 않아",
        "발등이 불타고 있으면 그 때 할 일을 해",
        "칭찬 받으면 기분 너무 좋아 자기 전에도 생각나!",
        "딴 생각을 많이 해",
        "직설적이고, 확실한 표현보다는 우회적인 표현을 많이 써",
      ],
      img: ISFP,
    },
    ISFJ: {
      title: "짱쏀ESTJ",
      cont: [
        "다른 사람에게 상처주지 않도록 항상 생각하고 배려해!",
        "사람이 많을 땐 조용한데 일대일로 이야기하면 말을 잘해",
        "눈치가 빠른 편이야!",
        "거절을 잘 못해 부탁도 잘 못해",
        "잘난척 하는 사람 별로야!",
        "인간관계에서 상처를 받고 쌓아놓을 때가 많아",
        "남들 눈에는 어떨 지 모르지만 나는 내 인생이 재밌어!",
      ],
      img: ISFJ,
    },
  };
  console.log(data[props.MBTI].img);
  console.log(`data[props.MBTI].img.${props.MBTI}`);
  let navigate = useNavigate();

  let userMbti = props.MBTI;
  console.log(userMbti);
  return (
    <div className="wrap">
      <div className="container">
        <div id="result-container">
          <div className="user-name">{props.username}님은</div>
          <div className="mbti-title">{data[props.MBTI].title}</div>
          <img src={data[props.MBTI].img} alt="mbti-img" />
          <div className="description-container">
            <ul className="description">
              {data[props.MBTI].cont.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="result-btn retry"
          onClick={() => {
            navigate("/");
          }}
        >
          다시하기
        </button>

        <button
          href="#"
          id="sns_urlCoby"
          className="result-btn share"
          title="새창"
          onClick={(e) => {
            clip();
            return false;
          }}
        >
          <img className="link-icon" src={linkIcon} alt="linkIcon" />
          <p>이 테스트 공유하기</p>
        </button>
        <button className="result-btn download" onClick={() => onCapture()}>
          결과 이미지 다운로드
        </button>
      </div>
    </div>
  );
}

export default Resultpage;
