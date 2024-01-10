
// Selects all the images in the .hover-container div.
// Selects the div with class .img-container.
// Selects the div with class .text-container.
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');
const textContainer = document.querySelector('.text-container');

// An array of objects containing the image src and corresponding text.
const imageData = [{ src: "images/imageGallery/air-badminton.jpg", text: "AirBadminton is a racket sport, a variation of badminton. This new exciting format of badmintonis designed to be played outdoors on any surface, by people of all ages and all abilities.Crossminton is another variation of badminton suitable for playing outdoors. Air badminton uses a specially developed AirShuttle, rather than the feather shuttlecock used in regular badminton. The AirShuttle is more durable and therefore suitable for outdoor play, and heavier (8g vs 5g) so that it more suitable to be used in windy conditions." },
{ src: "images/imageGallery/badminton-pex.jpg", text: "Badminton is a type of racket sport that is either played indoors by individuals (singles) or a team of two (doubles). Badminton was developed in British India from a children's game called 'battledore and shuttlecock'. Badminton was called “Poona” in India in the 18th century. The British Army who were assigned there took the game back to the UK and introduced it to their colleagues. The Duke of Beaufort launched Badminton officially in 1873." },
{ src: "images/imageGallery/ball-badminton-yt.jpg", text: "Ball badminton is a team game and a type of racket sport, that is played in India. Ball badminton is played using a yellow ball made of wool, rather than a shuttlecock as in badminton.Ball badminton is played on a court, which is around 12 by 24 meters, divided by a net. Ball badminton can either be played outdoors or indoors. Games are played between two teams, usually with five players per team. There are also doubles and mixed doubles versions. In these formats, two players from each team participate." },
{ src: "images/imageGallery/1924-basque-pelota-1.jpg", text: "Basque pelota is a non-contact and a variation of a racket sport. Basque Pelota (pelota in Spanish, pilota in Basque and Catalan, or pelote in French) is known as the fastest sport in the world. It is mainly played in just a few countries: in Spain and France, especially in the Basque Country and its neighboring areas. It is also popular in Latin American countries such as Argentina, Chile, Cuba, Mexico, Perú and Uruguay." },
{ src: "images/imageGallery/beach-tennis-pixabay.jpg", text: "Beach Tennis is sport which has elements from tennis and volleyball, and is played on the beach. There are two forms of beach tennis, Beach Tennis USA and Beach Tennis with a paddle racket. Beach tennis USA is similar to beach volleyball but played with a tennis ball and a racket. The rules are the combination of tennis and volleyball. If the ball hits the sand, this results in a point. The scoring is the same that of tennis, 15 - 30 - 40, and no-ad at deuce" },
{ src: "images/imageGallery/jai-alaicourt-adobe.jpg", text: "Jai Alai is a sport derived from Basque pelota, and is usually played indoors. It is popular in many Latin American countries. The sport is played with a hook shaped racket, called cesta, fastened to the right hand, and a round ball. The playing field has a wall on three sides, front, back and the left. The right side is left open or is covered with a net. The playing area is split into 14 zones using horizontal lines. The front wall has a line marked 3ft from the bottom." },
{ src: "images/imageGallery/paddle-tennis-pixabay.jpg", text: "Paddle tennis is a racket (paddle) and ball sport, that has been developed from tennis. The court is smaller than in tennis, requiring faster reactions, and the development of net play. The origins of paddle tennis can be traced back 100 years. The game was developed by an Episcopal minister Frank Peer Bea, from lower Manhattan, USA. He wanted to develop recreational activities for the children of the neighborhood." },
{ src: "images/imageGallery/padel-racket-pixabay.jpg", text: "Adapted from tennis, padel tennis or simply 'padel' is played games in the United States and Latin America. Padel is a mix of squash and tennis. It is typically played in doubles (4 players) in a court which is about half the size of the standard tennis court. This small-sized court with walls around actually adds a strong emphasis and benefit to net play resulting into the fast and reaction-based game." },
{ src: "images/imageGallery/para-badminton-flkr.jpg", text: "Para Badminton is the sport of badminton played by disabled athletes. Badminton is an indoor racket sport, involving hitting a feathered shuttlecock over a high net. The rules and competition play are essentially the same for para-badminton and badminton." },
{ src: "images/imageGallery/pickleball-us.jpg", text: "Pickleball is a fun recreational sport that is gaining popularity around the world. It is a non-contact racket sport similar to Badminton and Tennis, and has elements of Table Tennis. The sport was created in the USA in the 1960s." },
{ src: "images/imageGallery/pelota-mixteca-glove-pixa.jpg", text: "Pelota Mixteca is known to have been played thousands of years ago and the current version is believed to be a modified version of that ancient game. It is a very similar version of tennis game without a net. The players of Pelota Mixteca wear decorated gloves to strike a small yet solid ball. The members of each team consisting of five players take their positions. The ball is made to bounce on a flat stone at first and then as it rebounds, it is struck. It uses a scoring system similar to a tennis."},
{ src: "images/imageGallery/racquetball-dive-pixabay.jpg", text: "Racquetball is a type of racket sport that is played using a hollow rubber ball. It can be played either outdoor or indoor. The sport dates back to the 1950’s. Joe Sobek of New Britain, Connecticut YMCA is said to have invented this sport. Sobek is the one who made the set of rules, designed the first strung paddle and called the game as paddle rackets."},
{ src: "images/imageGallery/real-tennis-mine.jpg", text: "Real tennis is the original sport in which lawn tennis, commonly known as tennis, originated. Real Tennis itself was developed out of the sport of Jeu de Paume, a similar sport originally played without a racket and just the hand. Some records show that this game was derived from basque pelota, fistball, fives, Frisian handball, longue paume and valencian pilota."},
{ src: "images/imageGallery/tennis-court-ball-pixabay.jpg" , text: "Road Tennis is a racket and ball sport derived from lawn tennis, that is played on a smaller court with paddles and a low wooden net. The sport was developed in Barbados in the 1930s, where it continues to be popular.Road tennis is more like table tennis than lawn tennis. Most games are played on the road, but officially a court should be 20 x 10 feet (6 x 3 meters), with the court marked out using chalk or tape. The net is a piece of plywood eight inches (20 centimeters) high. The bats are similar to those used in table tennis, but without the rubber. The balls are tennis balls with the furry layer removed."},
{ src: "images/imageGallery/tennis-japan-children-pixabay.jpg", text: "Soft tennis is a sport that is essentially the same as lawn tennis, but is played with a softer ball as opposed to a hard yellow ball used for lawn tennis. The sport originated in Japan where a softball was preferred over the harder ball. The sport is currently very popular in Asia and has also gained some attention in Europe."},
{ src: "images/imageGallery/squash.jpg", text: "Squash is a type of racket sport played indoors in an enclosed court. The sport originated in the UK, and is currently played in almost all countries around the world. The court used is rectangular in shape and is split into two halves, front and rear, using a horizontal marker line. The rear half is split into two boxes with a vertical line. Each rear box has a small marked service area. All the markings on the floor are relevant only during the serve and has no role in subsequent plays. The front wall has three markings, and the rear wall has a single marking, about half the height of the topmost marking on the front wall. The side walls have slanted markings that connect the topmost marking on the front wall to the marking on the rear wall."},
{ src: "images/imageGallery/table-tennis-pixabay.jpg", text: "Table Tennis (called ping pong in the USA) is one of the most popular indoor sports around the world. The sport originated in England, and is currently played by almost all countries around the world. The Chinese have dominated the sport for the last two decades. Table Tennis is played on a rectangular table with a net in the middle that splits the table into two halves. Each half has a vertical marker line in the middle that splits the half into two boxes. A table tennis table is 2.74m long and 1.525m wide, it is raised 76cm above the floor. Players hit a lightweight plastic ball back and forth across a table using a small racket (also called a bat or paddle). Since 1902 table tennis balls were made of celluloid, but these have now been phased out. Since July 1 2014, all international events use balls made out of plastic. The hollow plastic balls weigh just 2.7g. The game is played in a single or doubles format."},
{ src: "images/imageGallery/tamburello-pd.jpg", text: "Tamburello is racquet and a ball based sport which originated in Italy during the 16th century. The sport is a modified and improved version of another ancient Italian sport Pallone col bracciale. It is a wall-based sport that is similar to Fronton and Squash. Today, there are several forms of tamburello, and is practiced in many countries around the world."},
{ src: "images/imageGallery/tennis-doubles-pixabay.jpg", text: "Tennis is one of the most popular individual sports in the world. Players uses a racquet to hit a felt covered rubber ball over a net into the opponents court. The ball must be kept in play and can only bounce once before the opponent must strike the ball back over the net. The game is either played individually (singles) or with a partner (doubles)."},

];

// Adds a listener to wait for the DOM to load before running the code inside the function.
window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');    //Adds a class of active to the parent element of the first image in the gallery.
    textContainer.textContent = imageData[0].text;//Sets the text content of the .text-container div to the text corresponding to the first image in the gallery.
});

// Adds an event listener to each image in the gallery.
allHoverImages.forEach((image, index) => {
    image.addEventListener('mouseover', () => {                 //Adds an event listener to detect when the mouse hovers over an image.
        imgContainer.querySelector('img').src = image.src;      //Changes the source of the image displayed in the .img-container div to the source of the image that the mouse is hovering over.
        resetActiveImg();
        image.parentElement.classList.add('active');
        textContainer.textContent = imageData[index].text;      //Sets the text content of the .text-container div to the text corresponding to the image that the mouse is hovering over.
    });
});

//Adds a functin to reset the active image by removing the 'active' class from the parent element of each hover image.
function resetActiveImg() {
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}
//Adds a function to change the background color of the body to the background color of the clicked element.
function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = b;
}


let buttons = document.querySelector(".buttons");                // Selects the parent element with class "buttons" and stores it in the variable "buttons".
let bttn = buttons.querySelectorAll(".bttn");                // Selects all child elements of the "buttons" element with class "bttn" and stores them in the variable "bttn".

//Iterates through each button element in the "bttn" NodeList and adds an event listener to each button that triggers when it is clicked.
for (var i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName('active');            // Selects the element with class "active" and stores it in the variable "current".
        current[0].className = current[0].className.replace("active", "");   // Replaces the "active" class with an empty string on the element stored in "current".
        this.className += " active";                             // Adds the "active" class to the button that was clicked.
    });
}


// Adds a function to changes the background color of the body to a random RGB value
function changeColor() {
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}


