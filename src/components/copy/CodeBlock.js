// CodeBlock.js
import React from 'react';
import { Box, Code, Text, HStack } from '@chakra-ui/react';
import CopyButton from './CopyButton'; // Импортируйте компонент копирования

const CodeBlock = ({ code }) => {
  return (
    <Box bg="black" p={4} borderRadius="md" color="white">
        <HStack>
      <Code>{code}</Code>
      <Text mt={2}>
        <CopyButton text={code} /> {/* Передайте код для копирования */}
      </Text>
      </HStack>
    </Box>
  );
};

export default CodeBlock;