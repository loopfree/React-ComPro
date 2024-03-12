import { SimpleGrid, Box, Flex, Text, Heading } from "@chakra-ui/react";
import MemberCard from "./MemberCard";
import { useState, useEffect } from "react";
import axios from "axios";

interface Members {
  name: {
    first: string;
    last: string;
  };
  registered: {
    age: number;
  };
  email: string;
  location: {
    country: string;
  };
  job?: string;
}

const XcuteTeam = () => {
  const [members, setMembers] = useState<Members[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <Box mt={7} mb={{ base: 5, md: 5, lg: 8 }}>
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
          Xcute's Family
        </Heading>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        mx={{ base: 10, md: 24, lg: 24 }}
        gap={12}
        mb={12}
      >
        {members.map((member, index) => (
          <MemberCard
            key={index}
            firstName={member.name.first}
            lastName={member.name.last}
            yearsOfExperience={member.registered.age}
            email={member.email}
            country={member.location.country}
            job={member.job}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default XcuteTeam;
