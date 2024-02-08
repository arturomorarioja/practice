'use strict';

const topDiv = document.querySelector('main > div');

const topClone = topDiv.cloneNode(true);
document.querySelector('main').appendChild(topClone);

document.querySelector('#btnOpenModal').addEventListener('click', () => {
    document.querySelector('dialog').showModal();
});

const txtUsername = document.querySelector('#txtUsername');

txtUsername.addEventListener('focus', () => console.log('focus'));
txtUsername.addEventListener('select', () => console.log('select'));
txtUsername.addEventListener('input', () => console.log('input'));

txtUsername.addEventListener('blur', () => console.log('blur'));
txtUsername.addEventListener('change', () => console.log('change'));

txtUsername.addEventListener('invalid', (e) => {
    // e.preventDefault();
    console.log('invalid');
});
txtUsername.addEventListener('reset', () => console.log('reset'));

txtUsername.addEventListener('search', () => console.log('search'));