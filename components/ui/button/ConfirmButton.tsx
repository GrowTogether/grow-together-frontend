import { IReactNode } from '@/types/IReactNode';
import styles from './ConfirmButton.module.css';

export default function ConfirmButton({ onClick, children }: any) {
	return (
		<>
			<button onClick={onClick} className={styles.button}>
				{children}
			</button>
		</>
	);
}
