import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import officeImage from "../../src/assets/building.webp";
import whiteDoor from "../../src/assets/door.webp";

const AboutUs = () => {
  return (
    <>
      <Flex
        direction="row"
        mx={24}
        display={{ base: "none", md: "none", lg: "flex" }}
        my={8}
      >
        <Box w="33%" h="70vh" pr={16}>
          <Flex direction="column">
            <Box w="100%" h="20vh" pt={5}>
              <Heading fontSize={{ base: "20px", md: "30px", lg: "40px" }}>
                About-
              </Heading>
              <Heading
                pb={{ base: 2, md: 4, lg: 4 }}
                fontSize={{ base: "20px", md: "30px", lg: "40px" }}
              >
                Company.
              </Heading>
            </Box>
            <Box
              w="47vh"
              h="47vh"
              bgImage={`url(${officeImage})`}
              bgSize="cover"
              bgPosition="center"
            ></Box>
          </Flex>
        </Box>
        <Box w="67%">
          <Flex direction="column">
            <Box h="35vh">
              <Flex direction="row">
                <Flex w="50%" h="35vh" alignItems="end">
                  <Box my={2}>
                    <Text
                      fontSize={{ base: "12px", md: "16px", lg: "24px" }}
                      color="purple.400"
                      fontWeight="500"
                      textAlign="justify"
                    >
                      Company Overview
                    </Text>
                  </Box>
                </Flex>
                <Box w="50%">
                  <Flex justifyContent="flex-end">
                    <Box
                      w="25vh"
                      h="33vh"
                      bgImage={`url(${whiteDoor})`}
                      bgSize="cover"
                      bgPosition="center"
                    ></Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box h="22vh">
              <Text
                pb={4}
                fontSize={{ base: "12px", md: "16px", lg: "18px" }}
                color="gray.500"
                fontWeight="500"
                textAlign="justify"
                style={{ wordSpacing: "5px" }}
              >
                Embark on a captivating journey with XcuteProject, tracing our
                roots from a vision in 2000 to the forefront of innovation in
                human and IT solutions. Our story is one of determination,
                growth, and adaptability, reflecting our commitment to
                pioneering advancements that have shaped the industry. From
                humble beginnings to a leadership position, we invite you to
                explore the milestones and pivotal moments that define Xcute's
                rich history.
              </Text>
            </Box>
            <Box h="10vh">
              <Flex direction="row" gap={16}>
                <Box>
                  <Flex direction="column">
                    <Text
                      fontSize={{ base: "12px", md: "16px", lg: "32px" }}
                      color="purple.400"
                      fontWeight="700"
                      textAlign="justify"
                    >
                      2000
                    </Text>
                    <Text fontSize="16px">Founded</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Text
                      fontSize={{ base: "12px", md: "16px", lg: "32px" }}
                      color="purple.400"
                      fontWeight="700"
                      textAlign="justify"
                    >
                      98
                    </Text>
                    <Text fontSize="16px">Clients</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Text
                      fontSize={{ base: "12px", md: "16px", lg: "32px" }}
                      color="purple.400"
                      fontWeight="700"
                      textAlign="justify"
                    >
                      213
                    </Text>
                    <Text fontSize="16px">Projects Done</Text>
                  </Flex>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Text
                      fontSize={{ base: "12px", md: "16px", lg: "32px" }}
                      color="purple.400"
                      fontWeight="700"
                      textAlign="justify"
                    >
                      83
                    </Text>
                    <Text fontSize="16px">5-Stars Review</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row" }}
        display={{ base: "flex", md: "flex", lg: "none" }}
        mx={{ base: 10, md: 24 }}
        mt={5}
      >
        <Box w={{ base: "100%", md: "40%" }} h={{ base: "20vh", md: "30vh" }}>
          <Box
            w={{ base: "100%", md: "20vh" }}
            h={{ base: "100%", md: "20vh" }}
            bgImage={`url(${officeImage})`}
            bgSize="cover"
            bgPosition="center"
            my={{ base: 0, md: 12 }}
          ></Box>
        </Box>
        <Box
          w={{ base: "100%", md: "60%" }}
          h={{ base: "25vh", md: "30vh" }}
          pt={6}
          pl={{ base: 0, md: 10 }}
        >
          <Text
            fontSize={{ base: "12px", md: "16px", lg: "24px" }}
            color="purple.400"
            fontWeight="500"
            textAlign="justify"
          >
            Company Overview
          </Text>
          <Text
            pb={4}
            fontSize={{ base: "12px", md: "16px", lg: "18px" }}
            color="gray.500"
            fontWeight="500"
            textAlign="justify"
          >
            Embark on a captivating journey with XcuteProject, tracing our roots
            from a vision in 2000 to the forefront of innovation in human and IT
            solutions. Our story is one of determination, growth, and
            adaptability, reflecting our commitment to pioneering advancements
            that have shaped the industry. From humble beginnings to a
            leadership position, we invite you to explore the milestones and
            pivotal moments that define Xcute's rich history.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default AboutUs;
