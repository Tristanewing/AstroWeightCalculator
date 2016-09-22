  var planets = [

  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}

];



var mytitle = "rotaluclaC thgieW ortsA";

document.getElementById("displayTitle").innerHTML= reverse(mytitle);


function reverse(stringToReverse){

var rev='';

for(var i = stringToReverse.length -1; i >= 0; i--){

rev += stringToReverse[i];
}
return rev;

}


var sel= document.getElementById("planetSelect")

for (var i = 0; i < planets.length; i++){

    var opt = document.createElement('option');

    opt.value = planets[i].gravity;

    opt.innerHTML = planets[i].planet;

    sel.appendChild(opt);

}





function calculateWeight () 
{


var select= document.getElementById("planetSelect");

var options= sel.options;


var selectedOption= options[sel.selectedIndex];

var planetName= selectedOption.innerHTML;

var planetGravity= select.value ;

var userWeight= document.getElementById("userWeight").value;

var totalWeight= userWeight*planetGravity;

var roundfinalWeight= Math.round(totalWeight);

var output=document.getElementById("output");

var planetCheck = ["Sun","Moon","Earth"].indexOf(planetName);


if(planetCheck != -1)  {   
  output.innerHTML="You are " +roundfinalWeight+ " lbs, when on the " +planetName+ ".";
}else {
  output.innerHTML="You are " +roundfinalWeight+ "lbs, when on " +planetName+ ".";

}

}









// function reverse(s){

// var o=''; 

// for (var i = s.length - 1; i >= 0; i--)
//     o += s[i];
//   return o;


//}