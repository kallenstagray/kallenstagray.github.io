$(()=>{
  $('.odd').css('color','red')  

$('#white-header-button').click(()=>{
    $('.odd').css('color','white')
  })
    $('#black-header-button').click(()=>{
      $('.odd').css('color','black')
     
      $('#green-header-button').click(()=>{
        $('.odd').css('color','green')
  })
  $('#yellow-header-button').click(()=>{
    $('.odd').css('color','yellow')
})
$('#red-header-button').click(()=>{
  $('.odd').css('color','red')
})
$('#plum-header-button').click(()=>{
  $('.odd').css('color','plum')
})
$('#Amaranth-header-button').click(()=>{
  $('.odd').css('color','Amaranth')
})
$('#Atrovirens-header-button').click(()=>{
  $('.odd').css('color','Atrovirens')
})
$('#Vermilion-header-button').click(()=>{
  $('.odd').css('color','Vermilion')

})



var dice;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];
var stopped = true;
var t;

function change() {
  var random = Math.floor(Math.random()*6);
  dice.innerHTML = dices[random]; 
}

function stopstart() {
  if(stopped) {
    stopped = false;
    t = setInterval(change, 100); 
  } else {
    clearInterval(t);
    stopped = true;
  }
  
}

window.onload = function() {
  dice = document.getElementById("dice");
  stopstart(); 
}

  
})

})