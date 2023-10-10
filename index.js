
// // document.querySelector("button").addEventListener("click", function () {

// //     alert(" I got clicked");

// // });

// // let arr = [];
// // arr = document.getElementsByClassName("drum");

// // for(let i = 0; i<arr.length;i++)
// // {
// //     arr[i].addEventListener("click", function(){
// //         alert("i got fucked");
// //     });
// // }

// let numberOfButtons = document.querySelectorAll(".drum").length;
// for(let i=0;i<numberOfButtons;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function () {
//         // alert("Hello there! I am using JavaScript");
//             // var audio = new Audio('./sounds/tom-1.mp3');
//             // audio.play();
//             // console.log(this.innerHTML);
//             // this.style.color="white";
//             var button = this.innerHTML;
//             // switch (button) {
//             //     case "w":
//             //         var tom1 = new Audio('./sounds/tom-1.mp3');
//             //         tom1.play();
//             //         break;
//             //     case "a":
//             //         var tom2 = new Audio('./sounds/tom-2.mp3');
//             //         tom2.play();
//             //         break;
//             //     case "s":
//             //         var tom3 = new Audio('./sounds/tom-3.mp3');
//             //         tom3.play();
//             //         break;
//             //     case "d":
//             //         var tom4 = new Audio('./sounds/tom-4.mp3');
//             //         tom4.play();
//             //         break;
//             //     case "j":
//             //         var snare = new Audio('./sounds/snare.mp3');
//             //         snare.play();
//             //         break;
//             //     case "k":
//             //         var crash = new Audio('./sounds/crash.mp3');
//             //         crash.play();
//             //         break;
//             //     case "l":
//             //         var kick = new Audio('./sounds/kick-bass.mp3');
//             //         kick.play();
//             //         break;
//             //     case "t":
//             //         var t = new Audio('./sounds/t.wav');
//             //         t.play();
//             //         break;
//             //     case "u":
//             //         var u = new Audio('./sounds/u.wav');
//             //         u.play();
//             //         break;
//             //     case "v":
//             //         var v = new Audio('./sounds/v.wav');
//             //         v.play();
//             //         break;
//             //     case "n":
//             //         var n = new Audio('./sounds/n.wav');
//             //         n.play();
//             //         break;
//             //     case "i":
//             //         var i = new Audio('./sounds/i.wav');
//             //         i.play();
//             //         break;
            
//             //     default:
//             //         break;
//             // }
//             makeSound(button);
//              buttonAnimation(button);
//     })
// }

// document.addEventListener("keydown",function(event){
//     // console.log(event);
//     // var textContent = event.key.toLocaleLowerCase();
//     // console.log(textContent);
//     // switch (textContent) {
//     //     case "w":
//     //         var tom1 = new Audio('./sounds/tom-1.mp3');
//     //         tom1.play();
//     //         break;
//     //     case "a":
//     //         var tom2 = new Audio('./sounds/tom-2.mp3');
//     //         tom2.play();
//     //         break;
//     //     case "s":
//     //         var tom3 = new Audio('./sounds/tom-3.mp3');
//     //         tom3.play();
//     //         break;
//     //     case "d":
//     //         var tom4 = new Audio('./sounds/tom-4.mp3');
//     //         tom4.play();
//     //         break;
//     //     case "j":
//     //         var snare = new Audio('./sounds/snare.mp3');
//     //         snare.play();
//     //         break;
//     //     case "k":
//     //         var crash = new Audio('./sounds/crash.mp3');
//     //         crash.play();
//     //         break;
//     //     case "l":
//     //         var kick = new Audio('./sounds/kick-bass.mp3');
//     //         kick.play();
//     //         break;
//     //     case "t":
//     //         var t = new Audio('./sounds/t.wav');
//     //         t.play();
//     //         break;
//     //     case "u":
//     //         var u = new Audio('./sounds/u.wav');
//     //         u.play();
//     //         break;
//     //     case "v":
//     //         var v = new Audio('./sounds/v.wav');
//     //         v.play();
//     //         break;
//     //     case "n":
//     //         var n = new Audio('./sounds/n.wav');
//     //         n.play();
//     //         break;
//     //     case "i":
//     //         var i = new Audio('./sounds/i.wav');
//     //         i.play();
//     //         break;
    
//     //     default:
//     //         break;
//     // }
//     makeSound(event.key)
//     buttonAnimation(event.key);
// });

// function makeSound(key) {
//     switch (key) {
//         case "w":
//             var tom1 = new Audio('./sounds/tom-1.mp3');
//             tom1.play();
//             break;
//         case "a":
//             var tom2 = new Audio('./sounds/tom-2.mp3');
//             tom2.play();
//             break;
//         case "s":
//             var tom3 = new Audio('./sounds/tom-3.mp3');
//             tom3.play();
//             break;
//         case "d":
//             var tom4 = new Audio('./sounds/tom-4.mp3');
//             tom4.play();
//             break;
//         case "j":
//             var snare = new Audio('./sounds/snare.mp3');
//             snare.play();
//             break;
//         case "k":
//             var crash = new Audio('./sounds/crash.mp3');
//             crash.play();
//             break;
//         case "l":
//             var kick = new Audio('./sounds/kick-bass.mp3');
//             kick.play();
//             break;
//         case "t":
//             var t = new Audio('./sounds/t.wav');
//             t.play();
//             break;
//         case "u":
//             var u = new Audio('./sounds/u.wav');
//             u.play();
//             break;
//         case "v":
//             var v = new Audio('./sounds/v.wav');
//             v.play();
//             break;
//         case "n":
//             var n = new Audio('./sounds/n.wav');
//             n.play();
//             break;
//         case "i":
//             var i = new Audio('./sounds/i.wav');
//             i.play();
//             break;
    
//         default:
//             break;
//     }
// }





let numberOfButtons = document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
});
}
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    buttonAnimation(event.key);
});

function makeSound(key) {
    var AudioMap = {
        "w": "./sounds/tom-1.mp3",
        "a": "./sounds/tom-2.mp3",
        "s": "./sounds/tom-3.mp3",
        "d": "./sounds/tom-4.mp3",
        "j": "./sounds/snare.mp3",
        "k": "./sounds/crash.mp3",
        "l": "./sounds/kick-bass.mp3",
        "t": "./sounds/t.wav",
        "u": "./sounds/u.wav",
        "v": "./sounds/v.wav",
        "n": "./sounds/n.wav",
        "i": "./sounds/i.wav",
    }
    if(key in AudioMap){
        var audio = new Audio(AudioMap[key]);
        audio.play();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

document.querySelector("h1").classList.add("pressed");