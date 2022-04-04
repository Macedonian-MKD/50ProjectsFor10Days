const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialText = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: `I've worked with literally hundreds of HTML/CSS developers and I have to
    say the top spot goes to this guy. This guy is an amazing developer. He
    stresses on good, clean code and pays heed to the details. I love
    developers who respect each and every aspect of a throughly thought out
    design and do their best to put it in code. He goes over and beyond and
    transforms ART into PIXELS - without a glitch, every time.`,
  },
  {
    name: "Alexandra Styles",
    position: "Computer Enginering",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    text: `I've worked with literally hundreds of HTML/CSS developers and I have to
    say the top spot goes to this guy. This guy is an amazing developer. He
    stresses on good, clean code and pays heed to the details. I love
    developers who respect each and every aspect of a throughly thought out
    design and do their best to put it in code. He goes over and beyond and
    transforms ART into PIXELS - without a glitch, every time.`,
  },
  {
    name: "Kate Byrnes",
    position: "Dispatching",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `I've worked with literally hundreds of HTML/CSS developers and I have to
    say the top spot goes to this guy. This guy is an amazing developer. He
    stresses on good, clean code and pays heed to the details. I love
    developers who respect each and every aspect of a throughly thought out
    design and do their best to put it in code. He goes over and beyond and
    transforms ART into PIXELS - without a glitch, every time.`,
  },
];

let index = 1;
function updateTestimonial() {
  testimonialText.textContent = testimonials[index].text;
  role.textContent = testimonials[index].position;
  userImage.src = testimonials[index].photo;
  username.textContent = testimonials[index].name;
  index++;
  if (index > testimonials.length - 1) {
    index = 0;
  }
}

setInterval(() => {
  updateTestimonial();
}, 10000);
