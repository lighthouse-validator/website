import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
//import Projects from "./pages/Networkservice";
import Project from "./pages/Chain";
import Contacts from "./pages/Contacts";
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Networks from './components/networks/Networks'
import ScrollToTop from "./utils/scrollToTop"

//import NetworkService from './pages/Networkservice'
import Chain from './pages/Chain'
import React, { useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react'
function App() {
	useEffect(() => {
		document.title = 'Lighthouse Validator';
	  }, []);
  return (
		<div className="App">			
				<ChakraProvider>			
					
					<Routes>
						<Route path="/" element={<Home />} />
						{/*<Route path="/networkservice" element={<NetworkService />} />*/}
						{/*<Route path="/networkservice/:id" element={<Chain />} />*/}						
						<Route path="/:id" element={<Chain />} />
					</Routes>				
	
					{/*<Footer />*/}
				</ChakraProvider>			
		</div>
  );
}

export default App;

/*
<ChakraProvider>
<Router>
					<ScrollToTop />
				
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/project/:id" element={<Project />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
					
				</Router>
				</ChakraProvider>
*/