let movieTitles = ['The Godfather','The Shawshank Redemption','Star Wars','The Dark Knight','GoodFellas','Ralph Breaks The Internet','Interstellar','Inception','Shutter Island','Source Code'];

let movieContent = "<div class='contentBoxRow'><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div></div>";

let movieContent2 = "<div class='contentBoxRow'><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div><div class='fiveContentBox'><img class='movieListingImg' src='./img/starWars.jpg' alt='movieImage'/><div class=:'tittle'>Movie Title</div></div></div>";

let movieList = "<ol><li>Black Panther</li><li>Mission:Impossible-Fallout</li><li>A Star Is Born</li><li>A Quiet Place</li><li>Paddington 2</li><li>Incredibles</li><li>Eighth Grade</li><li>Leave No Trace</li><li>Call Me by Your Name</li><li>Wonder Woman</li></ol>"

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
  },
  getHTML3: function () {
    console.log('called: getHTML');
    return movieList;
  }
};

var someOtherFunction = function () {
    console.log("Can't touch this!");
}
