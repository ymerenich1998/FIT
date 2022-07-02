const specialtys = {};
specialtys.IPZ = {};
specialtys.KN = {};
specialtys.IST = {};
specialtys.IPZ.name = '121 Інженерія програмного забезпечення';
specialtys.IPZ.desc = '<p>У списку найбільш прибуткових і потрібних професій, які популярні сьогодні і будуть популярними протягом наступних років, одне з перших місць посідає інженер-програміст.</p><p>Випускники освітньо-професійної програми «Інженерія програмного забезпечення» працюють на посадах, які на сьогодні є найбільш високооплачуваними:</p><ul><li>програміст;</li><li>тестувальник програмного забезпечення;</li><li>розробник баз даних;</li><li>менеджер проєктів;</li><li>архітектор проєктів;</li><li>системний адміністратор.</li></ul><p>Освітньо-професійна програма «Інженерія програмного забезпечення» охоплює всі аспекти розробки програмного забезпечення від початкових стадій створення специфікації до підтримки системи після здачі в експлуатацію.</p><p>В процесі навчання вивчаються мови програмування та технології розробки віконних і мобільних додатків, веб-сайтів, загальна теорія проєктування, конструювання та моделювання програмного забезпечення, управління проєктами з розробки програмних систем, принципи та підходи до тестування програмних продуктів тощо.</p>';
specialtys.KN.name = "122 Комп'ютерні науки";
specialtys.KN.desc = '<p><strong>Комп’ютерні науки (англ. Computer Science)</strong> – сукупність теоретичних та практичних знань, які використовують у своїй роботі фахівці в області обчислювальної техніки, програмування, інформаційних систем і технологій. Дана спеціальність є такою, що відповідає світовим стандартам, адже за кордоном традиційною освітньою програмою підготовки фахівців-програмістів є саме бакалаврат з комп’ютерних наук.</p><p>Випускники спеціальності «Комп’ютерні науки» можуть працювати на посадах, які на сьогодні є найбільш високооплачуваними:</p><ul><li>Web-дизайнер;</li><li>дизайнер інтерфейсів програмного забезпечення;</li><li>розробник ігрових додатків;</li><li>розробник мобільних додатків;</li><li>інженер-програміст;</li><li>Web-програміст;</li><li>розробник/адміністратор баз даних;</li><li>тестувальник програмного забезпечення.</li></ul><p>Навчальна програма спеціальності спрямована на підготовку інженерних/наукових кадрів, отримання ними практичних та теоретичних навичок створення і вдосконалення програмного забезпечення, інформаційних технологій візуалізації даних та моделювання.</p><p>Найбільш підготовлені студенти, мають можливість працювати за фахом, починаючи вже з другого курсу.</p>';
specialtys.IST.name = "126 Інформаційні системи та технології";
specialtys.IST.desc = '<p>Основною метою спеціальності «Інформаційні системи і технології» є розробка та адміністрування складних ІТ-інфраструктурних рішень із використанням технологій Big Data, Data Science, Cloud computing, Artificial Intelligence. Багато часу в програмі приділено вивченню архітектури розподілених та хмарних інформаційних систем із використанням технологій машинного навчання та штучного інтелекту.</p><p>Випускники спеціальності «Інформаційні системи і технології» можуть працювати на посадах, які на сьогодні є найбільш високооплачуваними:</p><ul><li>бізнес-аналітик;</li><li>системний аналітик;</li><li>інженер з даних;</li><li>розробник баз даних;</li><li>веб-розробник;</li><li>прикладний програміст;</li><li>проектувальник хмари;</li><li>адміністратор баз даних;</li><li>системний адміністратор, мережний адміністратор, адміністратор хмари;</li><li>професіонал з інформаційних технологій;</li><li>технічний директор;</li><li>начальник ІТ-відділу;</li></ul><p>Підготовка бакалаврів за спеціальністю «Інформаційні системи та технології» триває 4 роки. На старших курсах гнучкий розклад адаптується під робочий графік студентів (адже в умовах дефіциту спеціалістів такого профіля, студенти починають працювати за фахом на старших курсах). Виробнича та переддипломна практика проходить виключно у провідних ІТ-компаніях Ужгорода.</p><p>У процесі навчання студенти вивчають засоби та технології розробки web-орієнтованих систем, архітектуру та технології побудови інформаційних систем у локальних, гібридних та хмарних середовищах, технології віртуалізації та хмарні обчислення, підходи, засоби та технології адміністрування та захисту систем та мереж, баз та сховищ даних. Окрім того, студенти вивчають мови веб-розробки та технології машинного навчання та штучного інтелекту, системи підтримки прийняття рішень, BigData та інтелектуальний аналіз даних, технології бухгалтерського обліку, бюджетування, економічний аналіз, інформаційні системи і технології фінансового аналізу, бізнес-аналізу фінансових операцій, управління підприємствами.</p>';


document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    focus  : 'left',
    autoWidth: true,
    pagination: false,
    arrows: false,
    drag: false,
    breakpoints: {
      992: {
        perPage: 1,
        drag: true,
      },
      1200: {
        perPage: 2,
        drag: true,
      },
    }

    
  } );
  splide.mount();

  const exampleModal = document.getElementById('exampleModal')
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const specialityName = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('#specialtyName')
    const modalBodyInput = exampleModal.querySelector('#specialtyDesc')

    modalTitle.textContent = specialtys[specialityName].name;
    modalBodyInput.innerHTML = specialtys[specialityName].desc;

  })

} );