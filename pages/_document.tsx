import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>함께자라기 | Interactive Study</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="함께 배우고 성장하는 상호작용 학습 플랫폼!"
				/>
				{/* <meta property="og:title" content="Your default Open Graph Title" />
				<meta property="og:description"content="Your default Open Graph Description"/> */}
				{/* <meta property="og:image" content="/images/og-image.png" /> */}
				{/* <meta property="og:url" content="https://www.yourwebsite.com" /> */}
				<link rel="icon" href="/app-logo.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
