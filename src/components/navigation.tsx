"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Thermometer, Droplets, Lightbulb, Wrench, Recycle, Home, Info, Phone, ChevronDown, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Solar and Battery",
    href: "/services/solar-and-battery",
    description: "Sustainable energy solutions for your home and business.",
    icon: Sun
  },

  {
    title: "Maintenance",
    href: "/services/maintenance",
    description: "Comprehensive electrical maintenance services.",
    icon: Wrench
  },
  {
    title: "Responsible Recycling",
    href: "/services/responsible-recycling",
    description: "Eco-friendly disposal of old equipment.",
    icon: Recycle
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparentPage = pathname === '/';

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled || !isTransparentPage
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Logo lightMode={!isScrolled && isTransparentPage} />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                    isScrolled || !isTransparentPage ? "" : "text-white hover:text-white focus:text-white data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                    isScrolled || !isTransparentPage ? "" : "text-white hover:text-white focus:text-white data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                  )}
                >
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                    isScrolled || !isTransparentPage ? "" : "text-white hover:text-white focus:text-white data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                    isScrolled || !isTransparentPage ? "" : "text-white hover:text-white focus:text-white data-[active]:bg-white/20 data-[state=open]:bg-white/20"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex">
          <Button
            asChild
            variant={isScrolled || !isTransparentPage ? "default" : "outline"}
            className={cn(
              isScrolled || !isTransparentPage
                ? ""
                : "border-white text-white hover:bg-white hover:text-black bg-transparent"
            )}
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className={cn(
                  isScrolled || !isTransparentPage ? "" : "text-white hover:bg-white/10 hover:text-white"
                )}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl">
                <div className="p-6 border-b">
                  <Logo />
                </div>
                
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/"
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <Home className="h-5 w-5" />
                        Home
                      </span>
                    </Link>
                    
                    <Link
                      href="/about"
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <Info className="h-5 w-5" />
                        About Us
                      </span>
                    </Link>

                    <div className="space-y-2">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Zap className="h-5 w-5" />
                          Services
                        </span>
                        {isServicesOpen ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </button>
                      
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-base text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              <service.icon className="h-4 w-4" />
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        Contact
                      </span>
                    </Link>
                  </div>
                </nav>

                <div className="p-6 border-t mt-auto">
                  <Button asChild className="w-full h-12 text-lg shadow-lg shadow-primary/20">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get a Free Quote
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    &copy; {new Date().getFullYear()} APM ENERGY
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
