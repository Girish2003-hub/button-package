import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | React.ReactNode;
}

export const Button: React.FC<ButtonProps> = React.memo(
  (props: ButtonProps) => {
    return <button {...props}>{props.label}</button>;
  }
);

Button.displayName = 'Button';
