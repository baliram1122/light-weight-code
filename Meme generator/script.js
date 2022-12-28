let memeBox = document.querySelector(".meme-box");
let generateBtn = document.querySelector(".generate-btn");



generateBtn.addEventListener("click", () => {
    let p = fetch("https://meme-api.com/gimme");

    p.then((response)=> {
        return response.json()
    }).then((response) => {
        console.log(response)
        console.log(response.title, response.postLink)
        memeBox.innerHTML = `
        <button class="post-link"><a target="_blank" href="${response.postLink}">Reddit post link</a></button>
        <h1 class="title">${response.title}</h1>
        <img src='${response.url}' alt='meme'>
        `;
    })
    
})