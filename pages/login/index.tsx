import LoginForm from '@/components/login-form/LoginForm';
import JoinLayout from '@/layouts/JoinLayout';

export default function LoginPage() {
	return (
		<>
			<JoinLayout>
				<LoginForm></LoginForm>
			</JoinLayout>
		</>
	);
}
