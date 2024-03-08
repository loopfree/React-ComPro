import { Text, Box, Center, Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      bg={{ base: "purple.400" }}
      p={4}
      h={{ base: "21vh", md: "25vh", lg: "55vh" }}
    >
      <Center
        ml={{ base: 0, md: 20, lg: 48 }}
        mr={{ base: 0, md: 20, lg: 48 }}
        color="white"
      >
        <Heading
          pt={{ base: "24px", md: "24px", lg: 12 }}
          ml={{ base: 4, md: 10, lg: 48 }}
          mr={{ base: 4, md: 10, lg: 48 }}
          fontSize={{ base: "20px", md: "40px", lg: "5xl" }}
          textAlign="center"
          fontWeight="600"
          fontFamily="Source Sans Pro"
        >
          Empowering businesses with cutting-edge human and IT solutions for a
          brighter future
        </Heading>
      </Center>
      <Center pt={{ base: "12px", md: "25px", lg: 12 }} color="white">
        <Text
          fontSize={{ base: "12px", md: "25px", lg: "2xl" }}
          fontWeight="400"
          fontFamily="Source Sans Pro"
        >
          - Innovating Tomorrow, Delivering Today -
        </Text>
      </Center>
    </Box>
  );
};

export default Hero;
