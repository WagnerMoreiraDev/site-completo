function highlightCurrent () {
  const curPage = document.URL;
  const links = document.getElementsByTagName('a');
  for (let link of links) {
    if (link.href == curPage) {
      link.classList.add("pagina-atual");
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    highlightCurrent()
  }
};

let send = document.getElementById("send")

function exibirAlert (){
  alert("Parabéns, Mensagem enviada com sucesso!!")
}

send.addEventListener("click", exibirAlert)