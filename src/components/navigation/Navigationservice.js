import { Center, Square, Circle, Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import LighthouseLogo from './../../img/logo_lighthouse_round.png'
import Services from '../services/Services';
import Networks from "../networks/Networks";
import Footer from "../footer/Footer";

import { NavLink } from 'react-router-dom';
//import { Link, Routes, Route } from 'react-router-dom';


const Navigationservice = () => {
    const style = {
        bg : "black",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : "blue.300"//'purple.500'
    }
    
    const scrollHeader = () => {
        const element = document.getElementById('id-header');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    const scrollMainnet = () => {
        const element = document.getElementById('id-mainnet');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    const scrollTestnet = () => {
        const element = document.getElementById('id-testnet');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    
    const scrollContacts = () => {
        const element = document.getElementById('id-contacts');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    return (
        <Box w='100%' borderBottom={'1px'} borderBottomColor={style.bg_hover} pos={'fixed'}  backgroundColor={style.bg} as='header'
            zIndex={200} >
            <Container maxW={"7xl"} w='100%' p={5} color='white' backgroundColor={style.bg} fontFamily={'Poppins'} >                
                <Wrap>
                    <NavLink
							to="/">
                        <WrapItem as='button'>                               
                                <Image src={LighthouseLogo}
                                            maxH={'39'}    
                                            borderRadius={'90'}
                                            boxShadow={'dark-lg'}
                                        />                     
                                <Text paddingLeft={'5'}fontSize={"24"}><strong>Lighthouse</strong>validator
                                </Text>                            
                        </WrapItem>
                    </NavLink>
                    <Spacer />

                    <WrapItem>
                        <NavLink to="/">
                            <Button 
                                fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"} 
                                onClick={scrollContacts}>
                                Home
                            </Button>
                        </NavLink>
                    </WrapItem> 

                    {/*<WrapItem>
                       
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"} 
                            onClick={scrollMainnet}>
                            Mainnet </Button>                        
                           
                    </WrapItem>
                    <WrapItem>
                        
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"}
                            onClick={scrollTestnet}>
                            Testnet </Button>
                        
                    </WrapItem>*/}
                    {/*<WrapItem>
                        
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"} 
                            onClick={scrollContacts}>
                            Contacts </Button>
                        
                    </WrapItem> */}             
                       
                </Wrap>
               
            </Container>
        </Box>	 
	);
}

export default Navigationservice;

