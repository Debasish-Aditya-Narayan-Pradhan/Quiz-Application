let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0;
let totalQuestions = 0;

async function fetchQuestion() {
    try{
        const response = await fetch('http://localhost:9090/quiz/getQuestions')
        if(!response.ok)
        {
            throw new Error("Network response was no ok");
        }

        questions = await response.json();
        totalQuestions = questions.length;
        document.querySelector('.total-question').textContent = totalQuestions
        displayQuesion();
    }catch(error)
    {
        console.error('Error fetching questions: ',error);
        document.getElementById('question-text').textContent="Failed to load questions. Please try again";
    }

    function displayQuesion()
    {
        if(questions.length == 0) return;

        const questionText = document.getElementById('question-text');
        const optionContainer = document.getElementById('option-container');
        const currentQuestion = questions[currentQuestionIndex];
        //update this line to match the correct property
        questionText.textContent = currentQuestion.questionText;
        optionContainer.innerHTML='';

        currentQuestion.options.forEach(options => {
            const button = document.createElement('button');
            button.textContent = options;
            button.className='option';
            button.onclick = ()=>
            {
                checkAnswer(options);
            }

            optionContainer.appendChild(button);
        });

        document.getElementsByClassName('current-que').textContent=currentQuestionIndex+1;
    }

    function checkAnswer(selectedOption)
    {
        const currentQuestion = questions[currentQuestionIndex];
        if(selectedOption == currentQuestion.correctAnswer)
        {
            correctAnswers++;
        }
        nextQuestion();
    }

    function nextQuestion()
    {
        if(currentQuestionIndex < questions.length-1)
        {
            currentQuestionIndex++;
            displayQuesion();
        }
        else
        {
            localStorage.setItem('quizScore',correctAnswers);
            localStorage.setItem('totalQuestions',totalQuestions);
            window.location.href='result.html';
        }
    }
}

window.onload = fetchQuestion;