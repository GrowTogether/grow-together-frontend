import Link from 'next/link';
import styles from './JoinForm.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';
import AppLogoTitle2 from '@/public/app-logo-title2.svg';

export default function JoinForm() {
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
				{/* <form action="">
					<div className={styles.form}>
						<label htmlFor="email" className={styles.label}>
							이메일
						</label>
						<input
							type="text"
							id="email"
							name="email"
							className={styles.email}
						/>
						<label htmlFor="password" className={styles.label}>
							비밀번호
						</label>
						<input
							type="text"
							id="password"
							name="password"
							className={styles.password}
						/>
					</div>
				</form> */}
				<div className={styles.submit}>
					<ConfirmButton>
						<p className={styles.submittext}>회원 가입 시작</p>
					</ConfirmButton>
				</div>
			</div>
		</>
	);
}
