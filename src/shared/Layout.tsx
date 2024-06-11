import { PropsWithChildren } from "react";
import { useUserSessionStore } from "@/stores/UserSessionStore";
import { useMutation } from "@tanstack/react-query";
import { adminService } from "@/services/AdminService";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { IoStorefront } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillBasketFill } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { SyncLoader } from "react-spinners";
import logo from "../../public/image.png";
import { stone } from "tailwindcss/colors";

const menu = [
  {
    menuSubHeader: "Menu",
    menuItems: [
      {
        menuItemText: "Dashboard",
        menuItemPath: "/",
        menuItemIcon: <AiFillDashboard />,
      },

      {
        menuItemText: "Supermercados",
        menuItemPath: "/supermercados",
        menuItemIcon: <IoStorefront />,
      },
      {
        menuItemText: "Usuários",
        menuItemPath: "/usuarios",
        menuItemIcon: <BsPeopleFill />,
      },
      {
        menuItemText: "Produtos compartilhados",
        menuItemPath: "/produtos-compartilhados",
        menuItemIcon: <BsFillBasketFill />,
      },
    ],
  },
  {
    menuSubHeader: "Sistema",
    menuItems: [
      {
        menuItemText: "Configurações",
        menuItemPath: "/configuracoes",
        menuItemIcon: <FaGear />,
      },
    ],
  },
];

export function Layout({ children }: PropsWithChildren) {
  const userSession = useUserSessionStore((state) => state.userSession);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: adminService.signOut,
    onSuccess: () => {
      localStorage.removeItem("userSession");
      localStorage.removeItem("currentUser");
      navigate("/login");
    },
  });

  const handleSignOut = async () => {
    await mutation.mutateAsync(userSession);
  };

  return (
    <main className="flex h-screen">
      <aside className="w-80 bg-stone-900 p-8">
        <img
          className="mb-11"
          src={logo}
        />
        <nav>
          <ul>
            {menu.map((link) => {
              return (
                <>
                  <strong className="block text-lg text-white mb-5">{link.menuSubHeader}</strong>
                  <ul>
                    {link.menuItems.map((menuItem, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            to={menuItem.menuItemPath}
                            className={({ isActive }) =>
                              isActive
                                ? "flex items-center gap-4 bg-white text-stone-900 mb-3 h-10 px-4 py-2 rounded-md"
                                : "flex items-center gap-4 text-stone-400 mb-3 h-10 px-4 py-2"
                            }
                          >
                            {menuItem.menuItemIcon}
                            <span>{menuItem.menuItemText}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </ul>
          <Button
            className="gap-4 text-stone-400"
            onClick={handleSignOut}
          >
            {mutation.isPending ? (
              <SyncLoader
                size={8}
                color={stone[400]}
              />
            ) : (
              <>
                <MdLogout />
                Sair da conta
              </>
            )}
          </Button>
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </main>
  );
}
