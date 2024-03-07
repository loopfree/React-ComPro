import { Fragment } from "react";
import {
  Container,
  Text,
  Stack,
  Avatar,
  Divider,
  Icon,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { ImQuotesLeft } from "react-icons/im";

import yilongImage from "../../src/assets/yilong.webp";
import jeffImage from "../../src/assets/jeff.webp";

interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: "Yilong Ma",
    position: "CEO",
    company: "Struck by Tesla",
    image: yilongImage,
    content: `The development team at XcuteProject has been instrumental in streamlining our projects. Their project managers are true professionals, ensuring our goals are met on time and within budget.`,
  },
  {
    name: "Jeff Bezai",
    position: "CEO",
    company: "Aimazong",
    image: jeffImage,
    content: `The development team at Xcute is unparalleled. Their expertise and dedication have significantly contributed to the success of our digital initiatives.`,
  },
];

const Testimonial = () => {
  return (
    <Box>
      <Flex
        px={{ base: "10px", md: 24, lg: 24 }}
        pt={10}
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "12px", md: "16px", lg: "18px" }}
          color="purple.400"
          fontWeight="500"
          textAlign="justify"
        >
          Is it trustable?
        </Text>
      </Flex>
      <Flex px={{ base: "10px", md: 24, lg: 24 }} justifyContent="center">
        <Heading
          pb={{ base: 0, md: 4, lg: 4 }}
          fontSize={{ base: "20px", md: "30px", lg: "40px" }}
        >
          Find out what people said about us
        </Heading>
      </Flex>
      <Container maxW="8xl" pt={5} pb={10} px={{ base: 5, md: 20, lg: 0 }}>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={10}
              pt={1}
              justifyContent="center"
            >
              <Avatar
                size="2xl"
                showBorder={true}
                borderColor="purple.400"
                name="avatar"
                src={obj.image}
                display={{ base: "none", sm: "block" }}
              />

              <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                <Icon as={ImQuotesLeft} w={8} h={8} color="gray.400" />
                <Text fontSize="md" fontWeight="medium">
                  {obj.content}
                </Text>
                <Stack
                  alignItems={{ base: "center", sm: "flex-start" }}
                  spacing={0}
                >
                  <Avatar
                    size="xl"
                    showBorder={true}
                    borderColor="purple.400"
                    name="avatar"
                    src={obj.image}
                    display={{ base: "block", sm: "none" }}
                  />
                  <Text fontWeight="bold" fontSize="lg">
                    {obj.name}
                  </Text>
                  <Text fontWeight="medium" fontSize="sm" color="gray.600">
                    {obj.position}, {obj.company}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            {testimonials.length - 1 !== index && <Divider my={6} />}
          </Fragment>
        ))}
      </Container>
    </Box>
  );
};

export default Testimonial;
