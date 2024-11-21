let totalBuy = 0;
let totalSell = 0;

function addTransaction() {

    let item = document.getElementById("item").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let transactionType = document.getElementById("transactionType").value;

    // check the input amount and description fullfilled //

    if (!item || isNaN(amount)) {
        alert("please the valid Amount");
        return;
    }

    // Add div to HTML enter the Transaction //

    const log = document.getElementById("transactionLog");
    const transaction = document.createElement("div");
    transaction.classList.add("transaction");


    // show the transaction to buy and sell // 

    if (transactionType === "buy") {
        transaction.classList.add("expense");
        transaction.innerHTML = `${item}:  -${amount}`;
        totalBuy += amount;
    } else if (transactionType === "sell") {
        transaction.classList.add("income");
        transaction.innerHTML = `${item}:  +${amount}`;
        totalSell += amount;
    }

    // Transaction add to display // 

    log.appendChild(transaction);

    // clear the input //

    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
}

// Show thw total transaction // 

function showTotal() {
    const totalSummary = document.getElementById("totalSummary")
    totalSummary.innerHTML = `
    Total Buy : -${totalBuy}<br>
    Total Sell : +${totalSell}
    `;
}




