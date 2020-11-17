import React from 'react';
import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Search from './Search'

const Navbar = () => {
  return (
    //hien thi chuyen muc
    <Nav>
      <NavLink to='/'>
        <img src={require('../../images/logo1.PNG')} alt='logo' />
      </NavLink>

      <NavMenu>
        <NavLink to='/' activeStyle>
          Trang Chủ
          </NavLink>

        <NavLink to='/diadiemDl' activeStyle>
          Địa Điểm Du Lịch
          </NavLink>

        <NavLink to='/diadiemAn' activeStyle>
          Địa Điểm Ăn Uống
          </NavLink>

        <NavLink to='/camnangDl' activeStyle>
          Cẩm Nang Du Lịch
          </NavLink>

        <NavLink to='/sign-up' activeStyle>
          Đăng Ký
          </NavLink>

          <Search/>

      </NavMenu>

      <NavBtn>
        <NavBtnLink to='/signin'>Đăng Nhập</NavBtnLink>
      </NavBtn>
    </Nav>

  );
};

export default Navbar;
