import React from 'react';
import { Book, Users, Globe } from 'lucide-react';
import styles from './ExplainApp.module.css';

const explains = [
	{
		icon: Book,
		title: '능동적 학습',
		description: '상호작용을 통한 효과적 학습',
	},
	{
		icon: Users,
		title: '협력적 성장',
		description: '함께 지식을 공유하고 성장',
	},
	{
		icon: Globe,
		title: '유연한 학습',
		description: '언제 어디서나 참여 가능한 환경',
	},
];
export default function ExplainApp() {
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.title}>왜 Interactive Study인가요?</h2>
				<ul className={styles.content}>
					{explains.map((reason, index) => (
						<li key={index}>
							<reason.icon className={styles.icon} />
							<h3 className={styles.title2}>{reason.title}</h3>
							<p className={styles.desc}>{reason.description}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
