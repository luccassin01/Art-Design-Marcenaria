export const WHATSAPP_NUMBER = "5511988264227";
export const WHATSAPP_DISPLAY_NUMBER = "(11) 98826-4227";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer melhor os projetos da Art Design Marcenaria e solicitar um orçamento.";

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
