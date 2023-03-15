var data = JSON.parse (localStorage.getItem ('data'));
console.log(typeof data);
console.log(data);
// document.getElementById('element-to-update').textContent = data.name;

let bannerImg = document.querySelector(".bannerImg")
let filmName = document.querySelector(".filmName")
let country = document.querySelector(".country")
let genre = document.querySelector(".genre")
let year = document.querySelector(".year")
let IMDb = document.querySelector(".IMDb")
let studio = document.querySelector(".studio")
let descriptionText = document.querySelector(".descriptionText")
let iframe = document.querySelector("iframe")

bannerImg.style.backgroundImage = ("url(" + data.banner + ")");
filmName.textContent = data.name;
country.textContent = data.country;
genre.textContent = data.genre;
year.textContent = data.year;
IMDb.textContent = data.IMDb;
studio.textContent = data.studio;
descriptionText.textContent = data.description;
iframe.src=data.link;
iframe.title=data.title;
