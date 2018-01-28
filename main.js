$(document).ready(function() {
  createGrid();


    var curr;
    $(".grid").on("click",function() {
      curr = this;
      $("#colorPicker").modal("toggle");
    });

    $(".btn").on("click",function(){
      if(this.id == "greeny"){
        $(curr).css("background-color", "green");
      }else if(this.id == "yellowy"){
        $(curr).css("background-color", "yellow");
      }else if(this.id == "orangey"){
        $(curr).css("background-color", "orange");
      }else if(this.id == "redy"){
        $(curr).css("background-color", "red");
      }else if(this.id == "purpley"){
        $(curr).css("background-color", "purple");
      }else if(this.id == "bluey"){
        $(curr).css("background-color", "blue");
      }else if(this.id == "oopsy"){
        $(curr).css("background-color", "transparent");
      }
    });
  });


// function that builds a grid in the "container" from https://codepen.io/nakessler/pen/qOdJWm?editors=0110
function createGrid() {
  var monthNames = ["","January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  for(var rows = 0; rows < 13; rows++) {
      for(var columns = 0; columns < 32; columns++) {
        if(columns == 0)
            $("#container").append("<div class='months'>" + monthNames[rows] + "</div>"); //" + monthNames[rows] + "
        else if(rows == 0){
            $("#container").append("<div class='grid days'>" + (columns) + "</div>");}
        else
            $("#container").append("<div class='grid'></div>");
      }
  }

    $(".grid").width(960/31);
    $(".grid").height(402.58/13);
    $(".months").width(120);
    $(".months").height(30);
}
