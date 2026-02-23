let interviewList = [];
let rejectedList = [];

const totalElement = document.getElementById("total");
const interviewElement = document.getElementById("interview-count");
const rejectedElement = document.getElementById("rejected-count");
const totalJobsElement = document.getElementById("total-jobs");

const btnAll = document.getElementById("btn-all");
const btnInterview = document.getElementById("btn-interview");
const btnRejected = document.getElementById("btn-rejected");

const allCardsSection = document.getElementById("cards");
const noJobsSection = document.getElementById("no-jobs-section");
const filteredSection = document.getElementById("filtered-section");
const mainElement = document.querySelector("main");
// console.log(cardsElement.children);

noJobsSection.classList.add("hidden");

function calculateCount() {
  totalElement.innerText = allCardsSection.children.length;
  totalJobsElement.innerText = allCardsSection.children.length;
  interviewElement.innerText = interviewList.length;
  rejectedElement.innerText = rejectedList.length;
}
calculateCount();

function showFilterSection() {
  allCardsSection.classList.add("hidden");
  filteredSection.classList.remove("hidden");
}

function toggleStyle(id) {
  btnAll.classList.remove("text-white", "bg-blue-500");
  btnInterview.classList.remove("text-white", "bg-blue-500");
  btnRejected.classList.remove("text-white", "bg-blue-500");

  btnAll.classList.add("text-[#64748B]", "bg-base-100");
  btnInterview.classList.add("text-[#64748B]", "bg-base-100");
  btnRejected.classList.add("text-[#64748B]", "bg-base-100");
  // console.log(btnAll.classList)
  const selected = document.getElementById(id);
  //   console.log(selected)
  selected.classList.remove("text-[#64748B]", "bg-base-100");
  selected.classList.add("text-white", "bg-blue-500");

  if (id === "btn-interview") {
    showFilterSection();
    renderInterview();
  } else if (id === "btn-all") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  }else if(id === "btn-rejected"){
    showFilterSection();
    renderReject();
  }
}

mainElement.addEventListener("click", (e) => {
  // console.log(e.target)
  if (e.target.classList.contains("btn-interview")) {
    const parentNode = e.target.parentNode.parentNode;
    // console.log(parentNode)
    const company = parentNode.querySelector(".company").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const remoteOrFulltime = parentNode.querySelector(".remote-full").innerText;
    // const applyStatus = parentNode.querySelector(".apply-status").innerText;
    const description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".apply-status").innerText = "Interview";

    const cardInfo = {
      company,
      jobType,
      remoteOrFulltime,
      applyStatus: "Interview",
      description,
    };

    const exist = interviewList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!exist) {
      interviewList.push(cardInfo);
    }
  } else if (e.target.classList.contains("btn-rejected")) {
    const parentNode = e.target.parentNode.parentNode;
    // console.log(parentNode)
    const company = parentNode.querySelector(".company").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const remoteOrFulltime = parentNode.querySelector(".remote-full").innerText;
    // const applyStatus = parentNode.querySelector(".apply-status").innerText;
    const description = parentNode.querySelector(".description").innerText;

    parentNode.querySelector(".apply-status").innerText = "Rejected";

    const cardInfo = {
      company,
      jobType,
      remoteOrFulltime,
      applyStatus: "Rejected",
      description,
    };

    const exist = rejectedList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!exist) {
      rejectedList.push(cardInfo);
    }
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";
  const div = document.createElement("div");
  for (let interview of interviewList) {
    div.className = "p-6 flex justify-between bg-base-100";
    div.innerHTML = `
    <div class="space-y-4">
            <div>
              <h2 class="text-[#002C5C] text-lg font-semibold company">
                ${interview.company}
              </h2>
              <h3 class="text-[#64748B] job-type">${interview.jobType}</h3>
            </div>

            <p class="text-[#64748B] text-sm remote-full">
              ${interview.remoteOrFulltime}
            </p>
            <div>
              <p
                class="w-fit py-2 px-3 bg-base-300 text-sm font-medium text-[#002C5C] mb-2 apply-status"
              >
                ${interview.applyStatus}
              </p>
              <p class="text-sm text-[#323B49] description">
                ${interview.description}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-outline btn-success btn-interview">INTERVIEW</button>
              <button class="btn btn-outline btn-error btn-rejected">REJECTED</button>
            </div>
          </div>
          <div>
            <button class="btn btn-soft">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
  }
  filteredSection.appendChild(div);
}

function renderReject() {
  filteredSection.innerHTML = "";
  const div = document.createElement("div");
  for (let rejected of rejectedList) {
    div.className = "p-6 flex justify-between bg-base-100";
    div.innerHTML = `
    <div class="space-y-4">
            <div>
              <h2 class="text-[#002C5C] text-lg font-semibold company">
                ${rejected.company}
              </h2>
              <h3 class="text-[#64748B] job-type">${rejected.jobType}</h3>
            </div>

            <p class="text-[#64748B] text-sm remote-full">
              ${rejected.remoteOrFulltime}
            </p>
            <div>
              <p
                class="w-fit py-2 px-3 bg-base-300 text-sm font-medium text-[#002C5C] mb-2 apply-status"
              >
                ${rejected.applyStatus}
              </p>
              <p class="text-sm text-[#323B49] description">
                ${rejected.description}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-outline btn-success btn-interview">INTERVIEW</button>
              <button class="btn btn-outline btn-error btn-rejected">REJECTED</button>
            </div>
          </div>
          <div>
            <button class="btn btn-soft">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
  }
  filteredSection.appendChild(div);
}
