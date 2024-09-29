let url = "	https://api.potterdb.com/v1/movies";
let btn = document.querySelector('.suggest');
let img = document.querySelector('img');
let imgDesc = document.querySelector('.poster h2');
let heading = document.querySelector('.title h1');
let summary = document.querySelector('.title p');
let date = document.querySelector('.date');
let time = document.querySelector('.time');
let yt = document.querySelector('.trailer a');
let wiki = document.querySelector('.wiki a');


let suggestions = async () => {
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    let random = Math.floor(Math.random() * 11);

    let movie = data.data[random].attributes;
    let imgLink = movie.poster;
    img.setAttribute('src',`${imgLink}`);

    imgDesc.innerText = movie.title;
    heading.innerText = movie.title;

    summary.innerText = movie.summary;

    date.innerText = movie.release_date;
    time.innerText = movie.running_time;

    let trailer = movie.trailer;
    yt.setAttribute('href', `${trailer}`);
    let wikiLink = movie.wiki;
    wiki.setAttribute('href', `${wikiLink}`);
};

btn.addEventListener('click', suggestions);