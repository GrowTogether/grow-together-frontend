import { IReactNode } from '@/types/IReactNode';
import React from 'react';
import styles from './BasicLayout.module.css';

export default function BasicLayout({ children }: IReactNode) {
	return (
		<>
			<div className={styles.outline}>
				<div className={styles.controls}>
					<button className={styles.join}>회원가입</button>
					<p className={styles.sepa}>|</p>
					<button className={styles.sign}>로그인</button>
				</div>

				<div>{children}</div>
			</div>
		</>
	);
}
