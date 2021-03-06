import { useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MenuItem = ({ children, isLast, to = "/" }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      p={6}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          Tanner Jensen Art
        </Text>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/imageGallery/InkIllustration">
            Ink Illustrations
          </MenuItem>
          <MenuItem to="/imageGallery/Comic">Comics</MenuItem>
          <MenuItem to="/storyboards" isLast>
            Storyboards
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
