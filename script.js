const questions = [
    { question: "问题1", options: ["选项1", "选项2", "选项3", "选项4"] },
    { question: "问题2", options: ["选项1", "选项2", "选项3", "选项4"] },
    // 添加更多问题
];

function startTest() {
    const infoForm = document.getElementById('infoForm');
    const testDiv = document.getElementById('test');
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        infoForm.style.display = 'none';
        testDiv.style.display = 'block';
        renderQuestions();
    } else {
        alert('请填写姓名和电话号码');
    }
}

function renderQuestions() {
    const testDiv = document.getElementById('test');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach((option, optionIndex) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement('br'));
        });
        testDiv.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.innerText = '提交';
    submitButton.onclick = calculateResult;
    testDiv.appendChild(submitButton);
}

function calculateResult() {
    const resultDiv = document.getElementById('result');
    const answers = [];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
        }
    });

    // 这里可以根据答案计算结果
    const result = "您的MBTI类型是: " + answers.join(', ');
    resultDiv.innerText = result;
    resultDiv.style.display = 'block';
}

