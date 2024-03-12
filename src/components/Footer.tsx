import { Box, Text } from "@chakra-ui/react";
import { ResponsiveValue } from "@chakra-ui/react";
import * as CSS from "csstype";

interface FooterProps {
  position: ResponsiveValue<CSS.Property.Position>;
}

const Footer: React.FC<FooterProps> = ({ position }) => {
  return (
    <Box
      py={{ base: 7, md: 6, lg: 6 }}
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
