export const WHATSAPP_PRIMARY = "5543991685885";
export const DEFAULT_WA_MSG =
  "Olá! Vim pelo site da G&L Manutenções e gostaria de um orçamento.";

function toE164(raw: string) {
  const digits = String(raw || "").replace(/\D/g, "");
  if (digits.startsWith("55")) {
    return digits.replace(/^550+/, "55");
  }
  return `55${digits}`.replace(/^550+/, "55");
}

export function buildWaLink(
  phone = WHATSAPP_PRIMARY,
  message = DEFAULT_WA_MSG,
) {
  const e164 = toE164(phone);
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}
