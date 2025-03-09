const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// PAYE tax brackets
const PAYE_BRACKETS = [
    { upper: 24000, rate: 0.10 },
    { upper: 32333, rate: 0.25 },
    { upper: 500000, rate: 0.30 },
    { upper: 800000, rate: 0.325 },
    { upper: Infinity, rate: 0.35 }
];

const PERSONAL_RELIEF = 2400;
const SHIF_RATE = 0.0275;
const HOUSING_LEVY_RATE = 0.015;

// Function to calculate PAYE (Tax)
function calculatePAYE(taxableIncome) {
    let tax = 0;
    let remainingIncome = taxableIncome;

    for (let bracket of PAYE_BRACKETS) {
        if (remainingIncome > 0) {
            let taxableAtThisRate = Math.min(remainingIncome, bracket.upper);
            tax += taxableAtThisRate * bracket.rate;
            remainingIncome -= taxableAtThisRate;
        } else {
            break;
        }
    }

    // Apply Personal Relief
    tax = Math.max(0, tax - PERSONAL_RELIEF);
    return tax;
}

// Function to calculate NSSF Contributions
function calculateNSSF(grossSalary) {
    let tier1 = Math.min(grossSalary, 8000) * 0.06;  // Tier I (6%)
    let tier2 = grossSalary > 8000 ? (Math.min(grossSalary, 72000) - 8000) * 0.06 : 0;  // Tier II (6%)
    return tier1 + tier2;
}

// Main Function
function netSalaryCalculator() {
    rl.question("Enter Basic Salary (Ksh): ", (basicInput) => {
        rl.question("Enter Benefits (Ksh): ", (benefitsInput) => {
            let basicSalary = parseFloat(basicInput);
            let benefits = parseFloat(benefitsInput);
            
            if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
                console.log("Invalid input. Please enter positive numbers.");
                rl.close();
                return;
            }

            let grossSalary = basicSalary + benefits;
            let nssfDeduction = calculateNSSF(grossSalary);
            let taxableIncome = grossSalary - nssfDeduction;
            let payeTax = calculatePAYE(taxableIncome);
            let shifDeduction = grossSalary * SHIF_RATE;
            let housingLevy = grossSalary * HOUSING_LEVY_RATE;

            let netSalary = grossSalary - (payeTax + nssfDeduction + shifDeduction + housingLevy);

            console.log("\n==== Salary Breakdown ====");
            console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
            console.log(`PAYE (Tax): Ksh ${payeTax.toFixed(2)}`);
            console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
            console.log(`SHIF Deduction: Ksh ${shifDeduction.toFixed(2)}`);
            console.log(`Housing Levy: Ksh ${housingLevy.toFixed(2)}`);
            console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
            
            rl.close();
        });
    });
}

// Run the program
netSalaryCalculator();
