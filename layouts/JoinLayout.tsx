import { IReactNode } from '@/types/IReactNode';
import CopyRight from '@/components/copy-right/CopyRight';
import styles from './JoinLayout.module.css';
import Logo from '@/components/logo/Logo';

export default function JoinLayout({ children }: IReactNode) {
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
					<div>
						<CopyRight></CopyRight>
					</div>
				</div>
			</div>
		</>
	);
}
