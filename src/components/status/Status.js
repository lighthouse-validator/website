
import { Center, Square, Circle, Flex } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
const Status = () => {
    const outerBoxStyles = {
        boxSize: '400px',
        p: '10',
        h: '80px',
        background:
          'url(https://picsum.photos/id/1068/200/300) center/cover no-repeat',
      }
    
      const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
      }
    const style = {
        bg : "#162536",//'blackAlpha.50',
        fontWeight : 'medium',
        bg_hover : 'purple.500'
    }
    return (
        <Box w='100%' backgroundColor={style.bg} >
            <Container maxW={"7xl"} w='100%' p={100} color='white' backgroundColor={style.bg} fontFamily={'Poppins'} >
                <Wrap spacingY='100px'  fontFamily={'Poppins'} fontWeight={'medium'} fontSize={'24'} justify='center'>
                    <WrapItem >
                        <Center w='350px' h='80px' >      
                            <Grid templateColumns='repeat(5)' gap={1}>
                                <GridItem>
                                    <Center>Total assets staked</Center>
                                </GridItem>
                                <GridItem>
                                    <Center fontWeight={'500'} fontSize={"42"} >$1</Center>
                                </GridItem>
                            </Grid>        
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='350px' h='80px' >      
                            <Grid templateColumns='repeat(5)' gap={1}>
                                <GridItem>
                                    <Center>Supported networks</Center>
                                </GridItem>
                                <GridItem>
                                    <Center fontWeight={'500'} fontSize={"42"} >2</Center>
                                </GridItem>
                            </Grid>        
                        </Center>
                    </WrapItem>
                    <WrapItem >
                        <Center w='350px' h='80px' >      
                            <Grid templateColumns='repeat(5)' gap={1}>
                                <GridItem>
                                    <Center>Relayers</Center>
                                </GridItem>
                                <GridItem>
                                    <Center fontWeight={'500'} fontSize={"42"} >0</Center>
                                </GridItem>
                            </Grid>        
                        </Center>
                    </WrapItem>           
                    <WrapItem>
                        <Center w='350px' h='80px' >      
                            <Grid templateColumns='repeat(5)' gap={1}>
                                <GridItem>
                                    <Center>Number of delegators</Center>
                                </GridItem>
                                <GridItem>
                                    <Center fontWeight={'500'} fontSize={"42"} >1+</Center>
                                </GridItem>
                            </Grid>        
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='350px' h='80px' >      
                            <Grid templateColumns='repeat(5)' gap={1}>
                                <GridItem>
                                    <Center>Community members</Center>
                                </GridItem>
                                <GridItem>
                                    <Center fontWeight={'500'} fontSize={"42"} >0+</Center>
                                </GridItem>
                            </Grid>        
                        </Center>
                    </WrapItem>  
                            
                </Wrap>  
                       
            </Container>
        </Box>
	);
}

export default Status;