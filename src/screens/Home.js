import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Mousewheel } from "swiper";

const Wrapper = styled.div`
  background-color: black;
`;
const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
            <img
              style={{
                display: "flex",
                alignItems: "center",
                height: !isMobile && "86vh",
                width: isMobile && "100%",
              }}
              src="mainmotion.gif"
              alt=""
            />
          </Main>
        </SwiperSlide>
        <SwiperSlide>
          <Main>
            <video
              style={{
                height: !isMobile && "80vh",
                width: isMobile && "100%",
              }}
              src="sample.mp4"
              controls
              loop
            />
          </Main>
        </SwiperSlide>
        <SwiperSlide>
          <Main>
            <video
              style={{
                height: !isMobile && "80vh",
                width: isMobile && "100%",
              }}
              src="sample.mp4"
              controls
              loop
            />
          </Main>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
export default Home;
