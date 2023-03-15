let newMovies = document.querySelector("#newMovies");
let popularMovies = document.querySelector("#popularMovies");

var data = JSON.parse(localStorage.getItem('google'));
console.log(typeof data);
console.log(data);

let mobileMenu = document.querySelector(".mobileMenu")
let mobileMenuDiv = document.querySelector(".mobileMenuDiv")

mobileMenu.addEventListener('click', function () {
    mobileMenuDiv.classList.toggle("hidden");
});

class Movie {
    constructor(photo, banner, link, title, name, uaName, description, uaDescription, country, uaCountry, genre, uaGenre, year, IMDb, studio, popular) {
        this.photo = photo;
        this.banner = banner;
        this.link = link;
        this.title = title;
        this.name = name;
        this.uaName = uaName;
        this.description = description;
        this.uaDescription = uaDescription;
        this.country = country;
        this.uaCountry = uaCountry;
        this.genre = genre;
        this.uaGenre = uaGenre;
        this.year = year;
        this.IMDb = IMDb;
        this.studio = studio;
        this.popular = popular;
        this.li = null;
    }

    createFilm() {
        var object = {
            photo: this.photo,
            banner: this.banner,
            link: this.link,
            title: this.title,
            name: this.name,
            uaName: this.uaName,
            description: this.description,
            uaDescription: this.uaDescription,
            country: this.country,
            uaCountry: this.uaCountry,
            genre: this.genre,
            uaGenre: this.uaGenre,
            year: this.year,
            IMDb: this.IMDb,
            studio: this.studio,
            popular: this.popular
        }

        this.li = document.createElement("li");
        this.li.classList.add("filmCard");
        if (this.popular) {
            this.li.classList.add("popularFilmCard");
        } else {
            this.li.classList.add("newFilmCard");
        }

        let img = document.createElement("img");
        img.classList.add("filmBg");
        img.src = this.photo;

        let hiddenDiv = document.createElement("div");
        hiddenDiv.classList.add("hiddenDiv");

        let movieName = document.createElement("div");
        movieName.classList.add("movieName");
        movieName.innerText = this.name;

        let a = document.createElement("a");
        a.href = "#";

        let button = document.createElement("button");
        button.innerText = "Watch Now";

        let mobileMovieInfo = document.createElement("div");
        mobileMovieInfo.classList.add("mobile");
        mobileMovieInfo.classList.add("mobileFilmDescr");

        let mobileMovieName = document.createElement("h3");
        mobileMovieName.innerText = this.name;

        let mobileMovieCountry = document.createElement("p");
        mobileMovieCountry.innerText = this.country;

        let mobileMovieGenre = document.createElement("p");
        mobileMovieGenre.innerText = this.genre;

        let mobileMovieYear = document.createElement("p");
        mobileMovieYear.innerText = this.year;

        this.li.append(img);
        this.li.append(hiddenDiv);
        this.li.append(mobileMovieInfo);
        hiddenDiv.append(movieName);
        hiddenDiv.append(a);
        hiddenDiv.append(button);
        mobileMovieInfo.append(mobileMovieName);
        mobileMovieInfo.append(mobileMovieCountry);
        mobileMovieInfo.append(mobileMovieGenre);
        mobileMovieInfo.append(mobileMovieYear);

        let popularFilmCards = document.querySelectorAll(".popularFilmCard");
        let newFilmCards = document.querySelectorAll(".newFilmCard");

        if (popularFilmCards.length < 7) {
            popularMovies.append(this.li);
        }
        if (newFilmCards.length < 7) {
            newMovies.append(this.li);
        }
        button.addEventListener('click', function () {
            localStorage.clear('data');
            localStorage.setItem('data', JSON.stringify(object));
            window.location.href = './pages/movie/index.html';
        });
        this.li.addEventListener('click', function () {
            localStorage.clear('data');
            localStorage.setItem('data', JSON.stringify(object));
            window.location.href = './pages/movie/index.html';
        });
    }
}
