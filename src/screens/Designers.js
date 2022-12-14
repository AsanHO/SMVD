import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { dbService } from "../firebase";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  left: 50%;
  right: 50%;
  margin: 0 auto;
  justify-content: center;
  margin-top: 11vh;
`;

const MWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
`;

const Profile = styled(motion.div)`
  margin: 0 auto;
  margin-right: 48px;
  width: 136px;
  text-align: center;
  margin-bottom: 5vh;
`;

const Profiles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
`;

const MProfile = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const MProfiles = styled.div`
  padding: 0px 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
`;

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Designer = ({ isLoggedIn }) => {
  const [designers, setDesigners] = useState([]);
  const [selected, setSelected] = useState(null);
  const [layOutId, setLayOutId] = useState(null);
  const getDesigners = async () => {
    setDesigners([]);
    const q = query(
      collection(dbService, "designers"),
      orderBy("name", "desc")
    );
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
  const navigate = useNavigate();
  const onClick = (designer) => {
    setLayOutId(designer.id);
    setSelected(designer);
    navigate(`/designer/${designer.id}`);
  };
  let params = useParams();
  //???????????????????????? ???????????? ???????????? ??????????????? ???????????????, ?????????
  useEffect(() => {
    if (params.id === undefined) {
      setSelected(null);
    }
  }, [params.id]);
  return (
    <>
      <Desktop>
        {selected && (
          <AnimatePresence>
            <motion.div>
              <Detail
                designer={selected}
                setSelected={setSelected}
                layoutId={layOutId}
                isLoggedIn={isLoggedIn}
              />
            </motion.div>
          </AnimatePresence>
        )}
        <Wrapper>
          <Profiles>
            {designers.map((designer) => (
              <Profile
                key={designer.id}
                onClick={() => onClick(designer)}
                layoutId={designer.id}
              >
                <img
                  style={{
                    height: "200px",
                    borderRadius: "8px",
                  }}
                  src={designer.profileUrl}
                  alt=""
                />
                <span>{designer.name}</span>
              </Profile>
            ))}
          </Profiles>
        </Wrapper>
      </Desktop>
      <Mobile>
        {selected && <Detail designer={selected} setSelected={setSelected} />}
        <MWrapper>
          <MProfiles>
            {designers.map((designer) => (
              <MProfile key={designer.id} onClick={() => onClick(designer)}>
                <img
                  style={{
                    height: "140px",
                    borderRadius: "8px",
                  }}
                  src={designer.profileUrl}
                  alt=""
                />
                <p>{designer.name}</p>
              </MProfile>
            ))}
          </MProfiles>
        </MWrapper>
      </Mobile>
    </>
  );
};
export default Designer;
