
import Navigation from './../components/navigation/Navigation'
import Header from './../components/header/Header'
import Status from './../components/status/Status'
import Whyme from './../components/whyme/Whyme'
import Services from './../components/services/Services'
import Networks from './../components/networks/Networks'
import Blog from './../components/blog/Blog'
import Footer from "./../components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
    return (
		<>
			<Navigation />	
			<Header />
			<Services />				
			<Networks />	
			<Footer />			
		</>
	);
}
//<Status />
//{<Whyme />}
export default Home;