function generatePixQRCode() {
  // Coleta os valores dos campos do formulário
  const campaign = document.getElementById('campaign').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  // Validação dos campos
  if (!campaign || !name || !email || !amount) {
    alert("Por favor, preencha todos os campos.");
    return; // Interrompe a execução caso algum campo esteja vazio
  }

  // Validação adicional para garantir que o valor da doação seja um número válido
  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, insira um valor de doação válido.");
    return;
  }

  // Criação de uma string simples para o QR Code
  const qrData = `Campanha: ${campaign} | Nome: ${name} | Email: ${email} | Valor: R$ ${amount}`;

  // Exibe os dados no console para verificação
  console.log("Dados para o QR Code:", qrData);

  // Exibe o QR Code
  const qrCodeContainer = document.getElementById('qrcode');
  qrCodeContainer.innerHTML = ''; // Limpa qualquer QR Code anterior

  // Usando o método toCanvas do QRCode.js
  QRCode.toCanvas(qrCodeContainer, qrData, function (error) {
    if (error) {
      console.error("Erro ao gerar o QR Code:", error);
      alert("Erro ao gerar o QR Code.");
    } else {
      console.log("QR Code gerado com sucesso!");
    }
  });
}
