import React from 'react';
import styled from 'styled-components';
import LogInHeader from '../component/LogInHeader';
import TeamProfile from '../component/TeamProfile';
import { NavBarBox, NavLink } from '../component/NavBar';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import TeamPageComponent from '../component/TeamPageCompoent/TeamPageComponent';


const TeamPage = () => {

  const navigate = useNavigate();
  const goToMypage = () =>{
    navigate('/userpage');
  }

  return (

    <div>
      <LogInHeader />
      <TeamProfile />
       <NavBarBox>
        <NavLink onClick={goToMypage}>마이페이지</NavLink>
        <NavLink><AiOutlineDoubleRight /></NavLink>
        <NavLink style={{color:'#075995'}}>멋쟁이사자처럼 인하대학교 해커톤 이성팀</NavLink>
      </NavBarBox>
      <TeamPageComponent />
   </div>
  );
};

export default TeamPage;