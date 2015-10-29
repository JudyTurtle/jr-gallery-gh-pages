// script.js
// Contains the javscript for kenny's gallery
//
// Goal 1: Change picture
// Goal 2: Change title and links
// Goal 3: Include other pictures, titles and links



var index = 0;
var pictures = [
                {
                    url: "http://images.fineartamerica.com/images-medium-large/sea-turtle-monica-and-michael-sweet.jpg",
                    title: "Sea Turtle"
                },
                {
                    url: "http://www.theturtlesource.com/turtleContainer/RussianLightD.jpg",
                    title: "Russian Tortoise"
                },
                {
                    url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Alligator_snapping_turtle.jpg",
                    title: "Snapping Turtle"
                },
                {
                    url: "http://www.wpclipart.com/animals/turtle/turtle_art/Eastern_Box_Turtle__Terrapene_carolina.jpg",
                    title: "Box Turtle"
                },
                {
                    url: "http://www.animalspot.net/wp-content/uploads/2014/11/Pictures-of-Red-Eared-Slider-Turtle.jpg",
                    title: "Red-Eared-Slider-Turtle"
                },
                {
                    url: "http://i.ytimg.com/vi/JJSTJuWG19w/hqdefault.jpg",
                    title: "Chelydridae Turtle"
                },
                {
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Floridasoftshellturtle-cropped.jpg",
                    title: "Soft Shell Turtle"
                }
               ]

// Function that changes the source of the main picture
var changePicture = function(){
    document.getElementById("main-picture").src = pictures[index].url;

    document.getElementById("picture-title").innerHTML = pictures[index].title;

    document.getElementById("picture-link").innerHTML = pictures[index].url;
    document.getElementById("picture-link").href = pictures[index].url;

};


// Do changePicture() when the element 'forward' is clicked
document.getElementById("forward").addEventListener("click", function(){
    // Update the index
    if(index === pictures.length-1){
        alert("You're at the end of the gallery!");
    }
    else{
        index = index + 1;
    }

    changePicture();
});

// Do changePicture() when the element 'back' is clicked
document.getElementById("back").addEventListener("click", function(){
    // Update the index before we display the picture
    if(index === 0){
        alert("You're at the beginning of the gallery!");
    }
    else{
        index = index - 1;
    }

    changePicture();
});
