import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  classname?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  classname,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "relative py-2 px-3 text-sm font-medium rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] transition-opacity",
        disabled && "opacity-50 cursor-not-allowed",
        classname,
      )}
    >
      <div className="absolute inset-0">
        <div className="absolute border border-white/20 inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute border border-white/40 inset-0 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </button>
  );
};
