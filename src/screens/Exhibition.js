import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { dbService } from "../firebase";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence, motion } from "framer-motion";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  left: 50%;
  right: 50%;
  margin: 0 auto;
`;

const MWrapper = styled.div`
  justify-content: center;
  margin: 0 auto;
`;

const Bar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 10px;
  flex-wrap: wrap;
`;

const Opt = styled.div`
  width: auto;
  position: relative;
  color: ${(props) => props.inputcolor || "#ddd"};

  padding: 6px 15px 6px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline;
  cursor: pointer;
  caret-color: white;

  background-color: "white";
  font-weight: 900;
  text-align: center;
  z-index: 0;

  &:after {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 12px;
    margin-top: -6px;
    background-color: #ddd;
    content: "";
  }
  &:last-child:after {
    content: none;
  }
`;

const Thumnail = styled(motion.div)`
  margin: 0 auto;
  text-align: center;
`;

const Thumnails = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 250px 250px 250px;
`;

const MThumnail = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const MThumnails = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 250px;
`;

const Exhibition = () => {
  const [genre, setGenre] = useState("ALL");
  const [designers, setDesigners] = useState([]);
  const [initDesigners, setInitDesigners] = useState([]);
  const [selected, setSelected] = useState(null);
  const [layOutId, setLayOutId] = useState(null);
  const getDesigners = async () => {
    setInitDesigners([]);
    const designRef = collection(dbService, "designers");
    let q = query(designRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const newObj = {
        ...doc.data(),
        id: doc.id,
      };
      setInitDesigners((cur) => [...cur, newObj]);
    });
  };
  useEffect(() => {
    getDesigners();
  }, []);
  useEffect(() => {
    setDesigners(initDesigners);
  }, [initDesigners]);
  useEffect(() => {
    setDesigners(initDesigners);
    if (genre !== "ALL") {
      setDesigners((cur) => cur.filter((e) => e.genre === genre));
    }
  }, [genre]);
  const onClick = (event) => {
    setGenre(event.target.id);
  };
  const navigate = useNavigate();
  const onClickThumnail = (designer) => {
    setLayOutId(designer.id);
    setSelected(designer);
    navigate(`/exhibition/${designer.id}`);
  };
  //디테일컴포넌트가 렌더링된 상태에서 뒤로가기를 감지했을시, 초기화
  let params = useParams();
  useEffect(() => {
    if (params.id === undefined) {
      setSelected(null);
    }
  }, [params.id]);
  const [allBtn, setAllBtn] = useState("black");
  const [uxuiBtn, setUxuiBtn] = useState(false);
  const [adBtn, setAdBtn] = useState(false);
  const [idBtn, setIdBtn] = useState(false);
  const [charBtn, setCharBtn] = useState(false);
  const [gameBtn, setGameBtn] = useState(false);

  const setBtnColorByGenre = (genre) => {
    switch (genre) {
      case "ALL":
        setAllBtn("black");
        setUxuiBtn(false);
        setAdBtn(false);
        setIdBtn(false);
        setCharBtn(false);
        setGameBtn(false);
        break;
      case "UX/UI":
        setAllBtn(false);
        setUxuiBtn("black");
        setAdBtn(false);
        setIdBtn(false);
        setCharBtn(false);
        setGameBtn(false);
        break;
      case "ADVERTISEMENT":
        setAllBtn(false);
        setUxuiBtn(false);
        setAdBtn("black");
        setIdBtn(false);
        setCharBtn(false);
        setGameBtn(false);
        break;
      case "IDENTITY":
        setAllBtn(false);
        setUxuiBtn(false);
        setAdBtn(false);
        setIdBtn("black");
        setCharBtn(false);
        setGameBtn(false);
        break;
      case "CHARACTER":
        setAllBtn(false);
        setUxuiBtn(false);
        setAdBtn(false);
        setIdBtn(false);
        setCharBtn("black");
        setGameBtn(false);
        break;
      case "GAME":
        setAllBtn(false);
        setUxuiBtn(false);
        setAdBtn(false);
        setIdBtn(false);
        setCharBtn(false);
        setGameBtn("black");
        break;
      default:
    }
  };

  useEffect(() => {
    setBtnColorByGenre(genre);
  }, [genre]);

  const mouseEnter = (e) => setBtnColorByGenre(e.target.id);
  const mouseLeave = (e) => setBtnColorByGenre(genre);

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
              />
            </motion.div>
          </AnimatePresence>
        )}
        <Bar>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={allBtn}
            id="ALL"
          >
            ALL
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={uxuiBtn}
            id="UX/UI"
          >
            UX/UI
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={adBtn}
            id="ADVERTISEMENT"
          >
            ADVERTISEMENT
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={idBtn}
            id="IDENTITY"
          >
            IDENTITY
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={charBtn}
            id="CHARACTER"
          >
            CHARACTER
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={gameBtn}
            id="GAME"
          >
            GAME
          </Opt>
        </Bar>
        <Wrapper>
          <Thumnails>
            {designers.map((designer) => (
              <Thumnail
                key={designer.id}
                onClick={() => onClickThumnail(designer)}
                layoutId={designer.id}
              >
                <motion.img src={designer.thumnailUrl} height="250px" alt="" />
                <motion.p>{designer.workName}</motion.p>
                <motion.p>{designer.genre}</motion.p>
              </Thumnail>
            ))}
          </Thumnails>
        </Wrapper>
      </Desktop>
      <Mobile>
        {selected && <Detail designer={selected} setSelected={setSelected} />}
        <Bar>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={allBtn}
            id="ALL"
          >
            ALL
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={uxuiBtn}
            id="UX/UI"
          >
            UX/UI
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={adBtn}
            id="ADVERTISEMENT"
          >
            ADVERTISEMENT
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={idBtn}
            id="IDENTITY"
          >
            IDENTITY
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={charBtn}
            id="CHARACTER"
          >
            CHARACTER
          </Opt>
          <Opt
            onClick={onClick}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            inputcolor={gameBtn}
            id="GAME"
          >
            GAME
          </Opt>
        </Bar>
        <MWrapper>
          <MThumnails>
            {designers.map((designer) => (
              <MThumnail
                key={designer.id}
                onClick={() => onClickThumnail(designer)}
              >
                <img src={designer.thumnailUrl} height="250px" alt="" />
                <p>{designer.workName}</p>
                <p>{designer.genre}</p>
              </MThumnail>
            ))}
          </MThumnails>
        </MWrapper>
      </Mobile>
    </>
  );
};
export default Exhibition;
