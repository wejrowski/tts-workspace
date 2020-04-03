(function() {
    'use strict';

    var calculator = document.querySelector('#calculator');

    var display = calculator.querySelector('#display'),
        clear = calculator.querySelector('.btn--clear'),
        plusMin = calculator.querySelector('.btn--plusmin'),
        percentage = calculator.querySelector('.btn--percentage'),
        equals = calculator.querySelector('.btn--equals'),
        operators = calculator.querySelectorAll('.btn--operator'),
        numbers = calculator.querySelectorAll('.btn--number');

    var isOperatorEngaged = function() {
        return !!calculator.dataset.operator;

    };

    var isOperatorLastPressed = function() {
        var operatorEngaged = false;

        operators.forEach(function(operator) {
           if (operator.classList.contains('btn--active')) {
              operatorEngaged = true;
           }
        });

        return operatorEngaged;
    };

    var clearOperatorEngagement = function() {
        operators.forEach(function(operator) {
            operator.classList.remove('btn--active');
        });
    }

    var stashDisplay = function() {
        calculator.dataset.stash = display.value;
    };

    // CLICK FUNCTIONS
    var firstTimePressed = true;
    var onOperatorClick = function(event) {
        firstTimePressed = true;
        clearOperatorEngagement();
        event.currentTarget.classList.add('btn--active');
        calculator.dataset.operator = event.currentTarget.dataset.operator;
        stashDisplay();
    };

    var onEqualsClick = function(event) {
        var stashVal = parseInt(calculator.dataset.stash),
            applyVal = parseInt(calculator.dataset.stashApply);

        if (!calculator.dataset.operator) {
            return;
        }

        if (calculator.dataset.operator === "DIVIDE") {
            display.value = stashVal / applyVal;
        } else if (calculator.dataset.operator === "MULTIPLY") {
            display.value = stashVal * applyVal;
        } else if (calculator.dataset.operator === "SUBTRACT") {
            display.value = stashVal - applyVal;
        } else if (calculator.dataset.operator === "ADD") {
            display.value = stashVal + applyVal;
        }

        calculator.dataset.stash = display.value;
        clearOperatorEngagement();
        stashDisplay();
    };

    var onClearClick = function(event) {
        clearOperatorEngagement();

        display.value = "0";
        calculator.dataset.operator = "";
        calculator.dataset.stash = "";
    };

    var onPlusMinusClick = function(event) {
        display.value = parseInt(display.value) * -1;
    };

    var onPercentageClick = function(event) {
        display.value = parseInt(display.value) * 0.01;
    };

    var onNumberClick = function(event) {
        var numPressed = event.currentTarget.innerHTML;

        if (isOperatorEngaged() && firstTimePressed) {
            calculator.dataset.stashApply = numPressed
            display.value = numPressed;
            firstTimePressed = false;
            return;
        }

        // return early so we don't add multiple decimals
        if (numPressed === "." && display.value.includes(".")) {
            return;
        }

        if (display.value === "0" && numPressed !== ".") {
            display.value = numPressed;
            return;
        }

        display.value += numPressed;
    };

    // ATTACH LISTENERS
    clear.addEventListener('click', onClearClick);
    plusMin.addEventListener('click', onPlusMinusClick);
    percentage.addEventListener('click', onPercentageClick);
    equals.addEventListener('click', onEqualsClick);
    numbers.forEach(function(numberBtn) {
        numberBtn.addEventListener('click', onNumberClick);
    });
    operators.forEach(function(operator) {
        operator.addEventListener('click', onOperatorClick);
    });
}());
