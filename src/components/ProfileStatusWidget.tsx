import { useCurrentUserStore } from "@/stores/CurrentUserStore";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { IoNotifications } from "react-icons/io5";
import { createAvatarFallback } from "@/utils/createAvatarFallback";

export function ProfileStatusWidget() {
  const currentUser = useCurrentUserStore((state) => state.currentUser);

  return (
    <div className="flex items-center gap-3">
      <TooltipProvider>
        <Tooltip delayDuration={250}>
          <TooltipTrigger>
            <Button
              className="w-12 h-12 rounded-full"
              variant="secondary"
            >
              <IoNotifications size={48} />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-stone-900 text-white">Notificações</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="font-semibold">
            {createAvatarFallback(currentUser?.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <strong className="text-lg text-stone-900">{currentUser?.name}</strong>
          <span className="text-sm text-stone-400">{currentUser?.role?.name}</span>
        </div>
      </div>
    </div>
  );
}
