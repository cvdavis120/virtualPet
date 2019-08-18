var inquirer = require("inquirer");


function initialQ() {
    inquirer.prompt([{
        type: "input",
        message: "What pet would you like? Dog or Cat?",
        name: "userPet"
    }]).then(function (inquirerResponse) {
        if (inquirerResponse.userPet === "dog") {
            createDog()
            giveCommand()
        } else if (inquirerResponse.userPet === "cat") {
            createCat()
            giveCommand()
        } else {
            console.log("please enter a pet")
        }
    })
}

function giveCommand() {
    inquirer.prompt([{
        type: "input",
        message: "Give some commands",
        name: "userCommand"
    }]).then(function (response) {
        if (response.userCommand === "q") {
            return false
        } else {
            doAction(userPet, response.userCommand)
        }
    })

}

function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!")
            this.hungry = false
            this.sleepy = true
        } else {
            console.log("No thanks, I'm full")
        }
    }
    this.sleep = function () {
        if (this.sleepy) {
            console.log("ZzZzZzZ")
            this.sleepy = false
            this.bored = true
            this.increaseAge()
        } else {
            console.log("No way! I'm not tired!")
        }
    }
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's Play!")
            this.bored = false
            this.hungry = true
        } else {
            console.log("No, maybe later.")
        }
    }
    this.increaseAge = function () {
        this.age++
        console.log(`"Happy Birthday to me! I'm ${this.age} years old!"`)
    }
}
dog = {}
cat = {}

function createDog() {
    dog = new DigitalPal(false, false, true, 0)
    dog.outside = false;
    dog.bark = function () {
        console.log("Woof! Woof!")
    }
    dog.goOutside = function () {
        if (this.outside === false) {
            console.log("Yay! I love the outdoors!")
            this.outside = true
            this.bark()

        } else {
            console.log("We are already outside...")
        }
    }
    dog.goInside = function () {
        if (this.outside === true) {
            console.log("Do we have to? Okay...")
            this.outside = false
        } else {
            console.log("I'm already inside..")
        }
    }
}

function createCat() {
    cat = new DigitalPal(false, false, true, 0)
    cat.houseCondition = 100
    cat.meow = function () {
        console.log("Meow! Meow!")
    }
    cat.destroyFurniture = function () {
        if (this.houseCondition > 0) {
            this.houseCondition -= 10
            console.log("MUAHAHAHAHAHA! TAKE THAT FURNITURE!")
            this.bored = false
            this.sleepy = true
        } else {
            console.log("What furniture?")
        }
    }
    cat.buyNewFurniture = function () {
        this.houseCondition += 50
        console.log("Are you sure about this?")
    }
}


function doAction(animal, command) {

    if (animal === "cat") {
        if (command === "destroy") {
            cat.destroyFurniture()
        } else if (command === "buy") {
            cat.buyNewFurniture()
        } else {
            cat[command]()
        }
    } else if (animal === "dog") {
        if (command === "outside") {
            dog.goOutside()
        } else if (command === "inside") {
            dog.goInside()
        } else {
            dog[command]()
        }
    }
    giveCommand()
}




initialQ()