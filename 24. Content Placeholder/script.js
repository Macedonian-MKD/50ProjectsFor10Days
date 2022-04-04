const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameT = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
  //getData();
}, 3000);

function getData() {
  header.innerHTML = ` <img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    alt=""/>`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo! ";
  profile_img.innerHTML = ` <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  nameT.innerHTML = "John Doe";
  date.innerHTML = "Oct 8th 2021";

  animated_bgs.forEach((animated) => {
    animated.classList.remove("animated-bg");
  });
  animated_bg_text.forEach((animated) => {
    animated.classList.remove("animated-bg-text");
  });
}
