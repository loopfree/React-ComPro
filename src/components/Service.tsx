import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import projectTeam from "../../src/assets/project-team.png";

const Service = () => {
  return (
    <Box>
      <Flex direction={{ base: "column", md: "column", lg: "row-reverse" }}>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "25vh", md: "30vh", lg: "60vh" }}
          bgImage={`url(${projectTeam})`}
          bgSize="cover"
          bgPosition="center"
        ></Box>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "37vh", md: "25vh", lg: "60vh" }}
          px={{ base: 10, md: 24, lg: 24 }}
          py={{ base: 4, md: 8, lg: 24 }}
        >
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="purple.400"
            fontWeight="500"
            textAlign="justify"
          >
            What do we do?
          </Text>
          <Heading
            pb={{ base: 2, md: 4, lg: 4 }}
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          >
            Services
          </Heading>
          <Text
            pb={4}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="gray.500"
            fontWeight="500"
            textAlign="justify"
          >
            Xcute offers a comprehensive suite of services in order to execute
            your project faster. Our seasonal project managers and developers
            are ready to bring your needs to life and are also guaranteed to
            meet your timelines, budgets, as well as milestones or deliverables
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
              Learn More
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Service;
