import { Center, Square, Circle, Container } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import LighthouseLogo from './../../img/logo_lighthouse_round.png'//'./../../img/lighthouse_logo.png'

import Services from '../services/Services';
import Networks from "../networks/Networks";
import Footer from "../footer/Footer";
import { NavLink } from 'react-router-dom';

//import { Link, Routes, Route } from 'react-router-dom';


const Navigation = () => {
    const style = {
        bg : "black",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : "#f6d32d"//'purple.500'
    }
    
    const scrollHeader = () => {
        const element = document.getElementById('id-header');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    const scrollServices = () => {
        const element = document.getElementById('id-service');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    const scrollNetworks = () => {
        const element = document.getElementById('id-networks');
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
                    <WrapItem as='button' onClick={scrollHeader}>   
                        <Image src={LighthouseLogo}
                                    maxH={'39'}    
                                    borderRadius={'90'}
                                    boxShadow={'dark-lg'}
                                />                     
                        <Text paddingLeft={'5'}fontSize={"24"}><strong>Lighthouse</strong>validator
                        </Text>
                    </WrapItem>
                    <Spacer />
                    <WrapItem>
                       
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"} 
                            onClick={scrollServices}>
                            Products </Button>                        
                           
                    </WrapItem>
                    <WrapItem>
                        
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"}
                            onClick={scrollNetworks}>
                            Networks </Button>
                        
                    </WrapItem>
                    <WrapItem>
                        
                        <Button 
                            fontSize={"16"} backgroundColor={style.bg} fontWeight={style.fontWeight} _hover={{ bg: style.bg_hover, color : style.bg}} color={"white"} 
                            onClick={scrollContacts}>
                            Contacts </Button>
                        
                    </WrapItem>
                    {/*<WrapItem>
                        <NavLink
							to="/networkservice"		
						>
                            <Button fontSize={"16"} backgroundColor={"white"} color={style.bg} fontWeight={style.fontWeight} boxShadow={'dark-lg'}
                            _hover={{ bg: style.bg_hover}}  >
                                Network service </Button>

                        </NavLink>
                    </WrapItem>*/}
                </Wrap>
               
            </Container>
        </Box>	 
	);
}

export default Navigation;

