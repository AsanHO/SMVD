import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { dbService } from "../firebase";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Exhibition = () => {
  const [genre, setGenre] = useState("ALL");
  const [designers, setDesigners] = useState([]);
  const [selected, setSelected] = useState(null);
  const getDesigners = async () => {
    setDesigners([]); //변경전 초기화
    const designRef = collection(dbService, "designers");
    let q;
    if (genre !== "ALL") {
      q = query(designRef, where("genre", "==", genre));
    } else {
      q = query(designRef);
    }
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const newObj = {
        ...doc.data(),
        id: doc.id,
      };
      setDesigners((cur) => [...cur, newObj]);
    });
  };
  useEffect(() => {
    getDesigners();
  }, [genre]);
  console.log(designers);

  const onClick = (event) => {
    setGenre(event.target.id);
    // alert(event.target.id);
    console.log(genre);
  };
  const navigate = useNavigate();
  const onClickThumnail = (designer) => {
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
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: 10px;
  flex-wrap: wrap;
`

const Opt = styled.div`
  width: auto;
  margin-right: 15px;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid lightgray;
  border-radius: 25px;
  color: #5f6368;
  display: inline-block;
  padding: 6px 8px 6px 8px;
  background-color: ${props=>props.inputcolor || 'white'};
  &:hover {
    transition: 0.3s;
    background-color: black;
    color: white;
  }
`

const Thumnail = styled.div`
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

const [allBtn, setAllBtn] =  useState('black');
const [uxuiBtn, setUxuiBtn] =  useState(false);
const [adBtn, setAdBtn] =  useState(false);
const [idBtn, setIdBtn] =  useState(false);
const [charBtn, setCharBtn] =  useState(false);
const [gameBtn, setGameBtn] =  useState(false);

useEffect(() => {
  switch(genre){
    case 'ALL':
      setAllBtn('black')
      setUxuiBtn(false)
      setAdBtn(false)
      setIdBtn(false)
      setCharBtn(false)
      setGameBtn(false)
      break
    case 'UX/UI':
      setAllBtn(false)
      setUxuiBtn('black')
      setAdBtn(false)
      setIdBtn(false)
      setCharBtn(false)
      setGameBtn(false)
      break
    case 'ADVERTISEMENT':
      setAllBtn(false)
      setUxuiBtn(false)
      setAdBtn('black')
      setIdBtn(false)
      setCharBtn(false)
      setGameBtn(false)
      break
    case 'IDENTITY':
      setAllBtn(false)
      setUxuiBtn(false)
      setAdBtn(false)
      setIdBtn('black')
      setCharBtn(false)
      setGameBtn(false)
      break
    case 'CHARACTER':
      setAllBtn(false)
      setUxuiBtn(false)
      setAdBtn(false)
      setIdBtn(false)
      setCharBtn('black')
      setGameBtn(false)
      break
    case 'GAME':
      setAllBtn(false)
      setUxuiBtn(false)
      setAdBtn(false)
      setIdBtn(false)
      setCharBtn(false)
      setGameBtn('black')
      break
    default:

  }
  console.log(allBtn);
},[genre])

  return (
    <>
    <Desktop>
      {selected && <Detail designer={selected} setSelected={setSelected} />}
      <Bar>
        <Opt onClick={onClick} inputcolor={allBtn} id="ALL">
          ALL
        </Opt>
        <Opt onClick={onClick} inputcolor={uxuiBtn} id="UX/UI">
          UX/UI
        </Opt>
        <Opt onClick={onClick} inputcolor={adBtn} id="ADVERTISEMENT">
          ADVERTISEMENT
        </Opt>
        <Opt onClick={onClick} inputcolor={idBtn} id="IDENTITY">
          IDENTITY
        </Opt>
        <Opt onClick={onClick} inputcolor={charBtn} id="CHARACTER">
          CHARACTER
        </Opt>
        <Opt onClick={onClick} inputcolor={gameBtn} id="GAME">
          GAME
        </Opt>
      </Bar>
      <Wrapper>
        <Thumnails>
        {designers.map((designer) => (
          <Thumnail key={designer.id} onClick={() => onClickThumnail(designer)}>
            <img src={designer.thumnailUrl} height="250px" alt="" />
            <p>{designer.workName}</p>
            <p>{designer.genre}</p>
          </Thumnail>
        ))}
        </Thumnails>
      </Wrapper>
    </Desktop>
    <Mobile>
      {selected && <Detail designer={selected} setSelected={setSelected} />}
        <Bar>
          <Opt onClick={onClick} inputcolor={allBtn} id="ALL">
            ALL
          </Opt>
          <Opt onClick={onClick} inputcolor={uxuiBtn} id="UX/UI">
            UX/UI
          </Opt>
          <Opt onClick={onClick} inputcolor={adBtn} id="ADVERTISEMENT">
            ADVERTISEMENT
          </Opt>
          <Opt onClick={onClick} inputcolor={idBtn} id="IDENTITY">
            IDENTITY
          </Opt>
          <Opt onClick={onClick} inputcolor={charBtn} id="CHARACTER">
            CHARACTER
          </Opt>
          <Opt onClick={onClick} inputcolor={gameBtn} id="GAME">
            GAME
          </Opt>
        </Bar>
      <MWrapper>
        <MThumnails>
        {designers.map((designer) => (
          <MThumnail key={designer.id} onClick={() => onClickThumnail(designer)}>
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
