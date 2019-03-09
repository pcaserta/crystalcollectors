//sets a random number at the start of game between 19-120//

$(document).ready(function () {
    var Random = Math.floor((Math.random() * 120) + 19)
    console.log(Random)


    $("#number-to-guess").text(Random);

    //set up random numbers for jewel value//
    var num1 = Math.floor((Math.random() * 12) + 1)
    var num2 = Math.floor((Math.random() * 12) + 1)
    var num3 = Math.floor((Math.random() * 12) + 1)
    var num4 = Math.floor((Math.random() * 12) + 1)

    //declaring variables to keep track of wins and losses//
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    console.log(wins)
    $("#wins").text("Wins " + wins)
    $("#losses").text("Losses " + losses)

    //function to reset the game after a win or loss//
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $("#number-to-guess").text(Random)
        var num1 = Math.floor(Math.random() * 11 + 1)

        var num2 = Math.floor(Math.random() * 11 + 1)
        var num3 = Math.floor(Math.random() * 11 + 1)
        var num4 = Math.floor(Math.random() * 11 + 1)
        userTotal = 0

        $("#total").text(userTotal);

    }

    //adds wins to userTotal

    function win() {
        alert("You won!!");
        wins++
        $("#wins").text("Wins " + wins);
        reset();
    }

    //adds losses to userTotal
    function lose() {
        alert("You lose!!")
        losses++
        $("#losses").text("Losses " + losses)
        reset()
    }

    //set up click events for jewels

    $("#one").on("click", function () {
        userTotal = userTotal + num1;
        console.log(userTotal)
        $("#total").text(userTotal);
        if (userTotal == Random) {
            win()
        }
        else if (userTotal > Random) {
            lose();
        }

    });

    $("#two").on("click", function () {
        userTotal = userTotal + num2;
        console.log(userTotal)
        $("#total").text(userTotal);
        if (userTotal == Random) {
            win()
        }
        else if (userTotal > Random) {
            lose();
        }

    });

    $("#three").on("click", function () {
        userTotal = userTotal + num3;
        console.log(userTotal)
        $("#total").text(userTotal);
        if (userTotal == Random) {
            win()
        }
        else if (userTotal > Random) {
            lose();
        }

    });

    $("#four").on("click", function () {
        userTotal = userTotal + num4;
        console.log(userTotal)
        $("#total").text(userTotal);
        if (userTotal == Random) {
            win()
        }
        else if (userTotal > Random) {
            lose();
        }

    });
});