import AppLogo from '@/public/app-logo.svg';
import AppLogoTitle from '@/public/app-logo-title.svg';
import styles from './Logo.module.css';

export default function Logo() {
	return (
		<>
			<div className={styles['logo-container']}>
				<AppLogo className={styles.logo}></AppLogo>
				<AppLogoTitle className={styles.title}></AppLogoTitle>
			</div>
		</>
	);
}
