var list = ["Alice", "Bob", "Waldo", "Winston"];

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(input) {
  console.log("found Waldo at the Index of " + input);
}

findWaldo(list, actionWhenFound);