import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import logo from "../assets/qwickin_logo.png";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#about",
    label: "About Us",
  },
  {
    href: "#projects",
    label: "Our Projects",
  },
  {
    href: "#contact",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="border-b-[1px] w-full bg-white">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-full grid grid-cols-[auto,1fr,auto] items-center gap-4">
          <NavigationMenuItem className="font-semibold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-semibold text-lg flex items-center"
            >
              <img
                src={logo}
                alt="Qwickin logo"
                className="mr-2 h-7 w-auto"
              />
              Qwickin
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Qwickin
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex justify-center gap-3">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[12px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end gap-2">
            <a
              rel="noreferrer noopener"
              href="tel:+61424127808"
              className="text-[12px] font-semibold text-foreground/70 hover:text-foreground"
            >
              +61 424 127 808
            </a>
            <Button asChild size="sm" className="text-[12px] px-4 h-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
