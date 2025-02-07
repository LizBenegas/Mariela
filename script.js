'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const nav1MenuBtn = document.querySelector('.nav1-menu-btn');

const nav1Form = document.querySelector('.nav1-form');
const nav1FormCloseBtn = document.querySelector('.nav1-form-close');
const nav1busquedaBtn = document.querySelector('.nav1-busqueda-btn');

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    nav1MenuBtn.classList.toggle('active');
}

nav1MenuBtn.addEventListener('click', navIsActive);

const busquedaBarIsActive = () => nav1Form.classList.toggle('active');

nav1busquedaBtn.addEventListener('click', busquedaBarIsActive);
nav1FormCloseBtn.addEventListener('click', busquedaBarIsActive);