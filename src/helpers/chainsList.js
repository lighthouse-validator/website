import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

import chainsListjson from './chainsList.json';
import chainRegistryAll from './chain-registry-all.json';
import assetListAll from './assetlist-all.json';

const chains = chainsListjson;
const chainReg = chainRegistryAll;
const assetList = assetListAll;
/*
const chains = () => {
	let configdata;
	try {
			const fs = require('fs');
			// синхронное чтение
			console.log("fileContent1");
			//console.log(`Read file - ${targetfile}.json`);
			let fileContent = fs.readFileSync("./chainsList.json", "utf8");
			console.log("fileContent2",fileContent);
			configdata = JSON.parse(fileContent);
			// После парсинга переменной мы получаем объект, к свойствам которого можно обращаться как обычно, например ч>
			//console.log("1:", chainData.pretty_name);
			console.log("2:", configdata);

			return configdata;
	}
	catch (err) {
			console.log(`ERR ReadConfigFile: File .json is missing`, err);
			console.log("ERR ReadConfigFile: ", err);
			return configdata = {}; 
	}
};*/


const chains1 = {
	bitcannaMainnet: {
		title: 'Gaming streaming portal',
		skills: 'React, Node.js, MongoDB',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com',
	},
	lavaTestnet: {
		title: 'Video service',
		img: project02,
		imgBig: project02Big,
		skills: 'React, PHP, MySql',
		gitHubLink: 'https://github.com',
	}
	
};

export {chains,chainReg,assetList}