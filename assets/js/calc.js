let initialFigures = document.querySelectorAll('[data-initial]');
let outcomeFigures = document.querySelectorAll('[data-outcome]');

let initialForms = document.querySelectorAll('[data-initial-form]');
let outcomeForms = document.querySelectorAll('[data-outcome-form]');

let initialWidth = document.querySelector('[data-initial-form="width"]');
let initialLength = document.querySelector('[data-initial-form="length"]');
let initialDiametr = document.querySelector('[data-initial-form="diametr"]');

let outcomeWidth = document.querySelector('[data-outcome-form="width"]');
let outcomeLength = document.querySelector('[data-outcome-form="length"]');
let outcomeDiametr = document.querySelector('[data-outcome-form="diametr"]');

let coefficientBtn = document.querySelector('.coefficient__btn');

let kWrap = document.querySelector('.coefficient__result-number');


// Выбираем исходную фигуру

initialFigures.forEach((item) => {

    item.addEventListener('click', function() {

        // прячем все формы ввода
        initialForms.forEach((form) => {
            form.classList.add('hidden');
        })

        //убираем всем класс и добавляем на ком кликнули
        initialFigures.forEach((item) => {

            item.classList.remove('active-figure');

        });

        this.classList.add('active-figure');

        let currentData = this.dataset.initial;
        if (currentData === 'circle') {
            initialDiametr.classList.remove('hidden');
        } else {
            initialWidth.classList.remove('hidden');
            initialLength.classList.remove('hidden');
        };
    })
})

// Выбираем конечную фигуру

outcomeFigures.forEach((item) => {

    item.addEventListener('click', function() {

        // прячем все формы ввода
        outcomeForms.forEach((form) => {
            form.classList.add('hidden');
        })

        outcomeFigures.forEach((item) => {

            item.classList.remove('active-figure');

        });

        this.classList.add('active-figure');

        let currentData = this.dataset.outcome;
        if (currentData === 'circle') {
            outcomeDiametr.classList.remove('hidden');
        } else {
            outcomeWidth.classList.remove('hidden');
            outcomeLength.classList.remove('hidden');
        };
    })
})

// Считаем площади S1 и S2, потом находим коэффициент


coefficientBtn.addEventListener('click', function() {

    let D1 = document.getElementById('diametr').value;
    let W1 = document.getElementById('width').value;;
    let L1 = document.getElementById('length').value;

    let D2 = document.getElementById('diametr2').value;
    let W2 = document.getElementById('width2').value;;
    let L2 = document.getElementById('length2').value;


    initialFigures.forEach((item) => {

        if (item.classList.contains('active-figure')) {
            return data = item.dataset.initial;
            
        }
        
    });
    
    outcomeFigures.forEach((item) => {

        if (item.classList.contains('active-figure')) {
            return dataOut = item.dataset.outcome;
            
        }
        
    });

    console.log(data);
    console.log(dataOut);

    if (data === 'circle') {
        S1= (D1 / 2) * (D1 / 2) * 3.14;
    } else {
        S1 = W1 * L1;
    }
    
    if (dataOut === 'circle') {
        S2= (D2 / 2) * (D2 / 2) * 3.14;
    } else {
        S2 = W2 * L2;
    } 
    
    K = S2 / S1;
    console.log(K);
    kWrap.innerHTML= K.toFixed(2);
})