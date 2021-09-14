import Header from "./Header";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container maxW="container.xl" p="2%">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
