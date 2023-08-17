if (true){
  console.log("controlflow file loaded");
}

let shortCircuitExperiment = null ?? 2
console.log(shortCircuitExperiment);

let authResponse = null;
let errorResponse = {
  code: 401,
  message: "Auth went bad."
}

let someAuthExample = authResponse ?? errorResponse;
console.log(someAuthExample);
if (someAuthExample.code == 401){
  console.error("Login error occured!");
}


if (0 || false){
  console.log("control short circuit condition");
} else {
  console.log("if was given a 'false' so didn't run");
}

let someValue = "true"

// truthy checking
if (someValue) {
  console.log("someValue has a messsage!! It is: \n" + someValue);
}

// equality checking
if (someValue == true){
  console.log("the someValue string equalled a true boolean value");
} else {
  console.log("the someValue string did Not equal a true boolean value");
}

/*
syntax for our if
if someValue
  print("tada!")

  if (someValue) {
    console.log("tada!");
}
*/