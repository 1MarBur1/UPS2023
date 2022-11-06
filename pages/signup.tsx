import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import Input from '../components/Input';
import AuthScreenLayout from '../layouts/AuthScreenLayout';

const SignUpPage: NextPage = () => {
	const router = useRouter();
	const login = () => {
		localStorage.setItem('access_token', 'insane_token')
		router.push('/')
	}

	return (
		<AuthScreenLayout className='py-8'>
			<div className='w-full'>
				<p className='text-[#BEBEBE] text-sm'>
					Форма регистрации нового пользователя киберспортивного клуба
				</p>
				
				<div className='flex w-full gap-6 mt-5'>
					<Input placeholder='Логин' className='w-full' type='text' />
					<Input placeholder='ФИО' className='w-full' />
				</div>
				<div className='flex w-full gap-6 mt-5'>
					<Input placeholder='Пароль' className='w-full' isSecret />
					<Input placeholder='Подтверждение пароля' className='w-full' isSecret />
				</div>
				<div className='flex w-full gap-6 mt-5'>
					<Input placeholder='Телефон' className='w-full' type='text' />
					<Input placeholder='Email' className='w-full' type='email' />
				</div>
				<div className='flex gap-2 mt-4'>
					<input type='checkbox' className='outline-none' />
					<p className='text-white text-xs'>
						Согласен(а) с правилами посещения комплекса клуба
					</p>
				</div>
				<div className='flex gap-2 mt-2'>
					<input type='checkbox' className='outline-none' />
					<p className='text-white text-xs'>
						Согласен(а) с политикой обработки персональных данных
					</p>
				</div>
				<div className='flex w-5/6 gap-6 mt-5'>
					<Button variant='primary' className='h-16 w-full' onClick={() => router.push('/login')}>
						Вход	
					</Button>
					<Button variant='border' className='h-16 w-full' onClick={() => login()}>
						Регистрация	
					</Button>
				</div>
			</div>
		</AuthScreenLayout>
	);
};

export default SignUpPage;
