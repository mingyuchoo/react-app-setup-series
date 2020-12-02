import './button.scss';

import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  type = 'button',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
