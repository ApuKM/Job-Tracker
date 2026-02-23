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
// console.log(cardsElement.children);

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

}
