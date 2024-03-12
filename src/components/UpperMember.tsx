import { SimpleGrid, Box, Flex, Text, Heading } from "@chakra-ui/react";
import chairMan from "../../src/assets/chairman.webp";
import ceo from "../../src/assets/chief-executive-officer.webp";
import cmo from "../../src/assets/chief-marketing-officer.webp";
import coo from "../../src/assets/chief-operation-officer.webp";

const UpperMember = () => {
  return (
    <Box mb={{ base: 5, md: 5, lg: 8 }}>
      <Flex
        px={{ base: "10px", md: 24, lg: 24 }}
        pt={{ base: 0, md: 2, lg: 0 }}
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          color="purple.400"
          fontWeight="500"
          textAlign="justify"
        >
          Introducing
        </Text>
      </Flex>
      <Flex px={{ base: "10px", md: 24, lg: 24 }} justifyContent="center">
        <Heading
          pb={{ base: 0, md: 4, lg: 8 }}
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
        >
          Xcute's Leaders
        </Heading>
      </Flex>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 4 }}
        gap={12}
        mx={{ base: 10, md: 24, lg: 24 }}
      >
        <Box>
          <Box
            w="100%"
            h={{ base: "25vh", md: "35vh", lg: "60vh" }}
            bgImage={`url(${chairMan})`}
            bgSize="cover"
            bgPosition="center"
          ></Box>
          <Flex alignItems="center" direction="column" pt={5}>
            <Text color="purple.400" fontSize="20px">
              Chairman
            </Text>
            <Heading textAlign="center" display={{ base: "none", md: "block" }}>
              Ethan Mayor
            </Heading>
            <Heading textAlign="center" display={{ base: "block", md: "none" }}>
              Ethan M.
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Box
            w="100%"
            h={{ base: "25vh", md: "35vh", lg: "60vh" }}
            bgImage={`url(${ceo})`}
            bgSize="cover"
            bgPosition="center"
          ></Box>
          <Flex alignItems="center" direction="column" pt={5}>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "none", md: "block" }}
            >
              Cheif Executive Officer
            </Text>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "block", md: "none" }}
            >
              CEO
            </Text>
            <Heading textAlign="center">Wei Chen</Heading>
          </Flex>
        </Box>
        <Box>
          <Box
            w="100%"
            h={{ base: "25vh", md: "35vh", lg: "60vh" }}
            bgImage={`url(${cmo})`}
            bgSize="cover"
            bgPosition="center"
          ></Box>
          <Flex alignItems="center" direction="column" pt={5}>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "none", md: "block" }}
            >
              Cheif Marketing Officer
            </Text>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "block", md: "none" }}
            >
              CMO
            </Text>
            <Heading textAlign="center">Isabella Rodri</Heading>
          </Flex>
        </Box>
        <Box>
          <Box
            w="100%"
            h={{ base: "25vh", md: "35vh", lg: "60vh" }}
            bgImage={`url(${coo})`}
            bgSize="cover"
            bgPosition="center"
          ></Box>
          <Flex alignItems="center" direction="column" pt={5}>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "none", md: "block" }}
            >
              Cheif Operation Officer
            </Text>
            <Text
              color="purple.400"
              fontSize="20px"
              display={{ base: "block", md: "none" }}
            >
              COO
            </Text>
            <Heading textAlign="center">Mai Nguyen</Heading>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default UpperMember;
