import { IReactNode } from '@/types/IReactNode';
import React from 'react';
import styles from './BasicLayout.module.css';
import CopyRight from '@/components/copy-right/CopyRight';
import ConfirmButton from '@/components/ui/button/ConfirmButton';
import Button from '@/components/ui/button/Button';

export default function BasicLayout({ children }: IReactNode) {
	return (
		<>
			<div className={styles.outline}>
				<div className={styles.controls}>
					<button className={styles.join}>
						<p className={styles.text}>회원가입</p>
					</button>
					<Button className={styles.sign}>
						<p className={styles.text}>로그인</p>
					</Button>
				</div>

				<div>{children}</div>

				<div>
					<CopyRight></CopyRight>
				</div>
			</div>
		</>
	);
}
