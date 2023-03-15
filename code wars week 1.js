//There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//number of pillars (≥ 1);
//distance between pillars (10 - 30 meters);
//width of the pillar (10 - 50 centimeters).
//Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {

    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
    
    }


    //Write a function which converts the input string to uppercase.

    function makeUpperCase(str) {
        return str.toUpperCase();
      }

      //Make a conditional for the 'yes' string for true, or a No string for false
// Get the true or flase from the bool parameter
// return 'yes' or 'no'
// how to return in a function use the return keyword
// what is a boolean value
function boolToWord( bool ){
    if( bool === true){
      return "Yes"
    }else if(bool === false){
      return "No"
    }
  }