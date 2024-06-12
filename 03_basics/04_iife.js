// Immediate Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log("DB CONNECED")
})();

//()() // global scope ke polution se dikkat hoti kai bar to usko hatane ke liye iife ka use krte isme function udhar hi execute ho jata hai 

( (name) => {
    //unnamed iife
    console.log(`DB connectedTwo${name}`);
} )("suraj")