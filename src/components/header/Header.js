//import "./style.css";
import { Center, Square, Circle, Container, VStack, Heading, AbsoluteCenter} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box,Text } from '@chakra-ui/react'
import dots from './../../img/dots.avif';

const Header = () => {
	const scrollNetworks = () => {
        const element = document.getElementById('id-networks');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }        
    }
    return (
		<Box id='id-header' w='100%' backgroundColor={'#2c2c44'} paddingTop={300} paddingBottom={'250'} 
			//bgGradient='linear(#2c2c44 0%, #a169d9 50%, #2c2c44 100%)'
			bgGradient='linear(#deddda 0%, #ffffff 100%)'
			>
				<VStack  >
					
					<Heading fontFamily={'Poppins'} fontSize={'52'} textAlign={'center'} fontWeight={'medium'}>
						{/*Trustworthy provider of recurring earnings*/}
						Your source of passive income
					</Heading>
					
					<br/>
					<Text textAlign={'center'} fontWeight={'medium'} fontSize={'24'} fontFamily={'Poppins'}>
						Lighthouse's validator nodes provide secure and non-custodial staking options for your assets
					</Text>
					
					<br/>					
					<Center  fontFamily={'Poppins'} p={2} >
						<ButtonGroup gap='5'   >						
							<Button background={"white"} color={"black"} fontWeight={'medium'} boxShadow={'dark-lg'} _hover={{ bg: "#f6d32d" }}
								onClick={scrollNetworks}>
								Stake With Us</Button>
							{/*<Button background={"white"} color={"black"} fontWeight={'medium'} boxShadow={'dark-lg'} _hover={{ bg: "#f6d32d" }}>
								Network Service</Button>*/}
						</ButtonGroup>
					</Center>
				</VStack>
				
			
		</Box>
		
		
	);
}

export default Header;

//"#5c62ec"