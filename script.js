
let i = document.getElementById('ism')
let s = document.getElementById('fam')
let yosh = document.getElementById('yosh')
let box = document.getElementById('box')

box.style.backgroundColor = 'black';
box.style.color = 'white';
box.style.width = '400px';
box.style.padding = '20px';
box.style.borderRadius = '30px';


let name = prompt('Ismingizni kiriting?');
let sur = prompt('Familiyangizni kiriting?');
let age = prompt('Yoshingizni kiriting?');
let letter = prompt(`Ism Familiyangiz katta yoki kichkina harf bilan bo'lsinmi?
    1) katta
    2) kichkina
    `);

    yosh.innerHTML = `Yosh: ${age}` 

    if (letter == '1') {
        i.innerHTML = `Name:` + name.toUpperCase();
        s.innerHTML = `Name:` + sur.toUpperCase();
    } else if (letter == '2') {
        i.innerHTML = `Name:` + name.toLowerCase();
        s.innerHTML = `Name:` + sur.toLowerCase();
    } else {
        alert('Iltimos 1 yoki 2 raqamini tering!');
    }




console.log(new_sur);
console.log(ism);
