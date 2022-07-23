import React from 'react';
import styled from 'styled-components';


// 팀 페이지 프사 있는 박스
const TeamInfoContainer = styled.div`
  width: 100%;

  margin-top: 72px;
  
  border-radius : 10px;
  
  display: flex;
  align-items: center;
  
`;

// 팀 프사 박스
const TeamPicBox =styled.div`
  width: 114px;
  height: 114px;

  border-radius: 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

  margin: 0px 0px 28px 146px;

  /* 팀 프사 어떻게 받을 지 몰라서 일단 색만 채워둠. */
  background-color: blue;

  /* hr 태그 css */
  .tophr {
    width: 1464px;
    height: 0px;

    border: 1px solid #706363;
  }
`;

// 팀 이름 텍스트
const TeamName = styled.div`
  font-size: 24px;
  font-weight: 700;

  margin-left: 40px;
  margin-bottom: 25px;
`;

// 중간에 박스들을 중앙에 배열하기 위한 Container
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

// 내비게이션 박스
const NavBox = styled.div`
  width: 1464px;
  height: 52px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  padding-left: 140px;

  margin-top: 6px;
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

// 브랜치 박스
const BranchBox = styled.div`
  width: 224px;
  height: 685px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-right: 19px;
`;

// 버전 박스
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
  width: 600px;

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
  width: 600px; 
  
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
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  marign-right : 20px;
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



const VerTool = () => {
  return (
    <div>
  <TeamInfoContainer>
        <TeamPicBox />
        <TeamName>팀 이름이 들어갈 겁니다.</TeamName>
      </TeamInfoContainer>
      <hr className='tophr'></hr>
      <MiddleContainer>
        <NavBox />
        <ListButtonContainer>
          <ListButton>목록</ListButton>
        </ListButtonContainer>
        <TextContainer>
          <ProjectText>프로젝트</ProjectText>
        </TextContainer>
        <FileInfoBox>
          <ProjectName>어셈블</ProjectName>
          <CommitBox>
            <Committer>이성</Committer>
            <CommitTime>오늘</CommitTime>
          </CommitBox>
        </FileInfoBox>
    <AboutFileBox>파일에 대한 설명이 들어갈 겁니다.</AboutFileBox>
    <TextContainer>
      <BranchText>Branch</BranchText>
      <VersionText>Version</VersionText>
    </TextContainer>
    <MainContainer>
      <BranchBox></BranchBox>
      <VersionBox>
        <SmallContainer>
          <VersionNum>version 1.1.1</VersionNum>
          <UploadButton src={"/img/UploadButton.png"} />
        </SmallContainer>
        <FileContainer>
         <File>
          <TinyContainer>
              <FileName>파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름파일이름</FileName>
              <Comment>commentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcomment</Comment>
            </TinyContainer>
            <SmallContainer>
              <TinyCommitInfoContainer>
                <SmallCommitter>소리성</SmallCommitter>
                <TinyCommitTimeContainer>
                  <SmallCommitDay>어제</SmallCommitDay>
                  <SmallCommitTime>오후 3시</SmallCommitTime>
                </TinyCommitTimeContainer>
              </TinyCommitInfoContainer>
            </SmallContainer>
         </File>
         <File />
         <File />
        </FileContainer>
      </VersionBox>
    </MainContainer>
  </MiddleContainer> 
    </div>
  );
};

export default VerTool;