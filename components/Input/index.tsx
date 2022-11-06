import { useState } from 'react';
import { Props } from './Input.props';
import ShowIcon from '../../assets/show.svg';
import DontShowIcon from '../../assets/dont_show.svg';

const Input: React.FC<Props> = ({ className='', isRequired=false, isSecret=false, type, ...props }): JSX.Element => {
	const [isChosen, setIsChosen] = useState<boolean>(false);
	function getType () {
		if (isSecret) {
			if (isChosen) 
				return 'text'
			else 
				return 'password'
		}
		else
			return type
	}
	function getIcon () {
		if (isSecret) {
			if (isChosen) {
				return (
					<DontShowIcon />
				);
			}
			else {
				return (
					<ShowIcon />
				);
			}
		}
		else
			return null
	}
	return (
		<div className='relative flex items-center'>
			<input 
				className={'placeholder:text-white placeholder:text-sm border-2 pr-9 outline-none text-white border-white bg-[#1E1E1E] pl-5 py-3 '
					+ className} 

				type={getType()}
				{...props} />
			<button className='absolute right-3' onClick={() => setIsChosen(!isChosen)}>
				{getIcon()}
			</button>
		</div>
	);
};

export default Input;
