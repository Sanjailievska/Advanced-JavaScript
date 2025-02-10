$(document).ready(function(){
  $("#pokemonBtn").click(function(){
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon?limit=10",
      success: function (response){
      console.log(response);
      for (let pokemon of response.results){
          $("#pokemon").append(`<li>${pokemon.name}</li>`);
        }
      },
      error: function (error){
        console.log("An error occurred");
        console.log(error);
      }
    });
  });
});