import React from 'react';
import styles from './CoffeeDonation.module.css';
import { Coffee } from 'lucide-react';
import Button from '../ui/button/Button';

export default function CoffeeDonation() {
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.title}>커피 한 잔의 응원</h2>
				<div className={styles.content}>
					<Coffee className={styles.coffee} />
					<p className={styles.desc}>
						여러분의 작은 후원이 Interactive Study를 더 나은 학습 플랫폼으로
						만듭니다. 커피 한 잔 값으로 우리의 서비스를 지원해 주세요. 모든
						후원금은 플랫폼 개선과 새로운 학습 기능 개발에 사용됩니다.
					</p>
				</div>
				<div className={styles.button}>
					<Button>
						커피 도네이션 하기
						<Coffee className={styles.coffee2} />
					</Button>
				</div>
			</div>
		</>
	);
}
