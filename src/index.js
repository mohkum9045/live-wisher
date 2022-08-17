import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let date = new Date(2020, 8, 8, 18    );
date = date.getHours();
var greeting = "";

if (date >= 1 && date <= 12) {
  greeting = "Good Morning !"
}
else if (date > 12 && date < 19) {
  greeting = "Good Evening !"
}
else {
  greeting = "Good Night !"
}

ReactDOM.render(
<>
  <div style={{ backgroundColor: "#808000", textAlign: "center", width:"100%", height:"100%", justifyContent:"center",alignItems:"center" }}>
    <h2 style={{ color: "#FFA500" }}>Hii Mohit, {greeting}</h2>
    </div>
</>
    ,document.getElementById("root")
)


