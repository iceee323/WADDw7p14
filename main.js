document.getElementById("submit").addEventListener("click", function (buttonClicked) {   
  event.preventDefault();
  console.log("Submit clicked");

  if (document.getElementById("childYes").checked) {
    console.log("User has answered yes to this question - child");
    if (document.getElementById("child-ages").value === "") {
      console.log("Required follow up question (age) not answered!");
    }
  }

  if (document.getElementById("petsYes").checked) {
    console.log("User has answered yes to this question - pets");
    if (document.getElementById("petSpecies").value === "") {
      console.log("Required follow up question (species) not answered!");
    }
  }
});


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

for (let childOption of children) {
  childOption.addEventListener("change", childOptionChanged);
}


const pets = document.getElementsByName("pets");

function petsOptionChanged(event) {
  const input = document.getElementById("petSpecies");
  const label = document.getElementById("petSpecies_label");
  if (event.target.value === "yes") {
    input.style.display = "block";
    label.style.display = "block";
  }
  else {
    input.style.display = "none";
    label.style.display = "none";
  }
}

for (let petOption of pets) {
  petOption.addEventListener("change", petsOptionChanged);
}



