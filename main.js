var health1 = 0;
var health2 = 0;
var poison1 = 0;
var poison2 = 0;

function AddHealth(val, player)
{
	if(player == 1)
	{
		health1 += val;
		document.getElementById("healthuno").innerHTML = health1;
	}
	if(player == 2)
	{
		health2 += val;
		document.getElementById("healthdos").innerHTML = health2;
	}
}
function AddPoison(val, player)
{
	if(player == 1)
	{
		poison1 += val;
		document.getElementById("poisonuno").innerHTML = poison1;
	}
	if(player == 2)
	{
		poison2 += val;
		document.getElementById("poisondos").innerHTML = poison2;
	}
}
function RollTheDice()
{
	var resultCoin;
	var resultPlanar;
	var coin = Math.round(Math.random());
	var six = Math.round(Math.random()*6) + 1;
	var eight = Math.round(Math.random()*8) + 1;
	var ten = Math.round(Math.random()*10) + 1;
	var twelve = Math.round(Math.random()*12) + 1;
	var twenty = Math.round(Math.random()*20) + 1;
	var planar = Math.round(Math.random()*5);
	if(coin == 1)
	{
		resultCoin = "Heads";
	}
	if(coin == 0)
	{
		resultCoin = "Tails";
	}
	if(planar <= 3)
	{
		resultPlanar = "No effect";
	}
	if(planar == 4)
	{
		resultPlanar = "Chaos";
	}
	if(planar == 5)
	{
		resultPlanar = "Planeswalker";
	}
	alert("D6: " + six + "\nD8: " + eight + "\nD10: " + ten + "\nD12: " + twelve + "\nD20: " + twenty + "\nCoin: " + resultCoin + "\nPlanar: " + resultPlanar);
	console.log("Coin: " + coin);
	console.log("Planar" + planar);
}
function Reset()
{
	health1 = 0;
	health2 = 0;
	poison1 = 0;
	poison2 = 0;
	
	document.getElementById("healthuno").innerHTML = health1;
	document.getElementById("healthdos").innerHTML = health2;
	document.getElementById("poisonuno").innerHTML = poison1;
	document.getElementById("poisondos").innerHTML = poison2;
}