const data = [
  {
    //object syntax
    title: "card-title", //properties of object       /// leaving this data array of objects to assign one column with 3 refreshing items
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
  {
    //object syntax
    title: "card-title", //properties of object
    content: "lkasdgl",
    URL: "http://via.placeholder.com/300x200",
    alt: "image placeholder 300x200",
  },
];

const artists = [
  //second array set up to do part 3
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
        alt: "selfie",
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
        alt: "scream",
      },
    ],
  },
];
///original work we did for placehodlder cards///
// function addCard(card) {
//   //need to "paramaterize our function" aka pass through something. card
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);
//   // console.log(document.getElementById("card-list"))                                   //trying to query the html for info during live server view
//   template.querySelector(".card-title").innerText = card.title;
//   template.querySelector(".card-text").innerText = card.content;
//   template.querySelector(".card-img").src = card.URL;
//   // template.querySelector('.card-alt').alt = card.alt;

//   document.querySelector("#card-list").appendChild(template);
// }

/////doing van gogh portion ///
// function addCard(item) {  //need to "paramaterize our function" aka pass through something. card
//     const artist = document.getElementById("artist-portfolio").content.cloneNode(true);
//     console.log(artist)
//     artist.querySelector('.artist-name').innerText = item.name
//     document.querySelector("#artist-list").appendChild(artist);
//     item.portfolio.map((itemPortfolio) => {
//       const template = document.getElementById("card-template").content.cloneNode(true);
//       console.log(document.getElementById("card-list"))
//       template.querySelector(".card-title").innerText = itemPortfolio.title;           //removed item.content line query selection. didnt have content to query
//       template.querySelector(".card-img").src = itemPortfolio.url;      //changed to itemportfoli at 1201 because relating to wrong item when calling originally
//       template.querySelector(".card-img").alt = itemPortfolio.alt;

//       document.querySelector("#card-list").appendChild(template);
//     })
//   }

//round 3 (functional)
function addCard(card) {
  //need to "paramaterize our function" aka pass through something. card
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  // console.log(document.getElementById("card-list"))                                   //trying to query the html for info during live server view
  template.querySelector(".card-title").innerText = card.title;
  // template.querySelector(".card-text").innerText = card.body; //changed from content to body because content is in original version not this one
  template.querySelector(".card-text").innerText = card.content
  template.querySelector(".card-img").src = card.URL;
  // template.querySelector('.card-alt').alt = card.alt;

  document.querySelector("#card-list").appendChild(template);
}

if ("content" in document.createElement("template")) {
  //need to map over data set so included map function in if statement
  //   data.map((card) => {
  //arrow function to map over the input card information
  // addCard(card); //passing through our card funcation
  //   });
  // artists.map((item) => {
  //     addCard(item)
  // })
}

// const data = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]
let cardsData = [];
function getData() {
  //hits api in console on broser
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") // adding in ?_limit=10 sets max output at 10 response items
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      json.map((item) => {
        addCard(item);
      });
    }); //takes parsed response and assigns to json
}

// getData(); //calls function

setInterval(() => {      //manage data slide 57 to set a delay of 5seconds
  const list =   document.querySelector("#card-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild)
  } 
  console.log("pulling")      //console.log here to show function working inside the browser console.
  news.map((item)=>{
    addCard(item)
  });
}, 5000  )

let news = [            //local data object
  { id: 1, title: "News1", content: "bla",  URL: "http://via.placeholder.com/300x200"},
  { id: 2, title: "News2", content: "ble",  URL: "http://via.placeholder.com/300x200"},
  { id: 3, title: "News3", content: "blu",  URL: "http://via.placeholder.com/300x200"},
  { id: 4, title: "Self Portrait", content: "The fervor and fragility of Van Gogh's life are told on this canvas by stark contrasts of color and restless brushstrokes. Heavy lines of paint seem to emanate from his head like a wavering force field, energized by his own intensity.",  URL: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
  { id: 5, title: "Sky", content: "According to the Hermitage Museum, the painting 'expresses the great psychological tension under which Van Gogh found himself'; two of the windows, considered the 'eyes' of a home, are rendered with 'alarming' red splashes, while the star, a sign of fate, is seen as symbolic of van Gogh's anguish.",  URL: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"},
  { id: 6, title: "Starry Night Sky", content: 'The night sky depicted by van Gogh in the Starry Night painting is brimming with whirling clouds, shining stars, and a bright crescent moon.',  URL: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg"},
  { id: 7, title: "cafe Terrace at Night", content: "Despite being painted more than 130 years ago, this cafe still exists in France and has since been renamed the Café Van Gogh. This artwork marks the first time Van Gogh's famous post-impressionistic star-filled sky was seen in a piece, and it’s believed the work was painted on the ground, in person, rather than from memory. While the artwork doesn't bear his signature, it's widely known to be Van Gogh's, as he mentions Café Terrace at Night in a number of his letters.",  URL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/sei54258302-0.jpg?width=640&auto=webp&quality=100&crop=2760%3A3438%2Csmart"},
  { id: 8, title: "Sunflowers", content: "Just three shades of yellow were used to make these creations, which he believed communicated the message of gratitude. Originally, he intended to paint a series of twelve, to put up in his Yellow House but he completed five in total — they are now are on display in galleries in Amsterdam, Munich, Tokyo, Philadelphia and in London's National Gallery.",  URL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/12/van-gogh-sunflowers-1888.jpg?width=640&auto=webp&quality=100&crop=1848%3A2314%2Csmart"},
  { id: 9, title: "Almond Blossoms", content: "This iconic piece was inspired by the birth of Van Gogh’s nephew, who shared the same name as the artist. Part of a group of paintings from 1888 and 1890, it was a gift for Van Gogh’s brother Theo. Blossom branches and shrubs against a blue sky are a popular motif across the artist’s work, but in this instance the flowering buds represent the new arrival, Vincent Willem.",  URL: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/sei54258176-0.jpg?width=960&auto=webp&quality=100&crop=3250%3A2617%2Csmart"}
];

//function to make form submission do stuff

function submitButton (event) {                               /// this is a function to pull local data not from api
  // event.preventDefault()
  console.log("button clicked")
  const title = document.getElementById("news-title")
  const content = document.getElementById("news-content")
  const URL = document.getElementById("news-URL")
  // console.log(title.value) 
  // console.log(content.value) 
  // console.log(URL.value)   
  
  let newItems = {
    title: title.value,
    content: content.value,
    URL: URL.value,
  }
  news.push(newItems)
}


