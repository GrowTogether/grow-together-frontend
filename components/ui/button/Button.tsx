import styles from './Button.module.css';

export default function Button({ children }: any) {
	return (
		<>
			<button className={styles.button}>{children}</button>
		</>
	);
}
