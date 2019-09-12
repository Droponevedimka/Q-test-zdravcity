
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

var mas_items = [0,0,0,0,0,0,0,0];
    mas_go = 0;
    gameItemsCount = 0;
    nehVatt = []; 
    dataContent_4 = [
    "Вертигохель",
    "Вермокс",
    "Парацетомол",
    "Нимесил",
    "Пантенол",
    "Сульфацил натрия",
    "Стерильный пластырь",
    "Амоксиклав",
    "Афобазол",
    "Имодиум"
    ];
    dataContent_3 = [
        "Ксилин",
        "Фенкарол",
        "Но-шпа",
        "Валидол",
        "Санитель",
        "Отинум",
        "Драмин",
        "Мирамистин",
        "Мукалтин",
        "ТераФлю"
        ];
        dataContent_2 = [
            "Зеленку",
            "Септолете",
            "Стерильный бинт",
            "Активированный уголь",
            "Смекту",
            "Тавегил",
            "Gardex",
            "Перекись водорода",
            "Зиртек",
            "Незулин"
            ];
            dataContent_1 = [
                "Кетанов",
                "Спасатель",
                "Артроцин гель",
                "Энтеросгель",
                "Финистил гель",
                "Софрадекс",
                "Коартем",
                "Доксициклин",
                "Нашатырный спирт",
                "Регидрон"
                ];
    modalLeft = document.getElementById('modal-main-left');

    
    function howPercent(masAll, masItem){
        let Percent = 0;
        let k = true;
        let index = 0;

        for(let i of masItem){
            k=true;
            for(let j of masAll){
                if(i==j) {Percent++; k=false;}                
            }
            if(k){nehVatt[index] = i-1; index++;}            
        }
        
        return Percent+2;
    }

document.addEventListener('DOMContentLoaded', function() {
      
        /* Записываем в переменные массив элементов-кнопок и подложку.
            Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
        var modalButtons = document.querySelectorAll('.js-open-modal'),
            overlay      = document.querySelector('.js-overlay-modal'),
            closeButtons = document.querySelectorAll('.js-modal-close');
            gameItems = document.querySelectorAll('.modal-img');
                   
        gameItems.forEach(function(item){
            item.addEventListener('click', function(e){
                e.preventDefault();
                if (gameItemsCount === 0){
                    document.getElementById('remove-btn').style.display = "block";
                }

                if (mas_items.length > gameItemsCount){
                    mas_items[gameItemsCount] = e.target.id;
                    e.target.style.display = 'none';                    
                   
                    gameItemsCount++;
                    
                        document.getElementById('matrix-img-'+gameItemsCount).innerHTML = '<img class="matrix-img-'+e.target.id+'" src="img/game/med-' + e.target.id + '.png"/>';
                    
                }
                
                if(gameItemsCount === 8){
                    document.getElementById('moda-btn').style.display = 'block';
                }                
            });
        });

        
        document.querySelector('.remove-btn').addEventListener('click', function(e){
                e.preventDefault();
                if(gameItemsCount === 1){
                    document.getElementById('remove-btn').style.display = "none";
                } 
                if (mas_items.length > 0){                    
                    let request =  document.getElementById(mas_items[gameItemsCount-1]);                               
                    request.style.display = 'initial';
                    mas_items[gameItemsCount-1] = 0;                    
                    document.getElementById('matrix-img-'+gameItemsCount).innerHTML = '';
                    gameItemsCount--;
                }
                if (gameItemsCount === 7) {
                    document.getElementById('moda-btn').style.display = 'none';
                }         
                console.log(mas_items);     
            });
        


        /* Перебираем массив кнопок */
        modalButtons.forEach(function(item){

            /* Назначаем каждой кнопке обработчик клика */
            item.addEventListener('click', function(e) {
                var put1 = document.getElementById("put1");
                var put2 = document.getElementById("put2");
               
                if(put1.value === "" || put2.value === ""){
                    alert('Выберите место отправления и с кем отправитесь !');
                }
                else{                        
                /* Предотвращаем стандартное действие элемента. Так как кнопку разные
                    люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
                    Нужно подстраховаться. */
                e.preventDefault();

                /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
                    и будем искать модальное окно с таким же атрибутом. */
                var modalId = this.getAttribute('data-modal'),
                    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
                    if (modalId == 1){    
                                            
                        switch(put1.value){  
                                                   
                            case '1':
                                for(i=0;i<10;i++){ $(`.modal-img-${i+1}`).attr('data-tooltip', dataContent_1[i]);}                                
                            break;
                            case '2':
                                for(i=0;i<10;i++){ $(`.modal-img-${i+1}`).attr('data-tooltip', dataContent_2[i]);}     
                            break;
                            case '3':
                                for(i=0;i<10;i++){ $(`.modal-img-${i+1}`).attr('data-tooltip', dataContent_3[i]);}     
                            break;
                            case '4':
                                for(i=0;i<10;i++){ $(`.modal-img-${i+1}`).attr('data-tooltip', dataContent_4[i]);}     
                            break;
                        }                            
                       
                    }
                    
                    if (modalId == 2){
                        let proc = 0;   
                        
                        console.log(put1.value);                   
                        switch (put1.value){
                            case '1':
                                    console.log(put1.value);
                                    console.log(nehVatt);
                                    proc = howPercent(mas_items,[2,3,5,6,7,8,9,10]);                                     
                                    nehVatt[2] = dataContent_1[nehVatt[0]];
                                    nehVatt[3] = dataContent_1[nehVatt[1]];                                 
                                break;
                            case '2':
                                    proc = howPercent(mas_items,[2,3,4,5,6,7,8,10]);  
                                    nehVatt[2] = dataContent_2[nehVatt[0]];
                                    nehVatt[3] = dataContent_2[nehVatt[1]];                                 
                                break;
                            case '3':
                                    proc = howPercent(mas_items,[1,3,4,5,6,7,9,10]);
                                    nehVatt[2] = dataContent_3[nehVatt[0]];
                                    nehVatt[3] = dataContent_3[nehVatt[1]];                                         
                                break;
                            case '4':
                                    proc = howPercent(mas_items,[1,2,3,5,6,8,9,10]);
                                    nehVatt[2] = dataContent_4[nehVatt[0]];
                                    nehVatt[3] = dataContent_4[nehVatt[1]];                                        
                                break;
                        }
                        
                        document.getElementById('final-title').innerHTML = 'Поздравляем!<br> Вы готовы к путешествию <span>'+ put1.options[put1.selectedIndex].text + '</span> на ' + (proc*10) + '%';   
                        if(proc == 10){
                            document.getElementById('final-description').innerHTML = 'Вы действительно разбираетесь в лекарствах не хуже фармацевта. Необходимые препараты собраны.'; 
                        }
                        else if (proc == 9){ 
                            document.getElementById('final-description').innerHTML = `Похоже, вам удалось собрать почти все необходимое - для полной уверенности осталось захватить только <span class="final-text-bold">${nehVatt[2]}</span>.`; 
                        } else {
                            document.getElementById('final-description').innerHTML = `Похоже, вам удалось собрать почти все необходимое - для полной уверенности осталось захватить только <span class="final-text-bold">${nehVatt[2]}</span> и <span class="final-text-bold">${nehVatt[3]}</span>.`;
                        }
                                            
                    }

                /* После того как нашли нужное модальное окно, добавим классы
                    подложке и окну чтобы показать их. */
                modalElem.classList.add('active');
                overlay.classList.add('active');
                }
            }); // end click

        }); // end foreach


        closeButtons.forEach(function(item){

            item.addEventListener('click', function(e) {
                var parentModal = this.closest('.modal');

                parentModal.classList.remove('active');
                overlay.classList.remove('active');
            });

        }); // end foreach


            document.body.addEventListener('keyup', function (e) {
                var key = e.keyCode;

                if (key == 27) {

                    document.querySelector('.modal.active').classList.remove('active');
                    document.querySelector('.overlay').classList.remove('active');
                };
            }, false);


            overlay.addEventListener('click', function() {
                document.querySelector('.modal.active').classList.remove('active');
                this.classList.remove('active');
            });
         
}); // end ready


// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
  'use strict';
  $('#form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          alert('Сообщение отправлено');
          $('#form').trigger('reset'); // очистка формы
        } else {
          alert('Ошибка');
        }
      }
    });
  });
});

