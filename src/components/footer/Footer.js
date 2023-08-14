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
import LighthouseLogo from './../../img/logo_lighthouse_square.png'
import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';
import telegram from './../../img/icons/telegram.svg';
import discord from './../../img/icons/discord.svg';
//import { Divider } from '@chakra-ui/react'

const Footer = () => {
    const style = {
        bg : "#deddda",//bg : "#2c2c44",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : 'purple.500',
        fontFamilyHeader: 'Poppins',
        fontWeightHeader: 'medium',
        fontSizeHeader: '24',
        fontSizeText: '16',
        fontWeightText: 'normal',
    }
    return (
        
        <Box id='id-contacts' w='100%' backgroundColor={style.bg} bgGradient='linear(#ffffff 0%, #deddda 100%)'>
            <Container maxW={"7xl"} w='100%' p={"78"} color='white' backgroundColor={style.bg} fontFamily={'Poppins'} bgGradient='linear(#ffffff 0%, #deddda 100%)'>
            
            <Card backgroundColor={'#D9D9D9'} align='center' variant={'elevated'} boxShadow={'dark-lg'} >               
                <CardBody p={'38'}>
                    <Wrap spacing='50px' justify='center'>
                        <Center >
                            <WrapItem >                                
                                <Image src={LighthouseLogo}
                                    maxH={'90'}    
                                    borderRadius={'25'}
                                    boxShadow={'dark-lg'}                        
                                />                                
                            </WrapItem>
                        </Center>
                        <Center>
                        <WrapItem spacing='50px'>
                            <VStack >
                                <Heading fontFamily={style.fontFamilyHeader} 
                                    fontWeight={style.fontWeightHeader} 
                                    fontSize={style.fontSizeHeader}>
                                        Contacts</Heading>                            
                                <Text fontSize={style.fontSizeText}
                                    fontWeight={style.fontWeightText} textAlign={'bottom'}>
                                        lighthouse.validator@gmail.com                                        
                                </Text>   
                                <br/>                             
                                <HStack spacing={'6'} >  
                                    <Link href='https://discordapp.com/users/917615440686116875/'><Image src={discord}/></Link>   
                                    <Link href="https://t.me/mlapov"><Image src={telegram}/></Link>
                                    <Link href="https://twitter.com/Lightho55718666"><Image src={twitter}/></Link>                                    
                                    <Link href='https://github.com/lighthouse-validator'><Image src={gitHub}/></Link>                                       
                                </HStack>                                                     
                            </VStack>
                        </WrapItem>
                        </Center>
                        <Center>
                        <WrapItem>
                            
                        </WrapItem>
                        </Center>
                        
                    </Wrap>
                </CardBody>
            </Card>               
             
        </Container>               
            
        </Box>
	);
}

export default Footer;