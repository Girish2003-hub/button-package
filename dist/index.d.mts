import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string | React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps };
