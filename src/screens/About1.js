import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { hover } from "@testing-library/user-event/dist/hover";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Category = styled.div`
  width: 50%;
  margin-left: 10%;
`;
const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-items: center;
`;

const Box = styled.div`
  margin: 10%;
`;

const GrayPart = styled.div`
  background-color: #f4f4f4;
  height: 80%;
  padding: 0.1px;
`;

const IntroGrid = styled.div`
  display: grid;
  line-height: 25pt;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  font-size: 12pt;
  justify-items: center;
  row-gap: 5%;
  column-gap: 10%;
`;

const MIntroGrid = styled.div`
  display: grid;
  line-height: 12pt;
  grid-template-columns: 1fr;
  grid-template-rows: 6 (1fr);
  font-size: 9pt;
  row-gap: 5%;
  column-gap: 10%;
`;

const OGrid = styled.div`
  display: grid;
  font-size: 12pt;
  line-height: 25pt;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10%;
  margin-bottom: 10%;
`;

const MOGrid = styled.div`
  display: grid;
  font-size: 9pt;
  line-height: 12pt;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10%;
  margin-bottom: 10%;
`;

const hstyle = {
  textAlign: "center",
  fontSize: "25pt",
  marginBottom: "10%",
  marginTop: "10%",
};

const Mhstyle = {
  textAlign: "center",
  fontSize: "15pt",
  marginBottom: "10%",
  marginTop: "20%",
};

const ImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

const img1 = {
  width: "210px",
  height: "40%",
  float: "left",
  marginTop: "5px",
};

const img2 = {
  width: "283px",
  height: "40%",
  float: "left",
};
const img3 = {
  width: "283px",
  height: "40%",
  float: "left",
};
const img4 = {
  width: "195px",
  height: "50%",
  float: "left",
};

const Mimg1 = {
  width: "67px",
  height: "40%",
  float: "left",
  marginTop: "1px",
};

const Mimg2 = {
  width: "90px",
  height: "40%",
  float: "left",
};
const Mimg3 = {
  width: "90px",
  height: "40%",
  float: "left",
};
const Mimg4 = {
  width: "61.5px",
  height: "50%",
  float: "left",
};

const NGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10%;
  text-align: center;
  margin-bottom: 10%;
`;

const NtGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  colum-gap: 10%;
`;

const dnstyle = {
  marginBottom: "5%",
  fontWeight: "bold",
  fontSize: "12pt",
};

const Mdnstyle = {
  marginBottom: "5%",
  fontWeight: "bold",
  fontSize: "9pt",
};

const nsstyle = {
  fontSize: "12pt",
  lineHeight: "25pt",
};

const Mnsstyle = {
  fontSize: "9pt",
  lineHeight: "12pt",
};

const Logoimg = {
  maxWidth: "50%",
  marginBottom: "8%",
  display: "inline",
};

const About1 = () => {
  return (
    <>
      <Desktop>
        <Container>
          <Box style={{ position: "relative" }}>
            <img src="logocolor.png" style={Logoimg}></img>
            <br></br>
            <img
              src="ABOUT_graphic_1.png"
              style={{
                position: "absolute",
                float: "right",
                marginLeft: "60%",
                marginTop: "10%",
                width: "55%",
                zIndex: "-1",
              }}
            ></img>
            <IntroGrid>
              <div style={{ gridColumn: "1", gridRow: "1" }}>
                *빛의 성분을 파장의 순서로 나열한 것<br></br>
                *빛을 각 성분으로 나누는 것을 '스펙트럼으로 분해한다'라고 표현
              </div>
              <div style={{ gridColumn: "1", gridRow: "2" }}>
                스펙트럼, 서로 다른 색의 색깔이 연속되어 넓게 퍼져 있습니다.
                서로 다른 빛의 색이 연속적으로 모여 퍼져있는 스펙트럼의 모습은
                4년간의 노력과 배움으로 통해 성장한 우리들의 모습과 유사합니다.
                각기 다른 색들이 한곳에 모여 다채로운 색으로 보이듯 이 우리는
                이곳에서 개인의 색을 보여주며 새로운 세상을 나아갈 준비를
                마쳤습니다. 세상과 연결하여 소통하고자 하는 디자이너로서 또 다른
                시작을 위해 이번 전시는 47가지의 색을 보여줍니다
              </div>
              <div style={{ gridColumn: "1", gridRow: "3" }}>
                새로운 세상에 다채로운 빛이 되어 나아갈 47명의 스펙트럼을
                소개합니다
              </div>
              <div style={{ gridColumn: "2", gridRow: "1" }}>
                *Arrangement of light components in order of wavelength<br></br>
                *Dividing light into its components is expressed as ‘decomposing
                it into a spectrum’.
              </div>
              <div style={{ gridColumn: "2", gridRow: "2" }}>
                Spectrum, colors of different colors are spread out continuously
                and widely. Different colors of light.The continuous spread of
                spectrum has grown through four years of hard work and learning
                It’s similar to what we look like. As different colors come
                together in one place, Here we are ready to move on to a new
                world by showing individual colors. As a designer who wants to
                connect and communicate with the world, this exhibition is a new
                beginning It shows 47 colors.
              </div>
              <div style={{ gridColumn: "2", gridRow: "3" }}>
                Introducing the 47 spectrum of people who will become colorful
                lights in a new world
              </div>
            </IntroGrid>
          </Box>
          <GrayPart>
            <Box>
              <div style={hstyle}>전시 로고</div>
              <OGrid>
                <div style={{ gridColum: "1" }}>
                  하나의 빛이 끊임없이 연결하여 다채로운 빛으로 나타내듯이
                  스펙트럼의 연결성을 상징적으로 나타내어 표현하였습니다.
                </div>
                <div style={{ gridColumn: "2" }}>
                  It symbolically represents the connectivity of the spectrum,
                  as one light is constantly connected and represented by
                  colorful light.
                </div>
              </OGrid>
              <img src="graypart_logo_c.jpeg" style={{ width: "100%" }}></img>
            </Box>
          </GrayPart>

          <Box>
            <div style={hstyle}>전시 포스터</div>
            <OGrid>
              <div style={{ gridColumn: "1", overflow: "hidden" }}>
                스펙트럼의 연속됨과 로고의 형태를 응용하여 제작하였습니다. 배경
                컬러는 다채로움과 배움의 성장을 밝은 컬러의 그라데이션으로
                표현하였습니다. 그래픽 의미는 라인과 면으로 우리들의 다양성을
                나타내었고 흐르는 듯한 반복성으로 여러 디자인 분야로 흘러
                진출한다는 의미를 담았습니다.
              </div>
              <div style={{ gridColumn: "2" }}>
                It was produced by applying the continuity of the spectrum and
                the shape of the logo. The background color is a bright color
                gradation for diversity and learning growth. expressed as The
                graphic meaning of the graduates with lines and planes It showed
                diversity and flowed into various design fields with
                repeatability. It contains the meaning of flowing in.
              </div>
            </OGrid>
          </Box>
          <ImgBox id="imgbox">
            <img src="l_poster.png" style={img1}></img>
            <img src="center_poster_l_c.png" style={img2}></img>
            <img src="center_poster_r_c.png" style={img3}></img>
            <img src="r_poster.png" style={img4}></img>
          </ImgBox>
          <Box style={{ position: "relative" }}>
            <img
              src="ABOUT_left_graphic_2.png"
              style={{
                position: "absolute",
                marginTop: "-10%",
                marginLeft: "-26%",
                width: "70%",
                float: "left",
              }}
            ></img>
            <div style={hstyle}>SMD 12th GRADUATION EXHIBITION</div>
            <div
              style={{
                textAlign: "center",
                width: "50%",
                fontSize: "12pt",
                marginLeft: "25%",
                lineHeight: "25pt",
                marginBottom: "8%",
              }}
            >
              제12회 졸업준비 위원회는 SPECTRUM의 전반적인 기획과 운영을 위해
              모인 위원회로서, 총 47명의 학생들로 구성되어 있습니다. 졸업준비
              위원회를 중심으로 모든 구성원들이 하나가 되어 SPECTRUM의 다채로운
              연결성을 위해 끊임없이 노력하고 있습니다. 함께를 통해 배우고
              성장하며, 다양한 디자인을 제작합니다
            </div>
            <div
              style={{
                width: "70%",
                textAlign: "center",
                marginLeft: "15%",
                marginBottom: "10%",
                fontSize: "12pt",
              }}
            >
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>
                졸업전시 위원장
              </span>{" "}
              <span style={{ marginRight: "4%" }}>장민혁</span>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>
                졸업전시 부위원장
              </span>{" "}
              <span style={{ marginRight: "4%" }}>노정은</span>
              <span style={{ fontWeight: "bold", marginRight: "2%" }}>
                총무&서기
              </span>{" "}
              <span style={{ marginRight: "4%" }}>강다혜 심우재</span>
            </div>
            <img
              src="ABOUT_right_graphic_3.png"
              style={{
                position: "absolute",
                marginLeft: "45%",
                width: "90%",
                float: "right",
                overflow: "hidden",
              }}
            ></img>
            <NGrid style={{ position: "relative" }}>
              <div style={{ gridColumn: "1" }}>
                <p style={dnstyle}>기획팀</p>
                <p style={nsstyle}>
                  김수연 | 곽승연 김세헌 김유림 김혜원 이태윤 이영주 최지은
                </p>
              </div>
              <line
                style={{
                  position: "absolute",
                  borderRight: "solid 30px 1px black",
                }}
              ></line>
              <div style={{ gridColumn: "2" }}>
                <p style={dnstyle}>디자인팀</p>
                <p style={nsstyle}>
                  추채원 | 김수빈 김하영 남민재 모하마디 모가담 록사나 신지수
                  심보레미 엄혜민 야오다 럭키 유연아 응웬반티엔 장문정 전정배
                  최가연 팜티탄로안
                </p>
              </div>
              <div style={{ gridColumn: "3" }}>
                <p style={dnstyle}>편집팀</p>
                <p style={nsstyle}>
                  윤은영 | 곽연우 김정희 박지윤 박청 유라현 응옌홍후 최유정
                  카와사키 키미코
                </p>
              </div>
            </NGrid>
            <NtGrid>
              <div
                style={{
                  gridColumn: "1",
                  alignContent: "center",
                  maxWidth: "50%",
                  marginLeft: "25%",
                }}
              >
                <p style={dnstyle}>영상팀</p>
                <p style={{ fontSize: "12pt", lineHeight: "25pt" }}>
                  이승민 | 옹가은 노연수 문영현 이의종 유리카 유문미 윤원실
                  토미다 히로키
                </p>
              </div>
              <div style={{ gridColumn: "2" }}>
                <p style={dnstyle}>웹디자인</p>
                <p style={nsstyle}>추채원 노정은</p>
              </div>
            </NtGrid>
          </Box>
        </Container>
      </Desktop>

      <Mobile>
        <Container>
          <Category>
            <Link
              to="/about1"
              id="category"
              style={{ marginRight: "5%", fontSize: "10pt" }}
            >
              전시소개
            </Link>
            <Link
              to="/about2"
              id="category"
              style={{ color: "darkgray", marginRight: "5%", fontSize: "10pt" }}
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
          <Box style={{ position: "relative" }}>
            <img src="logocolor.png" style={Logoimg}></img>
            <br></br>
            <img
              src="ABOUT_graphic_1.png"
              style={{
                position: "absolute",
                float: "right",
                marginLeft: "60%",
                width: "55%",
                zIndex: "-1",
              }}
            ></img>
            <MIntroGrid style={{ marginBottom: "40%" }}>
              <div style={{ gridColumn: "1", gridRow: "1" }}>
                *빛의 성분을 파장의 순서로 나열한 것<br></br>
                *빛을 각 성분으로 나누는 것을 '스펙트럼으로 분해한다'라고 표현
              </div>
              <div style={{ gridColumn: "1", gridRow: "3" }}>
                스펙트럼, 서로 다른 색의 색깔이 연속되어 넓게 퍼져 있습니다.
                서로 다른 빛의 색이 연속적으로 모여 퍼져있는 스펙트럼의 모습은
                4년간의 노력과 배움으로 통해 성장한 우리들의 모습과 유사합니다.
                각기 다른 색들이 한곳에 모여 다채로운 색으로 보이듯 이 우리는
                이곳에서 개인의 색을 보여주며 새로운 세상을 나아갈 준비를
                마쳤습니다. 세상과 연결하여 소통하고자 하는 디자이너로서 또 다른
                시작을 위해 이번 전시는 47가지의 색을 보여줍니다
              </div>
              <div style={{ gridColumn: "1", gridRow: "5" }}>
                새로운 세상에 다채로운 빛이 되어 나아갈 47명의 스펙트럼을
                소개합니다
              </div>
              <div style={{ gridColumn: "1", gridRow: "2" }}>
                *Arrangement of light components in order of wavelength<br></br>
                *Dividing light into its components is expressed as ‘decomposing
                it into a spectrum’.
              </div>
              <div style={{ gridColumn: "1", gridRow: "4" }}>
                Spectrum, colors of different colors are spread out continuously
                and widely. Different colors of light.The continuous spread of
                spectrum has grown through four years of hard work and learning
                It’s similar to what we look like. As different colors come
                together in one place, Here we are ready to move on to a new
                world by showing individual colors. As a designer who wants to
                connect and communicate with the world, this exhibition is a new
                beginning It shows 47 colors.
              </div>
              <div style={{ gridColumn: "1", gridRow: "6" }}>
                Introducing the 47 spectrum of people who will become colorful
                lights in a new world
              </div>
            </MIntroGrid>
          </Box>
          <GrayPart>
            <Box>
              <div style={Mhstyle}>전시 로고</div>
              <MOGrid>
                <div
                  style={{
                    gridRow: "1",
                    fontSize: "9pt",
                    lineHeight: "20pt",
                  }}
                >
                  하나의 빛이 끊임없이 연결하여 다채로운 빛으로 나타내듯이
                  스펙트럼의 연결성을 상징적으로 나타내어 표현하였습니다.
                </div>
                <div
                  style={{
                    gridRow: "2",
                    fontSize: "9pt",
                    lineHeight: "20pt",
                  }}
                >
                  It symbolically represents the connectivity of the spectrum,
                  as one light is constantly connected and represented by
                  colorful light.
                </div>
              </MOGrid>
              <img src="graypart_logo_c.jpeg" style={{ width: "100%" }}></img>
            </Box>
          </GrayPart>

          <Box>
            <div style={Mhstyle}>전시 포스터</div>
            <MOGrid>
              <div
                style={{
                  gridRow: "1",
                  overflow: "hidden",
                  fontSize: "9pt",
                  lineHeight: "20pt",
                }}
              >
                스펙트럼의 연속됨과 로고의 형태를 응용하여 제작하였습니다. 배경
                컬러는 다채로움과 배움의 성장을 밝은 컬러의 그라데이션으로
                표현하였습니다. 그래픽 의미는 라인과 면으로 우리들의 다양성을
                나타내었고 흐르는 듯한 반복성으로 여러 디자인 분야로 흘러
                진출한다는 의미를 담았습니다.
              </div>
              <div
                style={{ gridRow: "2", fontSize: "9pt", lineHeight: "20pt" }}
              >
                It was produced by applying the continuity of the spectrum and
                the shape of the logo. The background color is a bright color
                gradation for diversity and learning growth. expressed as The
                graphic meaning of the graduates with lines and planes It showed
                diversity and flowed into various design fields with
                repeatability. It contains the meaning of flowing in.
              </div>
            </MOGrid>
          </Box>
          <ImgBox id="imgbox">
            <img src="l_poster.png" style={Mimg1}></img>
            <img src="center_poster_l_c.png" style={Mimg2}></img>
            <img src="center_poster_r_c.png" style={Mimg3}></img>
            <img src="r_poster.png" style={Mimg4}></img>
          </ImgBox>
          <Box style={{ position: "relative" }}>
            <img
              src="ABOUT_left_graphic_2.png"
              style={{
                position: "absolute",
                marginTop: "-10%",
                marginLeft: "-26%",
                width: "70%",
                float: "left",
              }}
            ></img>
            <div style={Mhstyle}>SMD 12th GRADUATION EXHIBITION</div>
            <div
              style={{
                textAlign: "center",
                width: "60%",
                fontSize: "8pt",
                marginLeft: "20%",
                lineHeight: "20pt",
                marginBottom: "8%",
              }}
            >
              제12회 졸업준비 위원회는 SPECTRUM의 전반적인 기획과 운영을 위해
              모인 위원회로서, 총 47명의 학생들로 구성되어 있습니다. 졸업준비
              위원회를 중심으로 모든 구성원들이 하나가 되어 SPECTRUM의 다채로운
              연결성을 위해 끊임없이 노력하고 있습니다. 함께를 통해 배우고
              성장하며, 다양한 디자인을 제작합니다
            </div>
            <div
              style={{
                width: "70%",
                textAlign: "center",
                marginLeft: "15%",
                marginBottom: "10%",
                fontSize: "19pt",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "2%",
                  fontSize: "9pt",
                }}
              >
                졸업전시 위원장
              </span>{" "}
              <span style={{ marginRight: "4%", fontSize: "9pt" }}>장민혁</span>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "2%",
                  fontSize: "9pt",
                }}
              >
                졸업전시 부위원장
              </span>{" "}
              <span style={{ marginRight: "4%", fontSize: "9pt" }}>노정은</span>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: "2%",
                  fontSize: "9pt",
                }}
              >
                총무&서기
              </span>{" "}
              <span style={{ marginRight: "4%", fontSize: "9pt" }}>
                {" "}
                강다혜 심우재{" "}
              </span>
            </div>
            <img
              src="ABOUT_right_graphic_3.png"
              style={{
                position: "absolute",
                marginLeft: "45%",
                width: "90%",
                float: "right",
                overflow: "hidden",
              }}
            ></img>
            <NGrid style={{ position: "relative" }}>
              <div style={{ gridColumn: "1" }}>
                <p style={Mdnstyle}>기획팀</p>
                <p style={Mnsstyle}>
                  김수연 | 곽승연 김세헌 김유림 김혜원 이태윤 이영주 최지은
                </p>
              </div>
              <line
                style={{
                  position: "absolute",
                  borderRight: "solid 30px 1px black",
                }}
              ></line>
              <div style={{ gridColumn: "2" }}>
                <p style={Mdnstyle}>디자인팀</p>
                <p style={Mnsstyle}>
                  추채원 | 김수빈 김하영 남민재 모하마디 모가담 록사나 신지수
                  심보레미 엄혜민 야오다 럭키 유연아 응웬반티엔 장문정 전정배
                  최가연 팜티탄로안
                </p>
              </div>
              <div style={{ gridColumn: "3" }}>
                <p style={Mdnstyle}>편집팀</p>
                <p style={Mnsstyle}>
                  윤은영 | 곽연우 김정희 박지윤 박청 유라현 응옌홍후 최유정
                  카와사키 키미코
                </p>
              </div>
            </NGrid>
            <NtGrid>
              <div
                style={{
                  gridColumn: "1",
                  alignContent: "center",
                  maxWidth: "50%",
                  marginLeft: "25%",
                }}
              >
                <p style={Mdnstyle}>영상팀</p>
                <p style={Mnsstyle}>
                  이승민 | 옹가은 노연수 문영현 이의종 유리카 유문미 윤원실
                  토미다 히로키
                </p>
              </div>
              <div style={{ gridColumn: "2" }}>
                <p style={Mdnstyle}>웹디자인</p>
                <p style={Mnsstyle}>추채원 노정은</p>
              </div>
            </NtGrid>
          </Box>
        </Container>
      </Mobile>
    </>
  );
};
export default About1;
