import styles from './JoinForm4.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';

export default function JoinForm4({ prevStep, nextStep, updateFormData }: any) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span className={styles.target}>비밀번호</span> 를 입력해주세요!
					</h2>
				</div>
				<p className={styles.desc}>
					영문, 숫자, 특수문자 중 2종류 이상을 조합하여 10~16자로 생성해주세요
				</p>
				<form action="">
					<div className={styles.form}>
						<input
							type="text"
							id="password"
							name="password"
							placeholder="비밀번호 입력"
							className={styles.password}
						/>
						<input
							type="text"
							id="password2"
							name="password2"
							placeholder="비밀번호 재입력"
							className={styles.password}
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
