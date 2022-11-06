import Props from './AuthScreenLayout.props';
import Image from 'next/image';

import bg from '../../assets/background.png';
import Logo from '../../assets/logo.png';
import Ad from '../../assets/ad.png';

import RussiaIcon from '../../assets/russia.svg';
import USAIcon from '../../assets/usa.svg';
import KeyboardButton from '../../components/KeyboardButton';

const AuthScreenLayout: React.FC<Props> = ({ children, className='py-24', ...props }): JSX.Element => {
	return (
		<div 
			className={'w-screen h-screen overflow-y-auto overflow-x-hidden border-[26px] flex border-red bg-cover px-16 ' + className}
			{...props}
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
		>	
			<div className='w-1/2 h-full'>
				<Image src={Logo} alt='Logo' width={200} height={84} />
				{children}		
				<div className='w-[450px] h-[83px] relative mt-4'>
					<Image src={Ad} alt='Logo' fill />
				</div>
				<div className='w-2/3 min-w-max'>
					<p className='text-xl text-white'>
						Раскладка клавиатуры
					</p>
					<div className='flex mt-1'>
						<div className='bg-[#1D3449] w-36 h-20 flex items-center justify-center'>
							<RussiaIcon />
						</div>
						<div className='bg-[#0E1821] w-36 h-20 flex items-center justify-center'>
							<USAIcon />
						</div>
					</div>
					<div className='flex gap-[10px] items-center mt-1'>
						<p className='text-[#5C5C5C]'>
							*Для смены раскладки ввода 
							<br />
							языка нажмите комбинацию клавиш
						</p>

						<KeyboardButton label='Alt' className='px-3' />
						<p className='text-white'>
							+
						</p>
						<KeyboardButton label='Shift' className='px-5' />
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='font-squartiqa text-red text-[400px] -mt-16'>
					88
				</p>
				<div className='flex h-10 self-end mt-16'>
					<div className='bg-[#1D3449] w-52 flex items-center justify-center'>
						<p className='text-sm text-white uppercase'>
							вы находитесь в зоне 
						</p>
					</div>
					<div className='bg-[#0E1821] w-36 flex items-center justify-center'>
						<p className='text-lg font-squartiqa text-[#B42A40] uppercase'>
							standart
						</p>
					</div>
				</div>
			</div>			
		</div>
	);
};

export default AuthScreenLayout;
