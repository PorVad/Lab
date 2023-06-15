function upperCase(str) {
    if (/^[A-Z]/.test(str)) {
      console.log("String starts with uppercase character");
    } else {
      console.log("String does not start with uppercase character");
    }
  }
  
  upperCase('regexp');
  upperCase('RegExp');

  function swapSubstrings(inputString) {
    return inputString.replace(/(.*)(\s+)(.*)/, "$3$2$1");
  }
  
  console.log(swapSubstrings("Java Script"));

  function validateCreditCardNumber(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
  }
  
  console.log(validateCreditCardNumber("9999-9999-9999-9999"));

  function checkEmail(email) {
    const regex = /^[A-Za-z0-9]+[A-Za-z0-9_-]*@[A-Za-z0-9_-]+\.[A-Za-z]{2,}$/;
    if (regex.test(email)) {
      console.log("Email is correct!");
    } else {
      console.log("Email is not correct!");
    }
  }
  
  checkEmail("my_mail@gmail.com");
  checkEmail("#my_mail@gmail.com");
  checkEmail("my_ma--il@gmail.com");

  function checkLogin(login) {
    const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numbers = login.match(/\d+(\.\d+)?/g) || [];
    console.log(regex.test(login));
    console.log(numbers);
  }
  
  checkLogin("ee1.1ret3");
  checkLogin("ee1*1ret3");
  