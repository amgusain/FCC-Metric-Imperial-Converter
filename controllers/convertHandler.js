/*
*
*
*       Complete the handler logic below
*       
*       
*/
const regexUnit =/\D+$/;

function ConvertHandler() {
  
  this.getNum = function(input) {
    const unitIndex = input.search(regexUnit);
    if(unitIndex == 0 ){
      return 1;
    }
    if(unitIndex > 0 ){
      const num = input.substring(0, unitIndex);
      if(num.search("/")>0){
        const numerator = num.substring(0, num.search("/"));
        const denominator = num.substring(num.search("/") + 1);
        if(Number(numerator) && Number(denominator)){
          return Number(numerator)/Number(denominator);
        }
      } else if(Number(num)){
                
        return Number(num);
      }
    }
    return null;
  };
  
  this.getUnit = function(input) {
    return input.search(regexUnit) > -1 ? input.substring(input.search(regexUnit)) : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit.toLowerCase())
    {
      case "l":
        return "gal";
      case "gal":
        return "l";
      case "kg":
        return "lbs";
      case "lbs":
        return "kg";
      case "km":
        return "mi";
      case "mi":
        return "km";
      default:
        return null;
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit.toLowerCase())
    {
      case "l":
        return "liters";
      case "gal":
        return "gallons";
      case "kg":
        return "kilograms";
      case "lbs":
        return "lbs";
      case "km":
        return "kilometers";
      case "mi":
        return "miles";
      default:
        return null;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    if(!initNum || !this.spellOutUnit(initUnit)) {
      return null;
    }
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase())
    {
      case "l":
        return initNum/galToL;
      case "gal":
        return initNum * galToL;
      case "kg":
        return initNum/lbsToKg;
      case "lbs":
        return initNum * lbsToKg;
      case "km":
        return initNum/miToKm;
      case "mi":
        return initNum * miToKm;
      default:
        throw "Invalid Unit";
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if(initNum === null && this.spellOutUnit(initUnit) === null) {
      return "invalid number and unit";
    } else if (initNum === null) {
      return "invalid number";
    } else if (this.spellOutUnit(initUnit) === null) {
      return "invalid unit";
    }
    return {
      initNum: initNum, 
      initUnit: initUnit, 
      returnNum: returnNum, 
      returnUnit: returnUnit,
      string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
  };
  
}

module.exports = ConvertHandler;
