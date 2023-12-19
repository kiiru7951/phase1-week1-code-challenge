//User to input pay (monthly basic salary) & deductions (benefits)

// Calculates gross salary i.e Basic salary plus reliefs
let pay

let perRel
let insRel
let pensCon
let hospCon
let housRel
let owOccInt
let disEx
let reliefs = (perRel + insRel + pensCon + hospCon + housRel + owOccInt + disEx)

let grossSalary =  pay + reliefs



// Calculates total deductions i.e NHIF, NSSF and House Levy
let nhif 
function nhifDed(grossSalary){
    let deduction
    if (grossSalary > 0 && grossSalary <= 5999){
        deduction = 150
    } else if (grossSalary > 5999 && grossSalary <= 7999){
        deduction = 300
    } else if (grossSalary > 7999 && grossSalary <= 11999){
        deduction = 400
    } else if (grossSalary > 11999 && grossSalary <= 14999){
        deduction = 500
    } else if (grossSalary > 14999 && grossSalary <= 19999){
        deduction = 600
    } else if (grossSalary > 19999 && grossSalary <= 25999){
        deduction = 750
    } else if (grossSalary > 24999 && grossSalary <= 29999){
        deduction = 850
    } else if (grossSalary > 29999 && grossSalary <= 34999){
        deduction = 900
    } else if (grossSalary > 34999 && grossSalary <= 39999){
        deduction = 950
    } else if (grossSalary > 39999 && grossSalary <= 44999){
        deduction = 1000
    } else if (grossSalary > 44999 && grossSalary <= 49999){
        deduction = 1100
    } else if (grossSalary > 49999 && grossSalary <= 59999){
        deduction = 1200
    } else if (grossSalary > 59999 && grossSalary <= 69999){
        deduction = 1300
    } else if (grossSalary > 69999 && grossSalary <= 79999){
        deduction = 1400
    } else if (grossSalary > 79999 && grossSalary <= 89999){
        deduction = 1500
    } else if (grossSalary > 89999 && grossSalary <= 99999){
        deduction = 1600
    } else if (grossSalary > 99999 ){
        deduction = 1700
    }  else if (grossSalary <= 0 ){
        deduction = 0
    }
    return deduction
}
nhif = nhifDed(grossSalary)
/* nhif = nhifDed.deduction ? */

let nssf 
function nssfDed(grossSalary){
    let deduction = ((12/100) * grossSalary)

    // Tier 1 limit
    const tier1Limit = 6000
    deduction = Math.min(deduction, tier1Limit)
    // Tier 2 limit
    const tier2LimitLow = 6000
    const tier2LimitUpp = 18000
    deduction = Math.min(deduction, tier2LimitUpp - tier2LimitLow)
    return deduction
}  

let houseLevy = ((1.5/100) * grossSalary)

let deductions = (nssf + nhif + houseLevy)



// Calcuates net salary i.e gross salary minus all deductions and PAYE
let paye
function paye23(){
    let tax = function(pay){
        let taxPay = pay - reliefs
        //pay = basic salary taxPay - Monthly Taxable Pay (Ksh) , taxRate - Rate of Tax (%)
        if (taxPay > 0 && taxPay <= 24000){
            taxRate = 10.0
        } else if (taxPay > 24000 && taxPay <= 32333){
            taxRate = 25.0
        } else if (taxPay > 32333 && taxPay <= 500000){
            taxRate = 30.0
        } else if (taxPay > 500000 && taxPay <= 800000){
            taxRate = 32.5
        } else if (taxPay > 800000){
            taxRate = 35.0
        } else if (taxPay <= 0){
            taxRate = 0
        }
        let tax = (taxRate/100) * pay
        return tax
    }
}
paye = paye23(pay)
let netSalary = grossSalary - (deductions + paye)