import { Center, Square, Circle, Flex, Divider, Spacer, Link } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack,  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Img } from '@chakra-ui/react'
import Comingsoon from './../../img/coming-soon.webp'
import Services_pic from './../../img/services_pic.png'
//import { Divider } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import {chains,chainReg,assetList} from "../../helpers/chainsList";

const Services = () => {
    const style = {
        //bg : "#2c2c44",//'blackAlpha.50',
        bg : "#ffffff",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : '#f6d32d'
    }
    function Product(header, textbody, img, link) {
        return(
            <Card  as={'button'} _hover={{                            
                    transition: 'transform 124ms linear',                              
                    transform: 'scale(1.03)',  
                    bg: style.bg_hover
                }}                            
                boxShadow={'dark-lg'} 
                backgroundColor={'#D9D9D9'} maxW={"350"} maxH={"350"} minW={"350"} minH={"330"} >
                <CardHeader paddingBottom={'3'}>
                    <Heading fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'24'} >
                        {header}
                    </Heading>
                </CardHeader>                        
                <CardBody p={"0"} alignItems={'center'} >
                    
                    <Center fontFamily={'Poppins'} fontWeight={'normal'} fontSize={'16'}
                        textAlign={'center'} paddingLeft={'5'} paddingRight={'5'} h={'78'}>
                        {textbody}
                    </Center>
                    <Center>
                    <NavLink to={`/${link}`}>
                        <Img                
                            p='3'                                             
                            maxH={'300'}
                            maxW={'300'}                                
                            objectFit='cover'                                                
                            src={img}            
                            border={'1px'}                                              
                            />  
                    </NavLink>
                    </Center>
                </CardBody>
            </Card>
        )
    }
    return (
        <Box w='100%' backgroundColor={style.bg} id='id-service'>
            <Container maxW={"7xl"} w='100%' p={"78"} color='black' backgroundColor={style.bg} fontFamily={'Poppins'} >
            
            <Heading fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'}>
                Our products and services
			</Heading>
            <br/>
            
            <Wrap spacing='35px' fontFamily={'Poppins'} justify='center' spacingY={"50"} >                          
                <WrapItem >
                    {Product(
                        "Services and analytics",
                        "Service tools and data analytics for the Cosmos Ecosystem",
                        Services_pic,
                        chains.Mainnet[0].chainId                       
                        )}             
                </WrapItem>
                <WrapItem>
                {Product(
                        "Telegram Bots ",
                        "Management, Monitoring and Alerting",
                        Comingsoon,
                        "#"
                        )}
                </WrapItem>
                <WrapItem>
                {Product(
                        "Useful commands",
                        "Predefined set of commonly used CLI commands",
                        Comingsoon,
                        "#"
                        )}
                </WrapItem>
               
            </Wrap>
            </Container>
        </Box>
	);
}

export default Services;