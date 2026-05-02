const lista = document.getElementById("lista");
const input = document.getElementById("input");

let objetivos = [];

// 🔄 Renderizar tudo
function render() {
  lista.innerHTML = "";

  objetivos.forEach((obj, index) => {
    const li = document.createElement("li");

    // ✨ animação de entrada
    li.classList.add("item-enter");
    setTimeout(() => {
      li.classList.add("item-enter-active");
    }, 10);

    // ✔️ checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = obj.concluido;

    checkbox.onchange = () => {
      objetivos[index].concluido = checkbox.checked;
      salvar();
      render();
    };

    // 📝 texto
    const texto = document.createElement("span");
    texto.innerText = obj.texto;

    texto.style.transition = "all 0.2s ease";
    texto.style.textDecoration = obj.concluido ? "line-through" : "none";
    texto.style.opacity = obj.concluido ? "0.5" : "1";

    // 🗑️ botão deletar
    const deletar = document.createElement("button");
    deletar.innerText = "✕";
    deletar.style.marginLeft = "auto";

    deletar.onclick = () => {
      li.style.opacity = "0";
      li.style.transform = "translateX(20px)";
      li.style.transition = "all 0.2s ease";

      setTimeout(() => {
        objetivos.splice(index, 1);
        salvar();
        render();
      }, 200);
    };

    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(deletar);

    lista.appendChild(li);
  });

  // 📊 barra de progresso
  const progressBar = document.getElementById("progress-bar");

  if (progressBar) {
    const total = objetivos.length;
    const concluidos = objetivos.filter(o => o.concluido).length;

    const porcentagem = total === 0 ? 0 : (concluidos / total) * 100;

    progressBar.style.width = porcentagem + "%";
  }
}

// ➕ adicionar objetivo
function addObjetivo() {
  if (input.value.trim() === "") return;

  objetivos.push({
    texto: input.value,
    concluido: false
  });

  input.value = "";
  salvar();
  render();
}

// 💾 salvar dados
function salvar() {
  localStorage.setItem("objetivos", JSON.stringify(objetivos));
}

// 📥 carregar dados
function carregar() {
  const data = localStorage.getItem("objetivos");
  if (data) {
    objetivos = JSON.parse(data);
  }
}

// ❌ fechar app
function fechar() {
  window.close();
}

// ⌨️ Enter para adicionar
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addObjetivo();
  }
});

// 🚀 iniciar app
carregar();
render();
