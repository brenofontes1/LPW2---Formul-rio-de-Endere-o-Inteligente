document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formEndereco");
  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const uf = document.getElementById("uf");

  cep.addEventListener("input", (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
    }

    e.target.value = valor;
  });

  numero.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  uf.addEventListener("input", (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!cep.value) {
      alert("CEP é obrigatório.");
      return;
    }

    if (!/^\d{5}-\d{3}$/.test(cep.value)) {
      alert("CEP inválido. Use o formato 00000-000.");
      return;
    }

    if (!logradouro.value || logradouro.value.length < 5) {
      alert("Logradouro deve ter no mínimo 5 caracteres.");
      return;
    }

    if (!numero.value) {
      alert("Número é obrigatório.");
      return;
    }

    if (!/^\d+$/.test(numero.value)) {
      alert("Número deve conter apenas dígitos.");
      return;
    }

    if (!uf.value) {
      alert("UF é obrigatória.");
      return;
    }

    if (!/^[A-Z]{2}$/.test(uf.value)) {
      alert("UF inválida. Use duas letras maiúsculas (ex: RJ, SP).");
      return;
    }

    alert("Endereço cadastrado com sucesso!");
  });
});
