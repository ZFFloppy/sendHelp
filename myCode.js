let cnt = 0;
const informatie = document.getElementById("text");
const lista = document.getElementById("toDo");
function adaugaUnaNoua() {
    cnt++;
    let s = informatie.value;
    if (s == "") return;
    informatie.value = "";
    let div = document.createElement('div');
    div.id = `the${cnt}`;
    div.classList.add("nushMan");
    div.innerHTML = `
        <div class = "divspecial">
            <input type = "checkbox">
            <input type = "text" value = ${s} readonly class = "textSpecial">
        </div>
        <button class = "butonSpecial" onclick = "sterge(${cnt})">x</button>
    `;
    lista.append(div);
    console.log(div.class);
}

function sterge(index) {
    lista.removeChild(document.getElementById(`the${index}`));
}

