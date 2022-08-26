// console.log('deposit.js')

// step ----> 1: add event listener the deposit button 

document.getElementById('btn-deposit').addEventListener('click', function(){

    // console.log('Enter a taka : ', 120)
    // step ----> 2: get the deposit ammount of input text field
    // input field use the value inside the input field
    const depositField = document.getElementById('deposit-field');

    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmmount);
    // step----> 3: Get deposit total account 
    
    const depositTotalElemnt = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElemnt.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    // console.log(typeof previousdepositTotal);

    // step---->4: Add number to set the deposit total  

    const currrentDepositTotal = previousdepositTotal + newDepositAmount;

    depositTotalElemnt.innerText = currrentDepositTotal;

    // step --->5 : Get balance current Total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal  = parseFloat(previousBalanceTotalString);
  

    // step ---> 6 Calculate current total balance
    const currrentBalanceTotal = previousBalanceTotal + newDepositAmount;

      // set the balance total 
      balanceTotalElement.innerText = currrentBalanceTotal;




    // step ---> 7: clear the depositFields

    depositField.value = '';


})