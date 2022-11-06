import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/font.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>
					CYBERPOINT
				</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default App;
