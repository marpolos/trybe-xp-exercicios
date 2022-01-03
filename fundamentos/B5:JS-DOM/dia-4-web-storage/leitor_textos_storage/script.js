const bkTexto = document.getElementById('texto');
const selectColorBkTexto = document.getElementById('bk-texto');
const selectColorText = document.getElementById('color-text');
/* const textParagrafs = document.querySelectorAll('#texto>p'); */
const selectFontSize= document.getElementById('font-size');
const selectLineHeight = document.getElementById('line-height');
const selectFontFamily = document.getElementById('font-family');
const titulo = document.querySelectorAll('#texto>h1');
console.log(titulo);
const insertText = document.getElementById('textarea');

function chooseBkg(color) {
    const blockColor = document.createElement('div');
    blockColor.classList.add('blockForPreferences');
    blockColor.style.backgroundColor = color;
    selectColorBkTexto.appendChild(blockColor);
}
chooseBkg('lightgray');
chooseBkg('lavender');
chooseBkg('lightgoldenrodyellow');

function chooseColorText(color) {
    const colorText = document.createElement('div');
    colorText.classList.add('blockForPreferences');
    colorText.style.backgroundColor = color;
    selectColorText.appendChild(colorText);
}
chooseColorText('black');
chooseColorText('rgb(30, 30, 36)');
chooseColorText('crimson');

function chooseFontSize(size) {
    const fontSize = document.createElement('div');
    fontSize.classList.add('blockForPreferences');
    fontSize.innerText = size;
    fontSize.style.fontSize = size;
    selectFontSize.appendChild(fontSize);

}
chooseFontSize(15);
chooseFontSize(18);
chooseFontSize(20);

function chooseLineHeight(height) {
    const lineHeight = document.createElement('div');
    lineHeight.classList.add('blockForPreferences');
    lineHeight.innerText = height;
    selectLineHeight.appendChild(lineHeight);
}
chooseLineHeight(1.5);
chooseLineHeight(2);
chooseLineHeight(2.5);

function choosefontFamily(family) {
    const fontFamily = document.createElement('div');
    fontFamily.classList.add('blockForPreferences');
    fontFamily.innerText = family;
    fontFamily.style.fontFamily = family;
    selectFontFamily.appendChild(fontFamily);
}
choosefontFamily('Times');
choosefontFamily('Arial');
choosefontFamily('Monospace');


selectColorBkTexto.addEventListener('click', (event) => {
    const colorSelect = event.target.style.backgroundColor;
    bkTexto.style.backgroundColor = colorSelect;
    localStorage.setItem('backgroundColor', colorSelect);
});

selectColorText.addEventListener('click', (event) => {
    const textParagrafs = document.querySelectorAll('#texto>p');
    const colorText = event.target.style.backgroundColor;
    for (let i = 0; i < textParagrafs.length; i += 1) {
        textParagrafs[i].style.color = colorText;
        localStorage.setItem('colorText', colorText);
    }
    console.log(textParagrafs);
})

selectFontSize.addEventListener('click', (event) => {
    const textParagrafs = document.querySelectorAll('#texto>p');
    const fontSize = event.target.style.fontSize;
    for (let i = 0; i < textParagrafs.length; i += 1) {
        textParagrafs[i].style.fontSize = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }
})

selectLineHeight.addEventListener('click', (event) => {
    const textParagrafs = document.querySelectorAll('#texto>p');
    const lineHeight = event.target.innerText;
    for (let i = 0; i < textParagrafs.length; i += 1) {
        textParagrafs[i].style.lineHeight = lineHeight;
        localStorage.setItem('lineHeight', lineHeight);
    }
})

selectFontFamily.addEventListener('click', (event) => {
    const textParagrafs = document.querySelectorAll('#texto>p');
    const fontFamily = event.target.innerText;
    for (let i = 0; i < textParagrafs.length; i += 1) {
        textParagrafs[i].style.fontFamily = fontFamily;
        localStorage.setItem('fontFamily', fontFamily);
    }
    titulo[0].style.fontFamily = fontFamily;
})

insertText.addEventListener('keyup', (event) => {
    if (event.key == 'Enter' && insertText.value.trim().length > 0) {
        bkTexto.innerText = '';
        const newText = document.createElement('p');
        newText.innerText = insertText.value;
        bkTexto.appendChild(newText);
        localStorage.setItem('textarea', JSON.stringify(newText));
    }
})

function initialization() {
    let textInsert = JSON.parse(localStorage.getItem('textarea'));
    if(textInsert) {
        bkTexto.innerText = '';
        const newText = document.createElement('p');
        newText.innerText = textInsert;
        bkTexto.appendChild(newText);
    }

    const textParagrafs = document.querySelectorAll('#texto>p');

    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) bkTexto.style.backgroundColor = backgroundColor;

    let colorText = localStorage.getItem('colorText');
    if(colorText) {
        for (let i = 0; i < textParagrafs.length; i += 1) {
            textParagrafs[i].style.color = colorText;
        }
    }

    let fontSize = localStorage.getItem('fontSize');
    if(fontSize) {
        for (let i = 0; i < textParagrafs.length; i += 1) {
            textParagrafs[i].style.fontSize = fontSize;
        }
    }

    let lineHeight = localStorage.getItem('lineHeight');
    if(lineHeight) {
        for (let i = 0; i < textParagrafs.length; i += 1) {
            textParagrafs[i].style.lineHeight = lineHeight;
        }
    }

    let fontFamily = localStorage.getItem('fontFamily');
    if(fontFamily) {
        for (let i = 0; i < textParagrafs.length; i += 1) {
            textParagrafs[i].style.fontFamily = fontFamily;
        }
        titulo[0].style.fontFamily = fontFamily;
    }
}
initialization();