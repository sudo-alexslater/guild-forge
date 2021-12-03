import { Route, Routes } from 'react-router';
import { Welcome } from './features/welcome/Welcome';
import { useState } from 'react';
import { Teamup } from './features/teamup/Teamup';
import { Container, CssBaseline, Skeleton, SwipeableDrawer, Typography } from '@mui/material';
import { AppContextType, AppProvider, AppState, useApp } from './features/contexts/AppContext';
import { Box, styled } from '@mui/system';
import { grey } from '@mui/material/colors';
import { Global } from '@emotion/react';
import { BottomSwipeNav, drawerBleeding } from './features/components/BottomSwipeNav';

function App() {
	const [state, setState] = useState<AppContextType>({
		state: {},
		actions: {},
	});

	return (
		<AppProvider value={state}>
			<CssBaseline />
			<Global
				styles={{
					'.MuiDrawer-root > .MuiPaper-root': {
						height: `calc(50% - ${drawerBleeding}px)`,
						overflow: 'visible',
					},
				}}
			/>
			<Container maxWidth='xl'>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/teamup' element={<Teamup />} />
				</Routes>
			</Container>
			<BottomSwipeNav />
		</AppProvider>
	);
}

export default App;
