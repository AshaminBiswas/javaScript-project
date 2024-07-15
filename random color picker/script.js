// i create a function for random color code and color generator
const colorCode = ()=>{
    //then i create a variable thats generateb a random number
    const randomNumber = Math.floor(Math.random() * 16777215);
    //the random number concatinate with "#" and converted to hexa string thats stored in new variable
    const hexCode = "#"+ randomNumber.toString(16);
    //then the new variable set to inner text by using id seclector
    document.getElementById("color-code").innerText=hexCode;
    // and then  i set the background color on body 
    document.body.style.backgroundColor = hexCode;
    
}
colorCode()
document.getElementById("btn").addEventListener(
    "click",
    colorCode
);
