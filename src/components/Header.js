import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  height: 14vh;
  box-shadow: 0 2px 5px lightgray;
  &.hide {
    transform: translateY(-8em);
  }
`;
// 로고 이미지 크기 반응형?
const Logo = styled.img`
  opacity: 100%;
  width: 80%;
`;
const Menus = styled.div`
  display: flex;
  margin-right: 10%;
  width: 35%;
  justify-content: space-between;
`;
const Menu = styled.div`
  width: 300%;
  margin: auto;
  text-decoration: none;
  text-align: center;
  color: black;
  opacity: 100%;
  font-weight: bold;
  margin-left: 8%;
`;
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};
const MWrapper = styled.div`
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  height: 10vh;
  background-color: white;
  &.hide {
    transform: translateY(-8em);
  }
`;

// max-width 정해주기..
const Burger = styled.div`
  z-index: 3;
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  transform: ${(props) =>
    props.isBurger ? "translateX(10%)" : "translateX(100%)"};
  opacity: ${(props) => (props.isBurger ? "1" : "0")};
  background-color: black;
  transition: all 0.2s ease-in-out;
  color: white;
`;
const MMenu = styled.span`
  color: white;
  padding-top: 10%;
`;
const BurgerOverlay = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isBurger ? "block" : "none")};
  transition: all 0.2s ease-in-out;
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropBtn = styled.div`
  width: 100%;
  height: auto;
`;

const HidBtns = styled.div`
  position: absolute;
  z-index: 10;
  width: 300%;
  background-color: white;
  box-shadow: 0 2px 5px lightgray;
  display: block;
  margin-left:5px;
`;

const dropbtn = (() => {
  let drop = document.getElementById("dp-content");
  if (drop.style.display === "none") {
    drop.style.display = "block";
  } else {
    drop.style.display = "none";
  }
});

const dropbtnoff = (() => {
  let drop = document.getElementById("dp-content");
  if(drop.style.display === "block"){
    drop.style.display = "none";
  }
})
const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isburger, setIsBurger] = useState(false);
  const toggleBurger = () => setIsBurger(!isburger);
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);
  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };
  const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
      if (timerId) return;
      timerId = setTimeout(() => {
        callback.call(this, e);
        timerId = null;
      }, waitTime);
    };
  };
  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  const onLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    });
  };

  return (
    <>
      <Desktop>
        <Wrapper className={hide && "hide"}>
          <Link to="/">
            <Logo src="logo.png" />
          </Link>
          <Menus>
            {isLoggedIn && <span onClick={onLogout} onMouseLeave={dropbtnoff}>Logout</span>}
            <DropDown>
              <DropBtn onMouseOver={dropbtn} onMouseOut={dropbtnoff}>
                <Link to="/about1">
                  <Menu>ABOUT</Menu>
                </Link>
              </DropBtn>
              <HidBtns
                id="dp-content"
                onMouseOver={dropbtn}
                onMouseOut={dropbtnoff}
                style={{display: "none"}}
              >
                <Link
                  id="dp-btn"
                  to="/about1"
                  style={{
                    display: "flex",
                    marginTop: "7%",
                    marginBottom: "7%",
                  }}
                >
                  <Menu style={{marginRight:"13px"}}>전시소개</Menu>
                </Link>
                <Link
                  id="dp-btn"
                  to="/about2"
                  style={{
                    display: "flex",
                    marginTop: "7%",
                    marginBottom: "7%",
                  }}
                >
                  <Menu style={{marginRight:"13px"}}>축사 & 교수진</Menu>
                </Link>
                <Link
                  id="dp-btn"
                  to="/about3"
                  style={{
                    display: "flex",
                    marginTop: "7%",
                    marginBottom: "7%",
                  }}
                >
                  <Menu style={{marginRight:"13px"}}>학과소개</Menu>
                </Link>
              </HidBtns>
            </DropDown>
            <Link to="/designer">
              <Menu>DESIGNERS</Menu>
            </Link>
            <Link to="/exhibition">
              <Menu>EXHIBITION</Menu>
            </Link>
          </Menus>
        </Wrapper>
      </Desktop>
      <Mobile>
        <MWrapper className={hide && "hide"}>
          <Link to="/">
            <Logo src="logo.png" style={{ width: "50%" }} />
          </Link>
          <svg
            style={{ width: "30px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={toggleBurger}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </MWrapper>
        <Burger isBurger={isburger}>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={toggleBurger}
            style={{ marginLeft: "65%" }}
          />
          <MMenu>
            <Link to="/about1" onClick={toggleBurger}>
              ABOUT
            </Link>
          </MMenu>
          <MMenu>
            <Link to="/designer" onClick={toggleBurger}>
              DESIGNER
            </Link>
          </MMenu>
          <MMenu>
            <Link to="/exhibition" onClick={toggleBurger}>
              EXHIBITION
            </Link>
          </MMenu>
        </Burger>
        <BurgerOverlay isBurger={isburger} onClick={toggleBurger} />
      </Mobile>
    </>
  );
};
export default Header;
