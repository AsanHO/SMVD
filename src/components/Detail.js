import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 2% 0;
  z-index: 3;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled(motion.div)`
  width: 80vw;
  background-color: black;
  overflow-y: auto;
  border-radius: 15px;
  background-color: black;
  overflow-y: auto;
  border-radius: 15px;
  overflow: overlay;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }
`;
const GoBack = styled.div`
  cursor: pointer;
  position: absolute;
  right: 6%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: wheat;
  font-size: 30px;
  font-weight: 800;
  z-index: 1;
`;

const Detail = ({ designer, setSelected, layoutId, isLoggedIn }) => {
  console.log(designer);
  const navigate = useNavigate();
  const goBack = () => {
    setSelected(null);
    navigate(-1);
  };
  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <Overlay>
      <GoBack onClick={goBack}>X</GoBack>
      {isLoggedIn && (
        <GoBack style={{ top: "15%" }} onClick={goBack}>
          🖊
        </GoBack>
      )}
      <Wrapper layoutId={layoutId}>
        {designer.utubeVideoId && (
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${designer.utubeVideoId}`}
            frameborder="0"
            title="utube"
          />
        )}
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/7v6NDhHlf0A"
          frameborder="0"
          title="utube"
        />
        <img src={designer.mainUrl} style={{ width: "100%" }} alt="" />
      </Wrapper>
      <Background onClick={goBack} />
    </Overlay>
  );
};

export default Detail;
