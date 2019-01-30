// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink }  from 'reactstrap'
const Header = () => (
  <Navbar color="dark" light>
          <NavbarBrand href="/" className="mr-auto" style={{color: '#f1f1f1'}}>Todo</NavbarBrand>
</Navbar>
);

export default Header;
