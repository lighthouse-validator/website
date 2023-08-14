
import { Center, Square, Circle, Flex, Divider, Spacer } from '@chakra-ui/react'
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
import Reputation from './../../img/reputation.webp'
import Monitoring from './../../img/monitoring.webp'
import Infrastructure from './../../img/infrastructure.webp'

const Whyme = () => {
   
    return (
        
        <Box w='100%' p={10} color='white' backgroundColor={'#2c2c44'} fontFamily={'Poppins'} align='center'>
            
            <Card backgroundColor={'purple.800'} maxWidth={'7xl'} align='center' variant={'elevated'} boxShadow={'dark-lg'} >               
                <CardHeader>
                        <Grid templateColumns='repeat(5)' gap={5}>
                            <GridItem>
                                <Center>
                                <Heading letterSpacing={'wider'} 
                                    fontWeight={'900'} fontSize={'44px'} 
                                    fontFamily={'Poppins'}
                                    p={5}>
                                        Why Lighthouse?
                                    </Heading>
                                </Center>
                            </GridItem>
                            <GridItem>
                               
                                <Center fontWeight={'500'} fontSize={"20"} >
                                    Lighthouse is an experienced POS validator and staking provider, 
                                    running over 40 chains on top-level hardware, 
                                    contributing to Cosmos Ecosystem open-source projects, 
                                    and offering valuable data analytics, 
                                    scripting tools & services 
                                    that have earned recognition from prominent crypto projects.</Center>
                            </GridItem>
                        </Grid>                    
                </CardHeader>
                
                
                <CardBody p={'100'}>
                    <Wrap spacing='50px'  fontFamily={'Poppins'} justify='center' spacingY={"120"}>                          
                        <WrapItem>
                            <Center w='350px' h='200px' >      
                                <Grid templateColumns='repeat(5)' gap={1}>
                                    <GridItem>
                                        <Img  
                                            boxSize='100px'
                                            objectFit='cover'                                                
                                            src={Reputation}
                                        />  
                                    </GridItem>
                                    <GridItem p={'2'}>
                                        <Center fontWeight={'900'} fontSize={"28"}>
                                            Reputation
                                        </Center>
                                    </GridItem>
                                    <br/>
                                    <GridItem >
                                        <Center fontWeight={'500'} fontSize={"20"} >
                                            We are trusted to be a genesis validator by many crypto 
                                            projects and supported by their foundational delegation
                                        </Center>
                                    </GridItem>
                                </Grid>        
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='330px' h='200px' >      
                                <Grid templateColumns='repeat(5)' gap={1}>
                                    <GridItem>
                                        <Img  
                                            boxSize='100px'
                                            objectFit='cover'                                                
                                            src={Infrastructure}
                                        />  
                                    </GridItem>
                                    <GridItem p={'2'}>
                                        <Center fontWeight={'900'} fontSize={"28"}>                                    
                                            Decentralized secure infrastructure
                                        </Center>
                                    </GridItem>
                                    <br/>
                                    <GridItem>
                                        <Center fontWeight={'500'} fontSize={"20"} >
                                            Our servers spread across the globe with the best security possible
                                        </Center>
                                    </GridItem>
                                </Grid>        
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='300px' h='200px' >      
                                <Grid templateColumns='repeat(5)' gap={1}>
                                    <GridItem>
                                        <Img  
                                            boxSize='100px'
                                            objectFit='cover'                                                
                                            src={Monitoring}
                                        />  
                                    </GridItem>
                                    <GridItem p={'2'}>
                                        <Center fontWeight={'900'} fontSize={"28"}>
                                            24 / 7 Monitoring
                                        </Center>
                                    </GridItem>                                    
                                    <GridItem >
                                        <Center fontWeight={'500'} fontSize={"20"} >
                                            99% uptime across all networks secured by our validator 
                                            leading to optimal performance
                                        </Center>
                                    </GridItem>
                                </Grid>        
                            </Center>
                        </WrapItem>   
                    </Wrap>
                </CardBody>
            </Card>               
             
                       
            
        </Box>
	);
}

export default Whyme;