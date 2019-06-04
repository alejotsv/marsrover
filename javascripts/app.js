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
      if(rover["y"] > 0){
      rover["y"] -= 1;
      console.log('The rover moved forward');
      rover["travelLog"].push([rover["x"],rover["y"]]);
      } else{
        console.log("Cannot move beyond the grid.");
      }
      break;
    case "E":
      if (rover["x"] < 9){
      rover["x"] += 1;
      console.log('The rover moved forward');
      rover["travelLog"].push([rover["x"],rover["y"]]);
      } else {
        console.log("Cannot move beyond the grid.");
      }
      break;
    case "S":
      if (rover["y"] < 9){
      rover["y"] += 1;
      console.log('The rover moved forward');
      rover["travelLog"].push([rover["x"],rover["y"]]);
      } else {
        console.log("Cannot move beyond the grid.");
      }
      break;
    case "W":
      if (rover["x"] > 0){
      rover["x"] -= 1;
      console.log('The rover moved forward');
      rover["travelLog"].push([rover["x"],rover["y"]]);
      } else {
        console.log("Cannot move beyond the grid.");
      }
      break;
  }  
}

function movement(moves){
  for(let i = 0; i < moves.length; i++){
    switch(moves.charAt(i)){
      case "f":
        moveForward(rover);        
        break;
      case "r":
        turnRight(rover);
        console.log('The rover turned right');
        console.log(`The rover is now facing ${rover["direction"]}`);
        break;
      case "l":
        turnLeft(rover);
        console.log('The rover turned left');
        console.log(`The rover is now facing ${rover["direction"]}`);
        break;  
    }    
  }
  console.log(`The final position is (${rover["x"]},${rover["y"]}) and the rover is facing ${rover["direction"]}`);
  console.log(rover["travelLog"]);
}
