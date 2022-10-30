import styled from "styled-components";

const Container = styled.div`
  
`
const Box = styled.div`
  justify-content: center;
  margin: 10%;
`
const hstyle = {
  textAlign: "center",
  fontSize: "30pt",
}

const example = {
  width:"50%",
  float:"left",
};

const About1 = () => {
  return <>
  <Container>
    <Box>
        <img src="logocolor.png" style={{marginBottom:"8%", display:"inline"}}></img><br></br>
        <div style={example}>
          <p style={{textAlign:"left", marginBottom:"15%", marginRight:"8%", fontSize:"19pt"}}>
            *빛의 성분을 파장의 순서로 나열한 것<br></br>
            *빛을 각 성분으로 나누는 것을 '스펙트럼으로 분해한다'라고 표현
          </p>
          <p style={{textAlign:"left", marginBottom:"8%", marginRight:"8%", fontSize:"20pt"}}>
            스펙트럼, 서로 다른 색의 색깔이 연속되어 넓게 퍼져 있습니다. 서로 다른 빛의 색이 연속적으로 모여 퍼져있는 스펙트럼의 모습은 4년간의 노력과 배움으로 통해 성장한 우리들의 모습과 유사합니다. 각기 다른 색들이 한곳에 모여 다채로운 색으로 보이듯 이 우리는 이곳에서 개인의 색을 보여주며 새로운 세상을 나아갈 준비를 마쳤습니다. 세상과 연결하여 소통하고자 하는 디자이너로서 또 다른 시작을 위해 이번 전시는 47가지의 색을 보여줍니다
          </p>
          <p style={{textAlign:"left", marginBottom:"8%", marginRight:"8%", fontSize:"20pt"}}>
            새로운 세상에 다채로운 빛이 되어 나아갈 47명의 스펙트럼을 소개합니다
          </p>
        </div>
        <div style={example}>
          <p style={{textAlign:"left", marginBottom:"5%", marginLeft:"8%", fontSize:"19pt"}}>
            *Arrangement of light components in order of wavelength <br></br>
            *Dividing light into its components is expressed as ‘decomposing it into a spectrum’.
          </p>
          <p style={{textAlign:"left", marginBottom:"8%", marginLeft:"8%", fontSize:"20pt"}}>
            Spectrum, colors of different colors are spread out continuously and widely. Different colors of light.The continuous spread of spectrum has grown through four years of hard work and learning It’s similar to what we look like. As different colors come together in one place, Here we are ready to move on to a new world by showing individual colors. As a designer who wants to connect and communicate with the world, this exhibition is a new beginning It shows 47 colors.
          </p>
          <p style={{textAlign:"left", marginBottom:"8%", marginLeft:"8%", fontSize:"20pt"}}>
            Introducing the 47 spectrum of people who will become colorful lights in a new world
          </p>
        </div>
    </Box>
    <Box>
        <div style={hstyle}>
          전시 로고
        </div>
        <p>
          하나의 빛이 끊임없이 연결하여 다채로운 빛으로 나타내듯이스펙트럼의 연결성을 상징적으로 나타내어 표현하였습니다.
        </p>
        <p>
          It symbolically represents the connectivity of the spectrum, 
          as one light is constantly connected and represented by colorful light.
        </p>
      </Box>
      <Box>
      <td>
        <div style={hstyle}>
          전시 포스터
        </div>
        <tr>
          스펙트럼의 연속됨과 로고의 형태를 응용하여 제작하였습니다. 배경 컬러는 
          다채로움과 배움의 성장을 밝은 컬러의 그라데이션으로 표현하였습니다. 
          그래픽 의미는 라인과 면으로 우리들의 다양성을 나타내었고 흐르는 듯한 반
          복성으로 여러 디자인 분야로 흘러 진출한다는 의미를 담았습니다.
        </tr>
        <tr>
          It was produced by applying the continuity of the spectrum and the 
          shape of the logo. The background color is a bright color gradation 
          for diversity and learning growth. expressed as The graphic meaning 
          of the graduates with lines and planes It showed diversity and flowed 
          into various design fields with repeatability. It contains the meaning of
          flowing in.
        </tr>
      </td>
      </Box>
      <Box>
      <td>
        <div style={hstyle}>
          SMD 12th GRADUATION EXHIBITION
        </div>
        <tr>
          제12회 졸업준비 위원회는 SPECTRUM의 전반적인 기획과 운영을 위해 모인 위원회로서, 총 47명의 
          학생들로 구성되어 있습니다. 졸업준비 위원회를 중심으로 모든 구성원들이 하나가 되어 SPECTRUM의 
          다채로운 연결성을 위해 끊임없이 노력하고 있습니다. 함께를 통해 배우고 성장하며, 다양한 디자인을 제작합니다
        </tr>
        <tr>
          졸업전시 위원장   장민혁      졸업전시 부위원장   노정은       총무&서기    강다혜 심우재 
        </tr>
        <grid>
          기획팀 곽승연 김세헌 김수연 김유림 김혜원 이태윤 이영주 최지은
          디자인팀 추채원    김수빈 김하영 남민재 모하마디 모가담 
          록사나 신지수 심보레미 엄혜민 야오다 럭키 유연아 
          응웬반티엔 장문정 전정배 최가연 팜티탄로안

          편집팀  
          윤은영  곽연우 김정희 박지윤 박청  유라현 응옌홍후 최유정 카와사키 키미코 

          영상팀  이승민  옹가은 노연수 문영현 이의종 유리카 유문미 윤원실 토미다 히로키 

          웹디자인 추채원 노정은
        </grid>
      </td>
      </Box>
      <td>
        <div style={hstyle}>지도교수님</div>
        <tr>지도교수님 장훈종 교수 서연화 교수 나재민 교수 이하나 교수</tr>
      </td>
      
    
  </Container>
  
  
  </>;
};
export default About1;
