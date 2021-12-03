import { Skeleton, SwipeableDrawer, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box, styled } from '@mui/system';
import { useState } from 'react';

export const drawerBleeding = 56;

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
	borderRadius: 3,
	position: 'absolute',
	top: 8,
	left: 'calc(50% - 15px)',
}));

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export function BottomSwipeNav() {
	const [navOpen, setNavOpen] = useState<boolean>(false);

	return (
		<SwipeableDrawer
			anchor='bottom'
			open={navOpen}
			onClose={() => setNavOpen(false)}
			onOpen={() => setNavOpen(true)}
			swipeAreaWidth={drawerBleeding}
			disableSwipeToOpen={false}
			ModalProps={{
				keepMounted: true,
			}}
		>
			<StyledBox
				sx={{
					position: 'absolute',
					top: -drawerBleeding,
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
					visibility: 'visible',
					right: 0,
					left: 0,
				}}
			>
				<Puller />
				<Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
			</StyledBox>
			<StyledBox
				sx={{
					px: 2,
					pb: 2,
					height: '100%',
					overflow: 'auto',
				}}
			>
				<Skeleton variant='rectangular' height='100%' />
			</StyledBox>
		</SwipeableDrawer>
	);
}
