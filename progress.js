document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the habit list from localStorage
    const habitList = JSON.parse(localStorage.getItem('habitList')) || [];

    // Total number of habits
    const totalHabits = habitList.length;

    // Number of completed habits
    const completedHabits = habitList.filter(habit => habit.completed).length;

    // Update the total and completed habits
    document.getElementById('total-habits').textContent = totalHabits;
    document.getElementById('completed-habits').textContent = completedHabits;

    // Calculate and update progress bar
    const progressPercentage = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;
    document.getElementById('progress-bar').style.width = progressPercentage + '%';

    // Back to Checklist button
    document.getElementById('back-to-checklist-btn').addEventListener('click', function() {
        window.location.href = 'hcheck.html'; // Change to the actual checklist page
    });
});
