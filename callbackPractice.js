/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  var first = function(variable, cb){
    cb(variable[0]);

  };


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  var last = function(variable, callback){
    callback(variable[variable.length-1]);
  };

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  var multiply = function(variable1, variable2, callback){
    callback(variable1 * variable2);

  };

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  var contains = function(var1,var2,callBack){
  if(var1.indexOf(var2) > -1) {
    callBack(true)
  } else {
    callBack(false)
  };


  };

var names = ['bob', 'Colt', 'Steve'];

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    var uniq = function(variable, callBack){
      var name1 =[];
      for(var i = 0; i < variable.length; i++){
        if (name1.indexOf(variable[i]) === -1) {
    name1.push(variable[i]);
        };
      };
      callBack(name1)
    };


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var each = function(names,callBack){
  var indice = "";
  var item  = "";
  for(var i = 0; i < names.length; i++){
      indice = i;
      item = names[i];
      callBack(item, indice);
  }

}



each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




var getUserById = function(users, string, callBack){
  var user;
  for (var i = 0; i < users.length; i++){
    for (key in users){
      if (users.hasOwnProperty(key)) {
        if (users[i]['id'] == string)  {
          user = users[i];
        }

      }
    }

  }
callBack(user);
}
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
