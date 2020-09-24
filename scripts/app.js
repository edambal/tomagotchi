//Global varibales
//const images = $('#image');

// Class Declaration
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
        this.boredom++;
    }
    petPlay(){
        this.boredom--;
        this.hunger++;
    }
    currentState(){
        console.log(`Your pet ${this.name} is aged ${this.age}.`);
        console.log(`${this.name} is currently at hunger level ${this.hunger}`);
        console.log(`${this.name} is at boredom level ${this.boredom}`);
        console.log(`${this.name} is at sleepiness level ${this.sleepiness}`);
    }

}

function createTomagotchi(name){
    const tomg = new tomagotchi;
    tomg.name = name;
    return tomg;
}

function createTimers(myTom){
    const time = 30;
    console.log(myTom.name);
    const timer= setInterval(function(){
        myTom.hunger++;
        myTom.sleepiness++;
        myTom.boredom++;
        myTom.currentState();
    },10000);
}

function getName(){
    $name = $('#name-field');
    return $name.val();
}

function updateMeters(myTom){
    setInterval(()=>{
        $('#hunger').val(myTom.hunger);
        $('#sleepiness').val(myTom.sleepiness);
        $('#boredom').val(myTom.boredom);
       },700)
}

function gameison(myTom){
    $('#feedme').on('click',function(){
        //console.log(images.attr("src"));
        myTom.feed();
    })
    $('#play').on('click',function(){
        setInterval(()=>{
            $('#image').attr("src","./images/play1.png");
        },100);
        
        myTom.petPlay();
     })
     $('#lightsoff').on('click',function(){
         myTom.lightsOff();
     })
}

function petkiller(myTom){
    setInterval(()=>{
        console.log("checking for tom's death");
        if(myTom.hunger > 9 || myTom.sleepiness > 9 || myTom.boredom > 9){
        alert('you killed your pet');
        //reset vales
        myTom.hunger = 1;
        myTom.boredom =1;
        myTom.sleepiness =1;
       }},300)

}


const $btn = $('#set-name');
$btn.on('click',function(){
    console.log("button is clicked");
    
   const name = getName();
   const myTom = createTomagotchi(name);
   myTom.currentState();

   //Change the meters every second for now.
   updateMeters(myTom);
   
    //work on timers
   createTimers(myTom);

   //Actions on buttons
   gameison(myTom);

   //pet killer
   petkiller(myTom);
   

   $btn.hide();
   $('#name-field').hide();
})

