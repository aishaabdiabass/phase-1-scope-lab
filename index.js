// Declare and manipulate globals as required by the scope lab
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

const leastFavoriteCustomer = 'billy';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'chris';
}
