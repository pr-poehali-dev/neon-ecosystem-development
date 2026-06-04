import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Наши герои", href: "#heroes" },
    { name: "Гуманитарная помощь", href: "#help" },
    { name: "Мероприятия", href: "#events" },
    { name: "Партнёры", href: "#partners" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "group lg:hidden p-2 text-foreground/60 hover:text-foreground transition-colors duration-200",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={22} />
          <X className="hidden group-[[data-state=open]]:block" size={22} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed z-30 inset-0 bg-black/80 backdrop-blur-md"
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.dataset.overlay !== "true"
            ) {
              e.preventDefault();
            }
          }}
          className="fixed top-0 left-0 w-full z-40 pt-24 pb-12 px-6"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

          <nav className="flex flex-col gap-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="font-mono text-sm uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors duration-150 py-3 border-b border-white/5"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="inline-block mt-10 font-mono text-sm uppercase tracking-widest border border-primary/40 hover:border-primary text-primary hover:bg-primary/10 px-7 py-3 rounded-full transition-all duration-200"
          >
            Вступить в фонд
          </a>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
