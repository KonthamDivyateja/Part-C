function createWallet(){
    let balance=0;
    return{
        addMoney: function(amount){
            if(typeof amount==='number'&& amount>0){
                balance +=amount;
                console.log(`Added ${amount}.New balance is ${balance}`);
            }else{
                console.log("Invalid amount to add");
            }
        },
        checkBalance: function(){
            console.log(`Current balance is:${balance}`);
            return balance;
        }
    };
}
let myWallet=createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();