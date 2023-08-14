
import { Center, Square, Circle, Flex, Divider, Spacer } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image, Link } from '@chakra-ui/react'
import { Img } from '@chakra-ui/react'
import Reputation from './../../img/reputation.webp'
import Monitoring from './../../img/monitoring.webp'
import Infrastructure from './../../img/infrastructure.webp'
import BitcannaIcon from './../../img/bitcanna.png'
import OraiIcon from './../../img/oraichain.png'
import LavaIcon from './../../img/lava.png'
import { NavLink } from 'react-router-dom';
import Chain from '../../pages/Chain'
//import {chins} from "../../helpers/chainsList"
import chainsListjson from './../../helpers/chainsList.json';
const chains = chainsListjson;

const Networks = () => {
    const propertyAll = {w:'180px', h:'80px', bg:'red.200'};
    const style = {
        bg : "#ffffff",//"#162536",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : '#f6d32d'
    }
    function CardChain(chainId, apr, icon) {
        let chain = "noname";
        let flag = false;
        let project = {};
        for (let i =0; i < chains.Mainnet.length; i++) {               
            if (chains.Mainnet[i].chainId == chainId) {
                console.log("!!!", i);
                chain = chains.Mainnet[i].network; 
                project = chains.Mainnet[i];
                flag = true; 
                break;
            }
        
        }
        // или ищем в тестнете
        if (!flag) {
            for (let i=0; i < chains.Testnet.length; i++) {
                if (chains.Testnet[i].chainId == chainId) {
                    chain = chains.Testnet[i].network;
                    project = chains.Testnet[i];
                    break;
                }
            
            }
        }	
        
        return (           
                 
                <Center 
                    w='250px' 
                    h='250px'  
                    backgroundColor={'#D9D9D9'} 
                    boxShadow={'dark-lg'} 
                    rounded='md'
                    _hover={{                            
                        transition: 'transform 124ms linear',                              
                        transform: 'scale(1.03)',
                        bg: style.bg_hover
                    }}
                    as='button'
                    >
                    <Grid templateColumns='repeat(1, 3fr)' gap={4} >
                        <GridItem fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'24'}>
                            <HStack>
                                <Box><Image src={icon} 
                                maxH={'10'}
                                maxW={'10'}/>
                                </Box>
                                <Box>
                                {chain}
                                </Box>
                            </HStack>
                        </GridItem>    
                        <GridItem fontFamily={'Poppins'} fontWeight={'normal'} fontSize={'20'}>
                            APR: ~{apr}%
                        </GridItem>    
                        <GridItem paddingTop={2}>
                            
                            <Link href={project.link_on_stake} isExternal>
                                <Button width={'32'} 
                                    fontWeight={'medium'} 
                                    fontSize={'20px'}
                                    border={'2px'}
                                    _hover={{ bg: 'black', color : "white", borderColor:"black"}}
                                    
                                    >
                                        Stake
                                </Button>    
                            </Link>
                        </GridItem>    
                        <GridItem p={0}>
                            <NavLink to={`/${chainId}`}>
                                <Button width={'32'} 
                                    fontWeight={'medium'} 
                                    fontSize={'20px'}
                                    border={'2px'}
                                    _hover={{ bg: 'black', color : "white", borderColor:"black"}}
                                    >
                                        Service
                                </Button>  
                             </NavLink>
                        </GridItem>    
                    </Grid>
                    
                </Center> 
             
        );
    }    

    return (
        <Box id='id-networks' w='100%'>
            <Container maxW={"7xl"} w='100%' p={"100"} color='black' backgroundColor={style.bg} fontFamily={'Poppins'} 
            //bgGradient='linear(#2c2c44 0%, #a169d9 50%, #2c2c44 100%)'
            //bgGradient='linear( #ffffff 0%, #deddda 100%)'
            >
                <Heading fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'} >
                    Mainnet
                </Heading>
                <br/>
                <Wrap spacing='25px' justify='center' paddingBottom='7'>
                   
                    {/* НАДО СДЕЛАТЬ ПОТОМ ПЕРЕБОРОМ!!!!
                        chains.Mainnet.map((chain, index) => {
                             return(<WrapItem >
                                {CardChain("bitcanna-1", 30, BitcannaIcon)}                                
                            </WrapItem>        )  ; 
                        })                  
                    */}                   
                    <WrapItem >
                        {CardChain("bitcanna-1", 30, BitcannaIcon)}
                    </WrapItem>                          

                    

                </Wrap>
                <br/>
                <br/>
                <Heading fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'}>
                    Testnet
                </Heading>
                <br/>
                <Wrap spacing='25px' justify='center' paddingBottom='7'>
                    <WrapItem >
                        {CardChain("lava-testnet-1", 0, LavaIcon)}
                    </WrapItem>                          

                </Wrap>
            </Container>
        </Box>
	);
}

export default Networks;