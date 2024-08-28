import styles from './Button.module.css';

export default function Button({ onClick, children }: any) {
	return (
		<>
			<button onClick={onClick} className={styles.button}>
				{children}
			</button>
		</>
	);
}
