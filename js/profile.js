var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

const editPersonalInfo = $(".personal-info")[0];
document.querySelector(".feather-x").addEventListener("click", function(e){
    console.log(editPersonalInfo.value);
} )
