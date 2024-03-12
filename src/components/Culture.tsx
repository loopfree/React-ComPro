import {
  Link as ChakraLink,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import teamGathering from "../../src/assets/gathering.webp";

const Culture = () => {
  return (
    <Box>
      <Flex direction={{ base: "column", md: "column", lg: "row-reverse" }}>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "25vh", md: "30vh", lg: "60vh" }}
          bgImage={`url(${teamGathering})`}
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "30vh", md: "30vh", lg: "60vh" }}
          px={{ base: 10, md: 24, lg: 24 }}
          py={{ base: 4, md: 10, lg: 14 }}
        >
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="purple.400"
            fontWeight="500"
            textAlign="justify"
          >
            How is our work environtment?
          </Text>
          <Heading
            pb={{ base: 2, md: 4, lg: 4 }}
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          >
            Culture
          </Heading>
          <Text
            pb={4}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="gray.500"
            fontWeight="500"
            textAlign="justify"
          >
            At XcuteProject, our culture is a vibrant tapestry woven with
            innovation, collaboration, and an unwavering dedication to
            excellence. We foster an environment where creativity flourishes,
            emphasizing the power of teamwork and a customer-centric approach.
            We thrive on adaptability, embracing change as an opportunity for
            growth, and prioritize continuous learning.
          </Text>
          <Flex justifyContent={{ base: "center", md: "left", lg: "left" }}>
            <Button
              px={{ base: 14, md: 14, lg: 14 }}
              py={{ base: 2, md: 4, lg: 4 }}
              fontSize={{ base: "12px", md: "16px", lg: "18px" }}
              bg="purple.400"
              color="white"
              _hover={{
                bg: "purple.600",
              }}
              variant="solid"
            >
              <ChakraLink
                as={RouterLink}
                to="/teams"
                _hover={{ textDecoration: "none" }}
              >
                Contact Our Team
              </ChakraLink>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Culture;
