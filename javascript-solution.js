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

// 