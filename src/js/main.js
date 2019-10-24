"use strict";


const list = document.querySelector('.card-list--js');

fetch('https://api.github.com/users/annastachura/repos?sort-update')
    .then(resp => resp.json())
    .then(resp => {
        const repos = resp;
        for (const repo of repos) {
            console.log(repo);
            list.innerHTML += `
            <li class="card">
                <div class="card__box">
                    <img class="card__image" src="assets/img/github.png">
                    <h3 class="card__title">${repo.name}</h3>
                    <p class="card__paragraph">${repo.description} ${repo.homepage}</p>
                </div>
                <div class="card__background">
                    <a class="card__link" href="https://annastachura.github.io/${repo.name}" target="_blank" rel ="nofollow noreferer" title="Demo:${repo.name}.">Demo</a>
                        <img src="assets/img/demo-icon.svg"></a>
                    <a class="card__link card__link--code" href="${repo.html_url}" target="_blank" rel ="nofollow noreferer" title="Source code"${repo.name}.">Github</a>
                        <img src="assets/img/code-icon.svg"></a>
                </div>
            </li>
   `;
        }
    })
    .catch(err => {
        console.log(err);
    })