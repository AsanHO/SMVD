import styled from "styled-components"

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`
const Box = styled.div`
  margin: 10%;
`

const GrayPart = styled.div`
  background-color: #f4f4f4;
  height: 80%;
`

const IntroGrid = styled.div`
  display: grid;
  line-height: 30pt;
  grid-template-coloms: 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  font-size: 19pt;
  justify-items: center;
  row-gap: 5%;
  column-gap: 10%;
`
const OGrid = styled.div`
  display: grid;
  font-size: 19pt;
  line-height: 30pt;
  grid-template-colums: repeat(2, 1fr);
  justify-items: center;
  column-gap: 10%;
  margin-bottom: 10%
`

const hstyle = {
  textAlign: "center",
  fontSize: "30pt",
  marginBottom:"10%",
  marginTop:"10%",
}

const ImgBox = styled.div`
  display: flex;
  margin-left: -50%;
`

const img1 = {
  width:"550px", 
  height:"805px", 
  float:"left", 
  marginTop:"-15px",
};

const img2 = {
  width:"550px", 
  height:"750px", 
  float:"left",
  marginLeft: "5%",
};
const img3 = {
  width:"550px", 
  height:"751px", 
  float:"left",
  marginLeft: "5%",
};
const img4 = {
  width:"720px", 
  height:"890px", 
  float:"left", 
  marginTop:"-50px",
  marginLeft: "5%",
};

const NGrid = styled.div`
  display: grid;
  grid-template-colums: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 10%;
  text-align: center;
`

const NtGrid = styled.div`
  display: grid;
  grid-template-colums: repeat(2, 1fr);
  text-align: center;
  colum-gap: 10%;
`

const dnstyle = {
  marginBottom:"5%",
  fontWeight:"bold",
  fontSize:"20pt",
}

const nsstyle = {
  fontSize:"19pt"
}

const About1 = () => {
  return <>
  <Container>
    <Box>
        <img src="logocolor.png" style={{marginBottom:"8%", display:"inline"}}></img><br></br>
        <IntroGrid>
          <div style={{gridColumn:"1", gridRow:"1"}}>
            *빛의 성분을 파장의 순서로 나열한 것<br></br>
            *빛을 각 성분으로 나누는 것을 '스펙트럼으로 분해한다'라고 표현
          </div>
          <div style={{gridColumn:"1", gridRow:"2"}}>
            스펙트럼, 서로 다른 색의 색깔이 연속되어 넓게 퍼져 있습니다. 서로 다른 빛의 색이 연속적으로 모여 퍼져있는 스펙트럼의 모습은 4년간의 노력과 배움으로 통해 성장한 우리들의 모습과 유사합니다. 각기 다른 색들이 한곳에 모여 다채로운 색으로 보이듯 이 우리는 이곳에서 개인의 색을 보여주며 새로운 세상을 나아갈 준비를 마쳤습니다. 세상과 연결하여 소통하고자 하는 디자이너로서 또 다른 시작을 위해 이번 전시는 47가지의 색을 보여줍니다
          </div>
          <div style={{gridColumn:"1", gridRow:"3"}}>
            새로운 세상에 다채로운 빛이 되어 나아갈 47명의 스펙트럼을 소개합니다
          </div>
          <div style={{gridColumn:"2", gridRow:"1"}}>
            *Arrangement of light components in order of wavelength<br></br>
            *Dividing light into its components is expressed as ‘decomposing it into a spectrum’.
          </div>
          <div style={{gridColumn:"2", gridRow:"2"}}>
            Spectrum, colors of different colors are spread out continuously and widely. Different colors of light.The continuous spread of spectrum has grown through four years of hard work and learning It’s similar to what we look like. As different colors come together in one place, Here we are ready to move on to a new world by showing individual colors. As a designer who wants to connect and communicate with the world, this exhibition is a new beginning It shows 47 colors.
          </div>
          <div style={{gridColumn:"2", gridRow:"3"}}>
            Introducing the 47 spectrum of people who will become colorful lights in a new world
          </div>
        </IntroGrid>
    </Box>

    <GrayPart>
      <Box>
      <div style={hstyle}>전시 로고</div>
      <OGrid>
      <div style={{gridColum:"1"}}>
        하나의 빛이 끊임없이 연결하여 다채로운 빛으로 나타내듯이 스펙트럼의 연결성을 상징적으로 나타내어 표현하였습니다.
      </div>
      <div style={{gridColumn:"2"}}>
        It symbolically represents the connectivity of the spectrum, 
        as one light is constantly connected and represented by colorful light.
      </div>
      </OGrid>
      <img src="graypart_logo_c.jpeg" style={{width:"100%"}}></img>
      </Box>
    </GrayPart>

      <Box>
        <div style={hstyle}>전시 포스터</div>
        <OGrid>
        <div style={{gridColumn:"1", overflow:"hidden"}}>
          스펙트럼의 연속됨과 로고의 형태를 응용하여 제작하였습니다. 배경 컬러는 
          다채로움과 배움의 성장을 밝은 컬러의 그라데이션으로 표현하였습니다. 
          그래픽 의미는 라인과 면으로 우리들의 다양성을 나타내었고 흐르는 듯한 반복성으로 여러 디자인 분야로 흘러 진출한다는 의미를 담았습니다.
        </div>
        <div style={{gridColumn:"2"}}>
            It was produced by applying the continuity of the spectrum and the 
            shape of the logo. The background color is a bright color gradation 
            for diversity and learning growth. expressed as The graphic meaning 
            of the graduates with lines and planes It showed diversity and flowed 
            into various design fields with repeatability. It contains the meaning of
            flowing in.
        </div>
        </OGrid>
        <ImgBox id="imgbox">
          <img src="left_poster.png" style={img1}></img>
          <img src="center_poster_l_c.png" style={img2}></img>
          <img src="center_poster_r_c.png" style={img3}></img>
          <img src="right_poster.png" style={img4}></img>
        </ImgBox>
      </Box>
      <Box>
        <div style={hstyle}>
          SMD 12th GRADUATION EXHIBITION
        </div>
        <div style={{textAlign:"center", width:"50%", fontSize:"19pt", marginLeft:"25%", lineHeight:"30pt", marginBottom:"8%"}}>
          제12회 졸업준비 위원회는 SPECTRUM의 전반적인 기획과 운영을 위해 모인 위원회로서, 총 47명의 
          학생들로 구성되어 있습니다. 졸업준비 위원회를 중심으로 모든 구성원들이 하나가 되어 SPECTRUM의 
          다채로운 연결성을 위해 끊임없이 노력하고 있습니다. 함께를 통해 배우고 성장하며, 다양한 디자인을 제작합니다
        </div>
        <div style={{width:"70%", textAlign:"center", marginLeft:"15%", marginBottom:"5%",fontSize:"19pt"}}>
        <span style={{fontWeight:"bold"}}>졸업전시 위원장</span>   장민혁      
        <span style={{fontWeight:"bold"}}>졸업전시 부위원장</span>   노정은       
        <span style={{fontWeight:"bold"}}>총무&서기</span>    강다혜 심우재 
        </div>
        <NGrid>
          <div style={{gridColumn:"1"}}>
            <p style={dnstyle}>기획팀</p> 
            <p style={nsstyle}>곽승연 김세헌 김수연 김유림 김혜원 이태윤 이영주 최지은</p>
          </div>
          <div style={{gridColumn:"2"}}>
            <p style={dnstyle}>디자인팀</p> 
            <p style={nsstyle}>추채원 | 김수빈 김하영 남민재 모하마디 모가담 
            록사나 신지수 심보레미 엄혜민 야오다 럭키 유연아 
            응웬반티엔 장문정 전정배 최가연 팜티탄로안
            </p>
          </div>
          <div style={{gridColumn:"3"}}>
            <p style={dnstyle}>편집팀</p> 
            <p style={nsstyle}>윤은영  곽연우 김정희 박지윤 박청  유라현 응옌홍후 최유정 카와사키 키미코 
            </p>
          </div>
        </NGrid>
        <NtGrid>
          <div style={{gridColumn:"1"}}>
            <p style={dnstyle}>영상팀</p>  
            <p style={nsstyle}>
              이승민 옹가은 노연수 문영현 이의종 유리카 유문미 윤원실 토미다 히로키 
            </p>
          </div>
          <div style={{gridColumn:"2"}}>
            <p style={dnstyle}>웹디자인</p> 
            <p style={nsstyle}>추채원 노정은</p>
          </div>
        </NtGrid>
      </Box>
      <td>
        <div style={hstyle}>지도교수님</div>
        <tr>지도교수님 장훈종 교수 서연화 교수 나재민 교수 이하나 교수</tr>
      </td>
      
    
  </Container>
  
  
  </>;
};
export default About1;
