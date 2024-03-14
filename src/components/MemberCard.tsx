import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";

interface MemberCardProps {
  firstName: string;
  lastName: string;
  yearsOfExperience: number;
  email: string;
  country: string;
  job?: string;
}

function MemberCard({
  firstName,
  lastName,
  yearsOfExperience,
  email,
  country,
}: MemberCardProps) {
  let jobTitle = "";
  if (yearsOfExperience > 10) {
    jobTitle = "Tech Lead";
  } else if (yearsOfExperience > 5) {
    if (yearsOfExperience % 2 == 0) {
      jobTitle = "Marketing Lead";
    } else {
      jobTitle = "Operasional Lead";
    }
  } else {
    jobTitle = "Software Developer";
  }

  return (
    <Box
      w="100%"
      h={{ base: "20vh", md: "22vh", lg: "23vh" }}
      border="solid black 1px"
      borderRadius="10px"
      px="2em"
      py="1em"
    >
      <Heading
        fontSize={{ base: 20, md: 32, lg: 20 }}
        textDecoration="underline"
        textDecorationColor="purple.400"
        pb={1}
      >
        {jobTitle}
      </Heading>
      <Heading fontSize={{ base: 24, md: 36, lg: 24 }}>
        {firstName} {lastName}
      </Heading>
      <UnorderedList fontSize={{ base: 18, md: 28, lg: 16 }}>
        <ListItem>Came from {country}</ListItem>
        <ListItem>Have {yearsOfExperience} years of experience</ListItem>
        <ListItem>{email}</ListItem>
      </UnorderedList>
    </Box>
  );
}

export default MemberCard;
