import Link from 'next/link';
import Button from '../ui/button/Button';
import styles from './LoginForm.module.css';
import ConfirmButton from '../ui/button/ConfirmButton';

export default function LoginForm() {
	return (
		<>
			<div className={styles.container}>
				<form action="">
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
					<div className={styles.remember}>
						<div className={styles.rememberid}>
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className={styles.checkbox}
							/>
							<label htmlFor="remember-me" className={styles.remembertext}>
								로그인 유지
							</label>
						</div>

						<div>
							<Link href="#" className={styles.rememberpassword}>
								비밀번호를 잊으셨나요?
							</Link>
						</div>
					</div>
					<div className={styles.submit}>
						<ConfirmButton>
							<p className={styles.submittext}>로그인</p>
						</ConfirmButton>
					</div>
				</form>
				<div>
					<div className={styles.divider}>
						<div className={styles.sepa}>
							<div className={styles.line}></div>
						</div>
						<div className={styles.sepa2}>
							<span className={styles.text}>또는 소셜 계정으로 로그인</span>
						</div>
					</div>
				</div>
				<div className={styles.socials}>
					<div className={styles['social-container']}>
						<span className={styles['sr-only']}>Sign in with KakaoTalk</span>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className={styles['social-icon']}
						>
							<path d="M12 3C5.9 3 1 6.9 1 11.7c0 3.1 2.1 5.8 5.2 7.3-.2.6-.7 2.1-.8 2.5-.1.4.2.4.3.3.2-.1 2.6-1.7 3.6-2.4.7.1 1.4.2 2.2.2 6.1 0 11-3.9 11-8.7S18.1 3 12 3z" />
						</svg>
					</div>
					<div className={styles['social-container']}>
						<span className={styles['sr-only']}>Sign in with Github</span>
						<svg
							fill="currentColor"
							viewBox="0 0 24 24"
							className={styles['social-icon']}
						>
							<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
						</svg>
					</div>
					<div className={styles['social-container']}>
						<span className={styles['sr-only']}>Sign in with Google</span>
						<svg
							viewBox="0 0 24 24"
							fill="currentColor"
							className={styles['google-social-icon']}
						>
							<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.joiner}>
				<p>
					아직 계정이 없으신가요?{' '}
					<Link href="#" className={styles.text2}>
						회원가입
					</Link>
				</p>
			</div>
		</>
	);
}
