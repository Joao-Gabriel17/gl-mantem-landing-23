import React from "react";
import { buildWaLink, WHATSAPP_PRIMARY, DEFAULT_WA_MSG } from "@/lib/whatsapp";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  phone?: string;
  message?: string;
};

export function WhatsAppLink({
  phone = WHATSAPP_PRIMARY,
  message = DEFAULT_WA_MSG,
  children,
  onClick,
  className,
  target: _target,
  rel: _rel,
  href: _href,
  ...props
}: Props) {
  const href = buildWaLink(phone, message);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onClick?.(event);

      if (typeof window !== "undefined" && typeof window.open === "function") {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    },
    [href, onClick],
  );

  return (
    <a
      {...props}
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics="wa_click"
      data-external-link="true"
      onClick={handleClick}
    >
      {children ?? "Chamar no WhatsApp"}
    </a>
  );
}
