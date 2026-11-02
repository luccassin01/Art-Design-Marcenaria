// Substitua pelo número real da empresa, apenas dígitos, com código do país (55 = Brasil).
export const WHATSAPP_NUMBER = "5511999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conhecer melhor os projetos da Art Design Marcenaria e solicitar um orçamento.";

export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
