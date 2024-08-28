import Link from 'next/link';
import styles from './JoinForm2.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';

export default function JoinForm2({ prevStep, nextStep, updateFormData }: any) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span className={styles.target}>닉네임</span> 을 설정해주세요!
					</h2>
				</div>
				<p className={styles.desc}>다른 사용자들에게 보여질 이름입니다</p>
				<form action="">
					<div className={styles.form}>
						<input
							type="text"
							id="nickname"
							name="nickname"
							placeholder="ex) 퀴즈장인"
							className={styles.nickname}
						/>
					</div>
				</form>
				<div className={styles.submit}>
					<ConfirmButton onClick={nextStep}>
						<p className={styles.submittext}>다음</p>
					</ConfirmButton>
				</div>
			</div>
		</>
	);
}
