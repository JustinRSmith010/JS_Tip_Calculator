//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billAmount").value;
  var servQual = document.getElementById("servQual").value;
  var numOfPeople = document.getElementById("howMany").value;

  //validate input
  if (billAmt === "" || servQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var tipAmt = (billAmt * servQual);
  //round to two decimal places
  tipAmt = Math.round(tipAmt * 100) / 100;
  //two digits after decimal point
  tipAmt = tipAmt.toFixed(2);

  //calculate total
  var totalTip = Number(tipAmt)+Number(billAmt);
  totalTip = Math.round(totalTip * 100) / 100;
  totalTip = totalTip.toFixed(2);


  //split tip
  var splitTip = (billAmt * servQual) / numOfPeople;
  splitTip = Math.round(splitTip * 100) / 100;
  splitTip = splitTip.toFixed(2);



  //Display the tip
  document.getElementById("tipAmount").style.display = "block";
  document.getElementById("tipAmount").innerHTML = "Tip Ammount = $" + tipAmt;
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("totalTip").innerHTML = "Total + Tip = $" + totalTip;
  document.getElementById("each").innerHTML = "Split Tip = $" + splitTip + "each";

}

//Hide the tip amount on load
document.getElementById("tipAmount").style.display = "none";
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};