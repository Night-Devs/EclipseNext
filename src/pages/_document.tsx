import {
	Html,
	Head,
	Main,
	NextScript
} from 'next/document'

function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/eclipse.svg" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
