// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [[0,0]]
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover["direction"]){
    case "N":
      rover["direction"] = "W";
      break;
    case "E":
      rover["direction"] = "N";
      break;
    case "S":
      rover["direction"] = "E";
      break;
    case "W":
      rover["direction"] = "S";
      break;
  }  
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover["direction"]){
    case "N":
      rover["direction"] = "E";
      break;
    case "E":
      rover["direction"] = "S";
      break;
    case "S":
      rover["direction"] = "W";
      break;
    case "W":
      rover["direction"] = "N";
      break;
  }  
}

function moveForward(rover){
  console.log("moveForward was called");
  switch(rover["direction"]){
    case "N":
      rover["y"] -= 1;
      rover["travelLog"].push([rover["x"],rover["y"]]);
      break;
    case "E":
      rover["x"] += 1;
      rover["travelLog"].push([rover["x"],rover["y"]]);
      break;
    case "S":
      rover["y"] += 1;
      rover["travelLog"].push([rover["x"],rover["y"]]);
      break;
    case "W":
      rover["x"] -= 1;
      rover["travelLog"].push([rover["x"],rover["y"]]);
      break;
  }  
}

function movement(moves){
  for(let i = 0; i < moves.length; i++){
    switch(moves.charAt(i)){
      case "f":
        moveForward(rover);
        console.log('The rover moved forward');
        break;
      case "r":
        turnRight(rover);
        console.log('The rover turned right');
        break;
      case "l":
        turnLeft(rover);
        console.log('The rover turned left');
        break;  
    }    
  }
  console.log(`The final position is (${rover["x"]},${rover["y"]}) and the rover is facing ${rover["direction"]}`);
  console.log(rover["travelLog"]);
}
