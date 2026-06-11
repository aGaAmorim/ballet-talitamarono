const API_URL = "https://script.google.com/macros/s/AKfycbzmgykEu9sTGcQ4KP5SFx3vG2nCXGrSo-BFDsveb7VbiPcVvO81576HJ0fBl-bIsZIBOQ/exec";

async function carregarProfessoras() {
  const teamGrid = document.getElementById("teamGrid");

  try {
    const response = await fetch(`${API_URL}?action=professoras`);
    const professoras = await response.json();

    teamGrid.innerHTML = "";

    professoras.forEach((professora) => {
      teamGrid.innerHTML += `
        <div class="teacher-card">
          <img src="${professora.foto}" alt="${professora.nome}">
          <h3>${professora.nome}</h3>
          <p>${professora.aulas}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
    teamGrid.innerHTML = "<p>Não foi possível carregar o time no momento.</p>";
  }
}

carregarProfessoras();