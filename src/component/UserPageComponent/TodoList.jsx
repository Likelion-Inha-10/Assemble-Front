import React from "react";
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
import MakeToDo from "./MakeToDo";

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
  height: 846px;

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
  height: 400px;

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
`;

// 별, 세로메뉴 아이콘 포함하고 있는 박스
const IconBox = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
`;

const TodoList = () => {
  const [updown, setUpDown] = useState(false); // 완료 목록에서 화살표 클릭 시 행동을 위한 변수
  const [modify, setModify] = useState(false); // 편집 버튼 클릭 시 해동을 위한 변수
  // 투두리스트 목록 생성하는거 어떻게 할지 결정 필요
  const [make, setMake] = useState(false); // todo 목록 생성 시 필요한 변수
  const [star, setStar] = useState(false); // 별표 클릭 시 행동을 위한 변수

  const onClickUpDown = () => {
    setUpDown(!updown);
  };

  const onClickModify = () => {
    setModify(!modify);
  };
  // 투두리스트 목록 생성하는거 어떻게 할지 결정 필요
  const onClickMake = () => {
    setMake(!make);
  };

  const onClickStar = () => {
    setStar(!star);
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
          {/* 플러스 버튼 클릭 시 todo 리스트 작성란이 나오도록 설정했지만 수정 필요 (페이지 이동 식으로 할까도 생각중) */}
          {make ? <MakeToDo id="maketodo" /> : ""}
          <ProgressBox>
            <TaskBox>
              {/* modify가 참이면 '-'버튼 나타남 */}
              {modify ? (
                <AiOutlineMinusCircle style={{ width: "30px", color: "red" }} />
              ) : (
                <CheckBox type={"checkbox"}></CheckBox>
              )}
              <TaskContent>임시 테스트</TaskContent>
              <IconBox>
                {/* star이 참이면 색이 칠해진 별표로 변경됨 */}
                {star ? (
                  <AiTwotoneStar
                    style={{ color: "#075995" }}
                    onClick={onClickStar}
                  />
                ) : (
                  <AiOutlineStar onClick={onClickStar} />
                )}
                <BsThreeDotsVertical></BsThreeDotsVertical>
              </IconBox>
            </TaskBox>
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
            {updown ? (
              <TaskBox>
                {modify ? (
                  <AiOutlineMinusCircle
                    style={{ width: "30px", color: "red" }}
                  />
                ) : (
                  <CheckBox type={"checkbox"}></CheckBox>
                )}
                <TaskContent>임시 테스트</TaskContent>
                <IconBox>
                  {star ? (
                    <AiTwotoneStar
                      style={{ color: "#075995" }}
                      onClick={onClickStar}
                    />
                  ) : (
                    <AiOutlineStar onClick={onClickStar} />
                  )}
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </IconBox>
              </TaskBox>
            ) : (
              ""
            )}
          </CompleteBox>
        </ListBox>
      </Container>
    </>
  );
};

export default TodoList;
