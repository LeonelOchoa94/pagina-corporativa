import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { SignIn } from '../components/signIn/SignIn';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='home' element={<Home />} />
				<Route path='signIn' element={<SignIn />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
};
