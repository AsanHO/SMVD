import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { dbService } from "../firebase";

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
  return (
    <>
      {selected && <Detail designer={selected} setSelected={setSelected} />}
      <div>
        <div>
          <p onClick={onClick} id="ALL">
            ALL
          </p>
          <p onClick={onClick} id="UX/UI">
            UX/UI
          </p>
          <p onClick={onClick} id="ADVERTISEMENT">
            ADVERTISEMENT
          </p>
          <p onClick={onClick} id="IDENTITY">
            IDENTITY
          </p>
          <p onClick={onClick} id="CHARACTER">
            CHARACTER
          </p>
          <p onClick={onClick} id="GAME">
            GAME
          </p>
        </div>
        {designers.map((designer) => (
          <div key={designer.id} onClick={() => onClickThumnail(designer)}>
            <img src={designer.thumnailUrl} height="300px" alt="" />
            <p>{designer.workName}</p>
            <p>{designer.genre}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Exhibition;
