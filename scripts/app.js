function createTomagotchi(name){
    const tomg = new tomagotchi;
    tomg.name = name;
    return tomg;
}
class tomagotchi{
    constructor(name,age = 1,hunger=1,sleepiness =1,boredom=1){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    } 
    feed(){
        this.hunger--;
    }
    lightsOff(){
        this.sleepiness--;
    }
    petPlay(){
        this.boredom--;
    }
    currentState(){
        console.log(`Your pet ${this.name} is aged ${this.age}.`);
        console.log(`${this.name} is currently at hunger level ${this.hunger}`);
        console.log(`${this.name} is at boredom level ${this.boredom}`);
        console.log(`${this.name} is at sleepiness level ${this.sleepiness}`);
    }

}

// Instantiate a class on window load
window.addEventListener('load', (event) =>{
   const myTom = createTomagotchi("kawaii");
   myTom.currentState();
});