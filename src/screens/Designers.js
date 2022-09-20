import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../firebase";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Wrapper = styled.div`
  left: 50%;
  right: 50%;
  margin: 0 auto;
`;

const MWrapper = styled.div`
  margin: 0 auto;
`;

const Profile = styled.div`
  margin: 0 auto;
  margin-right: 48px;
  width: 136px;
  text-align: center;
`;

const Profiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
`;

const MProfile = styled.div`
  margin: 0 auto;
  width: 140px;
  text-align: center;
`;

const MProfiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px;
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Designer = () => {
  const [designers, setDesigners] = useState([]);
  const getDesigners = async () => {
    const q = query(collection(dbService, "designers"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const newObj = {
        ...doc.data(),
        id: doc.id,
      };
      setDesigners((prev) => [newObj, ...prev]);
    });
  };
  useEffect(() => {
    getDesigners();
  }, []);
  console.log(designers);
  return (
  <>
    <Desktop>
      <Wrapper>
        <Profiles>
          {designers.map((designer) => (
            <Profile key={designer.id}>
              <img style={{ width: "140px", height: "140px" }} src={designer.profileUrl} alt="" />
              <span>{designer.name}</span>
            </Profile>
          ))}
        </Profiles>
      </Wrapper>
    </Desktop>
    <Mobile>
      <MWrapper>
        <MProfiles>
          {designers.map((designer) => (
            <MProfile key={designer.id}>
              <img style={{ width: "140px", height: "140px" }} src={designer.profileUrl} alt="" />
              <span>{designer.name}</span>
            </MProfile>
          ))}
        </MProfiles>
      </MWrapper>
    </Mobile>
  </>
  );
};
export default Designer;
