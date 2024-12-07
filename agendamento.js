document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("scheduleForm");
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obtém os valores dos campos do formulário
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const pet = document.getElementById("pet").value;
  
      // Verifica se todos os campos estão preenchidos
      if (!date || !time || !name || !phone || !pet) {
        messageDiv.textContent = "Por favor, preencha todos os campos.";
        messageDiv.style.color = "red";
        return;
      }
  
      // Simula o envio de um aviso
      console.log(`Enviando mensagem para ${phone}:`);
      console.log(`Olá ${name}, sua consulta com ${pet} foi confirmada para ${date} às ${time}. Equipe auQmia.`);
  
      // Mostra mensagem de confirmação no site
      messageDiv.innerHTML = `
        <p>Consulta agendada com sucesso!</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Horário:</strong> ${time}</p>
        <p><strong>Tutor:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Animal:</strong> ${pet}</p>
      `;
      messageDiv.style.color = "green";
  
      // Limpa o formulário
      form.reset();
    });
  });
  