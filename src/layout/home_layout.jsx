import React from 'react'
import { Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from 'reactstrap';

import routes from "routes.js";

const Home = (props) => {

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.view}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getNavLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
            <NavItem key={key} >
                <NavLink 
                  tag={Link} 
                  to={prop.layout + prop.path}
                >
                  {prop.name}
                </NavLink>
            </NavItem>
        );
      } else {
        return null;
      }
    })
  }

  return (
    <>
      <div className="layout_home">
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">SacHacks 2020</NavbarBrand>
            <Nav className="mr-auto" navbar>
              {getNavLinks(routes)}
            </Nav>
            <NavbarText>Simple Text</NavbarText>      
        </Navbar>
      </div>

      <div className="main-content">
        <Container>
          <Switch>
            {getRoutes(routes)}
          </Switch>
        </Container>
      </div>

    </>
  )

}

export default Home