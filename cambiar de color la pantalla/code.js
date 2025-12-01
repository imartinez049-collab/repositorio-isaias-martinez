onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://static.vecteezy.com/system/resources/previews/011/894/533/non_2x/cute-happy-santa-claus-waving-cartoon-illustration-father-christmas-kris-kringle-saint-nick-winter-christmas-theme-clip-art-vector.jpg");
});
