var list = ["Alice", "Bob", "Waldo", "Winston"];

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name){
    if (name === "Waldo"){
      var ind = arr.indexOf('Waldo');
      found(ind);
    }
  });
}

function actionWhenFound(input) {
  console.log("found Waldo at the Index of " + input);
}

findWaldo(list, actionWhenFound);