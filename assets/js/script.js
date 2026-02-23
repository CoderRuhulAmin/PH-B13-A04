
const jobsContainer = document.querySelector("#jobs-container");
const tabs = document.querySelectorAll(".tab-btn");
let currentTab = "all";
// for(tab of tabs){
//     console.log(tab);
// }

function renderJobs(tab = "all") {
    currentTab = tab;
    jobsContainer.innerHTML = "";
    let filteredJobs = jobs.filter(function(job) {
        if(tab.toLowerCase() === "all") return true;
        return job.status.toLowerCase() === tab.toLowerCase();
    });

    // console.log(filteredJobs.length);

    document.getElementById("available-jobs-count").innerHTML = `<span>${filteredJobs.length}</span> of <span>${jobs.length}</span> Jobs`;

    if(filteredJobs.length === 0) {
        document.querySelector(".no-jobs").classList.remove('d-none');
    }else {
        document.querySelector(".no-jobs").classList.add('d-none');

        filteredJobs.forEach((job) => {

            const originalIndex = jobs.indexOf(job);

            const card = document.createElement("div");
            card.classList.add("card", "job-card", "p-3", "mb-4");
            card.innerHTML = `
                <div class="row align-items-center mb-3">
                    <div class="col-8">
                        <h4 class="mb-0">${job.company}</h4>
                        <p class="mb-0">${job.position}</p>
                    </div>
                    <div class="col-4 text-end">
                        <button class="btn delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="mb-3">
                    <span>${job.location}</span>
                    <span class="mx-1"> . </span>
                    <span>${job.type}</span>
                    <span class="mx-1"> . </span>
                    <span>$${job.salary.min}</span>
                    <span> - </span>
                    <span>$${job.salary.max}</span>
                </div>
                <div class="status mb-3">
                    <span id="job-status-btn" class="text-white px-3 py-2 rounded-2">${job.status}</span>
                </div>
                <p>${job.description}</p>
                <div class="">
                    <button class="btn btn-outline-success interview-btn">INTERVIEW</button>
                    <button class="btn btn-outline-danger rejected-btn">REJECTED</button>
                </div>`;

            jobsContainer.appendChild(card);

            // Button functionalities
            const jobStatusBtn = card.querySelector("#job-status-btn");
            if(job.status === "Not Applied"){

                jobStatusBtn.classList.add('bg-info');

            }else if(job.status === "Interview"){

                jobStatusBtn.classList.add('bg-success');

            }else if(job.status === "Rejected"){

                jobStatusBtn.classList.add('bg-danger');
            }
            // Interview
            card.querySelector(".interview-btn")
                .addEventListener('click', () => {
                    updateStatus(originalIndex, "Interview");
                });

            // Rejected
            card.querySelector(".rejected-btn")
                .addEventListener('click', () => {
                    updateStatus(originalIndex, "Rejected");
                });

            // Delete
            card.querySelector(".delete-btn")
                .addEventListener('click', () => {
                    deleteJob(originalIndex);
                });
        });
    }

    
    updateDashboardCounts();
}

function updateStatus(index, status) {
    jobs[index].status = status;
    renderJobs(currentTab);
}

function deleteJob(index) {
    jobs.splice(index, 1);
    renderJobs(currentTab);
}

function updateDashboardCounts() {
    const totalJobs = jobs.length;
    const interViewCount = jobs.filter(j => j.status === "Interview").length;
    const rejectedCount = jobs.filter(j => j.status === "Rejected").length;

    // console.log(totalJobs);
    // console.log(interViewCount);
    // console.log(rejectedCount);

    document.getElementById("total-jobs").innerHTML = `<strong>${totalJobs}</strong>`;
    document.getElementById("interview-count").innerHTML = `<strong>${interViewCount}</strong>`;
    document.getElementById("rejected-count").innerHTML = `<strong>${rejectedCount}</strong>`;
}

// Tab switching
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentTab = tab.dataset.tab;
        renderJobs(currentTab);
    });
});

// Initial render
renderJobs();