// Define constants
const SERVER_URL = "http://localhost:8080/activity"; // Adjust URL if needed
const GET_ACTIVITY = SERVER_URL;
const POST_ACTIVITY = SERVER_URL;

document.addEventListener("DOMContentLoaded", () => {
    // Form and table selectors (only on form.html or table.html respectively)
    const form = document.querySelector("#activityForm");
    const tableBody = document.querySelector("#activityTable");

    let editId = null; // Tracks the ID of the activity being edited

    // If it's form.html, handle form submission and pre-fill logic
    if (form) {
        const activityName = document.getElementById("activityName");
        const assignedTo = document.getElementById("assignedTo");
        const plannedStartDate = document.getElementById("plannedStartDate");
        const plannedEndDate = document.getElementById("plannedEndDate");
        const actualStartDate = document.getElementById("actualStartDate");
        const actualEndDate = document.getElementById("actualEndDate");

        const urlParams = new URLSearchParams(window.location.search);
        const activityId = urlParams.get('id');

        if (activityId) {
            editId = activityId;
            fetch(`${GET_ACTIVITY}/${activityId}`)
                .then(res => res.json())
                .then(activity => {
                    activityName.value = activity.activityName;
                    assignedTo.value = activity.assignedTo;
                    plannedStartDate.value = activity.plannedStartDate;
                    plannedEndDate.value = activity.plannedEndDate;
                    actualStartDate.value = activity.actualStartDate || "";
                    actualEndDate.value = activity.actualEndDate || "";
                })
                .catch(err => console.error("Failed to fetch activity for editing:", err));
        }

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (form.checkValidity()) {
                const formData = new FormData(form);
                if (editId) {
                    await updateActivity(formData);
                } else {
                    await createActivity(formData);
                }
                form.reset();
                editId = null;
                window.location.href = 'table.html';
            } else {
                form.classList.add("was-validated");
            }
        });

        async function createActivity(formData) {
            const formDataJson = Object.fromEntries(formData.entries());
            const res = await fetch(POST_ACTIVITY, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataJson),
            });
            console.log("activity created:", await res.json());
        }

        async function updateActivity(formData) {
            const formDataJson = Object.fromEntries(formData.entries());
            const res = await fetch(`${POST_ACTIVITY}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataJson),
            });

            if (res.ok) {
                console.log("activity updated:", await res.json());
            } else {
                console.error("Failed to update the activity.");
            }
        }
    }

    // If it's table.html, load the table
    if (tableBody) {
        async function prefetchTableRows() {
            const data = await fetchActivity();
            tableBody.innerHTML = "";
            data.forEach(row => {
                tableBody.innerHTML += `
                    <tr id="activityRow${row.id}">
                        <td>${row.activityName}</td>
                        <td>${row.assignedTo}</td>
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

        async function fetchActivity() {
            const res = await fetch(GET_ACTIVITY);
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
    await fetch(`${POST_ACTIVITY}/${deleteId}`, {
        method: "DELETE",
    });
    // Re-fetch the table data to reflect changes
    const tableBody = document.querySelector("#activityTable");
    if (tableBody) {
        const res = await fetch(GET_ACTIVITY);
        const data = await res.json();
        tableBody.innerHTML = "";
        data.forEach(row => {
            tableBody.innerHTML += `
                <tr id="activityRow${row.id}">
                    <td>${row.activityName}</td>
                    <td>${row.assignedTo}</td>
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
