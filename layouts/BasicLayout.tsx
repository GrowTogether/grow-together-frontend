import { IReactNode } from '@/types/IReactNode';
import React from 'react';
import styles from './BasicLayout.module.css';
import { Copyright } from 'lucide-react';
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
					<footer className={styles.footer}>
						<div className={styles.content}>
							<div>
								<Copyright />
							</div>
							<p className={styles.desc}>Copyright 2024 Tae Geun, Kim</p>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}
