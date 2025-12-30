const solvedList = document.getElementById("solvedList");
let issues = JSON.parse(localStorage.getItem("issues")) || [];

let solvedIssues = issues.filter(issue => issue.status === "Solved");

if (solvedIssues.length === 0) {
  solvedList.innerHTML = "<p>No solved issues yet.</p>";
}

solvedIssues.forEach(issue => {
  const div = document.createElement("div");
  div.className = "issue";

  div.innerHTML = `
    <b>${issue.category}</b><br>
    <span class="badge ${issue.urgency}">${issue.urgency}</span>

    <p>${issue.description}</p>

    <p class="date-time">
      <strong>Reported On:</strong> ${issue.createdAt}
    </p>

    <p class="date-time solved">
      <strong>Solved On:</strong> ${issue.solvedAt || "N/A"}
    </p>

    <p><b>Status:</b> Solved</p>
  `;

  solvedList.appendChild(div);
});

function goBack() {
  window.history.back();
}
