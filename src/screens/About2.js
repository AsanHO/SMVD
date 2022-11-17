import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Category = styled.div`
  width: 60%;
  margin-left: 10%;
`;

const pstyle = {
  lineHeight: "30pt",
  fontSize: "12pt",
  zIndex: "10",
};

const pestyle = {
  fontSize: "14pt",
  fontWeight: "bold",
  float: "right",
  verticalAlign: "center",
  marginTop: "5.5%",
};

const Mpstyle = {
  lineHeight: "20pt",
  fontSize: "9pt",
  zIndex: "10",
};

const Mpestyle = {
  fontSize: "10pt",
  fontWeight: "bold",
  float: "right",
  verticalAlign: "center",
  marginTop: "3%",
};

const Box = styled.div`
  justify-content: center;
  margin: 10% 10% 25% 10%;
`;
const tstyle = {
  fontWeight: "bold",
  fontSize: "19pt",
};

const testyle = {
  color: "gray",
  marginBottom: "5%",
};

const Mtstyle = {
  fontWeight: "bold",
  fontSize: "12pt",
};

const Mtestyle = {
  color: "gray",
  marginBottom: "5%",
  fontSize: "10pt",
};

const ImgBox = styled.div`
  display: flex;
  width: 70%;
  max-width: 100%;
`;

const About2 = () => {
  return (
    <>
      <Desktop>
        <Container>
          <Box>
            <div id="title">
              <p style={tstyle}>축사</p>
              <p style={testyle}>Congratulatory Message</p>
            </div>
            <img
              src="ABOUT_graphic_1.png"
              style={{
                position: "absolute",
                float: "right",
                marginLeft: "41%",
                marginTop: "-20%",
                width: "50%",
                overflow: "hidden",
                zIndex: "-1",
              }}
            ></img>
            <p style={pstyle}>
              제 12회 졸업 전시회 개최에 진심으로 축하의 말씀을 드립니다.
            </p>
            <br></br>
            <p style={pstyle}>
              희망찬 2022년도를 맞이하여 지난 4년 동안 열심히 갈고 닦은
              보람으로, 오늘 영예의 졸업장을 받게 된 졸업생 여러분에게 진심으로
              축하를 보내며, 모두의 앞날에 희망찬 전진과 발전과 도약이 있기를
              간절히 기원합니다. 앞으로 여러분이 맞이하게 될 새로운 시대에는 그
              누구도 수 년 앞을 정확히 예측하기 힘들어질 것 입니다. 그러나
              이러한 변화의 파도를 헤치며 나아가는 여러분에 무엇보다 필요한 것은
              대학에서 갈고 닦은 실력과 학업에 대한 열정입니다. 어제의 전문
              영역이 오늘의 상식이 되고, 상상에 머무르던 일이 현실이 되는
              시대입니다. 이러한 변화의 시기에도 대학에서 배운 전공의 기초는
              새로운 지식을 받아들일 수 있는 토대를 제공합니다.
            </p>
            <br></br>
            <p style={pstyle}>
              또한, 대학생활을 통해 다져진 학습 태도를 바탕으로 평생 학습에 대한
              열정을 더해 본인의 역량을 계발한다면 여러분은 직업을 통한
              자아실현의 기반을 구축하고 발전시킬수 있을 것입니다. 이제
              여러분들은 새로운 아이디어와 번뜩이는 독창성으로 무장하고 변화에
              맞서는 용감함이 필요한 때입니다. '누구처럼'이 아니라 '누구보다
              다른' 선문인이 되십시오. 인생의 빛나는 젊음을 이곳 선문대학교에서
              불태운 것이 여러분 앞날에 커다란 축복이 될 것을 의심치 않으면서,
              이제 이곳 선문대학교를 떠나는 여러분들에게 축하와 격려의 말씀을
              전합니다. 이번 졸업전시회 주제인 스펙트럼처럼 많은 경험을 통해 더
              넓고 깊은 세계로 나갈 수 있기를 바라며 다시 한 번 여러분의 앞날이
              순조롭고 영광스럽기를 진심으로 기원합니다.
            </p>
            <br></br>
            <p style={pstyle}>
              졸업생 모든 분들께 건강과 행운이 늘 함께하기를 바랍니다.
              감사합니다.
            </p>
            <br></br>
            <div>
              <img
                src="hwang.png"
                style={{ width: "30%", float: "right", zIndex: "-1" }}
              ></img>
              <p style={pestyle}>선문대학교 총장 황선조 </p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p style={tstyle}>격려사</p>
              <p style={testyle}>Words of Encouragement</p>
            </div>
            <p style={pstyle}>
              결실을 맺고 새롭게 거듭나게 될 여러분들을 응원합니다
            </p>
            <br></br>
            <p style={pstyle}>
              제12회 시각디자인학과 졸업전시회를 진심으로 축하드리며 여러분의
              창작 활동에 진심으로 경의를 표합니다. 2년만에 시각디자인학과가
              코로나 상황에도 불구하고 오프라인에서 실시할 수 있었습니다. 그렇게
              열심히 공부하고 활동을 했던 결과를 하나의 작품으로 표현하여
              형상화한다고 하니 얼마나 기쁘고 뿌듯하겠습니까. 그동안 여러분이
              우수한 수상 실적을 거두고 있는 성과를 들으며 학과 교수님들과
              학생들의 열정적으로 최선을 다하는 모습에 전부터 감동어린 찬사를
              보내드리고 싶었습니다. 디자인이란 단순히 상품이나 서비스를
              미적이고 기능적으로 개발하는데 그치는 것이 아니라 차원 높은
              생활문화를 리드하며, 문화를 창조해가는 과정이라고 생각합니다.
              여러분이 선문대학교에서 4년동안 노력해왔던 것은 한 사람 한 사람의
              일생에서 소중한 추억과 경쟁력 있는 능력 함양의 좋은 기회가
              되었으리라 믿습니다.
            </p>
            <br></br>
            <p style={pstyle}>
              여러분, 앞으로 과정 속에서 힘들 일이 있더라도 내가 체험하는 것들이
              나만이 할 수 있는 경쟁력을 만드는 것입니다. 매일 나를 새로운
              환경에 노출시키세요. 마지막으로 세상에서 큰 날개 짓을 할 프로
              디자이너가 될 수 있도록 응원하겠습니다. 오늘의 결과가 있기까지
              정성으로 지도해 주신 교수님들의 노고에 진심으로 감사드리며
              여러분의 졸업전시회를 다시 한 번 축하합니다.
            </p>
            <br></br>
            <p style={pstyle}>
              늘 여러분의 앞날에 무궁한 발전이 있기를 기원합니다.
            </p>
            <br></br>
            <div>
              <img
                src="woo.png"
                style={{ width: "30%", float: "right", zIndex: "-1" }}
              ></img>
              <p style={pestyle}>선문대학교 인문사회대학 학장 우인혜 </p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p style={tstyle}>학과장 인사말</p>
              <p style={testyle}>Greetings from Profesor</p>
            </div>
            <p style={pstyle}>
              다양한 색으로 물든 우리만의 스펙트럼을 찾아가자
            </p>
            <br></br>
            <p style={pstyle}>
              서로 다른 모습을 알아가며, 생각의 다양성과 표현의 합리성을 배우고
              이를 시각기반의 디자인 원리와 표현을 통해 유연한 시각정보를
              생산하고, 다양한 미디어를 통해 전달하며 사람들을 시각 언어 논리로
              설득하는 것.이것이 우리 시각디자이너의 모습입니다.우리 디자인은
              서로 각자의 색깔을 여러 세월에 걸쳐 다듬어가며 꽃피웠습니다.이
              세상에는 어느 누구 하나 똑같은 사람이 없습니다.생각도 다르고
              행동도 다릅니다.그렇기에 우리는 나와는 다른 색깔과 섞일 수 있었고
              후에 이 모든 것들이 자연스럽게 어우러져 스펙트럼처럼 다양한 색이
              섞여 있으면서도 각자 다른 고유한 빛을 발하게 됐습니다. 우린 이렇게
              성장한 모습을 꾸밈없이 보여주고 행복과 감동을 선사하는 일을
              연구해왔습니다. 이 졸업전시회가 바로 그 결과물입니다. 이제는
              졸업입니다. 지난 4년간 여러분은 많은 디자인에 대한 정보와
              지식,그에 대한 안목을 키워왔고 많은 날들을 지새우며 디자인에 대한
              감각과 센스를 키워왔습니다.
            </p>
            <br></br>
            <p style={pstyle}>
              각자의 꿈에 대한 여러분의 뜨거운 열정이 있으므로 이제 모든 것이
              가능해질 겁니다. 앞으로 여러분은 창조적이며 색다른 디자인 창출을
              위한 일,세상사람 모두에게 즐거움을 여러 디자인 매체로 널리
              알려주는일,이제껏 없었던 새로움을 일깨워주는 일,소비자에게 감동을
              느끼게 하고 멋과 향기를 도취시키는 디자인을 변화를 통하여
              개발하여야 합니다. 시각디자인 졸업과정을 이수한 자랑스러운
              학생들.여러분은 졸업작품 과정을 통해 디자인의 새로운 기준을
              만들었습니다.하지만 졸업은 끝이 아니라 또다른 시작입니다.이제
              앞으로도 끊임없는 개발과 연구로 기준을 바꾸고 개척해나가야 합니다.
            </p>
            <br></br>
            <p style={pstyle}>
              작품전을 진심으로 축하드리며 졸업작품전을 준비해온 모든 학생들에게
              기쁨과 행복이 가득하길 바라고 자신의 꿈을 이루기위해 어떤 분야들
              날개를 활짝펼치고 비상할 여러분의 앞길을 축복하고 기대합니다.
            </p>
            <br></br>
            <div style={{ marginRight: "-10%" }}>
              <img
                src="sign1.png"
                style={{ width: "30%", float: "right", zIndex: "-1" }}
              ></img>
              <p style={pestyle}>선문대학교 시각디자인학과 학과장 장훈종</p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p id="title" style={tstyle}>
                교수 소개
              </p>
              <p style={testyle}>Introduction of the professor</p>
            </div>
            <img
              src="ABOUT_left_graphic_2.png"
              style={{
                position: "absolute",
                marginTop: "-10%",
                marginLeft: "-20%",
                width: "50%",
                float: "left",
                zIndex: "-1",
              }}
            ></img>
            <ImgBox>
              <div style={{ marginRight: "3%" }}>
                <img src="sign1.png"></img>
                <p style={{ textAlign: "center" }}>Professor</p>
                <p style={{ textAlign: "center" }}>Hun jong Jang</p>
              </div>
              <div style={{ marginRight: "5%" }}>
                <img src="sign2.png" style={{ marginBottom: "4px" }}></img>
                <p style={{ textAlign: "center" }}>Professor</p>
                <p style={{ textAlign: "center" }}>Yeon hwa Seo</p>
              </div>
              <div style={{ marginRight: "5%" }}>
                <img src="sign3.png" style={{ marginBottom: "16px" }}></img>
                <p style={{ textAlign: "center" }}>Professor</p>
                <p style={{ textAlign: "center" }}>Jae min Na</p>
              </div>
              <div>
                <img src="sign4.png" style={{ marginBottom: "42px" }}></img>
                <p style={{ textAlign: "center" }}>Professor</p>
                <p style={{ textAlign: "center" }}>Ha na Lee</p>
              </div>
            </ImgBox>
          </Box>
        </Container>
      </Desktop>

      <Mobile>
        <Container>
          <Category>
            <Link
              to="/about1"
              id="category"
              style={{ color: "darkgray", marginRight: "5%", fontSize: "10pt" }}
            >
              전시소개
            </Link>
            <Link
              to="/about2"
              id="category"
              style={{ marginRight: "5%", fontSize: "10pt" }}
            >
              축사 & 교수진
            </Link>
            <Link
              to="/about3"
              id="category"
              style={{ color: "darkgray", fontSize: "10pt" }}
            >
              학과소개
            </Link>
          </Category>
          <Box>
            <div id="title">
              <p style={Mtstyle}>축사</p>
              <p style={Mtestyle}>Congratulatory Message</p>
            </div>
            <img
              src="ABOUT_graphic_1.png"
              style={{
                position: "absolute",
                float: "right",
                marginLeft: "47%",
                marginTop: "-20%",
                width: "45%",
                overflow: "hidden",
                zIndex: "-1",
              }}
            ></img>
            <p style={Mpstyle}>
              제 12회 졸업 전시회 개최에 진심으로 축하의 말씀을 드립니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              희망찬 2022년도를 맞이하여 지난 4년 동안 열심히 갈고 닦은
              보람으로, 오늘 영예의 졸업장을 받게 된 졸업생 여러분에게 진심으로
              축하를 보내며, 모두의 앞날에 희망찬 전진과 발전과 도약이 있기를
              간절히 기원합니다. 앞으로 여러분이 맞이하게 될 새로운 시대에는 그
              누구도 수 년 앞을 정확히 예측하기 힘들어질 것 입니다. 그러나
              이러한 변화의 파도를 헤치며 나아가는 여러분에 무엇보다 필요한 것은
              대학에서 갈고 닦은 실력과 학업에 대한 열정입니다. 어제의 전문
              영역이 오늘의 상식이 되고, 상상에 머무르던 일이 현실이 되는
              시대입니다. 이러한 변화의 시기에도 대학에서 배운 전공의 기초는
              새로운 지식을 받아들일 수 있는 토대를 제공합니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              또한, 대학생활을 통해 다져진 학습 태도를 바탕으로 평생 학습에 대한
              열정을 더해 본인의 역량을 계발한다면 여러분은 직업을 통한
              자아실현의 기반을 구축하고 발전시킬수 있을 것입니다. 이제
              여러분들은 새로운 아이디어와 번뜩이는 독창성으로 무장하고 변화에
              맞서는 용감함이 필요한 때입니다. '누구처럼'이 아니라 '누구보다
              다른' 선문인이 되십시오. 인생의 빛나는 젊음을 이곳 선문대학교에서
              불태운 것이 여러분 앞날에 커다란 축복이 될 것을 의심치 않으면서,
              이제 이곳 선문대학교를 떠나는 여러분들에게 축하와 격려의 말씀을
              전합니다. 이번 졸업전시회 주제인 스펙트럼처럼 많은 경험을 통해 더
              넓고 깊은 세계로 나갈 수 있기를 바라며 다시 한 번 여러분의 앞날이
              순조롭고 영광스럽기를 진심으로 기원합니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              졸업생 모든 분들께 건강과 행운이 늘 함께하기를 바랍니다.
              감사합니다.
            </p>
            <br></br>
            <div>
              <img
                src="hwang.png"
                style={{
                  width: "20%",
                  float: "right",
                  zIndex: "-1",
                  marginLeft: "5%",
                }}
              ></img>
              <p style={Mpestyle}>선문대학교 총장 황선조 </p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p style={Mtstyle}>격려사</p>
              <p style={Mtestyle}>Words of Encouragement</p>
            </div>
            <p style={Mpstyle}>
              결실을 맺고 새롭게 거듭나게 될 여러분들을 응원합니다
            </p>
            <br></br>
            <p style={Mpstyle}>
              제12회 시각디자인학과 졸업전시회를 진심으로 축하드리며 여러분의
              창작 활동에 진심으로 경의를 표합니다. 2년만에 시각디자인학과가
              코로나 상황에도 불구하고 오프라인에서 실시할 수 있었습니다. 그렇게
              열심히 공부하고 활동을 했던 결과를 하나의 작품으로 표현하여
              형상화한다고 하니 얼마나 기쁘고 뿌듯하겠습니까. 그동안 여러분이
              우수한 수상 실적을 거두고 있는 성과를 들으며 학과 교수님들과
              학생들의 열정적으로 최선을 다하는 모습에 전부터 감동어린 찬사를
              보내드리고 싶었습니다. 디자인이란 단순히 상품이나 서비스를
              미적이고 기능적으로 개발하는데 그치는 것이 아니라 차원 높은
              생활문화를 리드하며, 문화를 창조해가는 과정이라고 생각합니다.
              여러분이 선문대학교에서 4년동안 노력해왔던 것은 한 사람 한 사람의
              일생에서 소중한 추억과 경쟁력 있는 능력 함양의 좋은 기회가
              되었으리라 믿습니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              여러분, 앞으로 과정 속에서 힘들 일이 있더라도 내가 체험하는 것들이
              나만이 할 수 있는 경쟁력을 만드는 것입니다. 매일 나를 새로운
              환경에 노출시키세요. 마지막으로 세상에서 큰 날개 짓을 할 프로
              디자이너가 될 수 있도록 응원하겠습니다. 오늘의 결과가 있기까지
              정성으로 지도해 주신 교수님들의 노고에 진심으로 감사드리며
              여러분의 졸업전시회를 다시 한 번 축하합니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              늘 여러분의 앞날에 무궁한 발전이 있기를 기원합니다.
            </p>
            <br></br>
            <div>
              <img
                src="woo.png"
                style={{ width: "20%", float: "right", zIndex: "-1" }}
              ></img>
              <p style={Mpestyle}>선문대학교 인문사회대학 학장 우인혜 </p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p style={Mtstyle}>학과장 인사말</p>
              <p style={Mtestyle}>Greetings from Profesor</p>
            </div>
            <p style={Mpstyle}>
              다양한 색으로 물든 우리만의 스펙트럼을 찾아가자
            </p>
            <br></br>
            <p style={Mpstyle}>
              서로 다른 모습을 알아가며, 생각의 다양성과 표현의 합리성을 배우고
              이를 시각기반의 디자인 원리와 표현을 통해 유연한 시각정보를
              생산하고, 다양한 미디어를 통해 전달하며 사람들을 시각 언어 논리로
              설득하는 것.이것이 우리 시각디자이너의 모습입니다.우리 디자인은
              서로 각자의 색깔을 여러 세월에 걸쳐 다듬어가며 꽃피웠습니다.이
              세상에는 어느 누구 하나 똑같은 사람이 없습니다.생각도 다르고
              행동도 다릅니다.그렇기에 우리는 나와는 다른 색깔과 섞일 수 있었고
              후에 이 모든 것들이 자연스럽게 어우러져 스펙트럼처럼 다양한 색이
              섞여 있으면서도 각자 다른 고유한 빛을 발하게 됐습니다. 우린 이렇게
              성장한 모습을 꾸밈없이 보여주고 행복과 감동을 선사하는 일을
              연구해왔습니다. 이 졸업전시회가 바로 그 결과물입니다. 이제는
              졸업입니다. 지난 4년간 여러분은 많은 디자인에 대한 정보와
              지식,그에 대한 안목을 키워왔고 많은 날들을 지새우며 디자인에 대한
              감각과 센스를 키워왔습니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              각자의 꿈에 대한 여러분의 뜨거운 열정이 있으므로 이제 모든 것이
              가능해질 겁니다. 앞으로 여러분은 창조적이며 색다른 디자인 창출을
              위한 일,세상사람 모두에게 즐거움을 여러 디자인 매체로 널리
              알려주는일,이제껏 없었던 새로움을 일깨워주는 일,소비자에게 감동을
              느끼게 하고 멋과 향기를 도취시키는 디자인을 변화를 통하여
              개발하여야 합니다. 시각디자인 졸업과정을 이수한 자랑스러운
              학생들.여러분은 졸업작품 과정을 통해 디자인의 새로운 기준을
              만들었습니다.하지만 졸업은 끝이 아니라 또다른 시작입니다.이제
              앞으로도 끊임없는 개발과 연구로 기준을 바꾸고 개척해나가야 합니다.
            </p>
            <br></br>
            <p style={Mpstyle}>
              작품전을 진심으로 축하드리며 졸업작품전을 준비해온 모든 학생들에게
              기쁨과 행복이 가득하길 바라고 자신의 꿈을 이루기위해 어떤 분야들
              날개를 활짝펼치고 비상할 여러분의 앞길을 축복하고 기대합니다.
            </p>
            <br></br>
            <div style={{ marginRight: "-10%" }}>
              <img
                src="sign1.png"
                style={{ width: "20%", float: "right", zIndex: "-1" }}
              ></img>
              <p style={Mpestyle}>선문대학교 시각디자인학과 학과장 장훈종 </p>
            </div>
          </Box>
          <Box>
            <div id="title">
              <p id="title" style={Mtstyle}>
                교수 소개
              </p>
              <p style={Mtestyle}>Introduction of the professor</p>
            </div>
            <img
              src="ABOUT_left_graphic_2.png"
              style={{
                position: "absolute",
                marginTop: "-10%",
                marginLeft: "-20%",
                width: "40%",
                float: "left",
                zIndex: "-1",
              }}
            ></img>
            <ImgBox>
              <div style={{ marginRight: "13%" }}>
                <img src="sign1.png" style={{ width: "150%" }}></img>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Professor
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Hun jong Jang
                </p>
              </div>
              <div style={{ marginRight: "10%" }}>
                <img
                  src="sign2.png"
                  style={{ width: "130%", marginTop: "-8%" }}
                ></img>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "110%",
                    fontSize: "9pt",
                  }}
                >
                  Professor
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "110%",
                    fontSize: "9pt",
                  }}
                >
                  Yeon hwa Seo
                </p>
              </div>
              <div style={{ marginRight: "15%" }}>
                <img
                  src="sign3.png"
                  style={{
                    width: "140%",
                    marginTop: "-5%",
                    marginBottom: "11%",
                  }}
                ></img>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Professor
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Jae min Na
                </p>
              </div>
              <div>
                <img
                  src="sign4.png"
                  style={{ width: "150%", marginBottom: "20%" }}
                ></img>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Professor
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "20%",
                    width: "100%",
                    fontSize: "9pt",
                  }}
                >
                  Ha na Lee
                </p>
              </div>
            </ImgBox>
          </Box>
        </Container>
      </Mobile>
    </>
  );
};
export default About2;
