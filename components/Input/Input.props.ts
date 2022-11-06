import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	isSecret?: boolean;
	isRequired?: boolean;
}

export type {
	Props,
};
