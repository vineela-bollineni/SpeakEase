const issueList = document.getElementById("issueList");
let issues = JSON.parse(localStorage.getItem("issues")) || [];

issues.forEach((issue, index) => {
  if (issue.status === "Pending") {
    const div = document.createElement("div");
    div.className = "issue";

    div.innerHTML = `
      <b>${issue.category}</b><br>
      <span class="badge ${issue.urgency}">${issue.urgency}</span>

      <p>${issue.description}</p>

      <!-- Date & Time -->
      <p class="date-time">
        <strong>Reported On:</strong> ${issue.createdAt}
      </p>

      <button onclick="solveIssue(${index})">Mark as Solved</button>
    `;

    issueList.appendChild(div);
  }
});
function solveIssue(index) {
  issues[index].status = "Solved";

  // ✅ ADD solved date & time
  issues[index].solvedAt = new Date().toLocaleString();

  localStorage.setItem("issues", JSON.stringify(issues));
  location.reload();
}
