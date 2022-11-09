import styled from "styled-components";

const Container = styled.div`
`

const Box = styled.div`
  justify-content: center;
  margin: 10%;
`
const Ycontents = styled.div`
  display: flex;
  margin-bottom: 5%;
`

const pstyle = {
  lineHeight: "30px",
}

const tstyle = {
  fontWeight:"bold",
  fontSize: "19pt",
};

const testyle = {
  color:"gray",
  marginBottom: "5%",
}

const ystyle = {
  fontWeight:"bold",
  fontSize: "19pt",
  float: "left",

}
const ycstyle = {
  float:"left",
  marginLeft:"13%",
}

const About3 = () => {
  return <>
  <Container>
    <Box>
      <div>
        <p style={tstyle}>학과소개</p>
        <p style={testyle}>Introduction of the department</p>
      </div>
      <p style={pstyle}>오늘날과 같은 최첨단 과학기술시대로 이어지는 고도의 정보화 사회에서는 새로운 문화적 컨텐츠의 창출, 디자인 개발과 이의 효과적인 전달, 체계적인 관리 등과 같은 창조적 활동이 그 추진력이 될 것이며 이에 대한 끊임없는 연구와 교육이 요구되고 있습니다.</p><br></br>
      <p style={pstyle}>따라서 시각디자인학과는 시각언어 표현의 중요성을 바르게 알고, 이를 바탕으로 바람직한 디자인산업과 시각문화를 이끌어갈 수 있는 문화적 소양과 인격을 갖춘 디자인전문가 양성을 목적으로 합니다.</p><br></br>
      <p style={pstyle}>이를 위하여, 시각디자인의 전 분야를 폭넓게 교육하되 기본기를 특별히 강조하고, 타이포그래피와 출판디자인을 교육과정의 중심축으로 삼고 있습니다. 또한, 정보화 다변화하는 산업사회에 능동적으로 대처하기 위하여 뉴 미디어와 디지털 디자인을 적극적으로 수용합니다.</p>
    </Box>
    <Box>
      <div>
        <p style={tstyle}>시각디자인학과 연혁</p>
        <p style={testyle}>Event Timeline</p>
      </div>
      <p style={{fontSize: "19pt", marginBottom:"5%"}}>2020-2022연혁</p>
      <Ycontents>
        <p style={ystyle}>2020</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 서울시 코로나19 극복·응원컨텐츠 글로벌공모전 금상</p>
          <p style={pstyle}>- 서울시 코로나19 극복·응원컨텐츠 글로벌공모전 은상</p>
          <p style={pstyle}>- 서울시 코로나19 극복·응원컨텐츠 글로벌공모전 동상</p>
          <p style={pstyle}>- 서울시 코로나19 극복·응원컨텐츠 글로벌공모전 입선</p>
          <p style={pstyle}>- K디자인 국제어워드 파이널리스트</p>
          <p style={pstyle}>- 국가 인권위원회 공모전 장려상</p>
          <p style={pstyle}>- 서울파트너스 1위</p>
          <p style={pstyle}>- 국제상품문화 디자인어워드 수상</p>
          <p style={pstyle}>- 국제디자인트렌드디자인대전</p>
          <p style={pstyle}>- 남양주 금곡동 도시재생지원센터 마을기업제품 캐릭터 공모전 입선</p>
          <p style={pstyle}>- 산학연계교육과정 영상 콘텐츠 공모전</p>
          <p style={pstyle}>- 2020 청년리빙해커톤경진대회 최우수상</p>
          <p style={pstyle}>- 서울 공제공공광고제 장려상</p>
          <p style={pstyle}>- 국제 사이버디자인 트랜드 공모전 입선</p>
          <p style={pstyle}>- 서비스러닝경진대회 우수상</p>
          <p style={pstyle}>- TVCF영상어워드 파이널리스트</p>
        </ul>
      </Ycontents>
      <Ycontents>
        <p style={ystyle}>2021</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 칸느국제광고제: 레고, BTL광고영상-본선진출</p>
          <p style={pstyle}>- 아시아디자인프라이즈: 코로나예방, BTL광고영상 위너</p>
          <p style={pstyle}>- 스위스몽테르광고제: 코로나예방, BTL광고영상 본선 진출</p>
          <p style={pstyle}>- 제일기획 대학생광고대상: 하이모, BTL광고영상 본선 진출</p>
          <p style={pstyle}>- K-디자인어워드: 아산시 도시재생 브랜딩 개발: 장미마을 BI개발 본상</p>
          <p style={pstyle}>- 부산국제광고제.AD스타: 디자이 부분 크리스탈 상</p>
          <p style={pstyle}>- 부산국제광고제.AD스타: 옥외광고 부분 크리스탈 상</p>
          <p style={pstyle}>- 부산국제광고제.AD스타: 캠페인 부분 크리스탈 상</p>
          <p style={pstyle}>- 산학협력EXPO: 충남경찰청 BTL광고영상 최우수상</p>
          <p style={pstyle}>- 캡스톤디자인: 선문대학교기숙사 브랜딩 개발 우수상</p>
          <p style={pstyle}>- 서울국제상품문화디자인어워드: 우수상 및 특선</p>
          <p style={pstyle}>- IP지식재산 공모전: 대상, 우수상</p>
          <p style={pstyle}>- 전기안전공모전: 가작</p>
          <p style={pstyle}>- 서비스러닝경진대회 보이스피싱예방, 대상</p>
          <p style={pstyle}>- 서비스러닝경진대회 음주운전예방, 우수상</p>
          <p style={pstyle}>- TVCF 영상어워드 지역브랜딩개발, 파이널리스트</p>
        </ul>
      </Ycontents>
      <Ycontents>
        <p style={ystyle}>2022</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 아시아브랜드프라이즈: 생명을앗아가는컵, 금상</p>
          <p style={pstyle}>- 아시아브랜드프라이즈: 머니하이스트 코리아 넷플릭스 위너</p>
          <p style={pstyle}>- 아시아브랜드프라이즈: 소독나무캠페인 / 희망온도계 / 레고 / 컴백캠페인 / WATERBOMB BEER 파이널리스트</p>
          <p style={pstyle}>- 국제 블루어워드 은상</p>
          <p style={pstyle}>- HASD 파이널리스트</p>
          <p style={pstyle}>- LMO안전콘텐츠공모전 우수상</p>
          <p style={pstyle}>- 도봉 문화재단 공모전 우수상</p>
          <p style={pstyle}>- DD쇼케이스공모전 우수상</p>
          <p style={pstyle}>- 부산국제광고제AD스타 크리스탈 상</p>
          <p style={pstyle}>- 부산국제광고제AD스타 파이널리스트</p>
          <p style={pstyle}>- 뉴욕페스티벌 공모전 쇼트리스트</p>
        </ul>
      </Ycontents>
    </Box>
    <Box>
      <div>
        <p style={tstyle}>기업연계 산학 실습 연혁</p>
        <p style={testyle}>Industry Attachment</p>
      </div>
      <p style={{fontSize: "19pt", marginBottom:"5%"}}>2020-2022연혁</p>
      <Ycontents>
        <p style={ystyle}>2020</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 인크로스 장기현장실습</p>
          <p style={pstyle}>- 아산시 도시브랜드 개선을 위한 맨홀디자인 개발</p>
          <p style={pstyle}>- 아산시 코로나19극복 대내외 홍보디자인 개발</p>
          <p style={pstyle}>- 기업 SHD 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 기업 더 써밋 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 기업 쉐어앤쉐어 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 기업 씨엠코 머트리얼즈 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 기업 컴패니멀 푸드 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 기업 팍스메디 브랜드(CI, BI) 개발 연구</p>
          <p style={pstyle}>- 레드페이스 제품 부록 제작</p>
          <p style={pstyle}>- 에스핏 브랜드 코디북 제작</p>
        </ul>
      </Ycontents>
      <Ycontents>
        <p style={ystyle}>2021</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 아산시 도시재생 브랜딩개발: 장미마을 BI개발</p>
          <p style={pstyle}>- 아산시, 천안시, 중소기업청, 코로나예방 광고개발: BTL광고개발</p>
          <p style={pstyle}>- 충남경찰청 공익광고개발: 보이스피싱 옥외광고개발</p>
          <p style={pstyle}>- 충남경찰청 공익광고개발: 실종아동 찾기 캠페인광고개발</p>
          <p style={pstyle}>- 선문대학교기숙사 브랜딩개발: 성화학숙 BI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 ES CI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 티어 코퍼레이션 CI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 ESP CI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 ES CI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 HMT CI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 컴패니멀 BI개발</p>
          <p style={pstyle}>- 기업연계 브랜딩개발: 주식회사 SHD BI개발</p>
          <p style={pstyle}>- 현장실습학기: 기업 2B (박형수, 이예린 학생)</p>
        </ul>
      </Ycontents>
      <Ycontents>
        <p style={ystyle}>2022</p>
        <ul style={ycstyle}>
          <p style={pstyle}>- 충남경찰청 공공광고: 실종 아동 찾기 컴백 캠페인</p>
          <p style={pstyle}>- 베트남 반랑대학교: 공공관련 디자인 세미나 및 전시회 개최</p>
          <p style={pstyle}>- 산학협력 입주기업브랜딩 사업(4개 기업) 진행</p>
          <p style={pstyle}>- 이너스페이스 전시관 브랜딩 CI개발</p>
          <p style={pstyle}>- 워터밤비어 브랜딩 개발</p>
          <p style={pstyle}>- 넷플릭스 종이의집 홍보BTL개발</p>
        </ul>
      </Ycontents>
    </Box>
  </Container>;


  </>
};
export default About3;
