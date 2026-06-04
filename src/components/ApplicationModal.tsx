import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface ApplicationModalProps {
  open: boolean;
  onClose: () => void;
  subject?: string;
}

export function ApplicationModal({ open, onClose, subject = "Новая заявка с сайта" }: ApplicationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/da808dee-cdc4-49c7-9b65-7504f64ddd4d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message, subject }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && handleClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm" />
        <Dialog.Content className="fixed z-[201] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 relative">
            <Dialog.Title className="font-sentient text-2xl text-white mb-1">{subject}</Dialog.Title>
            <Dialog.Description className="font-mono text-sm text-foreground/50 mb-6">
              Заполните форму — мы свяжемся с вами
            </Dialog.Description>

            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">✦</div>
                <p className="font-sentient text-xl text-white mb-2">Заявка отправлена</p>
                <p className="font-mono text-sm text-foreground/50 mb-6">Мы свяжемся с вами в ближайшее время</p>
                <button
                  onClick={handleClose}
                  className="font-mono text-sm uppercase tracking-widest border border-primary/60 hover:bg-primary/10 text-primary px-8 py-3 rounded-full transition-all duration-300"
                >
                  [ Закрыть ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Имя *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-1.5 block">Сообщение</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Напишите ваш вопрос или пожелание"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono text-xs text-red-400">Произошла ошибка. Попробуйте ещё раз.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 font-mono text-sm uppercase tracking-widest bg-primary/10 border border-primary/60 hover:bg-primary/20 hover:border-primary text-primary px-8 py-3 rounded-full transition-all duration-300 disabled:opacity-50"
                >
                  {status === "loading" ? "[ Отправляю... ]" : "[ Отправить заявку ]"}
                </button>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
