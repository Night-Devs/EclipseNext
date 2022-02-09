import {
	AppBar,
	Button,
	Toolbar,
	Typography
} from '@mui/material'
import Image from 'next/image'

function Header() {
	return (
		<AppBar color="inherit">
			<Toolbar>
				<Button color="inherit" size="large">
					<Image alt="Eclipse Avatar" src="/eclipse.svg" width="40" height="50" />
					<Typography sx={{ml: 1}} variant="button">
						Eclipse
					</Typography>
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default Header
