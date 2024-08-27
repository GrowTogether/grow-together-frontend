import { IMenuCard, IMenuCardProps } from '@/types/IMenuCard';
import styles from './MenuCard.module.css';

export default function MenuCard({ menu }: IMenuCardProps) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.icon}>
					<menu.icon width="30" height="30" />
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>{menu.title}</h3>
					<p className={styles.desc}>{menu.description}</p>
				</div>
			</div>
		</>
	);
}
