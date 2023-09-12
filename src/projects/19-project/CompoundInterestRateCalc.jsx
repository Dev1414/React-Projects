import React from 'react'

function CompoundInterestRateCalc({ principleAmount, interestRate, years, monthlyContribution }) {

  const A = {
    p: principleAmount,
    r: interestRate/100,
    n: 12,
    t: years,
    PMT: monthlyContribution
  }


  return (
    <div>
       ${ A.PMT === null ? (A.p * Math.pow(1+ A.r / A.n, A.n * A.t).toFixed(2)) : 
       (
        A.p * Math.pow(1+ A.r / A.n, A.n * A.t) + 
        (A.PMT * (Math.pow(1 + A.r / A.n, A.n * A.t) -1)) / (A.r / A.n)
        ).toFixed(2)}
    </div>
  )
};

export default CompoundInterestRateCalc
