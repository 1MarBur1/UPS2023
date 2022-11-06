import Props from './Button.props';
import defaultBackground from '../../assets/button_bg.png';
import orangeBackground from '../../assets/button_bg_orange.png';

const Button: React.FC<Props> = ({ variant, children, className = '', ...props }) => {
	switch(variant) {
		case 'primary': 
			return (
				<button
					className={'p-3 bg-primary z-50 text-white font-squartiqa font-semibold ' + className}
					style = {{
						backgroundImage: `url(${defaultBackground.src})`
					}}
					{...props}
				>
					{children}
				</button>
			);
		case 'orange': 
			return (
				<button
					className={'p-3 bg-primary z-50 text-white font-squartiqa text-sm font-semibold ' + className}
					style = {{
						backgroundImage: `url(${orangeBackground.src})`
					}}
					{...props}
				>
					{children}
				</button>
			);
		case 'border':
			return (
				<button
					className={'textshadow border-[4px] border-red text-red font-squartiqa font-semibold ' + className}
					{...props}	
				>
					{children}
				</button>
			);
	}
};

export default Button;

