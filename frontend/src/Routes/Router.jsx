import React from 'react';
import Home from './../pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import PersonalCard from '../pages/PersonalCard';

export default function Router() {
	return (
		<HashRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/personal-card" element={<PersonalCard />} />
				{/* <Route path="*" element={<Error404 />} />
				<Route path="/incomplete" element={<Error404 />} /> */}
			</Routes>
			<Footer />
		</HashRouter>
	);
}
