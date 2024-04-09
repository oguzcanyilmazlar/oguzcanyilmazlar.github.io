const button = document.getElementById("link-button");
const textBox = document.getElementById("textbox");
const copyArea = document.getElementById("link-text");
const fakeMouse = document.getElementById("fake_mouse");

button.onclick = () => {
    console.log(textBox.value);
    copyArea.value = "https://oguzcanyilmazlar.github.io/goggle?q=" + encodeURI(textBox.value);
    copyArea.classList.remove("hidden");
}

window.onload = () => {
    console.log("searching for url params");
    doAnim(window.location.search);
}

doAnim = (url) => {
    const urlParams = new URLSearchParams(url);
    if(!urlParams.has("q")) return;
    const text = urlParams.get("q");
    button.textContent = "Ara!";
    textBox.value = text;
    fakeMouse.classList.remove("hidden");
    var {x,y,width,height} = button.getBoundingClientRect();

    const animation = [
        { left: parseInt(x+width/2)+'px',top: parseInt(y+height/2)+'px' },
      ];

    const animationTiming = {
        duration: 2000,
        iterations: 1,
        fill: 'forwards',
    }
      
      
    
    fakeMouse.animate(animation, animationTiming).onfinish = () => {window.location.replace("http://www.google.com/search?q=" + encodeURI(text));}

}


