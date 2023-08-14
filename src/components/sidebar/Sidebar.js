import { Box, Button, Center, VStack, Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import LavaIcon from './../../img/bitcanna.png';
import { Divider } from '@chakra-ui/react'

import {chains,chainReg,assetList} from "../../helpers/chainsList";



const Sidebar = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      height="100vh"
      width="200px"
      padding="1rem"
      paddingTop="10rem"
      bg="#D9D9D9"  
      boxShadow={'dark-lg'} 
    >
      <VStack spacing="0.2rem" >
        <Heading>Mainnet</Heading>
        {
            chains.Mainnet.map((chain, index) => {
                  let projectChainReg = chainReg[chain.chainId] || {}; // читаем цеопчку из chain-registry
                    return( 
                        <NavLink to={`/${chain.chainId}`} >
                            <Center width="200px" >
                                <Button  
                                    fontWeight={'medium'} 
                                    fontSize={'20px'}
                                    border={'2px'}
                                    w="95%"
                                    _hover={{ bg: 'blue.300'}}//"#f6d32d" }}
                                    leftIcon={<Image src={projectChainReg.logo_URIs.svg} boxSize="1.5rem" />}        
                                    justifyContent={'left'}        
                                                        
                                >
                                {chain.network}
                                </Button>
                            </Center>
                        </NavLink>
                     )  ; 
            })                  
        }   
        
        <Divider padding={2}  borderColor={"blue.500"}/>
        
        <Heading padding={2}>Testnet</Heading>
        {
            chains.Testnet.map((chain, index) => {
                  let projectChainReg = chainReg[chain.chainId] || {}; // читаем цеопчку из chain-registry
                    return(
                        <NavLink to={`/${chain.chainId}`} >
                            <Center width="200px" >
                                    <Button  
                                        fontWeight={'medium'} 
                                        fontSize={'20px'}
                                        border={'2px'}
                                        w="95%"
                                        _hover={{ bg: 'blue.300'}}//"#f6d32d" }}
                                        leftIcon={<Image src={projectChainReg.logo_URIs.svg} boxSize="1.5rem" />}   
                                        justifyContent={'left'}   
                                    >
                                    {chain.network}
                                </Button>
                            </Center>
                        </NavLink>
                     )  ; 
            })                  
        }   
       
      </VStack>
    </Box>
  );
};

export default Sidebar;