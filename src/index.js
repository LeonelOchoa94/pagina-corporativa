import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { AppRouter } from './router/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	</React.StrictMode>
);
