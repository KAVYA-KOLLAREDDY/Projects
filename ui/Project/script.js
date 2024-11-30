// Define constants
const SERVER_URL = "http://localhost:8080/projects"; // Adjust URL if needed
const GET_PROJECTS = SERVER_URL;
const POST_PROJECTS = SERVER_URL;

document.addEventListener("DOMContentLoaded", () => {
    // Form and table selectors (only on form.html or table.html respectively)
    const form = document.querySelector("#projectForm");
    const tableBody = document.querySelector("#projectTable");

    let editId = null; // Tracks the ID of the project being edited

    // If it's form.html, handle form submission and pre-fill logic
    if (form) {
        const projectName = document.getElementById("projectName");
        const client = document.getElementById("client");
        const typeOfProject = document.getElementById("typeOfProject");
        const submissionMethod = document.getElementById("submissionMethod");
        const plannedStartDate = document.getElementById("plannedStartDate");
        const plannedEndDate = document.getElementById("plannedEndDate");
        const actualStartDate = document.getElementById("actualStartDate");
        const actualEndDate = document.getElementById("actualEndDate");
        const status = document.getElementById("status");

        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (projectId) {
            editId = projectId;
            fetch(`${GET_PROJECTS}/${projectId}`)
                .then(res => res.json())
                .then(project => {
                    projectName.value = project.projectName;
                    client.value = project.client;
                    typeOfProject.value = project.typeOfProject;
                    submissionMethod.value = project.submissionMethod;
                    plannedStartDate.value = project.plannedStartDate;
                    plannedEndDate.value = project.plannedEndDate;
                    actualStartDate.value = project.actualStartDate || "";
                    actualEndDate.value = project.actualEndDate || "";
                    status.value = project.status;
                })
                .catch(err => console.error("Failed to fetch project for editing:", err));
        }

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (form.checkValidity()) {
                const formData = new FormData(form);
                if (editId) {
                    await updateProject(formData);
                } else {
                    await createProject(formData);
                }
                form.reset();
                editId = null;
                window.location.href = 'table.html';
            } else {
                form.classList.add("was-validated");
            }
        });

        async function createProject(formData) {
            const formDataJson = Object.fromEntries(formData.entries());
            const res = await fetch(POST_PROJECTS, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataJson),
            });
            console.log("Project created:", await res.json());
        }

        async function updateProject(formData) {
            const formDataJson = Object.fromEntries(formData.entries());
            const res = await fetch(`${POST_PROJECTS}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataJson),
            });

            if (res.ok) {
                console.log("Project updated:", await res.json());
            } else {
                console.error("Failed to update the project.");
            }
        }
    }

    // If it's table.html, load the table
    if (tableBody) {
        async function prefetchTableRows() {
            const data = await fetchProjects();
            tableBody.innerHTML = "";
            data.forEach(row => {
                tableBody.innerHTML += `
                    <tr id="projectRow${row.id}">
                        <td>${row.projectName}</td>
                        <td>${row.client}</td>
                        <td>${row.typeOfProject}</td>
                        <td>${row.submissionMethod}</td>
                        <td>${row.status}</td>
                        <td>${row.plannedStartDate || "-"}</td>
                        <td>${row.plannedEndDate || "-"}</td>
                        <td>${row.actualStartDate || "-"}</td>
                        <td>${row.actualEndDate || "-"}</td>
                        <td>
                            <button class="btn btn-warning btn-sm" onclick="editRow(${row.id})">Edit</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteRow(${row.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }

        async function fetchProjects() {
            const res = await fetch(GET_PROJECTS);
            return await res.json();
        }

        prefetchTableRows();
    }
});

// Global functions for Edit and Delete
async function editRow(editIdParam) {
    window.location.href = `form.html?id=${editIdParam}`;
}

async function deleteRow(deleteId) {
    await fetch(`${POST_PROJECTS}/${deleteId}`, {
        method: "DELETE",
    });
    // Re-fetch the table data to reflect changes
    const tableBody = document.querySelector("#projectTable");
    if (tableBody) {
        const res = await fetch(GET_PROJECTS);
        const data = await res.json();
        tableBody.innerHTML = "";
        data.forEach(row => {
            tableBody.innerHTML += `
                <tr id="projectRow${row.id}">
                    <td>${row.projectName}</td>
                    <td>${row.client}</td>
                    <td>${row.typeOfProject}</td>
                    <td>${row.submissionMethod}</td>
                    <td>${row.status}</td>
                    <td>${row.plannedStartDate || "-"}</td>
                    <td>${row.plannedEndDate || "-"}</td>
                    <td>${row.actualStartDate || "-"}</td>
                    <td>${row.actualEndDate || "-"}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editRow(${row.id})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRow(${row.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
    }
}
