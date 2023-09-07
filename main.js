// Exercise 1
// outerVar is in the local scope of outerFunction(), but in the outer scope of
// innerFunction(). innerVar is in the local scope of innerFunction(). When you
// call outerFunction(), you will also call innerFunction() since it is called
// inside it. The result will be console.logs of outerVar and innerVar.

function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar);
        console.log(innerVar);
    }

    innerFunction();
}

outerFunction();

// Exercise 2
mainFunction();

function mainFunction() {
    console.log("A bit premature, aren't we?");
}

// Exercise 3
function returnFunction(){
    let tick = 0;

    return {
        increase: function() {
            tick++;
            return tick;
        },

        decrease: function() {
            tick--;
            return tick;
        },

        get: function() {
            return tick;
        },
    }
}

let newTick = returnFunction();

console.log(newTick.get());
newTick.increase();
console.log(newTick.get());
newTick.decrease();
console.log(newTick.get());

// Jared example
// function outerFunction() {
//     let outerVar = 'outside';

//     return function innerFunction() {
//         console.log(outerVar);
//     }
// }

// outerFunction()();

// Exercise 4
// Declare a global variable here
let varToTest = 0;

function modifyGlobal() {
    // Try to modify the global variable here
    varToTest++;
    console.log(`Global: ${varToTest}`);
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let varToTest = 0;
    varToTest++;
    console.log(`Local: ${varToTest}`);
}

// Call both functions here
console.log(`Global Console: ${varToTest}`);
modifyGlobal();
localScopeTest();
modifyGlobal()
console.log(`Global Console: ${varToTest}`);

// Exercise 5
function functionFactory(param) {
    
    return function upperCaseString() {
        console.log(param.toUpperCase());
    }
}

let funcFactoryTest = functionFactory('test');
funcFactoryTest();
let funcFactoryCheck = functionFactory('check');
funcFactoryCheck();

// Exercise 6
function hoistingTest() {
    // Try printing a variable here
    // console.log(hoistVar);

    // Declare the variable after the console.log
    let hoistVar = 'hoist me baby';
}

hoistingTest();
// Fails with 'Cannot access 'hoistVar' before initialization

// Exercise 7
function setupCounter() {
    // Define a count variable here
    let counter = 0;

    return function() {
        // Increment and print the count
        counter++;
        console.log(counter);
    }
}

// Create a counter instance and invoke it to test
let newCounter1 = setupCounter();
let newCounter2 = setupCounter();
newCounter1();
newCounter1();
newCounter2();

// Exercise 8
function counterWithReset() {
    // Define a count variable here
    let counter = 0;

    return function() {
        // Increment and print the count
        if(counter >= 5) {
            counter = 0;
        }
        
        counter++;
        console.log(counter);
    }
}

let counterTest = counterWithReset();
counterTest(); // 1
counterTest(); // 2
counterTest(); // 3
counterTest(); // 4
counterTest(); // 5
counterTest(); // 1

// Exercise 9
let globVar = 10;

function modGlobVar() {
    // globVar++;
    // console.log(globVar);

    return function() {
        globVar++;
        
        // let locVar = 0;
        console.log(globVar);
    }
}

let mod = modGlobVar();
mod();
mod();
mod();
mod();
mod();