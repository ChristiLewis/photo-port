export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//IDEA TO FIX CHARAT ERROR FROM https://www.codegrepper.com/code-examples/javascript/charat+in+react+js 

// let str = new String("This is string");
// console.log("str.charAt(0) is:" + str.charAt(0));
// console.log("str.charAt(1) is:" + str.charAt(1));
// console.log("str.charAt(2) is:" + str.charAt(2));
// console.log("str.charAt(3) is:" + str.charAt(3));
// console.log("str.charAt(4) is:" + str.charAt(4));
// console.log("str.charAt(5) is:" + str.charAt(5));

//FROM https://www.codegrepper.com/code-examples/javascript/charat%280%29

// var str="Hello Folks!"
// var firstStringChar = str.charAt(0); 

//H

//ONE LINE SOLUTION SIM TO THAT PROVIDED BY THE MODULE CONTENT FROM https://www.codegrepper.com/code-examples/html/react+capitalize+first+letter

{/* <Text>{str.charAt(0).toUpperCase() + str.slice(1);}</Text> */}

//SOLUTION AS A STYLE ISSUE FROM WRITTEN SIGH https://www.codegrepper.com/code-examples/html/react+capitalize+first+letter
// I think the best way is to do it using styles (it will work for any UI framework)
// JS
{/* <Text class="capitalize-me">sometext</Text> */}
// CSS
// .capitalize-me::first-letter {
//   text-transform: capitalize;
// }