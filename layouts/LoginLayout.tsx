import { IReactNode } from '@/types/IReactNode';
import CopyRight from '@/components/copy-right/CopyRight';
import styles from './LoginLayout.module.css';
import Logo from '@/components/logo/Logo';
import Link from 'next/link';

export default function LoginLayout({ children }: IReactNode) {
	return (
		<>
			<div className={styles.outline}>
				<div className={styles.container}>
					<div className={styles.logo}>
						<Logo></Logo>
					</div>
					<div>
						<div>{children}</div>
					</div>
					<div className={styles.joiner}>
						<p>
							아직 계정이 없으신가요?{' '}
							<Link href="#" className={styles.text2}>
								회원가입
							</Link>
						</p>
					</div>
					<div className={styles.footer}>
						<CopyRight></CopyRight>
					</div>
				</div>
			</div>
		</>
	);
}
