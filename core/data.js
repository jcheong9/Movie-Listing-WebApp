let movieTitles = ['The Godfather','The Shawshank Redemption','Star Wars','The Dark Knight','GoodFellas','Ralph Breaks The Internet','Interstellar','Inception','Shutter Island','Source Code'];

let movieContent = "<div class='contentBoxRow'><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div></div>";

let movieContent2 = "<div class='contentBoxRow'><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div></div>";



module.exports = {
  getJSON: function () {
    console.log('called: getJSON');

    return movieTitles;
  },
  getHTML: function () {
    console.log('called: getHTML');
    return movieContent;
  },
  getHTML2: function () {
    console.log('called: getHTML');
    return movieContent2;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}
