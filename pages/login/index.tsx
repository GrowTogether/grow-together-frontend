import LoginForm from '@/components/login-form/LoginForm';
import Logo from '@/components/logo/Logo';
import NarrowLayout from '@/layouts/narrowLayout';

export default function LoginPage() {
	return (
		<>
			<NarrowLayout>
				<Logo></Logo>
				<LoginForm></LoginForm>
			</NarrowLayout>
		</>
	);
}
