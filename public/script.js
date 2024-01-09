const m = document.querySelector(".main")
const a = document.querySelector('.div1')

a.addEventListener(
    "click",
    function () {

        const note = document.createElement('div');
        let a = prompt("enter a background colour, you can also write colour  in RGB, HEX and HSL")
        note.innerHTML = `
        <button onclick="document.body.style.backgroundColor = '${a}'">${a}</button>`;
        m.append(note)
    })
