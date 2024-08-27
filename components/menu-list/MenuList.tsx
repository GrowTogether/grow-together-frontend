import { IMenuCard } from '@/types/IMenuCard';
import MenuCard from '../menu-card/MenuCard';
import styles from './MenuList.module.css';
import { MessageSquare, Brain, UserPlus, TrendingUp } from 'lucide-react';

export default function MenuList() {
	const mainMenues: IMenuCard[] = [
		{
			icon: MessageSquare,
			title: '실시간 상호작용',
			description: '친구들과 실시간으로 소통하며 학습',
		},
		{
			icon: Brain,
			title: '참여형 학습',
			description: '퀴즈와 토론을 통한 능동적 지식 확장',
		},
		{
			icon: UserPlus,
			title: '맞춤형 학습 경험',
			description: '개인화된 학습 자료로 효과적인 학습',
		},
		{
			icon: TrendingUp,
			title: '학습 진도 관리',
			description: '실시간 진행 상황 확인 및 목표 달성',
		},
	];

	return (
		<>
			<ul className={styles.container}>
				{mainMenues.map((menu, index) => {
					return (
						<li key={index}>
							<MenuCard menu={menu} />
						</li>
					);
				})}
			</ul>
		</>
	);
}
