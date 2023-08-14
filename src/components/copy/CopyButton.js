import React from 'react';
import { Button } from '@chakra-ui/react';
import copy from 'clipboard-copy';

const CopyButton = ({ text }) => {
  const handleCopy = () => {
    copy(text);
  };

  return (
    <Button onClick={handleCopy} colorScheme="blue" height={'6'} fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'16'}>
      Copy
    </Button>
  );
};

export default CopyButton;
