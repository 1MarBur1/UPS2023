import { Props } from './KeyboardButton.props';

const KeyboardButton: React.FC<Props> = ({ label, className='' }): JSX.Element => {
	return (
		<div className={'py-[10px] bg-[#405B74] inline-block rounded-lg text-white ' + className}>
			{label}
		</div>
	);
};

export default KeyboardButton;
