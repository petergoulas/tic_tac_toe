let player_x_plays = [];
let player_y_plays = [];
let player_x_plays_str ="";
let player_y_plays_str ="";
let current_button_clicked = 0;
// const str = "591";
let str = "";
let img_strX = "";
let img_strO = "";
let current_button_clicked_str = "";
// player "X" is 0, player "O" is 1
// player X plays first
let players_turn = 0;
console.log(players_turn);
console.log(player_x_plays);
console.log(player_y_plays);


const playerObject = function() {
  return { 
// initially there are 2 pictures inside each div
// they have display == none. this function is triggered then
// the display = block and then the image appears
    add_move() {
      current_button_clicked_str  = String(current_button_clicked);
      img_strX = 'imageX' + current_button_clicked_str;
      img_strO = 'imageO' + current_button_clicked_str;
      console.log(img_strX);
      console.log(img_strO);
      console.log(current_button_clicked_str);
      if (players_turn == 0) {
        document.getElementById(img_strX).style.display = "block";
        player_x_plays.push(current_button_clicked_str);
        player_x_plays_str += current_button_clicked_str;
        console.log(player_x_plays);
        console.log(player_x_plays_str);
        if (player_x_plays.length>=3) {
          console.log("player X has now 3 plays or more");
          console.log("Calling gameboard.check_win() for Player X...");
          console.log("Gameboard Object: ", gameboard);
          console.log("Checking if function exists: ", typeof gameboard.check_win);
          gameboard.check_win();
        }
      } else {
        document.getElementById(img_strO).style.display = "block";
        player_y_plays.push(current_button_clicked_str);
        player_y_plays_str += current_button_clicked_str;
        console.log(player_y_plays); 
        console.log(player_y_plays_str);
        if (player_y_plays.length>=3) {
          console.log("player O has now 3 plays or more");
          gameboard.check_win();
        }
      }
    },

    // switches the player over
    switch_player() {
      if (players_turn == 0){
        players_turn=1;
      } else {
        players_turn=0;
      }
    }
  };
};

const gameboardObject = function() {
  return { 
    winning_combos: [ 
      ["159", "195", "519", "591", "915", "951"],
      ["357", "375", "537", "573", "735", "753"],
      ["258", "285", "528", "582", "825", "852"],
      ["456", "465", "546", "564", "645", "654"],
      ["147", "174", "417", "471", "714", "741"],
      ["123", "132", "213", "231", "312", "321"],
      ["369", "396", "639", "693", "936", "963"],
      ["789", "798", "879", "897", "978", "987"]
    ], 

    // players_turn: 0,
    // player_x_plays_str: "",
    // player_y_plays_str: "",

    check_win() {
      let found = false;
      console.log("L86");
      console.log(players_turn);
      console.log(player_x_plays_str);
      console.log(player_y_plays_str);
      for (let i = 0; i < this.winning_combos.length; i++) {
        for (let j = 0; j < this.winning_combos[i].length; j++) {
          if (players_turn == 0) {
            console.log("HERE_L93");
            console.log(player_x_plays_str,this.winning_combos[i][j]);
            if (player_x_plays_str.includes(this.winning_combos[i][j])) {
              console.log("Player X wins!");
              const para = document.getElementById('winning_conditions_met');
              para.textContent+= 'ATTENTION: PLAYER "X" WINS';
              remove_event_listeners();
              return true;
            }
          } else {
            if (player_y_plays_str.includes(this.winning_combos[i][j])) {
              console.log(" Player Y wins!");
              const para = document.getElementById('winning_conditions_met');
              para.textContent+= 'ATTENTION: PLAYER "O" WINS';
              remove_event_listeners();
              return true;
            }
          }
        }
      }
      return found;
    }
  }; 
};

const gameboard = gameboardObject();
const player = playerObject();


/***********************************************************************/
// CLICK BUTTON ACTIONS
function clicked_button1() {
    console.log("ok_clicked button1");
    current_button_clicked = 1;
    // document.getElementById('button1').style.display = "none";
    console.log("adding position 1");
    player.add_move();
    // Remove the event listener after clicking
    sbutton.removeEventListener("click", clicked_button1);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("players turn switched")
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button2() {
    console.log("ok_clicked button2");
    current_button_clicked = 2;
    console.log("adding position 2");
    player.add_move();
    // Remove the event listener after clicking
    sbutton2.removeEventListener("click", clicked_button2);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button3() {
    console.log("ok_clicked button3");
    current_button_clicked = 3;
    console.log("adding position 3");
    player.add_move();
    // Remove the event listener after clicking
    sbutton3.removeEventListener("click", clicked_button3);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button4() {
    console.log("ok_clicked button4");
    current_button_clicked = 4;
    console.log("adding position 4");
    player.add_move();
    // Remove the event listener after clicking
    sbutton4.removeEventListener("click", clicked_button4);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button5() {
    console.log("ok_clicked button5");
    current_button_clicked = 5;
    console.log("adding position 5");
    player.add_move();
    // Remove the event listener after clicking
    sbutton5.removeEventListener("click", clicked_button5);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button6() {
    console.log("ok_clicked button6");
    current_button_clicked = 6;
    player.add_move();
    // Remove the event listener after clicking
    sbutton6.removeEventListener("click", clicked_button6);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button7() {
    console.log("ok_clicked button7");
    current_button_clicked = 7;
    console.log("adding position 7");
    add_move();
    // Remove the event listener after clicking
    sbutton7.removeEventListener("click", clicked_button7);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button8() {
    console.log("ok_clicked button8");
    current_button_clicked = 8;
    console.log("adding position 8");
    player.add_move();
    // Remove the event listener after clicking
    sbutton8.removeEventListener("click", clicked_button8);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

  function clicked_button9() {
    console.log("ok_clicked button9");
    current_button_clicked = 9;
    console.log("adding position 9");
    player.add_move();
    // Remove the event listener after clicking
    sbutton9.removeEventListener("click", clicked_button9);
    console.log("Event listener removed");
    // switch player
    player.switch_player();
    console.log("player is now:");
    console.log(players_turn);
  }

// CLICK BUTTON ACTIONS
/***********************************************************************/
  // switches the player over
  // function switch_player(){
  //   if (players_turn == 0){
  //     players_turn=1;
  //   } else {
  //     players_turn=0;
  //   }
  // }

  // add event listeners
  // This line selects the HTML element with the ID "button1" and assigns it to the variable sbutton.
  // sbutton is adding an event listener which will be triggered when clicked on it
  // sbutton is now a reference to that html element - a pointer
  let sbutton = document.getElementById("button1");
  sbutton.addEventListener("click", clicked_button1, false);
  let sbutton2 = document.getElementById("button2");
  sbutton2.addEventListener("click", clicked_button2, false);
  let sbutton3 = document.getElementById("button3");
  sbutton3.addEventListener("click", clicked_button3, false);
  let sbutton4 = document.getElementById("button4");
  sbutton4.addEventListener("click", clicked_button4, false);
  let sbutton5 = document.getElementById("button5");
  sbutton5.addEventListener("click", clicked_button5, false);
  let sbutton6 = document.getElementById("button6");
  sbutton6.addEventListener("click", clicked_button6, false);
  let sbutton7 = document.getElementById("button7");
  sbutton7.addEventListener("click", clicked_button7, false);
  let sbutton8 = document.getElementById("button8");
  sbutton8.addEventListener("click", clicked_button8, false);
  let sbutton9 = document.getElementById("button9");
  sbutton9.addEventListener("click", clicked_button9, false);
  
  function remove_event_listeners() {
    console.log("Removing event listeners...");
  
    if (sbutton) sbutton.removeEventListener("click", clicked_button1);
    if (sbutton2) sbutton2.removeEventListener("click", clicked_button2);
    if (sbutton3) sbutton3.removeEventListener("click", clicked_button3);
    if (sbutton4) sbutton4.removeEventListener("click", clicked_button4);
    if (sbutton5) sbutton5.removeEventListener("click", clicked_button5);
    if (sbutton6) sbutton6.removeEventListener("click", clicked_button6);
    if (sbutton7) sbutton7.removeEventListener("click", clicked_button7);
    if (sbutton8) sbutton8.removeEventListener("click", clicked_button8);
    if (sbutton9) sbutton9.removeEventListener("click", clicked_button9);
  
    console.log("All event listeners removed.");
  }
// CODE IF YOU NEED

// let num1 = 0;
// let str1 = "button";
// let input1 = document.getElementById("number1");
// let input2 = document.getElementById("number2");

// const para = document.querySelector('p');
// para.innerText += "\nResult is: \n";
// para.innerText += var1;

// console.log(input1,input2);

// function number1_input() {
//     var input1 = document.getElementById("number1").value;
//     console.log(input1);
// }

// function number2_input() {
//     var input2 = document.getElementById("number2").value;
//     console.log(input2);
// }

// function number_input() {
    // let number1 = document.getElementById("number1").value;
    // let result = document.getElementById("placeholder1");
    // console.log(number1);
    // console.log(typeof(number1));

    // let result2 = 0;

    // result2 = parseInt(number1) + parseInt(number2);
    // console.log(result2);

    // result2 = '' + result2;
    // // textContent wont work here
    // result.textContent += `<li> ${number1} </li>`;
    // result.innerHTML += `<li> ${number1} </li>`;
    // result.innerHTML += `<li id="item${num1}"> ${number1} <button id="button${num1}"> Delete </button> </li>`;
    // str1 += num1.toString();
    // console.log(str1);
    // `"button${num1}"`

    // let sbutton1 = document.getElementById(str1);
    // let sbutton1 = document.getElementById(`button${num1}`);
    // let sbutton2 = sbutton1;
    // sbutton1.addEventListener("click", () => {
    //     alert(sbutton1.id);
    //     console.log("YAY");
    // });
    
    // Add event listeners to all buttons
    // for (let i = 0; i <= num1; i++) {
    //     let sbutton1 = document.getElementById(`button${i}`);
    //     sbutton1.addEventListener("click", () => {
    //         let child1 = "item";
            // alert(sbutton1);
            // alert(sbutton1.id);
            // alert(typeof(sbutton1.id));
            // let extractedNumber = parseInt((sbutton1.id).match(/\d+/)[0]);
            // alert(extractedNumber);
            // alert(typeof(extractedNumber));
            // console.log(extractedNumber);
            // child1 += (extractedNumber.toString());
            // console.log(child1);
            // console.log(typeof(child1));
            // let listItem = document.getElementById(`item${extractedNumber}`);
            // let ok1 = placeholder1.removeChild(listItem);
            // let listItem = document.getElementById(`item${extractedNumber}`);
            // listItem.parentNode.removeChild(listItem);
            // alert("Attention: Node Removed");
            // let temp1 = parseINT(sbutton.id);
            // let temp1 = (sbutton.id).match(/\d+/g);
            // let temp2 = parseInt("10");
            // let temp1 = parseINT(sbutton.id);

            // let temp2 = sbutton.id;
            // console.log(temp2);
            // console.log(typeof(temp2));
            // let temp1 =  parseInt(temp2);
            // console.log(temp1);
            // console.log(typeof(temp1));
            // console.log("after this: ");
            // console.log(sbutton1);
            // // alert(temp1);
            // // const throwawayNode = itemid.removeChild(sbutton1.id);
            // console.log(temp1);
            // console.log("YAY");
    //     });
    // }


    // (document.getElementById(str1)).addEventListener("click", () => {
    //     // alert((document.getElementById(str1)).id);
    //     console.log("YAY");
    // });
    //num1++;
    // num1=0;
    //str1 ="button";

    // create delete button and add element
    // const deleteButton = document.createElement('button');
    // deleteButton.classList.add("button1");
    // deleteButton.textContent += "Delete";
    // result.appendChild(deleteButton);
// }

// let sbutton = document.getElementById("sbutton");
// sbutton.addEventListener("click", number_input, false); 

// get element placeholder1
// const placeholder1 = document.getElementById("placeholder1");
