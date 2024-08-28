import Link from 'next/link';
import styles from './JoinForm.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';
import AppLogoTitle2 from '@/public/app-logo-title2.svg';

export default function JoinForm({ nextStep, updateFormData }: any) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<AppLogoTitle2 width={260} className={styles.logo} />
					<h2>에 오신 것을 환영합니다 😊</h2>
				</div>
				<p className={styles.desc}>
					함께 배우고 성장하는 공간, 지금 시작해보세요!
				</p>
				<div className={styles.submit}>
					<ConfirmButton onClick={nextStep}>
						<p className={styles.submittext}>회원 가입 시작</p>
					</ConfirmButton>
				</div>
			</div>
		</>
	);
}
