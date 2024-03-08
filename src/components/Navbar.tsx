import { Box, Flex, Link, Image } from "@chakra-ui/react";
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
          <Link
            href="#"
            color="purple.400"
            fontSize="3xl"
            fontWeight="500"
            fontFamily="Tektur"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            XcuteProject
          </Link>
        </Flex>

        <Flex>
          <Link
            href="#"
            color="purple.400"
            mr={{ base: 6, md: 6, lg: 4 }}
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            About
          </Link>
          <Link
            href="#"
            color="purple.400"
            mr={{ base: 6, md: 6, lg: 4 }}
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            Services
          </Link>
          <Link
            href="#"
            color="purple.400"
            fontWeight="600"
            fontFamily="Source Sans Pro"
          >
            Teams
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
