$("#fetchDogsBtn").click(function(){
  $.ajax({
    url: "https://dog.ceo/api/breed/hound/images",
    success: function (response){
      console.log(response);
      $("#images").empty();
      for (let imgUrl of response.message){
        $("#images").append(`<img src="${imgUrl}" alt="Hound Dog">`);
      }
    },
    error: function (error){
      console.log("An error occurred");
      console.log(error);
    }
  });
});