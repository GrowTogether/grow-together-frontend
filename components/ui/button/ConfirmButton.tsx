import { IReactNode } from '@/types/IReactNode';
import styles from './ConfirmButton.module.css';

export default function ConfirmButton({ children }: any) {
	return (
		<>
			<button className={styles.button}>{children}</button>
		</>
	);
}
