import Link from 'next/link';
import styles from './JoinForm3.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';
import Button from '../ui/button/Button';

export default function JoinForm3({ prevStep, nextStep, updateFormData }: any) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span className={styles.target}>이메일</span> 인증을 해주세요!
					</h2>
				</div>
				<p className={styles.desc}>로그인시 사용될 계정입니다</p>
				<form action="">
					<div className={styles.form}>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="abc@email.com"
							className={styles.email}
						/>
						<div className={styles.code}>
							<input
								type="text"
								id="email"
								name="email"
								placeholder="인증코드를 입력해주세요"
								className={styles.confirm}
							/>
							<div className={styles['code-button']}>
								<Button>인증번호 전송</Button>
							</div>
						</div>
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
