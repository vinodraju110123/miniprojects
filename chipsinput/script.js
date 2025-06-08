const input = document.getElementById("chipInput");
const container = document.getElementById("chipContainer");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    createChip(input.value.trim());
    input.value = "";
  }
});

function createChip(text) {
  const chip = document.createElement("div");
  chip.className = "chip";

  const span = document.createElement("span");
  span.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "✕";
  btn.onclick = () => chip.remove();

  chip.appendChild(span);
  chip.appendChild(btn);
  container.appendChild(chip);
}
