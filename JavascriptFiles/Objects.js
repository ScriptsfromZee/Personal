const person = {
    firstName: "Chizogam",
    lastName: "Derek",
    age: 23,
    eyeColor: "brown",
    favColour: "blue",
    shortDescription : function() {
        console.log ("My name is" , this.firstName + " " + this.lastName + " and I like to play ball" )
      }
  }

  console.log(person.firstName) // This displays the first name of person 

person.shortDescription() // This displays the full sentence made in the function. 

  