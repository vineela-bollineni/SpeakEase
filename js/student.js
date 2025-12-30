function submitIssue() {
  const category = document.getElementById("category");
  const urgency = document.getElementById("urgency");
  const description = document.getElementById("description");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  // Reset messages
  errorMsg.style.display = "none";
  successMsg.style.display = "none";

  category.classList.remove("error");
  urgency.classList.remove("error");
  description.classList.remove("error");

  // Validation
  if (category.value === "") {
    showError("Please select issue category", category);
    return;
  }

  if (urgency.value === "") {
    showError("Please select urgency level", urgency);
    return;
  }

  if (description.value.trim() === "") {
    showError("Description is required", description);
    return;
  }

  if (description.value.trim().length < 10) {
    showError("Description must be at least 10 characters", description);
    return;
  }

  // Create issue
  const issue = {
    category: category.value,
    urgency: urgency.value,
    description: description.value.trim(),
    status: "Pending",
    createdAt: new Date().toLocaleString()
  };

  let issues = JSON.parse(localStorage.getItem("issues")) || [];
  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));

  // Success message
  successMsg.innerText = "Issue registered successfully";
  successMsg.style.display = "block";

  // Clear fields
  category.value = "";
  urgency.value = "";
  description.value = "";
}

// Error helper
function showError(message, field) {
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.innerText = message;
  errorMsg.style.display = "block";
  field.classList.add("error");
  field.focus();
}
