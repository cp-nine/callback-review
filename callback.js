// declare cupboard
let cupboard = [];

// declare main function
function us() {
  console.log("Check Cupboard : "+ cupboard.length);
  console.log("booking GoFood..."); 
  console.log("Goes to Mall..."); 
  goFood(naufal);

  setTimeout(() => {
    console.log("Go Home..");
    console.log("Check Cupboard..");
    
    console.log("Cupboard : "+ cupboard);
  }, 5000);
}

// declare callback function
function naufal(indomie) {
    console.log("Naufal receive indomie..");
    console.log("Naufal put indomie into cupboard..");   
    cupboard = indomie; 
    console.log(indomie);  
}

// declare gojek function that callback nauval function
function goFood(callback) {
  let indomie = ["Indomie Gooreng","Indomie Ayam Bawang"];
  console.log("Gojek buy Indomie");

  setTimeout(() => { 
    callback(indomie);
  }, 2000);
}

// call kita function
us();