const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", () => {
  const name = input.value.trim();
  if (name) {
    output.textContent = name;
  } else {
    output.textContent = "Anonymous";
  }
});
