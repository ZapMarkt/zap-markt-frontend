import Logo from '@/assets/logo.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { FaMapMarkedAlt, FaShoppingCart } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { PiHouseFill } from 'react-icons/pi';
import { RiBookmark2Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import SidenavItem from './components/SidenavItem';

const SideNav = () => {
  const pathname = useLocation().pathname;

  const menuLinks = [
    {
      primary: 'Dashboard',
      to: '/dashboarduser',
      icon: <PiHouseFill className="h-8 w-8" />,
      active: pathname === '/dashboarduser',
    },
    {
      primary: 'Pedidos',
      to: '/pedidos',
      icon: <HiDesktopComputer className="h-8 w-8" />,
      active: pathname === '/pedidos',
    },
    {
      primary: 'Produtos',
      to: '/produtos',
      icon: <FaShoppingCart className="h-8 w-8" />,
      active: pathname === '/produtos',
    },
    {
      primary: 'Entrega',
      to: '/entrega',
      icon: <FaMapMarkedAlt className="h-8 w-8" />,
      active: pathname === '/entrega',
    },
    {
      primary: 'Histórico de pedidos',
      to: '/historico-de-pedidos',
      icon: <RiBookmark2Fill className="h-8 w-8" />,
      active: pathname === '/historico-de-pedidos',
    },
    {
      primary: 'Configurações',
      to: '/configuracoes',
      icon: <IoSettingsSharp className="h-8 w-8" />,
      active: pathname === '/configuracoes',
    },
    {
      primary: 'Sair',
      to: '/login',
      icon: <MdExitToApp className="h-8 w-8" />,
      active: pathname === '/login',
    },
  ];
  return (
    <nav className="max-w-[110px] bg-customMkt-gray1 h-screen">
      <ul>
        <li className="pt-[40px] px-38px pb-[13px] border-b border-customMkt-gray2 flex justify-center items-center mb-4">
          <Link to="/dashboarduser">
            <img src={Logo} alt="Logo" />
          </Link>
        </li>
        {menuLinks.map((link) => (
          <TooltipProvider key={link.primary} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to={link.to}>
                  <SidenavItem
                    icon={link.icon}
                    className={cn(
                      link.active &&
                        'bg-customMkt-secondary text-customMkt-primary border-customMkt-primary',
                    )}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-customMkt-primary "
                sideOffset={5}
                side="right"
              >
                <p className="text-white font-normal">{link.primary}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
