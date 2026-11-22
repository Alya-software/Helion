// Store the selected schedule
var selectedPlan = "";

// Function 1: Select a schedule
function selectPlan(plan) {

    selectedPlan = plan;

    // Display the approval page
    document.getElementById("alternatives").style.display = "none";
    document.getElementById("approval").style.display = "block";

    // Update the schedule title
    document.getElementById("planTitle").innerHTML =
        plan + " Plan - Awaiting Approval";

    document.getElementById("selectedName").innerHTML = plan;

    // Show the correct schedule information
    if (plan == "Safest") {

        document.getElementById("selectedRisk").innerHTML = "Low - Medium";
        document.getElementById("selectedTime").innerHTML = "5:30 PM";
        document.getElementById("selectedWorkers").innerHTML = "12";
        document.getElementById("selectedRest").innerHTML = "4";

    }
    else if (plan == "Balanced") {

        document.getElementById("selectedRisk").innerHTML = "Medium";
        document.getElementById("selectedTime").innerHTML = "4:30 PM";
        document.getElementById("selectedWorkers").innerHTML = "14";
        document.getElementById("selectedRest").innerHTML = "3";

    }
    else {

        document.getElementById("selectedRisk").innerHTML = "Medium - High";
        document.getElementById("selectedTime").innerHTML = "3:45 PM";
        document.getElementById("selectedWorkers").innerHTML = "16";
        document.getElementById("selectedRest").innerHTML = "2";

    }

    // Reset approval when selecting a plan
    document.getElementById("approvalMessage").innerHTML = "";
    document.getElementById("approveButton").disabled = false;

}


// Function 2: Approve the schedule
function approveSchedule() {

    document.getElementById("planTitle").innerHTML =
        selectedPlan + " Plan - Approved";

    document.getElementById("approvalMessage").innerHTML =
        "The schedule has been approved successfully!";

    document.getElementById("approveButton").disabled = true;

}


// Function 3: Return to alternatives
function goBack() {

    document.getElementById("approval").style.display = "none";
    document.getElementById("alternatives").style.display = "block";

}
