window.addEventListener("load", solve);

function solve() {
    let expenseTypeInput = document.getElementById('expense');
    let amountInput = document.getElementById('amount');
    let dateInput = document.getElementById('date');

    let publishBtn = document.getElementById('add-btn');
    let deleteBtn = document.querySelector('.delete');

    publishBtn.addEventListener('click', publish);

    function publish(){
        if (expenseTypeInput.value == '' || amountInput.value == '' || dateInput.value == ''){
            return;
        }
        let previewList = document.getElementById('preview-list');
        let expensesFinalList = document.getElementById('expenses-list');

        let expenseLiElement = document.createElement('li');
        expenseLiElement.classList.add('expense-item');

        let expenseArticleElement = document.createElement('article');

        let expensePElement = document.createElement('p');
        expensePElement.textContent = `Type: ${expenseTypeInput.value}`;
        let expenseType = expenseTypeInput.value;

        let amountPElement = document.createElement('p');
        amountPElement.textContent = `Amount: ${amountInput.value}$`;
        let amount = amountInput.value;

        let datePElement = document.createElement('p');
        datePElement.textContent = `Date: ${dateInput.value}`;
        let date = dateInput.value;

        let divButtonsElement = document.createElement('div');
        divButtonsElement.classList.add('buttons');

        let editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', edit);

        let okBtn = document.createElement('button');
        okBtn.classList.add('btn');
        okBtn.classList.add('ok');
        okBtn.textContent = 'ok';
        okBtn.addEventListener('click', post);

        divButtonsElement.appendChild(editBtn);
        divButtonsElement.appendChild(okBtn);

        expenseArticleElement.appendChild(expensePElement);
        expenseArticleElement.appendChild(amountPElement);
        expenseArticleElement.appendChild(datePElement);

        expenseLiElement.appendChild(expenseArticleElement);
        expenseLiElement.appendChild(divButtonsElement);

        previewList.appendChild(expenseLiElement);

        expenseTypeInput.value = '';
        amountInput.value = '';
        dateInput.value = '';

        publishBtn.disabled = true;

        function edit(){
            expenseTypeInput.value = expenseType;
            amountInput.value = amount;
            dateInput.value = date;

            previewList.removeChild(expenseLiElement);
            publishBtn.disabled = false;
        }

        function post(){
            previewList.removeChild(expenseLiElement);
            divButtonsElement.removeChild(editBtn);
            divButtonsElement.removeChild(okBtn);

            expensesFinalList.appendChild(expenseLiElement);
            publishBtn.disabled = false;

            deleteBtn.addEventListener('click', onClear)

            function onClear(){
                location.reload();
            }
        }
    }

}