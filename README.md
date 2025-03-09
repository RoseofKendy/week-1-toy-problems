JAVASCRIPT TOY PROBLEMS

This repository contains JavaScript solutions to the following challenges, including:
1. Student Grade Generator
2. Speed Detector
3. Net Salary Calculator
4. Bubble Sort
5. Staircase Problem
6. Cylinder Volume Calculation

GETTING STARTED
Ensure you have Node.js installed to run these JavaScript programs. You can install it from [nodejs.org](https://nodejs.org/).

RUNNING THE CODE
1. Clone this repository:
   "git clone <repo-url>"
2. Navigate into the project folder:
   "cd <repo-folder>"
3. Run a specific file using Node.js:
   "node <filename>.js"


Problem Descriptions and Solutions

1️⃣ Student Grade Generator
File: `studentGradeGenerator.js`

Description
- Prompts the user to input student marks (0 - 100).
- Determines the grade based on the following criteria:
  - A: 80 - 100
  - B: 60 - 79
  - C: 50 - 59
  - D: 40 - 49
  - E: Below 40

To execute: node studentGradeGenerator.js


2️⃣ Speed Detector
File: `speedDetector.js`

Description
- Takes the car speed as input.
- If speed is ≤ 70, prints "Ok".
- If above 70, calculates demerit points: 1 point for every 5 km/h over 70.
- If points exceed 12, prints "License suspended".

To execute: node speedDetector.js


3️⃣ Net Salary Calculator
File: `netSalaryCalculator.js`

Description
- Takes basic salary and benefits as input.
- Computes:
  - PAYE (Tax) based on KRA tax brackets.
  - NHIF deductions (2.75% of gross salary).
  - NSSF contributions.
  - Affordable Housing Levy (1.5%).
  - Gross and Net Salary.

To execute: node netSalaryCalculator.js


4️⃣ Bubble Sort Algorithm
File: `bubbleSort.js`

Description
- Takes an array of numbers.
- Uses the Bubble Sort algorithm to sort the numbers in ascending order.

To execute: node bubbleSort.js


5️⃣ Staircase Problem
File: `staircase.js`

Description
- Takes an integer `n` as input.
- Prints a staircase of `n` levels using `#`.

Example for `n = 4`:
   #
  ##
 ###
####

To execute: node staircase.js


6️⃣ Cylinder Volume Calculation
File:`cylinderVolume.js`

Description
- Uses object-oriented programming to calculate the Volume of a Cylinder.
- Formula: `V = π * r^2 * h`

To execute: node cylinderVolume.js