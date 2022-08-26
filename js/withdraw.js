// console.log('withdraw clicked this ammount')
// add event handler withdraw button

// step ----> 1

document.getElementById('btn-withdraw').addEventListener('click', function(){

    console.log('withdrw clicked');
    // get the withdraw ammount from the withdraw input field
    // step----> 2

    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmonutString = withdrawField.value;

    const newWithDrawAmonut = parseFloat(newWithDrawAmonutString);
    //console.log(newWithDrawAmonut)

    // step --->3 : get previous withdraw
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step ---> 4: calculate total withdraw ammount 

    const currrentWithdrawTotal =  previousWithdrawTotal + newWithDrawAmonut;


    // step ---> 4: set total withdraw ammount 

    withdrawtotalElement.innerText = currrentWithdrawTotal;

    // step --> 5: get the previous total balance

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step --->6 : Calculate new Balance total + set the new balance 

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmonut;
    balanceTotalElement.innerText = newBalanceTotal;


    // step --->7 : clear the value

    withdrawField.value = '';

})