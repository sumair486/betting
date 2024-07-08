import React from 'react';
import { styled, keyframes } from '@mui/system';
import { Typography, Box } from '@mui/material';

// Define the scrolling animation
const scrollText = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for the scrolling text
const ScrollingText = styled(Box)`
  display: inline-block;
  white-space: nowrap;
  animation: ${scrollText} 10s linear infinite;
`;

// Container for the scrolling text to manage overflow
const ScrollContainer = styled(Box)`
  overflow: hidden;
  white-space: nowrap;
  width: 100%; // Adjust width as needed
`;

const WelcomeMessage = () => {
  return (
    <ScrollContainer>
      <ScrollingText>
        <Typography>Welcome to Cricket Betting App</Typography>
      </ScrollingText>
    </ScrollContainer>
  );
};

export default WelcomeMessage;
