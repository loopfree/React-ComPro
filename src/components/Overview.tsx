import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import meetingImage from "../../src/assets/meeting.webp";

const Overview = () => {
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
          h={{ base: "45vh", md: "30vh", lg: "60vh" }}
          px={{ base: 10, md: 24, lg: 24 }}
          py={{ base: 4, md: 8, lg: 14 }}
        >
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="purple.400"
            fontWeight="500"
            textAlign="justify"
          >
            Who are we?
          </Text>
          <Heading
            pb={{ base: 2, md: 4, lg: 4 }}
            fontSize={{ base: "20px", md: "30px", lg: "40px" }}
          >
            Overview
          </Heading>
          <Text
            pb={4}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="gray.500"
            fontWeight="500"
            textAlign="justify"
          >
            Since its establishment in 2000, XcuteProject has consistently
            emerged as a trailblazer, specializing in groundbreaking human and
            IT solutions. Our diverse team of experts is passionately committed
            to achieving excellence in both project management and development.
            At Xcute, we cultivate a culture steeped in creativity,
            collaboration, and continuous learning, ensuring a fulfilling and
            enriching experience for both our dedicated team and valued clients.
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

export default Overview;
