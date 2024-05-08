document.getElementById("submit").addEventListener("click", function (buttonClicked) {   
  preventDefault();
  console.log("Submit clicked");
});

const pets = document.getElementsByName("pets");

const children = document.getElementsByName("children");

function childOptionChanged(event) {
  const input = document.getElementById("child-ages");
  const label = document.getElementById("child-ages-label");
  if (event.target.value === "yes") {
    input.style.display = "block";
    label.style.display = "block";
  }
  else {
    input.style.display = "none";
    label.style.display = "none";
  }
}

function petsOptionChanged(event) {
  const input = document.getElementById("petSpecies");
  const label = document.getElementById("petSpecies_label");
  console.log(event.target.value);
  if (event.target.value === "yes") {
    input.style.display = "block";
    label.style.display = "block";
  }
  else {
    input.style.display = "none";
    label.style.display = "none";
  }
}



for (let childOption of children) {
    childOption.addEventListener("change", childOptionChanged);
}
for (let petOption of pets) {
  petOption.addEventListener("change", petsOptionChanged);
}