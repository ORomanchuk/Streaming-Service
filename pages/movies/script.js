let movies = document.querySelector(".listOfMovies");

let mobileMenu = document.querySelector(".mobileMenu")
let mobileMenuDiv = document.querySelector(".mobileMenuDiv")

mobileMenu.addEventListener('click', function() {
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
        
        this.li.append(img);
        this.li.append(hiddenDiv);
        hiddenDiv.append(movieName);
        hiddenDiv.append(a);
        hiddenDiv.append(button);

        movies.append(this.li);
    
        button.addEventListener('click', function() {
            localStorage.clear('data');
            localStorage.setItem('data', JSON.stringify(object));
            window.location.href = '../movie/index.html';
        });
        this.li.addEventListener('click', function() {
            localStorage.clear('data');
            localStorage.setItem('data', JSON.stringify(object));
            window.location.href = '../movie/index.html';
        });
    }
}