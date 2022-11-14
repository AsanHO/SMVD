import { useState } from "react";
import { dbService, storageService } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import styled from "styled-components";

const DesignerForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: salmon;
  padding: 50px;
`;
const Form = () => {
  const [name, setname] = useState("");
  const [studentId, setStudentId] = useState("");
  const genres = ["UX/UI", "ADVERTISEMENT", "IDENTITY", "CHARACTER", "GAME"];
  const [genre, setGenre] = useState("UX/UI");
  const [workName, setWorkName] = useState("");
  const [email, setEmail] = useState("");
  const [utubeLink, setUtubeLink] = useState("");
  const [profileAttachment, setProfileAttachment] = useState("");
  const [mainAttachment1, setMainAttachment1] = useState("");
  const [mainAttachment2, setMainAttachment2] = useState("");
  const [mainAttachment3, setMainAttachment3] = useState("");
  const [mainAttachment4, setMainAttachment4] = useState("");
  const [thumnailAttachment, setThumnailAttachment] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    //파일 경로 참조 만들기
    const profileRef = ref(storageService, `${studentId}/profile`);
    const mainRef1 = ref(storageService, `${studentId}/main1`);
    const mainRef2 = ref(storageService, `${studentId}/main2`);
    const mainRef3 = ref(storageService, `${studentId}/main3`);
    const mainRef4 = ref(storageService, `${studentId}/main4`);
    const thumnailRef = ref(storageService, `${studentId}/thumnail`);
    //storage 참조 경로로 파일 업로드 하기
    const profileResponse = await uploadString(
      profileRef,
      profileAttachment,
      "data_url"
    );
    if (mainAttachment1 !== "") {
      var mainResponse1 = await uploadString(
        mainRef1,
        mainAttachment1,
        "data_url"
      );
      var mainUrl1 = await getDownloadURL(mainResponse1.ref);
    } else {
      mainUrl1 = "";
    }
    if (mainAttachment2 !== "") {
      var mainResponse2 = await uploadString(
        mainRef2,
        mainAttachment2,
        "data_url"
      );
      var mainUrl2 = await getDownloadURL(mainResponse2.ref);
    } else {
      mainUrl2 = "";
    }
    if (mainAttachment3 !== "") {
      var mainResponse3 = await uploadString(
        mainRef3,
        mainAttachment3,
        "data_url"
      );
      var mainUrl3 = await getDownloadURL(mainResponse3.ref);
    } else {
      mainUrl3 = "";
    }
    const mainResponse4 = await uploadString(
      mainRef4,
      mainAttachment4,
      "data_url"
    );
    const thumnailResponse = await uploadString(
      thumnailRef,
      thumnailAttachment,
      "data_url"
    );
    //storage 참조 경로에 있는 파일의 URL을 다운로드해서 profileUrl 변수에 넣어서 업데이트
    const profileUrl = await getDownloadURL(profileResponse.ref);
    const mainUrl4 = await getDownloadURL(mainResponse4.ref);
    const thumnailUrl = await getDownloadURL(thumnailResponse.ref);
    //유튜브 비디오id 추출
    let videoId = "";
    if (utubeLink !== "") {
      videoId = utubeLink.split("?v=");
      videoId = videoId[1].split("&");
      videoId = videoId[0];
    }
    //트윗 오브젝트
    const nameObj = {
      name: name,
      studentId: studentId,
      genre: genre,
      workName: workName,
      email: email,
      utubeVideoId: videoId,
      profileUrl,
      mainUrl1,
      mainUrl2,
      mainUrl3,
      mainUrl4,
      thumnailUrl,
    };
    //형태로 새로운 document 생성하여 designers 콜렉션에 넣기
    await addDoc(collection(dbService, "designers"), nameObj);
    //state 비워서 form 비우기
    setname("");
    setStudentId("");
    setGenre("");
    setWorkName("");
    setEmail("");
    setUtubeLink("");
    setProfileAttachment("");
    setMainAttachment1("");
    setMainAttachment2("");
    setMainAttachment3("");
    setMainAttachment4("");
    setThumnailAttachment("");
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setname(value);
    } else if (name === "studentId") {
      setStudentId(value);
    } else if (name === "genre") {
      setGenre(value);
    } else if (name === "workName") {
      setWorkName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "utubeLink") {
      setUtubeLink(value);
    }
  };
  const onFileChange = (event) => {
    const {
      target: { name, files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      if (name === "profile") {
        setProfileAttachment(result);
      } else if (name === "main1") {
        setMainAttachment1(result);
      } else if (name === "main2") {
        setMainAttachment2(result);
      } else if (name === "main3") {
        setMainAttachment3(result);
      } else if (name === "main4") {
        setMainAttachment4(result);
      } else if (name === "thumnail") {
        setThumnailAttachment(result);
      }
    }; //리드가 끝났음을 알려주는 함수.
    reader.readAsDataURL(theFile);
  };

  return (
    <DesignerForm onSubmit={onSubmit}>
      <input
        required
        name="name"
        value={name}
        onChange={onChange}
        type="text"
        placeholder="이름"
        maxLength={20}
      />
      <input
        required
        name="studentId"
        value={studentId}
        onChange={onChange}
        type="text"
        placeholder="학번"
        maxLength={20}
      />

      <input
        required
        name="workName"
        value={workName}
        onChange={onChange}
        type="text"
        placeholder="작품명"
        maxLength={20}
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="email"
        placeholder="이메일"
      />
      <input
        name="utubeLink"
        value={utubeLink}
        onChange={onChange}
        type="url"
        placeholder="유튜브 링크(생략가능)"
      />
      <select required name="genre" onChange={onChange} value={genre}>
        {genres.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <p>
        Selected: <b>{genre}</b>
      </p>
      <div>
        <label htmlFor="profile-file">
          <p>학생사진</p>
        </label>
        <input
          required
          name="profile"
          id="profile-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {profileAttachment && (
          <div>
            <img
              src={profileAttachment}
              style={{
                backgroundImage: profileAttachment,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="main1-file">
          <p>메인이미지1</p>
        </label>
        <input
          name="main1"
          id="main1-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {mainAttachment1 && (
          <div>
            <img
              src={mainAttachment1}
              style={{
                backgroundImage: mainAttachment1,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="main2-file">
          <p>메인이미지2</p>
        </label>
        <input
          name="main2"
          id="main2-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {mainAttachment2 && (
          <div>
            <img
              src={mainAttachment2}
              style={{
                backgroundImage: mainAttachment2,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="main3-file">
          <p>메인이미지3</p>
        </label>
        <input
          name="main3"
          id="main3-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {mainAttachment3 && (
          <div>
            <img
              src={mainAttachment3}
              style={{
                backgroundImage: mainAttachment3,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="main4-file">
          <p>메인이미지4</p>
        </label>
        <input
          required
          name="main4"
          id="main4-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {mainAttachment4 && (
          <div>
            <img
              src={mainAttachment4}
              style={{
                backgroundImage: mainAttachment4,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="thumnail-file">
          <p>썸네일이미지</p>
        </label>
        <input
          required
          name="thumnail"
          id="thumnail-file"
          type="file"
          accept="image/*"
          onChange={onFileChange}
          style={{
            opacity: 0,
          }}
        />
        {thumnailAttachment && (
          <div>
            <img
              src={thumnailAttachment}
              style={{
                backgroundImage: thumnailAttachment,
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
      <input type="submit" value="&rarr;" />
    </DesignerForm>
  );
};
export default Form;
