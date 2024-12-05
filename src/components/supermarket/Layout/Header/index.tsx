import React from 'react';
import UserProfile from './components/UserProfile';
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="fixed flex justify-between items-center px-[30px] pt-[40px] pb-[15px] w-[calc(100%-110px)] font-semibold left-[110px] border-b border-customMkt-gray2 h-[104px] bg-white z-50">
      <h1 className="text-[38px] leading-[1.2] font-semibold">{title}</h1>
      <UserProfile />
    </header>
  );
};

export default Header;
