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

    if(id === "btn-interview"){
        allCardsSection.classList.add("hidden");
        filteredSection.classList.remove("hidden");
    }
}

mainElement.addEventListener("click", (e) => {
    // console.log(e.target)
    if(e.target.classList.contains("btn-interview")){
        const parentNode = e.target.parentNode.parentNode;
        // console.log(parentNode)
        const company = parentNode.querySelector(".company").innerText;
        const jobType = parentNode.querySelector(".job-type").innerText;
        const remoteOrFulltime = parentNode.querySelector(".remote-full").innerText;
        // const applyStatus = parentNode.querySelector(".apply-status").innerText;
        const description = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".remote-full").innerText = "Interview";

        const cardInfo = {
            company,
            jobType,
            remoteOrFulltime,
            applyStatus: "Interview",
            description,
        }

        const exist = interviewList.find((item) => item.company === cardInfo.company);
        if(!exist){
            interviewList.push(cardInfo);
        }

    }else if(e.target.classList.contains("btn-rejected")){
         const parentNode = e.target.parentNode.parentNode;
        // console.log(parentNode)
        const company = parentNode.querySelector(".company").innerText;
        const jobType = parentNode.querySelector(".job-type").innerText;
        const remoteOrFulltime = parentNode.querySelector(".remote-full").innerText;
        // const applyStatus = parentNode.querySelector(".apply-status").innerText;
        const description = parentNode.querySelector(".description").innerText;

        parentNode.querySelector(".remote-full").innerText = "Rejected";

        const cardInfo = {
            company,
            jobType,
            remoteOrFulltime,
            applyStatus: "Rejected",
            description,
        }

        const exist = rejectedList.find((item) => item.company === cardInfo.company);
        if(!exist){
            rejectedList.push(cardInfo);
        }
    }
})
