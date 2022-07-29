import { React, useState } from 'react';
import styled from 'styled-components';
import {AiFillCaretUp} from "react-icons/ai";
import { AiFillCaretDown, AiOutlineDoubleRight } from "react-icons/ai";
import { NavBarBox, NavLink } from '../NavBar';
import TeamProfile from '../TeamProfile';
import { useNavigate } from "react-router-dom";


// 중간에 박스들을 중앙에 배열하기 위한 Container
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* hr 태그 css */
  .tophr {
    width: 1464px;
    height: 0px;

    border: 1px solid #706363;
  }

`;

// '목록' 버튼 넣을 컨테이너
const ListButtonContainer = styled.div`
  width: 1216px;
  height: 46px;

  margin-top: 17px;
  
  display: flex;
  align-items: right;
  justify-content: right;
`;

// '목록' 버튼
const ListButton =styled.div`
  width: 64px;
  height: 46px;

  border: 1px solid #00000040;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`;

// '프로젝트' 텍스트
const ProjectText =styled.div`
  font-size: 24px;
  font-weight: 400;

  margin-top: 13px;

  font-family: "Noto Sans KR";
  font-style: normal;
`;

// 파일 정보 박스
const FileInfoBox =styled.div`
  width: 1216px;
  height: 90px;

  margin-top: 3px;
  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// 프로젝트 텍스트를 왼쪽 정렬하기 위한 Container
const TextContainer = styled.div`
  width: 1216px; 

  margin-bottom: 5px;

  display: flex;
  justify-content: left;
`;

// 프로젝트 이름 텍스트
const ProjectName =styled.div`
  height: 35px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-size:24px;
  font-weight: 400px;

  margin-left: 60px;
`;

// Committer 랑 CommitTime 을 담는 박스
const CommitBox = styled.div`
  height: 35px;

  margin-right: 49px;
  border-radius : 10px;
  display: flex;
  align-items: space-between;

`;

// 파일 올린 사람(Committer) 이름
const Committer = styled.div`
  font-size: 24px;
  font-weight: 400;

  font-family: "Noto Sans KR";
  font-style: normal;

  margin-right: 41px;
`;

// 파일 올린 날짜, 시간 (CommitTime)
const CommitTime = styled.div`
  font-size: 24px;
  font-weight: 400;

  font-family: "Noto Sans KR";
  font-style: normal;

`;

// 파일 설명 박스
const AboutFileBox =styled.div`
  width: 1216px;
  height: 69px;

  box-sizing: border-box;
  margin-top: 13px;
  padding-left: 58px;
  border-radius : 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 16px;

  display: flex;
  align-items: center;
`;


// 'Branch' 텍스트
const BranchText = styled.div`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #075995;

margin: 13px 196px 0px 8px;
`;

// 'Version' 텍스트
const VersionText = styled.div`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #075995;

margin-top: 13px;
`;

// 메인 박스들이 들어있는 Container
const MainContainer =styled.div`
  width: 1210px;

  display: flex;

`;

// *******************************************************버전 박스*********************************************************
const VersionBox = styled.div`
  width: 968px;
  height: 685px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 버전 몇인지 표시하는 텍스트와 업로드 버튼 Container
const SmallContainer = styled.div`
  width: 950px;
  height: 45px;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

// 버전 몇인지 표시하는 텍스트
const VersionNum = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Noto Sans KR';
  font-style: normal;
  color: #706363;

  margin-top: 10px;
  margin-left: 21px;
`;

// 파란색 업로드 버튼
const UploadButton =styled.img`
  width: 46px;
  height: 46px;
`;

// 파일들을 담을 Container
const FileContainer = styled.div`
  width: 968px;

  margin-top: 34px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 올라가있는 파일 박스
const File = styled.div`
  width: 908px;
  height: 90px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
`;

// 파일명
const FileName = styled.div`
  width: 500px;

  font-size: 16px;
  font-weight: 700;
  font-family: 'Noto Sans KR';
  font-style: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 파일명 밑에 comment
const Comment = styled.div`
  width: 500px; 
  
  font-size: 12px;
  font-weight: 400;
  font-family: 'Noto Sans KR';
  font-style: normal;
  color: #075995;

  margin-top: 7px;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 파일명 옆에 있는 committer
const SmallCommitter = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  margin-right: 50px;
`;

// 작은 커밋 날짜
const SmallCommitDay = styled.div`
  font-size: 12px;  
  font-weight: 400;
  font-family: 'Noto Sans KR';
  font-style: normal;

  margin-right : 20px;
`;


// 작은 커밋한 시간
const SmallCommitTime = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

// 파일명이랑 comment 를 담는 컨테이너
const TinyContainer = styled.div`
  margin-right: auto;
  margin-left: 44px;
  margin-top: 27px;

  display: flex;
  flex-direction: column;
  align-items: left;
`;

// 커밋 시간정보 컨테이너
const TinyCommitTimeContainer = styled.div`
  display: flex;
`;

// 커밋 committer 와 커밋 시간정보 컨테이너를 담는 컨테이너
const TinyCommitInfoContainer = styled.div`
  
  margin-left: auto;
  margin-right: 40px;
  display: flex;
  align-items: center;

`;
// ******************************************************브랜치 박스*********************************************************

// 브랜치 박스
const BranchBox = styled.div`
  width: 224px;
  height: 685px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-right: 19px;
`;

// 플러스 버튼
const Plus = styled.div`
  width: 20px;
  height: 20px;

  background-image: url('/img/PlusButton.png');
  background-size: cover;
`;

// 플러스 버튼을 왼쪽에 위치시키기 위한 컨테이너
const PlusContainer = styled.div`
  height: 22px;

  display: flex;
  justify-content: right;

  margin-top: 22px;
  margin-right: 24px;
`;

// 버전들 담는 컨테이너
const SubContainer = styled.div`
  width: 224px;

  padding-right: 10px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

// 버전
const Version = styled.div`
  height: 26px;
  font-size: 18px;
  font-weight: 400px;

  /* 커서 올렸을 때 색깔 바뀌게 만들기 */
  &:hover {
    background-color: #f0f8ff;
    cursor: pointer;
    border-right: solid 5px #075995;
  }
`;

const FirstVersion = styled.div`
  height: 26px;
  font-size: 18px;
  font-weight: 400px;
  margin-left: 19px;
  color: #075995;
`;

// 버전 넘버와 화살표 컨테이너
const MicroContainer = styled.div`
  display: flex;
  align-items: center;
  
  /* 커서 올렸을 때 색깔 바뀌게 만들기 */
  &:hover {
    background-color: #f0f8ff;
    cursor: pointer;
    border-right: solid 5px #075995;
  }
`;



const VerTool = () => {

  const [updown, setUpdown] = useState(false);  // false일 때는 닫혀 있다가 true가 되면 하단에 열림.
  const TriUPdown = () => {
    setUpdown(updown => !updown);
  }

  const navigate = useNavigate();
  const goToMyPage = () =>{
    navigate('/userpage');
  }
  const goToTeampage = () =>{
    navigate('/teampage');
  }

  return (
    <div>
      <TeamProfile />
      <hr className='tophr'></hr>
      <MiddleContainer>
        <NavBarBox>
          <NavLink onClick={goToMyPage}>마이페이지</NavLink>
          <NavLink><AiOutlineDoubleRight /></NavLink>
          <NavLink onClick={goToTeampage}>멋쟁이사자처럼 인하대학교 해커톤 이성팀</NavLink>
          <NavLink><AiOutlineDoubleRight /></NavLink>
          <NavLink style={{color:'#075995'}}>프로젝트</NavLink>
        </NavBarBox>
        <ListButtonContainer>
          <ListButton>목록</ListButton>
        </ListButtonContainer>
        <TextContainer>
          <ProjectText>프로젝트</ProjectText>
        </TextContainer>
        <FileInfoBox>
          <ProjectName>Assemble 기획 아이디어</ProjectName>
          <CommitBox>
            <Committer>한재필</Committer>
            <CommitTime>2022-07-27 오후 4:58 </CommitTime>
          </CommitBox>
        </FileInfoBox>
    <AboutFileBox>Assemble 디자인입니다. 배경이미지 제작 완료했습니다.</AboutFileBox>
    <TextContainer>
      <BranchText>Branch</BranchText>
      <VersionText>Version</VersionText>
    </TextContainer>
    <MainContainer>
      {/* 브랜치 박스 */}
      <BranchBox>
      <PlusContainer><Plus /></PlusContainer>
      <SubContainer>
        <MicroContainer>
        <FirstVersion>Version </FirstVersion>
        {updown ? 
        (<AiFillCaretUp style={{color:'#075995'}} onClick={TriUPdown}></AiFillCaretUp>)
        : (<AiFillCaretDown style={{color:'#706363'}} onClick={TriUPdown}></AiFillCaretDown>)
        }
        </MicroContainer>
        {updown ? (
          <>
          <Version style={{marginLeft:'50px', color:'#075995'}}>version 1 <AiFillCaretUp /></Version>
          <Version style={{marginLeft:'81px', color:'#706363'}}>version 1.1<AiFillCaretDown /></Version>
          <Version style={{marginLeft:'81px', color:'#075995'}}>version 1.2 <AiFillCaretUp /></Version>
          <Version style={{marginLeft:'112px', color:'#706363'}}>version 1.2.1</Version>
          <Version style={{marginLeft:'112px', color:'#075995'}}>version 1.2.2</Version>
          <Version style={{marginLeft:'112px', color:'#706363'}}>version 1.2.3</Version>
          <Version style={{marginLeft:'81px', color:'#706363'}}>version 1.3 <AiFillCaretDown /></Version>
          <Version style={{marginLeft:'50px', color:'#706363'}}>version 2 <AiFillCaretDown /></Version>
          <Version style={{marginLeft:'50px', color:'#706363'}}>version 3 <AiFillCaretDown /></Version>
          </>): ("")}
        
        
      </SubContainer>
      </BranchBox>
      {/* 버전 박스 */}
      <VersionBox>
        <SmallContainer>
          <VersionNum>version 1.2.2</VersionNum>
          <UploadButton src={"/img/UploadButton.png"} />
        </SmallContainer>
        <FileContainer>
         <a href='https://github.com/jschan0911/OOP1/files/9221853/1.xlsx'>
         <File>
            <TinyContainer>
                <FileName>Assemble 기획 아이디어 .txt</FileName>
                <Comment>Assemble 디자인입니다. 배경이미지 제작 완료했습니다.</Comment>
              </TinyContainer>
              <SmallContainer>
                <TinyCommitInfoContainer>
                  <SmallCommitter>최재오</SmallCommitter>
                  <TinyCommitTimeContainer>
                    <SmallCommitDay> 2022-07-27</SmallCommitDay>
                    <SmallCommitTime>오전 4:43</SmallCommitTime>
                  </TinyCommitTimeContainer>
                </TinyCommitInfoContainer>
              </SmallContainer>
          </File>
         </a>
         <a href='https://github.com/jschan0911/OOP1/files/9221854/default.docx'>
          <File>
            <TinyContainer>
                <FileName>Assemble 기획 아이디어 .txt</FileName>
                <Comment>심심해서 추가해봤습니다.</Comment>
              </TinyContainer>
              <SmallContainer>
                <TinyCommitInfoContainer>
                  <SmallCommitter>이성</SmallCommitter>
                  <TinyCommitTimeContainer>
                    <SmallCommitDay>2022-07-25</SmallCommitDay>
                    <SmallCommitTime>오후 5:23</SmallCommitTime>
                  </TinyCommitTimeContainer>
                </TinyCommitInfoContainer>
              </SmallContainer>
          </File>
         </a>
         <a href='https://github.com/jschan0911/OOP1/files/9221855/icon.zip'>
          <File>
            <TinyContainer>
                <FileName>Assemble 기획 아이디어 .txt</FileName>
                <Comment>로그인 페이지 제작했습니다.</Comment>
              </TinyContainer>
              <SmallContainer>
                <TinyCommitInfoContainer>
                  <SmallCommitter>이성</SmallCommitter>
                  <TinyCommitTimeContainer>
                    <SmallCommitDay>2022-07-20</SmallCommitDay>
                    <SmallCommitTime>오전 1:43 </SmallCommitTime>
                  </TinyCommitTimeContainer>
                </TinyCommitInfoContainer>
              </SmallContainer>
          </File>
         </a>
        </FileContainer>
      </VersionBox>
    </MainContainer>
  </MiddleContainer> 
    </div>
  );
};

export default VerTool;