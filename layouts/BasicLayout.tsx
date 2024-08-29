import { IReactNode } from '@/types/IReactNode';
import styles from './BasicLayout.module.css';
import CopyRight from '@/components/copy-right/CopyRight';
import Button from '@/components/ui/button/Button';
import { NextRouter, useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface BasicLayoutProps extends IReactNode {
	isLoggedIn: boolean;
	userProfile: string;
}

export default function BasicLayout({
	children,
	isLoggedIn,
	userProfile,
}: BasicLayoutProps) {
	const router: NextRouter = useRouter();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const movePage = (path: string) => {
		console.log(path);
		router.push(path);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleLogout = () => {
		// 실제 로그아웃 로직 구현
		localStorage.removeItem('userToken');
		router.push('/');
	};
	console.log('##', isLoggedIn);
	return (
		<div className={styles.outline}>
			<header className={styles.header}>
				<div className={styles.hamburger} onClick={toggleSidebar}>
					<Menu size={20} />
				</div>
				{isLoggedIn ? (
					<div className={styles.userProfile}>
						<img
							src={userProfile}
							alt="User Profile"
							className={styles.profileImage}
							onClick={() => movePage('/profile')}
						/>
					</div>
				) : (
					<div className={styles.controls}>
						<button onClick={() => movePage('/join')} className={styles.join}>
							<p className={styles.text}>회원가입</p>
						</button>
						<Button onClick={() => movePage('/login')} className={styles.sign}>
							<p className={styles.text}>로그인</p>
						</Button>
					</div>
				)}
			</header>

			<div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
				<div className={styles.sidebarHeader}>
					<button className={styles.closeButton} onClick={toggleSidebar}>
						<X size={16} />
					</button>
				</div>
				<nav>
					<ul>
						<li>
							<Link href="/">홈</Link>
						</li>
						<li>
							<Link href="/about">소개</Link>
						</li>
						<li>
							<Link href="/services">서비스</Link>
						</li>
						<li>
							<Link href="/contact">문의</Link>
						</li>
						{isLoggedIn && (
							<>
								<li>
									<Link href="/profile">프로필</Link>
								</li>
								<li>
									<button
										onClick={handleLogout}
										className={styles.logoutButton}
									>
										로그아웃
									</button>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>

			<div>{children}</div>

			<div>
				<CopyRight />
			</div>
		</div>
	);
}
