import Header from "./Header";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Container maxW="container.lg" p="2%">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
