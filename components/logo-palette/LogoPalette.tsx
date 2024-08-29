import React from 'react';

const LogoIcon = ({ colors }: any) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		className="w-24 h-24"
	>
		<defs>
			<linearGradient
				id={`gradient-${colors.id}`}
				x1="0%"
				y1="0%"
				x2="100%"
				y2="100%"
			>
				<stop offset="0%" stopColor={colors.start} stopOpacity="1" />
				<stop offset="50%" stopColor={colors.middle} stopOpacity="1" />
				<stop offset="100%" stopColor={colors.end} stopOpacity="1" />
			</linearGradient>
			<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur stdDeviation="2" result="shadow" />
				<feOffset dx="2" dy="2" result="shadow" />
				<feComposite in="SourceGraphic" in2="shadow" operator="over" />
			</filter>
		</defs>
		<rect
			x="10"
			y="10"
			width="80"
			height="80"
			rx="20"
			ry="20"
			fill={`url(#gradient-${colors.id})`}
			filter="url(#shadow)"
		/>
		<path
			d="M30 35 Q50 25 70 35 Q75 50 70 65 Q50 75 30 65 Q25 50 30 35"
			fill="none"
			stroke="white"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<circle cx="40" cy="45" r="3" fill="white" />
		<circle cx="60" cy="45" r="3" fill="white" />
		<path
			d="M35 55 Q50 60 65 55"
			fill="none"
			stroke="#BBE0FF"
			strokeWidth="2"
			strokeLinecap="round"
			opacity="0.8"
		>
			<animate
				attributeName="d"
				values="M35 55 Q50 60 65 55; M35 55 Q50 50 65 55; M35 55 Q50 60 65 55"
				dur="2s"
				repeatCount="indefinite"
			/>
		</path>
	</svg>
);

export default function LogoPalette() {
	const colorSets = [
		{ id: 'blue', start: '#4A90E2', middle: '#64B5F6', end: '#5CB3FF' },
		{ id: 'green', start: '#4CAF50', middle: '#81C784', end: '#A5D6A7' },
		{ id: 'purple', start: '#9C27B0', middle: '#BA68C8', end: '#CE93D8' },
		{ id: 'orange', start: '#FF9800', middle: '#FFB74D', end: '#FFCC80' },
		{ id: 'pink', start: '#E91E63', middle: '#F06292', end: '#F48FB1' },
		{ id: 'teal', start: '#009688', middle: '#4DB6AC', end: '#80CBC4' },
		{ id: 'red', start: '#F44336', middle: '#E57373', end: '#EF9A9A' },
		{ id: 'indigo', start: '#3F51B5', middle: '#7986CB', end: '#9FA8DA' },
		{ id: 'amber', start: '#FFC107', middle: '#FFD54F', end: '#FFE082' },
		{ id: 'cyan', start: '#00BCD4', middle: '#4DD0E1', end: '#80DEEA' },
	];

	return (
		<div className="grid grid-cols-5 gap-4">
			{colorSets.map(colorSet => (
				<LogoIcon key={colorSet.id} colors={colorSet} />
			))}
		</div>
	);
}
