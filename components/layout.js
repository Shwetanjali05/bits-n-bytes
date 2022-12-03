import React from "react";
import Header from "./header";
import { Container } from "semantic-ui-react";

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default Layout;