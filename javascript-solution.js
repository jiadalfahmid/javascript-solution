// Calculate money for ZOO

function calculateMoney(soldTicket) {
  if (soldTicket < 0) {
    return "Invalid Number";
  }
  let income = soldTicket * 120 - (500 + 8 * 50);
  return income;
}

// Good Name Bad Name.

function checkName(name) {
  let goodNameLastL = "ayieouw";
  for (const letter of goodNameLastL) {
    if (typeof name === "string" && name.slice(-1) === letter) {
      return "Good name";
    }
  }
  return "Bad name";
}

// Virus in my Array

function deleteInvalids(array) {
  let numArray = [];
  if (Array.isArray(array)) {
    for (let arr of array) {
      if (typeof arr === "number" && !isNaN(arr)) {
        numArray.push(arr);
      }
    }
    return numArray;
  }
  return "Invalid Array";
}

// Make A Great Password

function password(obj) {
  if (
    typeof obj === "object" &&
    typeof obj.siteName === "string" &&
    typeof obj.name === "string" &&
    typeof obj.birthYear === "number" &&
    obj.birthYear.toString().length === 4
  ) {
    const password = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
    return password;
  }
  return "invalid";
}

// Monthly Saving Calculator

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && typeof livingCost === "number") {
    let sum = 0;
    for (let earn of arr) {
      if (earn >= 3000) {
        earn = earn - earn * 0.2;
      }
      sum += earn;
    }
    if (sum < livingCost) {
      return "earn more";
    }
    return sum - livingCost;
  }
  return "invalid input";
}
