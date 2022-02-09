import {
	AppBar,
	Toolbar,
	Typography
} from '@mui/material'

function Footer() {
	return (
		<AppBar component="footer" sx={{top: 'auto', bottom: 0}} color="inherit">
			<Toolbar sx={{mx: 'auto'}}>
				<Typography>
					{ new Date().getFullYear() } — <strong>Eclipse</strong>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Footer
