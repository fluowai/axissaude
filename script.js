const form = document.querySelector("#contact-form");
const phone = "5511977092773";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("nome")?.toString().trim();
  const userPhone = data.get("telefone")?.toString().trim();
  const service = data.get("servico")?.toString().trim();
  const details = data.get("detalhes")?.toString().trim();

  const message = [
    "Olá! Vim pelo site e gostaria de atendimento domiciliar e preciso de orçamento.",
    name ? `Nome: ${name}` : "",
    userPhone ? `Telefone: ${userPhone}` : "",
    service ? `Tipo de cuidado: ${service}` : "",
    details ? `Detalhes: ${details}` : "",
  ].filter(Boolean).join("\n");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
