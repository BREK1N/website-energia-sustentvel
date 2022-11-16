// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
$("#features a, .btn").on("click", function (event) {
  if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
          {
              scrollTop: $(hash).offset().top - 100
          },
          800
      );
  }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Sustentável", "Limpa", "é Tudo", "é TECH"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


let kw = document.getElementById("KW");
let rs = document.getElementById("RS");

function Kwtors(){
  let output = (parseFloat(kw.value) * 0.0702);
  rs.value = parseFloat(output.toFixed(2));

  let a = rs.value * 360
  let b = a - (a * 15) / 100;

  let tagP = document.getElementById("res");
  tagP.innerText = "Em 30 anos Você vai te gasto R$" + a + " Você ira economizar R$" + b + " Caso você instale paineis solares";


}

function Rstokw(){
  let output = (parseFloat(rs.value) / 0.0702);
  kw.value = parseFloat(output.toFixed(2));

  let a = rs.value * 360
  let b = a - (a * 15) / 100;

  let tagP = document.getElementById("res");
  tagP.innerText = "Em 30 anos Você vai te gasto R$" + a + " Você ira economizar R$" + b + " Caso você instale paineis solares";
}