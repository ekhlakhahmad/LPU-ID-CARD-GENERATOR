const batch1 = document.getElementById("batch1");
const reg1 = document.getElementById("reg1");
const name1 = document.getElementById("name1");
const parentName1 = document.getElementById("parentName1");
const address1 = document.getElementById("address1");
const mobile1 = document.getElementById("mobile1");
const valid1 = document.getElementById("valid1");
const genbtn = document.getElementById("genbtn");
const showBtn = document.querySelector(".output");
const container = document.querySelector('.container');
const inputContainer = document.querySelector('.inputContainer');

const batch2 = document.getElementById("batch2");
const reg2 = document.getElementById("reg2");
const name2 = document.getElementById("name2");
const parentName2 = document.getElementById("parentName2");
const address2 = document.getElementById("address2");
const mobile2 = document.getElementById("mobile2");
const valid2 = document.getElementById("valid2");

genbtn.addEventListener("click", () => {
  event.preventDefault();
  batch2.textContent = "Batch: " + batch1.value;
  reg2.textContent = reg1.value;
  name2.textContent = name1.value;
  parentName2.textContent = "C/o: " + parentName1.value;
  address2.textContent = address1.value;
  mobile2.textContent = "Resi. No.: " + mobile1.value;
  valid2.textContent = "Valid upto: " + valid1.value;

  const input = document.getElementById("photo1");
  const img = document.getElementById("photo2");

  const file = input.files[0];

  if (file) {
    if (file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  } else {
    alert("Please select a file before generating the ID card.");
  }

  container.style.display = "block";
  inputContainer.style.display = "none";

});
