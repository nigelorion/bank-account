function Account(accountName, initialDeposit, accountNumber, currentBalance) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
  this.accountNumber = accountNumber;
  this.currentBalance = currentBalance;
}

Account.prototype.currentBalance = function() {
  return this.currentBalance;
}

function Deposit(balance, depositAmount) {
  return balance + depositAmount;
}

function withdrawel(balance, witAmount) {
  return balance + depositAmount;
}

function accountNumberGen() {
  var num = Math.floor(Math.random() * 90000) + 100000;
  return num;
}



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userName = $("#user").val();
    var initialDeposit = parseInt($("#initial").val());

    var randomResult = accountNumberGen();

    var newAccount = new Account(userName, initialDeposit, randomResult);
    console.log(newAccount);
    // var movieTitle = $("#movie").val();
    // var movieTime = parseInt($("#time").val());
    // var age = parseInt($("#age").val());
    // var price = ticketPrice(movieTime, age);
    // var movieTimeText = $("#time option:selected").text();
    // var ageText = $("#age option:selected").text();
    //
    // var newTicket = new Ticket(movieTitle, movieTimeText, ageText, price);
    //
    // $("#ticketOutput").text(newTicket.userTicketInfo());
  });
});
