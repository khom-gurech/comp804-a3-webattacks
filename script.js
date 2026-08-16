function showAnimal(animal) {
  const catButton = document.getElementById("catButton");
  const dogButton = document.getElementById("dogButton");
  const frogButton = document.getElementById("frogButton");

  const animalText = document.getElementById("animalText");
  const animalMessage = document.getElementById("animalMessage");
  const animalImage = document.getElementById("animalImage");
  const animalImageSource = document.getElementById("animalImageSource");

  // Remove highlighting from all buttons
  catButton.classList.remove("selectedAnimal");
  dogButton.classList.remove("selectedAnimal");
  frogButton.classList.remove("selectedAnimal");

  if (animal === "cat") {
    catButton.classList.add("selectedAnimal");

    animalText.value = "User clicks Cat";
    animalMessage.textContent = "Cat is clicked";

    animalImage.src = "images/cat.jpg";
    animalImage.alt = "Cat";

    animalImageSource.innerHTML =
      'Image source: <a href="https://en.wikipedia.org/wiki/Tabby_cat" target="_blank" rel="noopener noreferrer">Wikipedia - Tabby cat</a>';
  } else if (animal === "dog") {
    dogButton.classList.add("selectedAnimal");

    animalText.value = "User clicks Dog";
    animalMessage.textContent = "Dog is clicked";

    animalImage.src = "images/dog.jpg";
    animalImage.alt = "Dog";

    animalImageSource.innerHTML =
      'Image source: <a href="https://en.wikipedia.org/wiki/Dog_breed" target="_blank" rel="noopener noreferrer">Wikipedia - Dog breed</a>';
  } else if (animal === "frog") {
    frogButton.classList.add("selectedAnimal");

    animalText.value = "User clicks Frog";
    animalMessage.textContent = "Frog is clicked";

    animalImage.src = "images/frog.jpg";
    animalImage.alt = "Frog";

    animalImageSource.innerHTML =
      'Image source: <a href="https://en.wikipedia.org/wiki/Frog" target="_blank" rel="noopener noreferrer">Wikipedia - Frog</a>';
  }
}
