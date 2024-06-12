import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { IoIosArrowDown, IoIosNotificationsOutline } from 'react-icons/io';

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="p-3 rounded-full hover:bg-customMkt-lightWhite transition relative mr-[30px]">
              <IoIosNotificationsOutline className="w-6 h-6" />
              <div className="absolute rounded-full w-[7px] h-[7px] bg-red-700 right-4 top-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent
            className="bg-customMkt-primary "
            sideOffset={5}
            side="bottom"
          >
            <p className="text-white font-normal">Notificações</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Avatar className="mr-[14px] w-12 h-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-[2px] justify-end mr-28">
        <p className="text-lg font-semibold leading-[1.2]">
          João Pedro Ferreira
        </p>
        <span className="text-customMkt-gray3 font-normal text-base leading-[1.2]">
          Administrador
        </span>
      </div>
      <IoIosArrowDown className="text-customMkt-gray3 cursor-pointer" />
    </div>
  );
};

export default UserProfile;
