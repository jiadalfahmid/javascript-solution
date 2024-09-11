function calculateTax(income, expenses) {
  if (income >= 0 && expenses >= 0 && income >= expenses) {
    let profit = income - expenses;
    let tax = profit * 0.2;
    return tax;
  }
  return "Invalid Input";
}

function sendNotification(email) {
  if (
    typeof email === "string" &&
    email.includes("@") &&
    email.indexOf("@") !== 0 &&
    email.slice(-1) !== "@" &&
    email.split("@").length === 2
  ) {
    let user = email.split("@");
    let notification = user[0] + " sent you an email from " + user[1];
    return notification;
  }
  return "Invalid Email";
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  for (let char of name) {
    if (!isNaN(char)) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (
    typeof obj === "object" &&
    typeof obj.testScore === "number" &&
    typeof obj.schoolGrade === "number" &&
    typeof obj.isFFamily === "boolean" &&
    obj.testScore <= 50 &&
    obj.schoolGrade <= 30
  ) {
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
      finalScore += 20;
    }
    if (finalScore >= 80) {
      return true;
    }
    return false;
  }
  return "Invalid Input";
}

function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) &&
    typeof serialNumber === "number" &&
    serialNumber > waitingTimes.length
  ) {
    let totalTime = 0;
    for (let time of waitingTimes) {
      totalTime += time;
    }
    const averageTime = Math.round(totalTime / waitingTimes.length);
    const personToGo = serialNumber - waitingTimes.length - 1;
    const waitingTime = averageTime * personToGo;
    return waitingTime;
  }
  return "Invalid Input";
}
