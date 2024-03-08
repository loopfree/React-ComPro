import { Box, Flex, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../src/assets/logo.webp";

const Navbar = () => {
  return (
    <Box
      bg="white"
      p={4}
      pl={24}
      pr={24}
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="xl"
    >
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex dir="row">
          <Image
            mr={2}
            src={logo}
            alt="XcuteProject Logo"
            boxSize="50px"
            display={{ base: "none", md: "block", lg: "block" }}
          />
          <ChakraLink
            as={RouterLink}
            to="/"
            color="purple.400"
            fontSize="3xl"
            fontWeight="500"
            fontFamily="Tektur"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            XcuteProject
          </ChakraLink>
        </Flex>

        <Flex>
          <ChakraLink
            as={RouterLink}
            to="/about"
            color="purple.400"
            mr={{ base: 6, md: 6, lg: 4 }}
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            About
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/services"
            color="purple.400"
            mr={{ base: 6, md: 6, lg: 4 }}
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            Services
          </ChakraLink>
          <ChakraLink
            as={RouterLink}
            to="/teams"
            color="purple.400"
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            Teams
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
