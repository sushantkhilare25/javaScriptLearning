let sbiBank = {
    bankName : "State Bank Of India",
    location : "Shirala",
    accountNo : 389326109878,
    IFSC : "SBI0000466",
    interestRate : "9.5%",
    showDetails : function(){
         console.log(sbiBank);
    }
}
let axisBank = {
    bankName : "Axis Bank",
    location : "Islampur",
    accountNo : 211554456986,
    IFSC : "Axs0000552",
    interestRate : "8.4%",
    showDetails : function(){
        console.log(axisBank);
   }
}
let hdfcBank = {
    bankName : "HDFC Bank",
    location : "Karad",
    accountNo : 457814456986,
    IFSC : "HDFC0000552",
    interestRate : "9.4%",
    showDetails : function(){
        console.log(hdfcBank);
   }
}
let yesBank = {
    bankName : "YES Bank",
    location : "kolhapur",
    accountNo : 425166456986,
    IFSC : "YES0000552",
    interestRate : "11%",
    showDetails : function(){
        console.log(yesBank);
   }
}

console.log(`======================================================`);
console.log(`1) SBI Bank details by invoking the function`);
sbiBank.showDetails();
console.log(`======================================================`);
console.log(`2) AXIS Bank details by invoking the function`);
axisBank.showDetails();
console.log(`======================================================`);
console.log(`3) HDFC Bank details by invoking the function`);
hdfcBank.showDetails();
console.log(`======================================================`);
console.log(`4) YES Bank details by invoking the function`);
yesBank.showDetails();
console.log(`======================================================`);