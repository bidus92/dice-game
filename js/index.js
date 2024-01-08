function randomDiceNumberGenerator()
{
    var n = Math.floor(Math.random() * 6) + 1;
    return n; 
}

function resetDice()
{
    document.querySelector(".player_1_dice > .one").classList.remove("invisible");
    document.querySelector(".player_1_dice > .two").classList.remove("invisible");
    document.querySelector(".player_1_dice > .three").classList.remove("invisible");
    document.querySelector(".player_1_dice > .four").classList.remove("invisible");
    document.querySelector(".player_1_dice > .five").classList.remove("invisible");
    document.querySelector(".player_1_dice > .six").classList.remove("invisible");
    document.querySelector(".player_1_dice > .hidden-center").classList.add("invisible");

    document.querySelector(".player_2_dice > .one").classList.remove("invisible");
    document.querySelector(".player_2_dice > .two").classList.remove("invisible");
    document.querySelector(".player_2_dice > .three").classList.remove("invisible");
    document.querySelector(".player_2_dice > .four").classList.remove("invisible");
    document.querySelector(".player_2_dice > .five").classList.remove("invisible");
    document.querySelector(".player_2_dice > .six").classList.remove("invisible");
    document.querySelector(".player_2_dice > .hidden-center").classList.add("invisible");
}
 
function diceRoll(playerNumber)
{
    var theDiceRoll = randomDiceNumberGenerator(); 

    if(playerNumber === 1)
    {   
        if(theDiceRoll === 1)
        { 
            document.querySelector(".player_1_dice > .one").classList.add("invisible");
            document.querySelector(".player_1_dice > .two").classList.add("invisible");
            document.querySelector(".player_1_dice > .three").classList.add("invisible");
            document.querySelector(".player_1_dice > .four").classList.add("invisible");
            document.querySelector(".player_1_dice > .five").classList.add("invisible");
            document.querySelector(".player_1_dice > .six").classList.add("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 2)
        {
            document.querySelector(".player_1_dice > .one").classList.add("invisible");
            document.querySelector(".player_1_dice > .two").classList.remove("invisible");
            document.querySelector(".player_1_dice > .three").classList.add("invisible");
            document.querySelector(".player_1_dice > .four").classList.add("invisible");
            document.querySelector(".player_1_dice > .five").classList.remove("invisible");
            document.querySelector(".player_1_dice > .six").classList.add("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.add("invisible");
        }
        else if(theDiceRoll === 3)
        {
            document.querySelector(".player_1_dice > .one").classList.add("invisible");
            document.querySelector(".player_1_dice > .two").classList.add("invisible");
            document.querySelector(".player_1_dice > .three").classList.remove("invisible");
            document.querySelector(".player_1_dice > .four").classList.remove("invisible");
            document.querySelector(".player_1_dice > .five").classList.add("invisible");
            document.querySelector(".player_1_dice > .six").classList.add("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 4)
        {
            document.querySelector(".player_1_dice > .one").classList.remove("invisible");
            document.querySelector(".player_1_dice > .two").classList.add("invisible");
            document.querySelector(".player_1_dice > .three").classList.remove("invisible");
            document.querySelector(".player_1_dice > .four").classList.remove("invisible");
            document.querySelector(".player_1_dice > .five").classList.add("invisible");
            document.querySelector(".player_1_dice > .six").classList.remove("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.add("invisible");
        }
        else if(theDiceRoll === 5)
        {
            document.querySelector(".player_1_dice > .one").classList.remove("invisible");
            document.querySelector(".player_1_dice > .two").classList.add("invisible");
            document.querySelector(".player_1_dice > .three").classList.remove("invisible");
            document.querySelector(".player_1_dice > .four").classList.remove("invisible");
            document.querySelector(".player_1_dice > .five").classList.add("invisible");
            document.querySelector(".player_1_dice > .six").classList.remove("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 6)
        {
            document.querySelector(".player_1_dice > .one").classList.remove("invisible");
            document.querySelector(".player_1_dice > .two").classList.remove("invisible");
            document.querySelector(".player_1_dice > .three").classList.remove("invisible");
            document.querySelector(".player_1_dice > .four").classList.remove("invisible");
            document.querySelector(".player_1_dice > .five").classList.remove("invisible");
            document.querySelector(".player_1_dice > .six").classList.remove("invisible");
            document.querySelector(".player_1_dice > .hidden-center").classList.add("invisible");
        }
    }

    if (playerNumber === 2)
    {   
        if(theDiceRoll === 1)
        { 
            document.querySelector(".player_2_dice > .one").classList.add("invisible");
            document.querySelector(".player_2_dice > .two").classList.add("invisible");
            document.querySelector(".player_2_dice > .three").classList.add("invisible");
            document.querySelector(".player_2_dice > .four").classList.add("invisible");
            document.querySelector(".player_2_dice > .five").classList.add("invisible");
            document.querySelector(".player_2_dice > .six").classList.add("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 2)
        {
            document.querySelector(".player_2_dice > .one").classList.add("invisible");
            document.querySelector(".player_2_dice > .two").classList.remove("invisible");
            document.querySelector(".player_2_dice > .three").classList.add("invisible");
            document.querySelector(".player_2_dice > .four").classList.add("invisible");
            document.querySelector(".player_2_dice > .five").classList.remove("invisible");
            document.querySelector(".player_2_dice > .six").classList.add("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.add("invisible");
        }
        else if(theDiceRoll === 3)
        {
            document.querySelector(".player_2_dice > .one").classList.add("invisible");
            document.querySelector(".player_2_dice > .two").classList.add("invisible");
            document.querySelector(".player_2_dice > .three").classList.remove("invisible");
            document.querySelector(".player_2_dice > .four").classList.remove("invisible");
            document.querySelector(".player_2_dice > .five").classList.add("invisible");
            document.querySelector(".player_2_dice > .six").classList.add("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 4)
        {
            document.querySelector(".player_2_dice > .one").classList.remove("invisible");
            document.querySelector(".player_2_dice > .two").classList.add("invisible");
            document.querySelector(".player_2_dice > .three").classList.remove("invisible");
            document.querySelector(".player_2_dice > .four").classList.remove("invisible");
            document.querySelector(".player_2_dice > .five").classList.add("invisible");
            document.querySelector(".player_2_dice > .six").classList.remove("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.add("invisible");
        }
        else if(theDiceRoll === 5)
        {
            document.querySelector(".player_2_dice > .one").classList.remove("invisible");
            document.querySelector(".player_2_dice > .two").classList.add("invisible");
            document.querySelector(".player_2_dice > .three").classList.remove("invisible");
            document.querySelector(".player_2_dice > .four").classList.remove("invisible");
            document.querySelector(".player_2_dice > .five").classList.add("invisible");
            document.querySelector(".player_2_dice > .six").classList.remove("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.remove("invisible");
        }
        else if(theDiceRoll === 6)
        {
            document.querySelector(".player_2_dice > .one").classList.remove("invisible");
            document.querySelector(".player_2_dice > .two").classList.remove("invisible");
            document.querySelector(".player_2_dice > .three").classList.remove("invisible");
            document.querySelector(".player_2_dice > .four").classList.remove("invisible");
            document.querySelector(".player_2_dice > .five").classList.remove("invisible");
            document.querySelector(".player_2_dice > .six").classList.remove("invisible");
            document.querySelector(".player_2_dice > .hidden-center").classList.add("invisible");
        }
    }

    return theDiceRoll;
}


function verdict()
{   

    var player1Roll = diceRoll(1);
    var player2Roll = diceRoll(2); 
    if(player1Roll > player2Roll)
    {
        document.querySelector("#winner-verdict").textContent = "Player 1 WINS!";
    }

    else if(player1Roll < player2Roll)
    {
        document.querySelector("#winner-verdict").textContent = "Player 2 WINS!";
    }
    else
    {
        document.querySelector("#winner-verdict").textContent = "You both win??!...Reroll!";
    }
   
}


document.querySelector("#winner-verdict").addEventListener("click", verdict);







 
