import { Copyright } from 'lucide-react';
import styles from './CopyRight.module.css';

export default function CopyRight() {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div>
					<Copyright />
				</div>
				<p className={styles.desc}>Copyright 2024 Tae Geun, Kim</p>
			</div>
		</footer>
	);
}
