const inputs = document.querySelectorAll('.onlyLetters');
    const buttons = document.querySelectorAll('.checkAnswer');
    const showScoreButton = document.getElementById('showScore');
    let score = 0;

    // O'zbekcha so'zlar va ularning inglizcha tarjimalari
    const translations = {
        'Raqam': 'Number',
        'Savol': 'Question',
        'Daraxt': 'Tree',
        'Soat': 'Clock'
    };

    // Faqat harflarni qabul qilish
    inputs.forEach(input => {
        input.addEventListener('input', function(event) {
            event.target.value = event.target.value.replace(/[^A-Za-z]/g, '');
        });
    });

    // To'g'ri javoblarni tekshirish
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = button.previousElementSibling;
            const span = button.previousElementSibling.previousElementSibling.querySelector('span');
            const correctAnswer = translations[span.textContent.trim()];

            // Kiritilgan matnni tekshirish
            if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                alert("To'g'ri!");
                score += 5;
            } else {
                alert("Xato! To'g'ri javob: " + correctAnswer);
            }

            // Inputni noaniq qilish
            input.disabled = true;
            button.disabled = true;

            // Hamma javoblarni tekshirish tugmasini ko'rsatish
            if (document.querySelectorAll('input:disabled').length === 4) {
                showScoreButton.style.display = 'block';
            }
        });
    });

    // Ballarni ko'rsatish
    showScoreButton.addEventListener('click', function() {
        alert("Siz " + score + " ball to'pladingiz.");
    });