confirm ("Press OK if you are ready to play")
age = prompt ("What's your age"); 
if(age < 13)
{
    console.log("This game is rated 13+. You may play on but I take no responsibility");
}
else {
    console.log("PLAY ON!!!!!!!!!!"); 
}  
console.log("You are wondering out in the forest when you find a large hill. At the base of the hill there is an cave with what appears to be a leprechaun at the cave opening.'")
console.log("Suddenly, the leprechaun notcies you stops and says, 'Follow me if you want trouble'as he runs inside the cave")
userAnswer = prompt("Follow the leprechaun? yes/no")
if(userAnswer === "yes") 
{
    console.log("You run inside the cave. The leprechaun is no where to be found but you find his pot of gold");
}
else
{
    console.log("You run away like a scaredy cat and later wonder what could have been inside that cave")
}
feedback = prompt ("What would you rate this game out of 10? (0-10)")
if(feedback > 7)
{
    console.log("Thank you!") 
}
else
{
    console.log("I'll take your comments into consideration")
}
