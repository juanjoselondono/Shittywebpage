function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function createBuildingImage(){
    var Images = ["https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/3769312/pexels-photo-3769312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/4491951/pexels-photo-4491951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    var randomNumber = getRandomInt(0,3)
    var Image = `<img class="section-item" src= ${Images[randomNumber]}></img>`
    $(".section-list").prepend(Image);
}
function createAnimalImage(){
    var Images = ["https://images.pexels.com/photos/1539610/pexels-photo-1539610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/8258224/pexels-photo-8258224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/5686514/pexels-photo-5686514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/6436456/pexels-photo-6436456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
    var randomNumber = getRandomInt(0,3)
    var Image = `<img class="section-item" src= ${Images[randomNumber]}></img>`
    $(".section-list").prepend(Image);
}