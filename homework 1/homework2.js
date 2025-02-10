let button = document.getElementById("fetchBtn");

button.addEventListener("click", function (){
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response){
      console.log(response);
      response.json() 
        .then(function (user){
          document.getElementById("name").textContent = user.name;
          document.getElementById("username").textContent = user.username;
          document.getElementById("email").textContent = user.email;
          document.getElementById("phone").textContent = user.phone;
          document.getElementById("website").textContent = user.website;
          document.getElementById("address").textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
          document.getElementById("company").textContent = user.company.name;
          document.getElementById("table").style.display = "table";
        })
        .catch(function (errorParse){
          console.log(errorParse);
        })
    })
    .catch(function (error){
      console.log(error);
    })
})