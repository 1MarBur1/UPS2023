import Image from 'next/image';
import Props from './MainLayout.props';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';
import Ellipse from '../../assets/ellipse.svg';
import Avatar from '../../assets/avatar.png';
import Computer from '../../assets/computer.svg';
import Logout from '../../assets/logout.svg';
import OrangeBg from '../../assets/orange_bg.png';

import CSGO from '../../assets/csgo.png';
import Dota2 from '../../assets/dota2.png';
import Fortnite from '../../assets/fortnite.png';
import Warzone from '../../assets/warzone.png';

import Games from '../../assets/sidebar/games.svg';
import Donate from '../../assets/sidebar/donate.svg';
import ClubGames from '../../assets/sidebar/club_games.svg';
import Bar from '../../assets/sidebar/bar.svg';
import Arrow from '../../assets/sidebar/arrow.svg';
import { useRouter } from 'next/router';

interface sidebarItem {
	icon: any,
	title: string,
};

const games = [CSGO, Dota2, Fortnite, Warzone];
const sidebarItems: sidebarItem[] = [{
	icon: Games,
	title: 'Игры',
}, {
	icon: Donate,
	title: 'Пополнить',
}, {
	icon: ClubGames,
	title: 'Клубные игры',
}, {
	icon: Bar,
	title: 'Бар',
}];

const MainLayout: React.FC<Props> = ({ children, className='' }) => {
	const router = useRouter();
	
	return (
		<div className={'bg-[#0D141B] min-h-screen text-white pt-5 px-5 relative ' + className}>
			<div className='w-full h-20 flex bg-[#101820] items-center justify-between pr-64 pl-16'>
				<div className='relative w-32 h-12'>
					<Image src={Logo} alt='Logo' fill />
				</div>
				<Button variant='orange' className='h-11 px-6'>
					Выбрать тариф
				</Button>
				<div className='flex items-center'>
					<p>
						Бесплатный пакет
					</p>

					<div className='h-[6px] flex gap-2 ml-4'>
						<p className='-mt-2'>
							2
						</p>
						<Ellipse />
						<Ellipse />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='fill-[#3F454B]' />
						<Ellipse className='f4ill-[#3F454B]' />
						<p className='-mt-2'>
							10
						</p>
					</div>
				</div>
			</div>
			<div className='flex'>
				<div className='bg-[#101820] w-72 flex justify-between' style={{height: 'calc(100vh - 100px)'}}>
					<div className='w-20 flex flex-col items-center'>
						{sidebarItems.map((I, num) => (
							<button className='flex flex-col items-center mb-3 w-[60px]' key={num}>
								<I.icon />
								<Arrow />
								<p className='text-xs text-center'>
									{I.title}
								</p>
							</button>
						))}
					</div>
					<div>
						<p className='text-[#D7771A] text-center font-bold text-lg'>
							ИЗБРАННОЕ
						</p>

						{games.map((i, num) => (
							<div key={num} className='mb-2'>
								<div className='relative w-full h-28'>
									<Image src={i} alt='' fill />
								</div>

								<p className='text-center'>
									Убрать из избранного
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='pl-6 pt-5 pr-60'>
					{children}
				</div>
			</div>

			<div className='fixed right-0 bg-[#101820] w-60 h-full top-5 overflow-y-auto'>
				<div className='h-20 bg-red flex items-center justify-center text-xs gap-1'>
					<Image src={Avatar} alt='' width={50} height={50} />
					<div>
						<p className='font-squartiqa'>
							Ivan BALABEAR 	
						</p>
						<div className='flex'>
							<p>
								20 место
							</p>
							<p className='ml-2'>
								STANDART зона
							</p>
						</div>
					</div>
				</div>
				<div className='px-7 flex flex-col gap-3 pt-3'>
					<div className='border-red border-2 px-3 flex flex-col pt-5 pb-3'>
						<p className='font-squartiqa text-xs self-center'>
							история посещений
						</p>
						<div className='h-[1px] bg-red w-full mt-1' />
						<div className='flex justify-between text-xxs my-[6px]'>
							<p>
								Пятница
							</p>
							<p className='text-[#6E757D]'>
								30.04.2021
							</p>
						</div>
						<div className='h-[1px] bg-[#37404D] w-full' />
						<div className='flex justify-between text-xxs my-[6px]'>
							<p>
								Четверг
							</p>
							<p className='text-[#6E757D]'>
								29.04.2021
							</p>
						</div>
						<div className='h-[1px] bg-[#37404D] w-full' />
						<div className='flex justify-between text-xxs my-[6px]'>
							<p>
								Среда
							</p>
							<p className='text-[#6E757D]'>
								28.04.2021
							</p>
						</div>
						<div className='h-[1px] bg-[#37404D] w-full' />
						<div className='flex justify-between text-xxs mt-[6px]'>
							<p>
								Вторник
							</p>
							<p className='text-[#6E757D]'>
								27.04.2021
							</p>
						</div>
					</div>

					<div className='border-orange border-2 px-3 pt-5 pb-3'>
						<p className='font-squartiqa text-xs self-center'>
							Ваш баланс
						</p>
						
						<div className='bg-[#202E3D] text-xxs py-1 pl-2 mt-1'>
							<p>
								ВАШ БАЛАНС
							</p>
							<p>
								523 334 KZT
							</p>
						</div>

						<div className='bg-[#202E3D] text-xxs py-1 pl-2 mt-1'>
							<p>
								ВАШ КЭШБЕК
							</p>
							<p>
								14 KZT
							</p>
						</div>

						<div className='bg-[#202E3D] text-xxs py-1 pl-2 mt-1'>
							<p>
								Bonus
							</p>
							<p>
								14 KZT
							</p>
						</div>
					</div>

					<div className='bg-cover py-3 px-4' style={{ backgroundImage: `url(${OrangeBg.src})` }}>
						<p className='font-squartiqa text-xs'>
							текущий тариф
						</p>
						<div className='bg-[#161D26] py-2 pl-2'>
							<p className='text-xxs'>
								Стандарт 6 
								<br />
								часов утро(Вых)
							</p>
							<p className='text-xs mt-2'>
								Пакет 400 KZT
							</p>
							<p className='text-xxs mt-2'>
								22:00-04:00
							</p>
						</div>
					</div>

					<div className='border-red border-2 px-3 items-center flex text-xs flex-col pt-5 pb-3'>
						<Computer className='mb-2' />
						Вызвать оператора 
					</div>

					<div className='flex flex-col'>
						<button className='flex items-center self-end' onClick={() => {
							localStorage.removeItem('access_token');
							router.push('/login')
						}}>
							<p className='text-3xl text-red'>
								EXIT 
							</p>
							<Logout />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
