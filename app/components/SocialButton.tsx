import React from "react";

type SocialButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  className: string
};

const SocialButton = ({ icon, onClick, className }: SocialButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default SocialButton;
