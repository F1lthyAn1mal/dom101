/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    const animals = document.querySelector('#animals');
    animals.src = 'http://placebear.com/400/200';
    animals.alt = 'A bear.';
    animals.title = 'A BEAR!';
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.querySelector(`#${id}`);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    const list = document.querySelector(query);
    if (list) {
        const items = Array.from(list.children);
        items.reverse().forEach(item => list.appendChild(item));
    }
    return list;
}

function mover(moveThis, appendToThis) {
    const elem = document.querySelector(moveThis);
    const dest = document.querySelector(appendToThis);

    dest.append(elem);
}

function filler(list, candidates) {
    // candidates.forEach(str => {
    //     const li = document.createElement('li');
    //     li.textContent = str;
    //     list.append(li);
    // });
    for (let item of candidates) {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
    }
}

function dupe(selector) {
    const elem = document.querySelector(selector);
    const parent = elem.parentElement;
    const elem2 = elem.cloneNode(true);
    parent.append(elem2);
}

function removeAll(selector) {
    // const elems = document.querySelectorAll(selector);
    // elems.forEach((_, i) => elems[i].remove());
    // // for (const elem of elems) {
    // //     elem.remove();
    // // }

    document.querySelectorAll(selector).forEach(
        elem => elem.remove()
    );
}

function getUserData() {
    const user = {
        name: document.querySelector('#username').value,
        speed: Number(document.querySelector('#speed').value),
        student: document.querySelector('#student').checked
    };
    return user;
}