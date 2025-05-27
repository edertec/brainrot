function cadastrarPizzaLover() {
  const nome = document.getElementById('nome').value.trim();
  const pizza = document.getElementById('pizza').value;
  const nivel = document.getElementById('nivel').value;

  if (!nome || !pizza || !nivel) {
    alert("Preencha todos os campos, mio amico! 🇮🇹🍕");
    return;
  }

  const novoRegistro = {
    nome,
    pizza,
    nivel
  };

  db.ref('pizzaLovers').push(novoRegistro)
    .then(() => {
      alert("Registrado com sucesso! Mamma Mia!");
      document.getElementById('nome').value = '';
      document.getElementById('pizza').value = '';
      document.getElementById('nivel').value = '';
      consultarPizzaLovers(); // Atualiza lista
    });
}

function consultarPizzaLovers() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  db.ref('pizzaLovers').once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      const div = document.createElement('div');
      div.className = 'registro';
      div.innerHTML = `<strong>${data.nome}</strong> ama <em>${data.pizza}</em> com nível <strong>${data.nivel}</strong>`;
      lista.appendChild(div);
    });
  });
}

// Carrega a lista assim que a página abrir
window.onload = consultarPizzaLovers;
