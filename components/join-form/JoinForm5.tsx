import Link from 'next/link';
import styles from './JoinForm5.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';

export default function JoinForm5({ prevStep, formData, updateFormData }: any) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						<span className={styles.target}>무엇</span>을 하실건가요?
					</h2>
				</div>
				<p className={styles.desc}>마지막입니다! 힘을 내주세요 💪🏻</p>
				<form action="">
					<div className={styles.form}>
						<select className={styles.select}>
							<option value="">사용 용도를 선택해주세요</option>
							<option value="option1">자격증 공부 목적</option>
							<option value="option2">중학교 공부 목적</option>
							<option value="option3">고등학교 공부 목적</option>
							<option value="option3">대학교 공부 목적</option>
						</select>
					</div>
				</form>
				<div className={styles.submit}>
					<ConfirmButton
						onClick={() => {
							console.log(formData);
						}}
					>
						<p className={styles.submittext}>완료</p>
					</ConfirmButton>
				</div>
			</div>
		</>
	);
}
