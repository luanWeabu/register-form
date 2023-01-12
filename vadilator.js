function Validator(options) {
  //luu lai cac rule selector
  var selectorRules = {};
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.classList.add("invalid:border-red-500");
    } else {
      errorElement.innerText = "";
      inputElement.classList.remove("invalid:border-red-500");
    }
  }

  var formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      //Luu lai cac rules cho moi input
      selectorRules[rule.selector] = rule.test;

      if (inputElement) {
        //xu ly truong hop blur khoi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        // prevent the end user to enter non-digit character
        if (rule.selector === "#phone-number") {
          inputElement.addEventListener("input", (e) => {
            // remove non-digit character from the phone number input
            const notNumberRegex = /\D/i;
            if (notNumberRegex.test(e.data)) {
              inputElement.value = inputElement.value.replace(e.data, "");
            }
          });
        }
        if (rule.selector === "#first-name") {
          inputElement.addEventListener("input", (e) => {
            const onlyText =
              /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/;
            if (!onlyText.test(e.data)) {
              inputElement.value = inputElement.value.replace(e.data, "");
            }
          });
        }
        if (rule.selector === "#last-name") {
          inputElement.addEventListener("input", (e) => {
            const onlyText =
              /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/;
            if (!onlyText.test(e.data)) {
              inputElement.value = inputElement.value.replace(e.data, "");
            }
          });
        }
        if (rule.selector === "#isPhone") {
          inputElement.addEventListener("input", (e) => {
            const min = 10;
             
          });
        }
        // xu ly moi khi nguoi dung input

        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.classList.remove("invalid:border-red-500");
        };
      }
    });
    console.log(selectorRules);
  }
}

//validator element
//validator first name
Validator.isFirstName = function (selector) {
  // truyen vao 1 tham so tu doi so la selector
  return {
    selector: selector,
    test: function (value) {
      var regaxSpecialChracter =
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\w|_]+$/;
      return regaxSpecialChracter.test(value)
        ? undefined
        : "Please, check your first name";
    },
  };
};

//validator lastname
Validator.isLastName = function (selector) {
  // truyen vao 1 tham so tu doi so la selector
  return {
    selector: selector,
    test: function (value) {
      var regaxSpecialChracter =
        /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
      return regaxSpecialChracter.test(value)
        ? undefined
        : "Please, check your first name";
    },
  };
};

//validator email
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regax = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regax.test(value) ? undefined : "Please, check your email";
    },
  };
};

//validator date of birth
Validator.isDateOfBirth = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : " ";
    },
  };
};

//validator phone
Validator.isPhone = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      // return value.trim() ? undefined : "Please, check your phone";
      const regaxPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      // console.log(value.match(regaxPhoneNumber));
      return value.match(regaxPhoneNumber) ? true : "Please, check your phone";
      // console.log(typeof value);
    },
  };
};

//validator male
Validator.isMale = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};

//validator female
Validator.isFemale = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};

//validator address
Validator.isAddress = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Please, check your Address";
    },
  };
};

//validator password
Validator.isPassword = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : "Please enter at least 6 character";
    },
  };
};
//validator comfirm password
Validator.isConfirmPassword = function (selector, getConfirmValue) {
  return {
    selector: selector,
    test: function (value) {
      // return value.trim() ? undefined : "Please, check your password";
      return value === getConfirmValue()
        ? undefined
        : "Your password does not match";
    },
  };
};
