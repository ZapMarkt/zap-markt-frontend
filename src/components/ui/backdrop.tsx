import { PropsWithChildren } from "react";

export function Backdrop({ children }: PropsWithChildren) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col gap-4 justify-center items-center bg-[#00000050] animate-fade-in">
      {children}
    </div>
  );
}
