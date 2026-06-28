function calculateBill(productName,price,quantity,platformFees = 10){
    let totalPrice;
    totalPrice = price * quantity + platformFees;
    return totalPrice;
}


let total = calculateBill("Phone",18000,3);

console.log(`Total Price is ${total}`);

function calculateTotalMarks(maths,science,social){
    let totlMarks;
    let averageMarks;
    totlMarks = maths + science + social;
    averageMarks = total / 3;
    return (totlMarks,averageMarks);
}

let {totalMarks,averageMarks} = calculateTotalMarks(85,70,90);

console.log(`Total Marks ${totalMarks} and Average Marks ${averageMarks}`);