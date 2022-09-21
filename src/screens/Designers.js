import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Detail from "../components/Detail";
import { dbService } from "../firebase";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Designer = () => {
  const [designers, setDesigners] = useState([]);
  const [selected, setSelected] = useState(null);
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
  const navigate = useNavigate();
  const onClick = (designer) => {
    setSelected(designer);
    navigate(`/designer/${designer.id}`);
  };
  let params = useParams();
  //디테일컴포넌트가 렌더링된 상태에서 뒤로가기를 감지했을시, 초기화
  useEffect(() => {
    if (params.id === undefined) {
      setSelected(null);
    }
  }, [params.id]);
  return (
    <>
      {selected && <Detail designer={selected} setSelected={setSelected} />}
      <Wrapper>
        {designers.map((designer) => (
          <div key={designer.id} onClick={() => onClick(designer)}>
            <img src={designer.profileUrl} alt="" />
            <span>{designer.name}</span>
          </div>
        ))}
      </Wrapper>
    </>
  );
};
export default Designer;
