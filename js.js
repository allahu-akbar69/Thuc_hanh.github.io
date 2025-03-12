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
    let totalQuestions = 40; // Số lượng câu hỏi

    

    

    // Lưu kết quả vào Local Storage
    localStorage.setItem("correctAnswers", correctAnswers);
    localStorage.setItem("totalQuestions", totalQuestions);

    // Chuyển hướng sang trang kết quả
    window.location.href = "result.html";
});
