const questions = [
  {
    question: "Какой язык используется для создания структуры веб-страниц?",
    answers: ["Python", "HTML", "C++", "Java"],
    correct: 1,
  },
  {
    question: "Сколько будет 2 + 2 × 2?",
    answers: ["6", "8", "4", "12"],
    correct: 0,
  },
  {
    question: "Столица Франции?",
    answers: ["Париж", "Берлин", "Лондон", "Рим"],
    correct: 0,
  },
  {
    question: "Какой газ преобладает в атмосфере Земли?",
    answers: ["Кислород", "Углекислый газ", "Азот", "Водород"],
    correct: 2,
  },
  {
    question: "Кто написал 'Войну и мир'?",
    answers: ["Достоевский", "Толстой", "Пушкин", "Гоголь"],
    correct: 1,
  },
  {
    question: "Как называется самая большая планета Солнечной системы?",
    answers: ["Земля", "Юпитер", "Сатурн", "Марс"],
    correct: 1,
  },
  {
    question: "Сколько континентов на Земле?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Какой элемент обозначается символом 'O'?",
    answers: ["Золото", "Кислород", "Олово", "Осмий"],
    correct: 1,
  },
  {
    question: "Кто изобрел электрическую лампочку?",
    answers: ["Тесла", "Эдисон", "Эйнштейн", "Ньютон"],
    correct: 1,
  },
  {
    question: "Какой язык программирования создала Microsoft?",
    answers: ["Java", "Python", "C#", "Ruby"],
    correct: 2,
  },
  {
    question: "Как называется спутник Земли?",
    answers: ["Фобос", "Европа", "Луна", "Титан"],
    correct: 2,
  },
  {
    question: "Кто нарисовал 'Мону Лизу'?",
    answers: ["Ван Гог", "Пикассо", "Да Винчи", "Микеланджело"],
    correct: 2,
  },
  {
    question: "Какой год был первым в XXI веке?",
    answers: ["1999", "2000", "2001", "2002"],
    correct: 2,
  },
  {
    question: "Какая самая длинная река в мире?",
    answers: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
    correct: 0,
  },
  {
    question: "Какой металл самый легкий?",
    answers: ["Алюминий", "Литий", "Железо", "Золото"],
    correct: 1,
  },
  {
    question: "Кто открыл Америку в 1492 году?",
    answers: ["Магеллан", "Колумб", "Васко да Гама", "Дрейк"],
    correct: 1,
  },
  {
    question: "Сколько цветов в радуге?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Какой язык программирования самый популярный в веб-разработке?",
    answers: ["Python", "JavaScript", "Java", "C++"],
    correct: 1,
  },
  {
    question: "Как называется самая высокая гора в мире?",
    answers: ["Килиманджаро", "Эверест", "Аконкагуа", "Мак-Кинли"],
    correct: 1,
  },
  {
    question: "Какой город называют 'городом ветров'?",
    answers: ["Чикаго", "Токио", "Париж", "Москва"],
    correct: 0,
  },
  {
    question: "Кто автор теории относительности?",
    answers: ["Ньютон", "Эйнштейн", "Галилей", "Хокинг"],
    correct: 1,
  },
  {
    question: "Какой язык используется для стилизации веб-страниц?",
    answers: ["HTML", "JavaScript", "CSS", "PHP"],
    correct: 2,
  },
  {
    question: "В каком году Юрий Гагарин полетел в космос?",
    answers: ["1957", "1961", "1969", "1975"],
    correct: 1,
  },
  {
    question: "Какой браузер разработан Google?",
    answers: ["Firefox", "Safari", "Edge", "Chrome"],
    correct: 3,
  },
  {
    question: "Какой язык программирования используется для создания Android-приложений?",
    answers: ["Swift", "Kotlin", "C#", "Ruby"],
    correct: 1,
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  nextBtn.disabled = true;

  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(i, q.correct, btn);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct, button) {
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct");
    else if (i === selected) btn.classList.add("wrong");
  });

  if (selected === correct) {
    correctAnswers++;
  }

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    questionEl.innerHTML = `
      <h2>Викторина завершена!</h2>
      <p>Правильных ответов: <strong>${correctAnswers} из ${questions.length}</strong></p>
      <p>Процент правильных: <strong>${percentage}%</strong></p>
    `;
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion(currentQuestion);