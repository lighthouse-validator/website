import Project from '../components/project/Project';
import {projects} from "../helpers/projectsList"
import NavigationService from './../components/navigation/Navigationservice'
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
import Reputation from './../img/reputation.webp'
import Monitoring from './../img/monitoring.webp'
import Infrastructure from './../img/infrastructure.webp'
import BitcannaIcon from './../img/bitcanna.png'
import OraiIcon from './../img/oraichain.png'
import LavaIcon from './../img/lava.png'

const Networkservice = () => {
	const style = {
        bg : "#ffffff",//"#162536",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : '#f6d32d'
    }
	function CardChain(chain, token, icon) {
        return (            
                <Center 
                    w='550px' 
                    h='100px'  
                    backgroundColor={'#D9D9D9'} 
                    boxShadow={'xl'} 
					
                    rounded='md'
                    _hover={{                            
                        transition: 'transform 124ms linear',                              
                        transform: 'scale(1.03)',
                        bg: style.bg_hover
                    }}
                    as='button'
                    >
                    <Grid templateColumns='repeat(3, 1fr)' gap={4} >
                        <GridItem  p={0} fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'24'}>
                            <HStack>
                                <Box><Image src={icon} 
									maxH={'10'}
									maxW={'10'}/>
                                </Box>
                                <Box textAlign={'end'}>
                                {chain} 
                                </Box>								

                            </HStack>
                        </GridItem>    
                        {/*<GridItem  p={0} fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'24'}>
                           {token}
						</GridItem> */   }
                        <GridItem p={0} >
                            <Button width={'32'} 
                                fontWeight={'medium'} 
                                fontSize={'20px'}
                                border={'2px'}>
                                    STAKE!
                            </Button>    
                        </GridItem>    
                    </Grid>
                    
                </Center> 
             
        );
    }

	return (
		<>
			<NavigationService />	
			<Box id='id-networks' w='100%' backgroundColor={style.bg} 
				// bgGradient='linear(#2c2c44 0%, #a169d9 50%, #2c2c44 100%)'
				//bgGradient='linear( #ffffff 0%, #deddda 100%)'
				>
				<Container  maxW={"7xl"} w='100%' paddingTop={"100"}  color='black' backgroundColor={style.bg} fontFamily={'Poppins'} 
					id='id-mainnet'
				//bgGradient='linear(#2c2c44 0%, #a169d9 50%, #2c2c44 100%)'
				//bgGradient='linear( #ffffff 0%, #deddda 100%)'
				>
					<Heading  fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'} >
						Mainnet
					</Heading>
					<br/>
					<Wrap spacing='25px' justify='center' paddingBottom='7'>
						
						
						<WrapItem >
							{CardChain("BitCanna", "BCNA", BitcannaIcon)}
						</WrapItem>		
						<WrapItem >
							{CardChain("BitCanna", "BCNA", BitcannaIcon)}
						</WrapItem>		
					
					
					
					</Wrap>
					
					
				</Container>

				<Container  maxW={"7xl"} w='100%' paddingTop={"10"} color='black' backgroundColor={style.bg} fontFamily={'Poppins'} 
					id='id-testnet'
				//bgGradient='linear(#2c2c44 0%, #a169d9 50%, #2c2c44 100%)'
				//bgGradient='linear( #ffffff 0%, #deddda 100%)'
				>					

					<Heading fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'}>
						Testnet
					</Heading>
					<br/>
					<Wrap spacing='25px' justify='center' paddingBottom='7'>
						<WrapItem >
							{CardChain("Lava", "LAVA", LavaIcon)}
						</WrapItem>                          

					</Wrap>
				</Container>
			</Box>


			
		</>
	);
};

export default Networkservice;
