
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

function setMeters(myTom){
    $(document).ready(function(){
        $('#hunger').progressbar({
            value: myTom.hunger
        })
    })
}
const createMeters = function (numberOfSquares) {

    // $( function() {
    //     $( "#progressbar" ).progressbar({
    //       value: 37
    //     });
    //   } );
    const $squaresContainer = $('.progressbar');
    const $square = $('<div />');
    //   // Add squre classs
    $square.addClass('square');
    //   // Get Random Color
    //   // console.log(getRandomColor());
    $square.css('background-color', 'red');
    //   // Append to parent container
    $squaresContainer.append($square);
  
    // Clear Parent Container
    //$squaresContainer.empty();
  
    // for (let i = 1; i <= numberOfSquares; i++) {
    //   // const $square = $('<div class="square" />');
    //   // Create div
    //   const $square = $('<div />');
    //   // Add squre classs
    //   $square.addClass('square');
    //   // Get Random Color
    //   // console.log(getRandomColor());
    //   $square.css('background-color', 'red');
    //   // Append to parent container
    //   $squaresContainer.append($square);
    // }
    // for (let i = 1; i <= numberOfSquares; i++) {
    //     // const $square = $('<div class="square" />');
    //     // Create div
    //     const $square = $('<div />');
    //     // Add squre classs
    //     $square.addClass('square');
    //     // Get Random Color
    //     // console.log(getRandomColor());
    //     $square.css('background-color', 'red');
    //     // Append to parent container
    //     $squaresContainer.append($square);
    //   }
    //   for (let i = 1; i <= numberOfSquares; i++) {
    //     // const $square = $('<div class="square" />');
    //     // Create div
    //     const $square = $('<div />');
    //     // Add squre classs
    //     $square.addClass('square');
    //     // Get Random Color
    //     // console.log(getRandomColor());
    //     $square.css('background-color', 'red');
    //     // Append to parent container
    //     $squaresContainer.append($square);
    //   }
  };


const $btn = $('#set-name');
$btn.on('click',function(){
    console.log("button is clicked");
    
   const name = getName();
   const myTom = createTomagotchi(name);
   myTom.currentState();

   //Change the meters every second for now.
   setInterval(()=>{
    $('#hunger').val(myTom.hunger);
    $('#sleepiness').val(myTom.sleepiness);
    $('#boredom').val(myTom.boredom);
   },1000)
   
    //work on timers
   createTimers(myTom);

   //Actions on buttons
   $('#feedme').on('click',function(){
       myTom.feed();
   })
   $('#play').on('click',function(){
    myTom.petPlay();
    })
    $('#lightsoff').on('click',function(){
        myTom.lightsOff();
    })
   $btn.hide();
   $('#name-field').hide();
})

