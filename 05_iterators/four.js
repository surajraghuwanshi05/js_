const myObject = {
    js: "javascript",
    cpp:"C++",
    py:"python"
}


for (const key in myObject) {
    console.log(`${key} $shortcut is for {myObject[key]}`);
    
}

const programming = ["Js", "rb"]

for (const key in programming) {
    console.log(programming[key]);
}