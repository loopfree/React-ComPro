import {
  Link as ChakraLink,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import meetingImage from "../../src/assets/shake-hand.webp";

const ServiceInfo = () => {
  return (
    <Box>
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "25vh", md: "30vh", lg: "60vh" }}
          bgImage={`url(${meetingImage})`}
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "32vh", md: "23vh", lg: "60vh" }}
          px={{ base: 10, md: 24, lg: 24 }}
          py={{ base: 4, md: 8, lg: 14 }}
        >
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="purple.400"
            fontWeight="500"
            textAlign="justify"
          >
            What do we offer?
          </Text>
          <Heading
            pb={{ base: 2, md: 4, lg: 4 }}
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          >
            Take Your Company to the Next Level
          </Heading>
          <Text
            pb={4}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="gray.500"
            fontWeight="500"
            textAlign="justify"
          >
            Our Project Manager as a Service and Developer as a Service are both
            guaranteed to boost your company to the next level. With our
            expertise, your company will have a balance foundation to grow and
            succeed in today's market.
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
                Contact Us
              </ChakraLink>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ServiceInfo;
