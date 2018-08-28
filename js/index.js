for (let x of document.getElementsByClassName("numbersButton")) {
  if (x.firstChild.innerText === "←") {
    x.addEventListener("click", (event)=>{
      document.getElementById("content").innerText = document.getElementById("content").innerText.slice(0, document.getElementById("content").innerText.length-1);
    });
  }
  else {
    x.addEventListener("click", (event)=>{
      if (isNaN(document.getElementById("content").innerText[document.getElementById("content").innerText.length-1]) && document.getElementById("content").innerText[document.getElementById("content").innerText.length-1] != ".") {
        console.log()
        document.getElementById("content").innerText += ` ${x.firstChild.innerText}`;
      }
      else 
        document.getElementById("content").innerText += x.firstChild.innerText;
    });
  }
}
for (let x of document.getElementsByClassName("operationsButton")) {
  if (x.firstChild.innerText === "clear") {
    x.addEventListener("click", (event)=>{document.getElementById("content").innerText = ""});
  }
  else if (x.firstChild.innerText === "=") {
    x.addEventListener("click", (event)=>{
      console.log(eval(document.getElementById("content").innerText.replace(/x/g, "*").replace(/\^/g, "**")));
      document.getElementById("content").innerText = eval(document.getElementById("content").innerText.replace(/x/g, "*").replace(/\^/g, "**")).toFixed(4);
    });
  }
  else {
    x.addEventListener("click", (event)=>{
      document.getElementById("content").innerText += ` ${x.firstChild.innerText} `;
    });
  }
}