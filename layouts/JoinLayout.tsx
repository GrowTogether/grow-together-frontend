import { IReactNode } from '@/types/IReactNode';
import CopyRight from '@/components/copy-right/CopyRight';
import styles from './JoinLayout.module.css';
import Logo from '@/components/logo/Logo';
import Link from 'next/link';

export default function JoinLayout({ children }: IReactNode) {
	return (
		<>
			<div className={styles.outline}>
				<div className={styles.container}>
					{/* <div className={styles.logo}>
						<Logo></Logo>
					</div> */}
					<div className={styles.children}>{children}</div>
					
					<div className={styles.joiner}>
						<p>
							이미 가입된 회원이신가요?{' '}
							<Link href="#" className={styles.text2}>
								로그인
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
