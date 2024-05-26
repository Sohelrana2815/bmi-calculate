/**
 * Today we will create a BMI Calculator
 * --Steps are here---
 * 1. create some input field with label for weight and height you need to use ids
 * 2. you can take any type value like kg or lbs
 * 3. create 2 btn calculate bmi and clear use onClick(event handler)
 * 4. in js file do this
 * function , get values , calculate , output
 */
// 18.5 to 24.9, healthy
//  25.0 to 29.9 over weight
// 30.0 or higher, obese range.

function handleCalculateBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = weight / (height * height);

  document.getElementById("heading").innerHTML = "Your BMI is :";
  document.getElementById("bmi").innerHTML = bmi.toFixed(2);

  if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("message").innerHTML = "You are Healthy 😀";
  } else if (bmi < 18.5) {
    document.getElementById("message").innerHTML = "You are under weight 😒";
  } else if (bmi >= 25 && bmi < 29.9) {
    document.getElementById("message").innerHTML = "You are Over Weight 🥲 ";
  } else {
    document.getElementById("message").innerHTML = "You are Obese 😭 ";
  }
}
function handleInch() {
  let inch = document.getElementById("inch").value;
  let calculate = inch * 0.0254;
  document.getElementById("inch-meter").innerHTML = "Your height in meter is:";
  document.getElementById("calculate").innerHTML = calculate.toFixed(2);
  document.getElementById("meter").innerHTML = "  Meter";
}

function handleReload() {
  window.location.reload();
}
