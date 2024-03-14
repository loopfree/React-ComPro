import { Text, Box, SimpleGrid, Flex, Divider } from "@chakra-ui/react";
import { CiCircleCheck } from "react-icons/ci";

const Pricing = () => {
  return (
    <SimpleGrid
      mt={{ base: 7, md: 7, lg: 12 }}
      columns={{ base: 1, md: 2, lg: 4 }}
      mx={{ base: 10, md: 24, lg: 24 }}
      gap={{ base: 20, md: 25, lg: 28 }}
      mb={{ base: 0, md: 10, lg: 0 }}
    >
      <Box
        w="100%"
        h={{ base: "50vh", md: "30vh", lg: "50vh" }}
        border="solid black 2px"
        borderRadius="10px"
        borderColor="gray.400"
      >
        <Box mt={7} mx={4}>
          <Text textAlign="center" fontSize={32} fontWeight="bold">
            <Text as="sup">$</Text>
            1,000
            <Text fontSize={14} as="sub">
              /mo
            </Text>
          </Text>
          <Divider my={4} borderColor="gray.600" borderWidth="1px" />
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Frontend Developer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>2 Backend Developers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 UI/UX Designer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Handle 1 Projects</Text>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h={{ base: "50vh", md: "30vh", lg: "50vh" }}
        border="solid black 2px"
        borderRadius="10px 0 10px 10px"
        borderColor="purple.400"
      >
        <Flex justifyContent="right">
          <Box
            paddingX={2}
            paddingY={1}
            bgColor="purple.400"
            borderRadius="0 0 0 10px"
            fontSize="0.8rem"
            color="white"
          >
            POPULAR
          </Box>
        </Flex>
        <Box mx={4}>
          <Text textAlign="center" fontSize={32} fontWeight="bold">
            <Text as="sup">$</Text>
            10,000
            <Text fontSize={14} as="sub">
              /mo
            </Text>
          </Text>
          <Divider my={4} borderColor="purple.600" borderWidth="1px" />
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Project Manager</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Tech Lead</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 UI/UX Designer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>5 Software Developers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 DevOps Engineer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 QA Engineer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Handle 5 Projects</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Developer of your choice</Text>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h={{ base: "50vh", md: "30vh", lg: "50vh" }}
        border="solid black 2px"
        borderRadius="10px"
        borderColor="gray.400"
      >
        <Box mt={7} mx={4}>
          <Text textAlign="center" fontSize={32} fontWeight="bold">
            <Text as="sup">$</Text>
            12,000
            <Text fontSize={14} as="sub">
              /mo
            </Text>
          </Text>
          <Divider my={4} borderColor="gray.600" borderWidth="1px" />
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Project Manager</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Tech Lead</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 UI/UX Designer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>6 Software Developers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 DevOps Engineer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>2 QA Engineers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Handle 7 Projects</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Developer of your choice</Text>
          </Flex>
        </Box>
      </Box>
      <Box
        w="100%"
        h={{ base: "50vh", md: "30vh", lg: "50vh" }}
        border="solid black 2px"
        borderRadius="10px"
        borderColor="gray.400"
      >
        <Box mt={7} mx={4}>
          <Text textAlign="center" fontSize={32} fontWeight="bold">
            <Text as="sup">$</Text>
            20,000
            <Text fontSize={14} as="sub">
              /mo
            </Text>
          </Text>
          <Divider my={4} borderColor="gray.600" borderWidth="1px" />
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Project Manager</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Frontend Lead</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 Backend Lead</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 UI/UX Designer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>8 Software Developers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>1 DevOps Engineer</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>3 QA Engineers</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Handle 10 Projects</Text>
          </Flex>
          <Flex direction="row" alignItems="center">
            <CiCircleCheck />
            <Text ml={2}>Developer of your choice</Text>
          </Flex>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Pricing;
