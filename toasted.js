class Toasted {
  constructor() {
    console.log("Toasted.JS v1.0.0");
  }
  
  toast(configs) {
    let msg = document.createElement("div");
    msg.id = configs.name;
    msg.style.zIndex = "99999";
    msg.style.position = "absolute"
    msg.style.top = "70%";
    msg.style.left = "30%";
    msg.style.opacity = "20%";
    msg.style.display = "flex";
    msg.style.borderRadius = "10px";
    msg.style.width = "200px";
    msg.style.height = "40px";
    msg.textContent = configs.message;
    document.body.appendChild(msg)
    if (configs.type == "error"){
      msg.style.backgroundColor = "red";
      msg.style.color = "white";
    }
    else if (configs.type == "normal") {
      msg.style.backgroundColor = "blue";
      msg.style.color = "white";
    }
    else {
      msg.style.backgroundColor = "blue";
      msg.style.color = "white";
    }
    
    setTimeout(()=>{
      document.body.removeChild(msg);
    }, configs.duration || 4000)
  }
}

export default Toasted;
