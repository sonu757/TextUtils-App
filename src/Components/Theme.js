import React from "react";

export default function darkMode() {
  const darkMode = () => {
    let dark_switch = document.getElementById("switch_label").checked;
    if (dark_switch === true) {
      document.body.style.backgroundColor = "black";
      document.getElementById("title_nav").style.color = "white";
      document.getElementById("navbar_of_site").classList.toggle("navbar-dark");
      document
        .getElementById("navbar_of_site")
        .classList.toggle("navbar-light");
      document.getElementById("navbar_of_site").classList.toggle("bg-dark");
      document.getElementById("text").style.backgroundColor = "black";
      document.getElementById("text").style.color = "white";
      document.getElementById("navbar_of_site").style.backgroundColor = "beige";
      document.getElementById("footer").classList.toggle("bg-dark");
      document.getElementById("footer").style.backgroundColor = "beige";
      document.getElementById("dark_mode_label").innerHTML =
        "Disable Dark Mode";
      let foot = document.getElementById("footer").getElementsByTagName("span");
      console.log(foot);
      for (let i = 0; i < foot.length; i++) {
        foot[i].style.color = "black";
      }

      let btn_arr = document.querySelectorAll(".btn-outline-dark");
      for (let item = 0; item < btn_arr.length; item++) {
        btn_arr[item].style.color = "#fff";
        btn_arr[item].style.borderColor = "#fff";
        btn_arr[item].addEventListener("mouseenter", (event) => {
          event.target.style.color = "black";
          event.target.style.backgroundColor = "white";
        });
        btn_arr[item].addEventListener("mouseleave", (event) => {
          event.target.style.color = "#fff";
          event.target.style.backgroundColor = "transparent";
        });
      }
    } else {
      document.body.style.backgroundColor = "beige";
      document.getElementById("title_nav").style.color = "black";
      document.getElementById("navbar_of_site").classList.toggle("navbar-dark");
      document
        .getElementById("navbar_of_site")
        .classList.toggle("navbar-light");
      document.getElementById("navbar_of_site").classList.toggle("bg-dark");
      document.getElementById("text").style.backgroundColor = "white";
      document.getElementById("text").style.color = "gray";
      document
        .getElementById("navbar_of_site")
        .removeAttribute("backgroundColor");
      document.getElementById("footer").classList.toggle("bg-dark");
      document.getElementById("footer").removeAttribute("backgroundColor");
      document.getElementById("dark_mode_label").innerHTML = "Enable Dark Mode";
      let foot = document.getElementById("footer").childNodes;
      for (let i = 0; i < foot.length; i++) {
        foot[i].style.color = "#f5f5dc";
      }

      let btn_arr = document.querySelectorAll(".btn-outline-dark");
      for (let item = 0; item < btn_arr.length; item++) {
        btn_arr[item].style.color = "#343a40";
        btn_arr[item].style.borderColor = "#343a40";
        btn_arr[item].addEventListener("mouseenter", (event) => {
          event.target.style.color = "#fff";
          event.target.style.backgroundColor = "#343a40";
        });
        btn_arr[item].addEventListener("mouseleave", (event) => {
          event.target.style.color = "#343a40";
          event.target.style.backgroundColor = "transparent";
        });
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: "16vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "absolute",
          top: "19px",
          right: "32px"
        }}
      >
        <span id="dark_mode_label" style={{ color: "rgb(132, 136, 139)" }}>
          Enable Dark Mode
        </span>
        <label className="switch" style={{ marginBottom: "-0.2rem" }}>
          <input type="checkbox" id="switch_label" onClick={darkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}
