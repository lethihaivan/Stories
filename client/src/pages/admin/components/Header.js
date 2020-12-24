import React, { useState } from 'react'
import { Nav as NavB } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
  FaHome, FaUserAlt
} from "react-icons/fa"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import { IoIosBook, IoMdBookmarks, IoIosContacts } from "react-icons/io"
// import { MdFormatAlignJustify } from "react-icons/md"
// import { IoIosPeople, IoMdCart, IoMdBriefcase } from "react-icons/io"

import '../../../styles/HeaderSidenav.css'
import '../../../styles/Header.css'


const Header = (props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    // <div>123</div>
    <SideNav expanded={expanded} onToggle={(e) => setExpanded(e)}>
      <SideNav.Toggle />
      <SideNav.Nav >

        <LinkContainer to="/admin/users" exact>
          <NavItem eventKey="">
            <NavIcon style={{ marginRight: "10px" }}>
              <IoIosContacts />
            </NavIcon>
            <NavText>
              <div className="sidebar-nav">
                Danh sách người dùng
              </div>
            </NavText>
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/admin/chapters" exact>
          <NavItem eventKey="">
            <NavIcon style={{ marginRight: "10px" }}>
              <IoMdBookmarks />
            </NavIcon>
            <NavText>
              <div className="sidebar-nav">
                Quản lý chương
              </div>
            </NavText>
          </NavItem>
        </LinkContainer>

        <LinkContainer to="/admin/stories" exact>
          <NavItem eventKey="">
            <NavIcon style={{ marginRight: "10px" }}>
              <IoIosBook />
            </NavIcon>
            <NavText>
              <div className="sidebar-nav">
                Quản lý truyện
              </div>
            </NavText>
          </NavItem>
        </LinkContainer>

      </SideNav.Nav>
    </SideNav>
  )
}
export default Header;
