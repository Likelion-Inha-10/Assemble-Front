import React, { useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlineStar,
  AiTwotoneStar,
  AiOutlineMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Todolist 전체 박스
const Container = styled.div`
  width: 310px;
  height: 950px;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// 'To Do List' 텍스트
const ListText = styled.div`
  width: 310px;
  height: 31.53px;

  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #075995;
  padding-left: 20px;
`;

// '편집' 텍스트
const ModifyText = styled.div`
  width: 290px;
  height: 23.42px;

  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  color: #0a75be;
  text-align: end;
  padding-bottom: 5px;
`;

// 진행중인 task랑 완료된 task를 담고 있는 박스
const ListBox = styled.div`
  width: 310px;
  height: 826px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  padding-top: 20px;
  padding-left: 20px;
`;

// 진행중 전체 박스
const ProgressBox = styled.div`
  width: 310px;
  height: 550px;

  overflow: auto;
`;

// 진행 중 텍스트 + '+'버튼(편집 시)
const ProgBox = styled.div`
  display: flex;

  #plusIcon {
    padding-top: 8px;
    width: 30px;
    color: #075995;
  }
`;

// 완료 task 전체 박스
const CompleteBox = styled.div`
  width: 310px;
  height: 200px;

  overflow: auto;
`;

// 완료 + 화살표 박스
const ComTextBox = styled.div`
  display: flex;
  /* align-items: center; */
`;

// 텍스트
const Text = styled.div`
  width: 130px;
  height: 29px;

  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  padding-bottom: 15px;

  color: #0763a4;
`;

// task 하나를 담고 있는 박스 (체크박스 + 텍스트 + 별모양 + 세로메뉴)
const TaskBox = styled.div`
  box-sizing: border-box;
  width: 290px;
  height: 30px;
  margin-top: 10px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 체크박스
const CheckBox = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 30px;
`;

// 할 일 텍스트
const TaskContent = styled.div`
  width: 80px;
  height: 17px;

  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  flex: none;
  order: 0;
  flex-grow: 0;
  text-align: center;
`;

// 별, 세로메뉴 아이콘 포함하고 있는 박스
const IconBox = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
`;

const TodoList = ({ apiUrl }) => {
  const [updown, setUpDown] = useState(true); // 완료 목록에서 화살표 클릭 시 행동을 위한 변수
  const [modify, setModify] = useState(false); // 편집 버튼 클릭 시 행동을 위한 변수
  const [proclists, setProcLists] = useState([]); // 진행중인 task 담는 배열
  const [donelists, setDoneLists] = useState([]); // 완료된 task 담는 배열
  const [detail, setDetail] = useState([]); // 투두리스트 상세 내용 담는 배열

  const navigate = useNavigate();

  // 완료 task옆 삼각형 변화를 위한 함수
  const onClickUpDown = () => {
    setUpDown(!updown);
  };

  // 편집 버튼 클릭 시 변화를 위한 함수
  const onClickModify = () => {
    setModify(!modify);
  };

  // 별 모양 클릭 시 해당 task의 is_first 값 변경
  const onClickStar = (e) => {
    axios.post(`${apiUrl}/tdl/priority/${e.target.id}`).then((res) => {
      window.location.reload(true);
    });
  };

  // 편집 눌렀을 때 나타나는 플러스 버튼 클릭 시 투두리스트 생성 페이지로 이동
  const onClickMake = () => {
    navigate("/maketodo");
  };

  // 진행중인 task와 완료된 task 데이터 가져옴
  useEffect(() => {
    console.log(apiUrl)
    axios.get(`${apiUrl}/main/`).then((res) => {
      setProcLists(res.data["To Do Lists"]);
      setDoneLists(res.data["End Lists"]);
    }).catch(e => console.log(e));
  }, []);

  // 완료 task 체크박스 클릭 시 is_end 값 변경
  const onChangeDone = (e) => {
    axios.post(`${apiUrl}/tdl/end/${e.target.id}`).then(() => {
      window.location.reload(true);
    });
  };

  // 진행 task 체크박스 클릭 시 is_end 값 변경
  const onChangeProc = (e) => {
    axios.post(`${apiUrl}/tdl/end/${e.target.id}`).then(() => {
      window.location.reload(true);
    });
  };

  // task 상세내용 불러옴 (제목 & 내용)
  const onClickDetail = (e) => {
    axios.get(`${apiUrl}/tdl/${e.target.id}`).then((res) => {
      // console.log(res.data);
      setDetail(res.data);
    });
  };

  // '-'버튼 클릭 시 해당 task 삭제
  const onClickDelete = (e) => {
    axios.post(`${apiUrl}/delete_tdl/${e.target.id}`).then(() => {
      window.location.reload(true);
    });
  };

  return (
    <>
      <Container>
        <ListText>To Do List</ListText>
        {/* modify true면 저장 / false면 편집 */}
        <ModifyText onClick={onClickModify}>
          {modify ? "저장" : "편집"}
        </ModifyText>
        <ListBox>
          <ProgBox>
            <Text>진행중인 Task</Text>
            {/* modify가 true면 plus 아이콘 나타남 -> todo 리스트 추가를 위한 버튼 */}
            {modify ? (
              <AiFillPlusCircle id="plusIcon" onClick={onClickMake} />
            ) : (
              ""
            )}
          </ProgBox>
          <ProgressBox>
            {/* map을 통해서 proclists 배열에 저장된 진행 task 데이터 하나씩 화면에 나타냄 */}
            {proclists.map((proclist) => {
              return (
                <TaskBox key={proclist.id}>
                  {/* modify가 참이면 '-' 버튼 나타남 / 거짓이면 체크박스 나타남 */}
                  {modify ? (
                    <AiOutlineMinusCircle
                      style={{ width: "30px", color: "red" }}
                      id={proclist.id}
                      onClick={onClickDelete}
                    />
                  ) : (
                    <CheckBox
                      type={"checkbox"}
                      id={proclist.id}
                      onChange={onChangeDone}
                    ></CheckBox>
                  )}
                  {/* 해당 task의 제목 나타냄 */}
                  <TaskContent>{proclist.title}</TaskContent>
                  <IconBox>
                    {/* 해당 task의 is_first 값이 참이면 별 색 채워짐 & 위치 올라감 / 거짓이면 별 색 비워짐 & 위치 원상복귀 */}
                    {proclist.is_first ? (
                      <AiTwotoneStar
                        style={{ color: "#075995" }}
                        id={proclist.id}
                        onClick={onClickStar}
                      />
                    ) : (
                      <AiOutlineStar id={proclist.id} onClick={onClickStar} />
                    )}
                    {/* 세로 메뉴 버튼 클릭 시 상세내용 볼 수 있음 (더 코드 짜야됨) */}
                    <BsThreeDotsVertical
                      id={proclist.id}
                      onClick={onClickDetail}
                    ></BsThreeDotsVertical>
                  </IconBox>
                </TaskBox>
              );
            })}
          </ProgressBox>
          <ComTextBox>
            <Text style={{ width: "110px" }}>완료된 Task</Text>
            {/* updown이 참이면 위쪽 삼각형 / 거짓이면 아래쪽 삼각형 나타남 */}
            {updown ? (
              <GoTriangleUp
                style={{ paddingTop: "8px" }}
                onClick={onClickUpDown}
              ></GoTriangleUp>
            ) : (
              <GoTriangleDown
                style={{ paddingTop: "8px" }}
                onClick={onClickUpDown}
              ></GoTriangleDown>
            )}
          </ComTextBox>
          <CompleteBox>
            {/* updown이 true면 완료된 task 목록 나타남 */}
            {updown
              ? donelists.map((donelist) => {
                  /* map을 통해서 donelists 배열에 저장된 완료 task 데이터 하나씩 화면에 나타냄 */
                  return (
                    <TaskBox key={donelist.id}>
                      {/* modify가 참이면 '-' 버튼 나타남 / 거짓이면 체크박스 나타남 */}
                      {modify ? (
                        <AiOutlineMinusCircle
                          style={{ width: "30px", color: "red" }}
                          id={donelist.id}
                          onClick={onClickDelete}
                        />
                      ) : (
                        <CheckBox
                          type={"checkbox"}
                          checked
                          id={donelist.id}
                          onChange={onChangeProc}
                        ></CheckBox>
                      )}
                      {/* 해당 task의 제목 나타냄 */}
                      <TaskContent>{donelist.title}</TaskContent>
                      <IconBox>
                        {/* 해당 task의 is_first 값이 참이면 별 색 채워짐 & 위치 올라감 / 거짓이면 별 색 비워짐 & 위치 원상복귀 */}
                        {donelist.is_first ? (
                          <AiTwotoneStar
                            style={{ color: "#075995" }}
                            id={donelist.id}
                            onClick={onClickStar}
                          />
                        ) : (
                          <AiOutlineStar
                            id={donelist.id}
                            onClick={onClickStar}
                          />
                        )}
                        {/* 세로 메뉴 버튼 클릭 시 상세내용 볼 수 있음 (더 코드 짜야됨) */}
                        <BsThreeDotsVertical
                          id={donelist.id}
                          onClick={onClickDetail}
                        ></BsThreeDotsVertical>
                      </IconBox>
                    </TaskBox>
                  );
                })
              : ""}
          </CompleteBox>
        </ListBox>
      </Container>
    </>
  );
};

export default TodoList;
