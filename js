$(document).ready(function() {
  
  // Ask if they want to play 
  $('#yes').click(function() {
    $('#play').fadeOut('2000', function() {
      $('#choice').fadeIn('4000');
    });
  });
  
  $('#no').click(function() {
    window.open("https://facebook.com");
  });
  
  
  // Have them choose their piece
  var xTurn = true;
  var compTurn;
  
  $('#choice > div').click(function() {
    $('#start').fadeOut('2000', function() {
      $('#board').fadeIn('4000');
    });
    
    if($(this).is('#p1')) {
      
    } else {
      move("#3");
    }  
  });
  
  
  // board interactions 
  
  var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  $('.square').click(function() {
    if (typeof gameBoard[this.id] === "number") {
      move(this.id);
      console.log(gameBoard);
    }
  });
  
  
  // player specific interaction using move function
  
  function move(where) {
    var what;
    
    if(xTurn) {
      what = "x";
    } else {
      what = "o";
    }
    
    $('#' + where).text(what).addClass(what);
    gameBoard
    xTurn = !xTurn;
  }
  
  
  // AI 
  
  var possMoves = gameBoard.filter(function(val) {
    return typeof val === "number";
    var choice = Math.floor(Math.random() * possMoves.length);
    moves(possMoves[choice]);
  })
});
