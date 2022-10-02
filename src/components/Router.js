import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About1 from "../screens/About1";
import About2 from "../screens/About2";
import About3 from "../screens/About3";
import Designers from "../screens/Designers";
import Exhibition from "../screens/Exhibition";
import Admin from "../screens/Admin";
import Home from "../screens/Home";
import Header from "./Header";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  width: 100%;
  padding-top: ${(props) => (props.isMobile ? "10vh" : "14vh")};
`;

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn);
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Wrapper isMobile={isMobile}>
        <Routes>
          <Route path="/about1" element={<About1 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />
          <Route path="/designer" element={<Designers />} />
          <Route
            path="/designer/:id"
            element={<Designers isLoggedIn={isLoggedIn} />}
          />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/exhibition/:id" element={<Exhibition />} />
          <Route
            path="/Admin"
            element={
              <Admin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/" element={<Home isMobile={isMobile} />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};
export default AppRouter;
