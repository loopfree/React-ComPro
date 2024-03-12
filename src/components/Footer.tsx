import { Box, Text } from "@chakra-ui/react";

type FooterProps = {
  position: "static" | "relative" | "absolute" | "fixed" | "sticky";
};

const Footer: React.FC<FooterProps> = ({ position }) => {
  return (
    <Box
      py={{ base: 5, md: 6, lg: 6 }}
      px={{ base: 10, md: 24, lg: 24 }}
      bg="purple.400"
      h={{ base: "10vh", md: "6vh", lg: "10vh" }}
      position={position}
      bottom="0"
      left="0"
      right="0"
    >
      <Text
        color="white"
        textAlign={{ base: "center", md: "right", lg: "right" }}
      >
        ©2024 Steven Alexander Wen
      </Text>
    </Box>
  );
};

export default Footer;
