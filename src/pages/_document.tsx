import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
	return (
		<Html>
			<Head>
				<link rel='icon' href='/assets/images/eclipse.svg' />
				<link rel='stylesheet' href='/assets/css/normalize.css'/>
				<link rel='stylesheet' href='/assets/css/styles.css'/>

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap' rel='stylesheet' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document;
