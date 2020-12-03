import React, { useState } from 'react'
import { Nav as NavB } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
  FaHome, FaUserAlt
} from "react-icons/fa"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import { IoIosPeople, IoMdCart, IoMdBriefcase } from "react-icons/io"

// import { MdFormatAlignJustify } from "react-icons/md"
// import { IoIosPeople, IoMdCart, IoMdBriefcase } from "react-icons/io"

import '../../../styles/HeaderSidenav.css'
import '../../../styles/Header.css'


const Header = (props) => {
  const [expanded, setExpanded] = useState(true)
  return (
    // <div>123</div>
    <SideNav expanded={expanded} onToggle={(e) => setExpanded(e)}>
      <SideNav.Toggle />
      <SideNav.Nav >
        <LinkContainer to="/admin/chapters" exact>
          <NavItem eventKey="">
            <NavIcon>
              <IoMdCart />
            </NavIcon>
            <NavText>
              <div className="sidebar-nav">
                  Quản lý chương
              </div>
            </NavText>
          </NavItem>
        </LinkContainer>


      </SideNav.Nav>
    </SideNav>
  )
}
export default Header;