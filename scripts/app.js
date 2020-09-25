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

function gameison(myTom,count){
    const $image = $('#image');
    $('#feedme').on('click',function(){
        //console.log(images.attr("src"));  
        myTom.feed();
    })
    $('#play').on('click',function(){  
        setInterval(function (){
            console.log("Outside the if condition" + count);
            if(count > 4){
                console.log("inside the if condition" + count);
                count =0; 
            }
            count++;
            let imgsrc;
            imgsrc = `./images/catplay${count}.png`;
            $image.attr("src",imgsrc);
            myTom.petPlay();
        },1000);    
        
     })
     $('#lightsoff').on('click',function(){
        let imgsrc;
        imgsrc = `./images/catsleepy1.png`;
        $image.attr("src",imgsrc);
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
    // $('.main').css('background-image',`url('/Users/sravanthiedam/sei/deliverables/tomagotchi/images/GamingBackground2.jpg')`);
    // setTimeout(function(){
    // },5000);

    //$('#bg').css('background-image','none');
    $main.hide(5000);
    $gameplay.show(6000);
   const name = getName();
   const myTom = createTomagotchi(name);
   myTom.currentState();
   $gameplay.append(`<p>${myTom.name}</p>`);

   //Change the meters every second for now.
   updateMeters(myTom);
   
    //work on timers
   createTimers(myTom);

   //Actions on buttons. count passed to increment images
   let count=0;
   gameison(myTom,count);

   //pet killer
   petkiller(myTom);
   


})

