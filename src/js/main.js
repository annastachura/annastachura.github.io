"use strict";


const list = document.querySelector('.card-list--js');

fetch('https://api.github.com/users/annastachura/repos?sort-update')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            consile.log(repo);
            list.innerHTML += `

   <li class="card">
                <div class="card__box">
                    <img class="card__image" src="assets/img/github.png">
                    <h3 class="card__title">${name}</h3>
                    <p class="card__paragraph">${description}</p>
                </div>
                <div class="card__background">
                    <a class="card__link" href="#" title="Demo:${name}.">Demo</a>
                        <img src="assets/img/demo-icon.png">Demo</a>
                    <a class="card__link" href="${html_url}" target="_blank" rel ="nofollow noreferer" title="Source code"${name}.">Github</a>
                        <img src="assets/img/code-icon.png">Github</a>
                </div>
            </li>
   `;
        }
    })
    .catch(err => {
        console.log(err);
    })