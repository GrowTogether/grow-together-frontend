import AppLogo from '@/public/app-logo.svg';
import AppLogoTitle from '@/public/app-logo-title.svg';
import styles from '@/styles/Home.module.css';
import MainDescription from '@/components/main-description/MainDescription';
import MenuList from '@/components/menu-list/MenuList';
import BasicLayout from '@/layouts/BasicLayout';
import CoffeeDonation from '@/components/coffee-donation/CoffeeDonation';
import ExplainApp from '@/components/explain-app/ExplainApp';

export default function Home() {
	return (
		<>
			<BasicLayout>
				<header className={styles.header}>
					<section className={styles['logo-container']}>
						<AppLogo className={styles.logo}></AppLogo>
						<AppLogoTitle className={styles.title}></AppLogoTitle>
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
