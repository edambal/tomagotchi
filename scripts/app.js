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

function idleTimers(myTom){
    const time = 30;
    console.log(myTom.name);
    const timer= setInterval(function(){
        myTom.hunger++;
        myTom.sleepiness++;
        myTom.boredom++;
        //myTom.currentState();
    },15000);
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

function gameison(myTom,count,character){
    const $image = $('#image');
    // const timer=setInterval(()=>{
    //     console.log("Interval set");
    // },1000);
    // clearInterval(timer);
    console.log(character);
    imgsrc = `./images/${character}Original1.png`;
    $image.attr("src",imgsrc);
    $('#feedme').on('click',function(){
        //console.log(images.attr("src"));
        //clearInterval(playtimer);  
        let imgsrc;
        imgsrc = `./images/${character}eating.png`;
        $image.attr("src",imgsrc);
        myTom.feed();
    })
    $('#play').on('click',function(timer){  
        const playtimer=setTimeout(function (){
            console.log("Outside the if condition" + count);
            if(count > 4){
                console.log("inside the if condition" + count);
                count =0; 
            }
            count++;
            let imgsrc;
            imgsrc = `./images/${character}play${count}.png`;
            $image.attr("src",imgsrc);
        },1000);    
        myTom.petPlay();
        
     })
     $('#lightsoff').on('click',function(){
        //clearInterval(playtimer);
        let imgsrc;
        imgsrc = `./images/${character}sleepy1.png`;
        $image.attr("src",imgsrc);
         myTom.lightsOff();
     })
}

function petkiller(myTom){
    setInterval(()=>{
        //Check if any of the meters have reached end of it
        if(myTom.hunger > 9 || myTom.sleepiness > 9 || myTom.boredom > 9){
        alert('you killed your pet');
        //reset vales
        myTom.hunger = 1;
        myTom.boredom =1;
        myTom.sleepiness =1;
       }},300)

}

function setcss(myTom){
    const $para=$('#name-capture');
   $para.find("p").html(`Welcome to <span>${myTom.name}</span>'s world.<br> Play with me , feed me when i am hungry, turn off lights when i am tired. <br> <span id="clue">**clue: Don't let meters fill up. They fill I Die**</span>`); 
   $para.css({
    "display":"flex",
    "align-items":"center",
    "width":"33vw",
    "height":"24vh",
    "background": "rgba(255,225,255,0)",
    "border-radius": "30%",
    "color":"white",
    "top":"40%",
    "left":"50%",
    "position":"absolute",
    "transform":"translate(-50%, -50%)",
    "box-sizing": "border-box",
    "padding": "10px 30px",
    "font-family":"poppins",
    "font-weight":"800",
    "text-align": "center",
    "color":"purple",
    //  "border": "2px solid rgba(255,255,255,0.2)",
    "position": "absolute",
    "transform": "translate(-50%, -50%) skewY(-6deg)",
    "transform-origin": "bottom left",
    "color": "#fff",
	"text-shadow": "0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red",
	"font": "30px 'BlackJackRegular'"
  })
  $para.find("span").css({
      "font" : "45px 'ChunkFiveRegular'",
      "color": "maroon"
  })
  //console.log($para.find("p").html());

    $('#clue').css({
        "font" : "23px 'ChunkFiveRegular'",
      "color": "maroon"
    })
}

function agetransition(myTom){
//start a game timer
let tomclock=setTimeout(()=>{
    console.log("The tomclock vaues " + myTom.currentState());
},20000);

}



const $gameplay = $('.gameplay');
const $btn = $('#set-name');
const $main = $('main');


// Main Game play stays hidden till the name is entered
$gameplay.hide();

//Start Events after the pet name button is clicked
$btn.on('click',function(){
    console.log("button is clicked");
    $('#bg').hide(5000);
    $('body').css('background-image',`url('/Users/sravanthiedam/sei/deliverables/tomagotchi/images/GamingBackground2.jpg')`);
    
    //$('#bg').css('background-image','none');
    $main.hide(5000);
    $gameplay.show(6000);
   const name = getName();
   const myTom = createTomagotchi(name);
   myTom.currentState();
   setcss(myTom);
   
   //Change the meters every second for now.
   updateMeters(myTom);
   
    //work on timers
   idleTimers(myTom);

   //Actions on buttons. count passed to increment images
   let count=0;
   let character = "cat"
   gameison(myTom,count,character);
   
   //pet killer
   petkiller(myTom);
   
   //transition on age
   character = "puppy"
   let agetransition = setTimeout(()=>{
       alert('Time to change characters');
       //reset the meters
        myTom.boredom = 1;
        myTom.boredom = 1;
        myTom.hunger = 1;
       //change the characters. use variables to change img src
       gameison(myTom,count,character);

   },60000,character);

})

