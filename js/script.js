window.addEventListener('DOMContentLoaded', () => {

  // document.getElementById('pageup').addEventListener('click', () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" }); // Магия с помощью одной кнопки!
  // });
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontents'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
     
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});

// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.menu'),
//     closeElem = document.querySelector('.menu__close');

//     hamburger.addEventListener('click', () => {
//         menu.classList.add('active');
//     });

//     closeElem.addEventListener('click', () => {
//         menu.classList.remove('active');
//     })

//     const counters = document.querySelectorAll('.skills__ratings-counter'),
//             lines = document.querySelectorAll('.skills__ratings-line');

//     counters.forEach((item,i) => {
//         lines[i].style.width = item.innerHTML;
//     });

// document.addEventListener('DOMContentLoaded',function() {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();

//     // let error = formValidate(form);
    
//     let formData = new FormData(form);
  
//     let response = await fetch('sendmail.php', {
//       method: 'POST',
//       body: formData
//     });
//   }
// })

// const form = document.forms["form"];
// const formArr = Array.from(form);
// const validFormArr = [];
// const button = form.elements["button"];

// formArr.forEach((el) => {
//     if (el.hasAttribute("data-reg")) {
//       el.setAttribute("is-valid", "0");
//       validFormArr.push(el);
//     }
//   });
  
//   form.addEventListener("input", inputHandler);
//   form.addEventListener("submit", formCheck); // обработка кнопки "Отправить"
  
//   function inputHandler({ target }) {
//     if (target.hasAttribute("data-reg")) {
//       inputCheck(target);
//     }
//   }
  
//   function inputCheck(el) {
//     const inputValue = el.value;
//     const inputReg = el.getAttribute("data-reg");
//     const reg = new RegExp(inputReg);
//     if (reg.test(inputValue)) {
//       el.setAttribute("is-valid", "1");
//       el.style.border = "2px solid rgb(0, 196, 0)";
//     } else {
//       el.setAttribute("is-valid", "0");
//       el.style.border = "2px solid rgb(255, 0, 0)";
//     }
//   }
  
//   // Здесь проверяем, можно ли отправить форму
//   function formCheck(e) {
//     e.preventDefault(); // блокируем input
//     const allValid = []; // создаем массив валидных значений
//     validFormArr.forEach((el) => {
//       allValid.push(el.getAttribute("is-valid")); // проверяем каждое поле
//     });
//     const isAllValid = allValid.reduce((acc, current) => {
//       // проверяем, чтобы все было правильно
//       return acc && current;
//     });
//     if (!Boolean(Number(isAllValid))) {
//       alert("Заполните поля правильно!"); // если не правильно - сообщение пользователю
//       return;
//     }
//     formSubmit(); // если правильно - отправляем данные
// };

// async function formSubmit() {
//     const data = serializeForm(form); // получаем данные формы
//     const response = await sendData(data); // отправляем данные на почту
//     if (response.ok) {
//       let result = await response.json(); // если ответ OK отвечает пользователю
//       alert(result.message); // .. что данные отправлены
//       formReset(); // сбрасываем поля формы
//     } else {
//       alert("Код ошибки: " + response.status); // если not OK - показываем код ошибки
//     }
//   }
  
//   function serializeForm(formNode) {
//     // формируем данные формы
//     return new FormData(form);
//   }
  
//   async function sendData(data) {
//     return await fetch("sendmail.php", {
//       // отправляем в скрипт sendmail.php
//       method: "POST", // методом POST
//       body: data,
//     });
//   }
  
//   function formReset() {
//     // сброс полей формы
//     form.reset();
//     validFormArr.forEach((el) => {
//       el.setAttribute("is-valid", 0);
//       el.style.border = "none";
//     });
// }