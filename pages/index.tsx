import styles from '@/styles/Home.module.css';
import MainDescription from '@/components/main-description/MainDescription';
import MenuList from '@/components/menu-list/MenuList';
import BasicLayout from '@/layouts/BasicLayout';
import CoffeeDonation from '@/components/coffee-donation/CoffeeDonation';
import ExplainApp from '@/components/explain-app/ExplainApp';
import Logo from '@/components/logo/Logo';

export default function Home() {
	return (
		<>
			<BasicLayout>
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
