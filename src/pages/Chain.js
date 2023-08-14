import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {chains,chainReg,assetList} from "../helpers/chainsList";
import NavigationService from './../components/navigation/Navigationservice';
import Sidebar from './../components/sidebar/Sidebar';
import { Stack, HStack, VStack, Divider, StackDivider, Link, Center, Container, Flex, Spacer} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import dashboardGrafanaMainnet from './../img/dashboard_grafana_2.jpg';
//import dashboardGrafanaTestnet from './../img/dashboard_grafana_testnet.png';
import CodeBlock from './../components/copy/CodeBlock'; // Импортируйте созданный компонент
import CopyButton from './../components/copy/CopyButton'; // Импортируйте созданный компонент


const Chain = () => {
	const {id} = useParams(); // сюда передается название цеопчки bitcanna-mainnet или дфмф-еуыетуе
	console.log("id:", id);
	let flag = false;
	let project = {};
	// ищем в майнете
	for (let i in chains.Mainnet) {
		if (chains.Mainnet[i].chainId == id) {project = chains.Mainnet[i]; flag = true; break;}
	}
	// или ищем в тестнете
	if (!flag) {
		for (let i in chains.Testnet) {
			if (chains.Testnet[i].chainId == id) {project = chains.Testnet[i];break}
		}
	}	
	
	let projectChainReg = chainReg[project.chainId] || {}; // читаем цеопчку из chain-registry
	let projectAssetList = assetList[project.chainId] || {};// читаем цеопчку из assetlist
	let services = Object.keys(project.services) || [];  // вынимаем список сервисов, которые предоставляем		
	//const project = chains[id];
	//console.log("id2:", chains);

	
		const getService = (service) => {
			switch (service) {
				case "Dashboard":
				{
					<TabPanel>	
						<Link href={project.dashboard} isExternal>
						<Image boxSizing={'content-box'} src={dashboardGrafanaMainnet} alt="Dashboard Grafana" paddingBottom={2}/>		
							Dashboard Grafana <ExternalLinkIcon mx='2px' />
						</Link>	
					</TabPanel>	
				};
				break;
				
				case 4:
					
				break;
				case 5:
				
				break;
				default:
				console.log('1');													  
			}								
		}
	

    return (
		<>
		
		<NavigationService />
		<Sidebar />
		
		
		<Stack paddingLeft={'220'} paddingTop={'100'} paddingRight={'4'} fontFamily={'Poppins'} >
			<HStack spacing='24px' align={'flex-start'}>
						<Card                           
							boxShadow={'dark-lg'} 
							backgroundColor={'#D9D9D9'} minW={"400"} maxW={"400"} maxH={'max-content'}   >
							<CardHeader paddingBottom={'0'} >
								<Center>
									<VStack>
										<Image boxSize='50px' src={projectChainReg.logo_URIs.svg} alt={projectChainReg.pretty_name} />								
										<Heading fontWeight={'medium'} fontSize={'24'} fontFamily={'Poppins'}>
											{projectChainReg.pretty_name}
										</Heading>
										<Text as="span" color="blue.500">										
												{projectChainReg.network_type}
										</Text>
									</VStack>
								</Center>
							</CardHeader>                        
							<CardBody p={"4"} alignItems={'center'}  >
								<Stack divider={<StackDivider />} spacing='4'>
									<Text>										
										{project.description}
									</Text>									
									<Text>
										Token name: <Text as="span" color="blue.500">{projectAssetList.assets[0].symbol}</Text>
										<br/>
										Bond Denom : <Text as="span" color="blue.500">{projectAssetList.assets[0].denom_units[0].denom} </Text>
										<br/>
										Chain ID : <Text as="span" color="blue.500">{project.chainId}</Text>
										<br/>
										Current version : <Text as="span" color="blue.500">{projectChainReg.codebase.recommended_version}</Text>
									</Text>
									<Text>
										Official website : <Text as="span" color="blue.500">
											<Link href={projectChainReg.website} isExternal>
												{projectChainReg.website} <ExternalLinkIcon mx='2px' />
											</Link>										
										</Text>
										GitHub : <Text as="span" color="blue.500">
											<Link href={projectChainReg.codebase.git_repo} isExternal>
												{projectChainReg.codebase.git_repo} <ExternalLinkIcon mx='2px' />
											</Link>										
										</Text>
									</Text>
								</Stack>
								
							</CardBody>
							
						</Card>
						<Card  
							boxShadow={'dark-lg'} 
							backgroundColor={'#D9D9D9'}  
							//maxW={"2000"} 							
							maxH={'max-content'} 
							w='100vw'
							paddingLeft={0} 
							paddingRight={0}>  
							  
							<CardBody alignItems={'center'} >
								
								<Tabs  isLazy  variant='line' colorScheme={"blue"} >
									
									<TabList mb='1em' flexWrap={'wrap'} width="100%">
											{												
												services.map((service,index) => 
												{
													return(
														<Tab key={index} >{service}</Tab>
													);
												})
											}
											{/*<Tab>Dashboard</Tab>
											<Tab>Snapshot</Tab>
											<Tab>State Sync</Tab>
											<Tab>Peers</Tab> 
											<Tab>Seed</Tab>
											<Tab>RPC</Tab>
											<Tab>Rest</Tab>
											<Tab>GRPC</Tab>
											<Tab>Useful commands</Tab>
											<Tab>Genesis</Tab>
											<Tab>Install</Tab>
											<Tab>Upgrade</Tab>*/}											
									</TabList>
									

									<TabPanels>
										{												
											services.map((service,index) => 
											{
												return(
													<TabPanel key={index} >
														{(()=>{
															switch(service) {
																case "Dashboard" :
																	return (																			
																			<Link href={project.services[service]} isExternal>
																				{/*console.log("Dashboard", project.services[service])*/}
																				<Image boxSizing={'content-box'} src={dashboardGrafanaMainnet} alt="Dashboard Grafana" paddingBottom={2}/>		
																					Dashboard Grafana <ExternalLinkIcon mx='2px' />
																			</Link>	
																	);
																case "RPC" :
																	return (	
																		<Wrap>
																			<WrapItem>
																				<Link href={project.services[service]} isExternal>												
																					<Text as="span" color="blue.500">{project.services[service]} <ExternalLinkIcon mx='2px' /></Text>
																				</Link>	
																			</WrapItem>	
																			<Spacer />
																			<WrapItem>
																				<Box><CopyButton text={project.services[service]} /></Box>
																			</WrapItem>
																		</Wrap>		
																	);
																case "REST" :
																	return (																			
																		<Wrap>
																			<WrapItem>
																			<Link href={project.services[service]} isExternal>												
																				<Text as="span" color="blue.500">{project.services[service]} <ExternalLinkIcon mx='2px' /></Text>
																			</Link>	
																			</WrapItem>	
																			<Spacer />	
																			<WrapItem>		
																				<Box><CopyButton text={project.services[service]} /></Box>
																			</WrapItem>	
																		</Wrap>	
																	);
																case "gRPC" :
																	return (	
																		<Wrap>
																			<WrapItem>
																				<Text as="span" color="blue.500">{project.services[service]} </Text>
																			</WrapItem>
																			<Spacer />
																			<WrapItem>
																				<Box><CopyButton text={project.services[service]} /></Box>																				
																			</WrapItem>
																		</Wrap>
																	);
																default: return null;	
															}
														})()}													
													
													
													</TabPanel>
												);
											})
										}
										
									</TabPanels>
								</Tabs>
							</CardBody>
						</Card>			
			</HStack>
		</Stack>
		
		 
		
		
		</>
	);
}

export default Chain;