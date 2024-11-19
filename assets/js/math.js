const formEl = document.querySelector("#adding-points");
const phoneEl = document.querySelector("#inputPhone");
const spendEl = document.querySelector("#inputTotal");
const pointsEl = document.querySelector("#inputPoints");
const totalPointsEl = document.querySelector("#totalPoints");
const button = document.querySelector("#button");


const storeCustomerDetails = (customerData) => {
  const savedCustomerDetails =
    JSON.parse(localStorage.getItem("customerDetails")) || [];
  let existingCustomer = false;

  for (let i = 0; i < savedCustomerDetails.length; i++) {
    if (savedCustomerDetails[i].phone == customerData.phone) {
      savedCustomerDetails[i].totalPoints += customerData.points;
      existingCustomer = true;
      totalPointsEl.innerText = savedCustomerDetails[i].totalPoints;
    }
  }
  if (!existingCustomer) {
    totalPointsEl.innerText = customerData.points;
    savedCustomerDetails.push({
      phone: customerData.phone,
      totalPoints: customerData.points,
    });
  }
  localStorage.setItem("customerDetails", JSON.stringify(savedCustomerDetails));
  setTimeout(function () {
    button.disabled = true;
    phoneEl.value = "";
    spendEl.value = "";
    pointsEl.value = "";
    totalPointsEl.value = "";
  }, 3000);
};


const calculatePoints = (event) => {
  event.preventDefault();
  modal.style.display = "block";
  body.style.position = "static";
  body.style.height = "50%";
  body.style.overflow = "hidden";
  
  console.log("calculateonce")
  const phone = parseInt(phoneEl.value);
  const spend = parseInt(spendEl.value);
  //const points = spend * Math.floor(Math.random() * 1)
  const points = Math.floor(spend * 1);
  pointsEl.value = points;
  storeCustomerDetails({ phone, points });
};

const hasValue = (item) => {
  if (item.value) return true;
  return false;
};

const checkForm = () => {
  console.log("checkForm")
  if (hasValue(phoneEl) && hasValue(spendEl)) return (button.disabled = false);
};



formEl.addEventListener("submit", calculatePoints);
formEl.addEventListener("input", checkForm); 