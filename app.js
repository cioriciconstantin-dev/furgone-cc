let usi = [];

function aggiungi() {
  const cantiere = document.getElementById("cantiere").value;
  const materiale = document.getElementById("materiale").value;
  const quantita = document.getElementById("quantita").value;

  if (!cantiere || !materiale || !quantita) {
    alert("Compila tutti i campi");
    return;
  }

  usi.push({ cantiere, materiale, quantita });

  aggiornaLista();
}

function aggiornaLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  usi.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.materiale} – ${u.quantita} pz (${u.cantiere})`;
    lista.appendChild(li);
  });
}

function mandaWhatsApp() {
  if (usi.length === 0) {
    alert("Nessun materiale inserito");
    return;
  }

  let testo = "🚐 Reintegro furgone EFC\n\n";

  usi.forEach(u => {
    testo += `${u.materiale}: ${u.quantita} pz\n`;
  });

  testo += "\nUsate nei cantieri:\n";
  usi.forEach(u => {
    testo += `• ${u.cantiere}\n`;
  });

  const numero = "3450994541"; // numero ufficio
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(testo)}`;

  window.location.href = url;
}
