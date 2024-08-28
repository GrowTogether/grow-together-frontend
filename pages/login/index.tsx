import LoginForm from '@/components/login-form/LoginForm';
import LoginLayout from '@/layouts/LoginLayout';

export default function LoginPage() {
	return (
		<>
			<LoginLayout>
				<LoginForm></LoginForm>
			</LoginLayout>
		</>
	);
}
