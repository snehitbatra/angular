// $(document).ready(function () {
//   $("p").click(function () {
//     //element selector
//     console.log("you clicked on p", this);
//     $(this).css("background-color", "red");
//     // $(this).hide();
//   });

//   // $("#second").click(); //id selector

//   // $(".odd").click(); //class selector

//   $("p").mouseenter(function () {
//     console.log("you enter mous");
//   });

//   $("p").hover(
//     function () {
//       $(this).css("color", "yellow");
//     },
//     function () {
//       $(this).css("color", "black");
//     }
//   );
// });
// // console.log("ej");

// console.log(document) ;

// document.body.style.color="blue" ;

// document.title="sent" ;
// var element=document.body ;
// // console.log(document.documentElement);
// // // console.log(element.firstChild.parentElement) ;
// // // console.log(element.firstChild.parentNode) ;
// // console.log(element.firstElementChild) ;
// var cc= ()=>{
// element.firstElementChild.style.background="red"  ;

// }
// cc() ;

function loadscript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("success done");
    callback(src);
  };
  script.onerror = function () {
    alert("some erro");
  };
  document.body.appendChild(script);
}
function success(src) {
  console.log("in success");
}
// loadscript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
//   success
// );
// "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"

const first = () => {
  const greet = "Hi";
  const second = () => {
    const name = "john";
    console.log(greet);
  };
  return second;
};

const newfunc=first() ; 
newfunc(); //we can have access to the outer function 