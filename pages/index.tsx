import { NextPage } from 'next'
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { programs } from '../shared/consts/programs';

const Home: NextPage = () => {
	const router = useRouter();
	const [localStorageObj, setLocalStorageObj] = useState<any>(null);

	useEffect(() => {
		setLocalStorageObj(localStorage)
	}, [])
	useEffect(() => {
		if (localStorageObj !== null) {
			if (localStorageObj.getItem('access_token') == null)
				router.push('/signup')
		}
	}, [localStorageObj])

	return (
		<MainLayout>
			<div className='flex flex-wrap gap-5'>
				{programs.map((i, num) => (
					<div className='w-28'>
						<div className='w-full h-28 relative'>
							<Image src={i.icon.src} alt='' fill />
						</div>
						<p className='font-squartiqa underline text-center w-full'>
							{i.title}
						</p>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default Home;
