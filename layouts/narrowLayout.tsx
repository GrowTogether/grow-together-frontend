import { IReactNode } from '@/types/IReactNode';
import BasicLayout from './BasicLayout';
import CopyRight from '@/components/copy-right/CopyRight';
import styles from './narrowLayout.module.css';

export default function NarrowLayout({ children }: IReactNode) {
	return (
		<>
			<div className={styles.outline}>
				<div className={styles.container}>
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
