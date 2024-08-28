import { IReactNode } from '@/types/IReactNode';
import React from 'react';
import styles from './BasicLayout.module.css';
import CopyRight from '@/components/copy-right/CopyRight';
import Button from '@/components/ui/button/Button';
import { NextRouter, useRouter } from 'next/router';

export default function BasicLayout({ children }: IReactNode) {
	const router: NextRouter = useRouter();
	const movePage = (path: string) => {
		console.log(path);
		router.push(path);
	};

	return (
		<>
			<div className={styles.outline}>
				<div className={styles.controls}>
					<button onClick={() => movePage('/join')} className={styles.join}>
						<p className={styles.text}>회원가입</p>
					</button>
					<Button onClick={() => movePage('/login')} className={styles.sign}>
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
