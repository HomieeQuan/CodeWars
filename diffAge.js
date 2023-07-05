// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age]

function differenceInAges(ages){
    // [82, 15, 6, 38, 35] 
    // [6, 15, 35, 38, 82]
      let youngestIndex = 0
      let oldestIndex = ages.length - 1
      
      ages.sort((a,b) => a-b)
      
      let youngestAge = ages[youngestIndex]
      let oldestAge = ages[oldestIndex]
      console.log(ages, youngestAge, oldestAge)
      
      return [youngestAge, oldestAge, oldestAge - youngestAge]
    }