import styles from '@/styles/Home.module.css';
import MainDescription from '@/components/main-description/MainDescription';
import MenuList from '@/components/menu-list/MenuList';
import BasicLayout from '@/layouts/BasicLayout';
import CoffeeDonation from '@/components/coffee-donation/CoffeeDonation';
import ExplainApp from '@/components/explain-app/ExplainApp';
import Logo from '@/components/logo/Logo';

interface HomePageProps {
	isLoggedIn: boolean;
	userProfile: string;
}

export default function Home({ isLoggedIn, userProfile }: HomePageProps) {
	return (
		<>
			<BasicLayout isLoggedIn={isLoggedIn} userProfile={userProfile}>
				<header className={styles.header}>
					<section>
						<Logo></Logo>
					</section>
					<section>
						<MainDescription></MainDescription>
					</section>
				</header>

				<main className={styles.main}>
					<section>
						<MenuList></MenuList>
					</section>
					<section>
						<ExplainApp></ExplainApp>
					</section>
					<section>
						<CoffeeDonation></CoffeeDonation>
					</section>
				</main>
			</BasicLayout>
		</>
	);
}

export async function getServerSideProps(context: any) {
	// 서버 사이드에서 로그인 상태를 확인하는 로직

	const isLoggedIn = false;
	const userProfile = isLoggedIn
		? '/app-logo-orange.svg'
		: '/app-logo-orange.svg';

	return {
		props: {
			isLoggedIn,
			userProfile,
		},
	};
}
