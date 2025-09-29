it("should appear in cypress runner", () => {

});

it("should navigate to saucedemo page", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.url().should("include", "saucedemo.com")
})

// function doSomething() {
//     console.log("Something");
// }

// () => console.log("Something"); // arrow function

// function addition(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// (a, b) => { 
//     console.log(a + b); 
//     return a + b; 
// } // arrow function

// function testFunction(name, callback) {
//     console.log(name)
//     callback();
// }

// testFunction("test", addition)