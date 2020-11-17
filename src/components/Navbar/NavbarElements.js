// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

//thanh mau navbar 
export const Nav = styled.nav`
  background: #171515;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 3);
  z-index: 10;
  
  /* Third Nav */
  /* justify-content: flex-start; */
`;
//dinh dang mau cho cac link chuyeen muc
export const NavLink = styled(Link)`

  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    color: #15cdfc;
    
  }
 
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;
//   background: red;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

//khung de dung cac chuyen muc
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  /* Second Nav */
  /* margin-right: 24px; */
 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
//khung de dung cac link button
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
//dinh dang cho cac buttom link 
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
