import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPicture from '../images/Passport.jpeg'

const greeting = "Hello, I am Gabriel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar
        src={myPicture}
        size="2xl"
        name="Gabriel Ifeanyi"
      ></Avatar>
      <Heading as="h4" size="md" noOfliners={1}>
        {greeting}
      </Heading>

      <VStack>
        <Heading as="h1" size="3xl" noOflines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOflines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
