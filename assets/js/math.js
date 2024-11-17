const formEl = document.querySelector("#adding-points")
const phoneEl = document.querySelector("#inputPhone")
const spendEl = document.querySelector("#inputTotal")
const pointsEl = document.querySelector("#inputPoints")
const totalPointsEl = document.querySelector("#totalPoints")


const storeCustomerDetails = (customerData) => {
    const savedCusotmerDetails = JSON.parse(localStorage.getItem("customerDetails")) || []  
    let existingCusotmer = false
    console.log(savedCusotmerDetails,customerData)
    for(let i=0;i<savedCusotmerDetails.length;i++){
        if(savedCusotmerDetails[i].phone == customerData.phone){
            savedCusotmerDetails[i].totalPoints += customerData.points
            existingCusotmer = true
            totalPointsEl.innerText = savedCusotmerDetails[i].totalPoints
        }
    }
    if(!existingCusotmer){
        totalPointsEl.innerText = customerData.points
        savedCusotmerDetails.push({
            phone:customerData.phone,
            totalPoints:customerData.points
        })
    }
    localStorage.setItem("customerDetails",JSON.stringify(savedCusotmerDetails))
    setTimeout(function(){

        phoneEl.value = ""
        spendEl.value = ""
        pointsEl.value = ""
        totalPointsEl.value = ""
    },3000)
}

const calculatePoints = (event) => {
    event.preventDefault()
    const phone = parseInt(phoneEl.value)
    const spend = parseInt(spendEl.value)
    //const points = spend * Math.floor(Math.random() * 1)
    const points = Math.floor(spend * 1)
    pointsEl.value = points
    storeCustomerDetails({phone,points})
}


formEl.addEventListener("submit", calculatePoints)