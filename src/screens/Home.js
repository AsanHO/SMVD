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
                height: !isMobile && "88vh",
                width: isMobile && "100%",
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
            <video
              style={{
                height: !isMobile && "85vh",
                width: isMobile && "100%",
              }}
              src="sample.mp4"
              controls
              muted
              autoPlay
              loop
            />
          </Main>
        </SwiperSlide>
        <SwiperSlide>
          <Main>
            <video
              style={{
                height: !isMobile && "85vh",
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
