import styled from "styled-components";

const Container = styled.div`
  background-color: lightgrey;
  height: 50vh;
  padding: 10vh 0px;
  display: flex;
  flex-direction: column;

  color: grey;
`;
const Text = styled.span`
  margin-bottom: 20px;
`;
const Footer = () => {
  return (
    <Container>
      <Text>2022 선문대학교 디자인학부 졸업전시회</Text>
      <Text>2022 Sunmoon University Graduation Exhibition </Text>
      <Text>code by show me the art in Sunmoon University AI software</Text>
      <Text>Ⓣ gorma00@naver.com</Text>
    </Container>
  );
};

export default Footer;
