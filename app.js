// const text = document.querySelector("input");
const text = document.querySelector("input");
const img = document.querySelector("img");
const generate = document.querySelector("button");

generate.addEventListener("click", () => {
  if (text.value === "") {
    alert("Please Enter text or a URL!!");
  } else {
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
    img.classList.add("img-style");
  }
});
