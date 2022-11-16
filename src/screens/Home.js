import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Mousewheel } from "swiper";

const Wrapper = styled.div`
  background-color: white;
`;
const Main = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`;

const Home = ({ isMobile }) => {
  return (
    <Wrapper>
      <Swiper
        speed={1200}
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={{ invert: false }}
        modules={[Mousewheel]}
        className="mySwiper"
        style={{
          height: isMobile ? "90vh" : "89vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SwiperSlide>
          <Main>
            <video
              style={{
                display: "flex",
                alignItems: "center",
                height: !isMobile && "89vh",
                width: isMobile && "100vw",
              }}
              src="main.mp4"
              muted
              autoPlay
              loop
            />
          </Main>
        </SwiperSlide>
        <SwiperSlide>
          <Main>
            <iframe
              style={{
                height: !isMobile && "89vh",
                width: isMobile ? "100vw" : "85vw",
              }}
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube.com/embed/JexmUsUEFYE`}
              title="utube"
            />
          </Main>
        </SwiperSlide>
        <SwiperSlide>
          <Main>
            <iframe
              style={{
                height: !isMobile && "89vh",
                width: isMobile ? "100vw" : "85vw",
              }}
              id="ytplayer"
              type="text/html"
              src={`https://www.youtube.com/embed/Bwf9f5dwm1Q`}
              title="utube"
            />
          </Main>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
export default Home;
