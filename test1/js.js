document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitInfo");
    const surveySection = document.getElementById("survey");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission if inside a form

        // Show the survey section
        surveySection.classList.add("active");
        
        // Smooth scroll to the survey
        surveySection.scrollIntoView({ behavior: "smooth" });
    });
});


document.getElementById("submitQuiz").addEventListener("click", function () {
    let correctAnswers = 0;
    let totalQuestions = 40; // Chỉ tính từ 1-20
    let allAnswers = [];

    const answers = {
        q1: "Đúng", q2: "Đúng", q3: "Đúng", q4: "Đúng", q5: "Đúng",
        q6: "Đúng", q7: "Đúng", q8: "Đúng", q9: "Đúng", q10: "Đúng",  // Câu đúng/Đúng (1-10)
        q11: "a", q12: "a", q13: "a", q14: "b", q15: "d",
        q16: "d", q17: "d", q18: "d", q19: "a", q20: "a"  // Câu chọn đáp án (11-20)
    };

    for (let key in answers) {
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        
        if (selectedOption) {
            let isCorrect = selectedOption.value === answers[key];
            if (isCorrect) {
                correctAnswers++;
            }
            
            allAnswers.push({
                question: key.replace("q", ""),  
                selected: selectedOption.value.toUpperCase(),  
                correct: answers[key].toUpperCase(),
                isCorrect: isCorrect
            });

        } else {
            // Nếu không chọn, lưu là "Chưa chọn"
            allAnswers.push({
                question: key.replace("q", ""),
                selected: "Chưa chọn",
                correct: answers[key].toUpperCase(),
                isCorrect: false
            });
        }
    }

    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("totalQuestions", totalQuestions);
    localStorage.setItem("allAnswers", JSON.stringify(allAnswers));

    window.location.href = "result.html";
});
