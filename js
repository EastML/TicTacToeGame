$(document).ready(function() {
  
  // Ask if they want to play 
  $('#yes').click(function() {
    $('#play').fadeOut('2000', function() {
      $('#choose').fadeIn('4000');
    });
  });
  
  $('#no').click(function() {
    window.open("https://facebook.com");
  });
  
  
  // Have them choose their piece
  var xTurn = true;
  var gameOver = false;
  var moveCount = 0;
  
  $('#choose > div').click(function() {
    $('#start').fadeOut('2000', function() {
      $('#board').fadeIn('4000');
    });
    
    if($(this).is('#p2')) {
      setTimeout(compMove, 1000);
      moveCount += 1;
    } 
  });
  
  
  // board interactions 
  
  var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  
  $('.square').click(function() {
    if (typeof gameBoard[this.id] === "number") {
      move(this.id);
      
      if (gameOver === false) {
        setTimeout(compMove, 200);
      }
    }
  });
  
  
  // player-specific interaction using move function
  
  function move(where) {
    var piece;
    
    if(xTurn) {
      piece = "x";
    } else {
      piece = "o";
    }
    
    gameBoard[where] = piece;
    $('#' + where).text(piece).addClass(piece);
    
    
    // check if there is a winner
    
    var winCon = [[0, 1, 2], [3, 4, 5], [6, 7, 8], 
                  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
                  [0, 4, 8], [2, 4, 6]];
    
    for (var i = 0; i < winCon.length; i++) {
      if (gameBoard[winCon[i][0]] + 
          gameBoard[winCon[i][1]] + 
          gameBoard[winCon[i][2]] == piece + piece + piece) {
        
        $('#board').fadeOut('4000', function() {
    		  $('#end').fadeIn('4000');
          $('#winner').text(piece.toUpperCase() + " wins!");
  		  });
        gameOver = true;
      } 
    }
    
    if (moveCount >= 9) {
      $('#board').fadeOut('4000', function() {
    		$('#end').fadeIn('4000');
        $('#winner').text("Tie Game : /");
  		});
    }
    
    moveCount += 1;
    xTurn = !xTurn;
  }
  
  
  // AI; current level is random.
  
  function compMove() {
    var possMoves = gameBoard.filter(function(val) {
      return typeof val === "number";
    });
    
    var choice = Math.floor(Math.random() * possMoves.length);
    move(possMoves[choice]);
  }
  
  //Restart the game
  
  $('#retry').click(function() {
    xTurn = true;
    moveCount = 0;
    gameOver = false;
    gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    $('.square').removeClass('x');
    $('.square').removeClass('o');
    $('.square').text('');
    
    $('#end').fadeOut(2000, function() {
      $('#start').fadeIn(2000)
    });
  });
  
  
  // UI
  
  $('.press').hover(function() {
    $(this).css('color', '#333');
  }, function() {
    $(this).css('color', '#DDD');
  });
  
  $('.press').mousehold(function() {
    $(this).css('background-color', '#DDD');
  })
});
  
  
