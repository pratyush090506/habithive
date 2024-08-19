document.addEventListener('DOMContentLoaded', function() {
    const habitForm = document.getElementById('habit-form');
    const habitInput = document.getElementById('habit-input');
    const habitListElement = document.getElementById('habit-list');

    // Retrieve the habit list from localStorage or initialize as empty
    let habitList = JSON.parse(localStorage.getItem('habitList')) || [];

    // Function to render the habit list
    function renderHabits() {
        habitListElement.innerHTML = ''; // Clear the current list
        habitList.forEach((habit, index) => {
            const habitItem = document.createElement('li');
            habitItem.className = 'habit-item' + (habit.completed ? ' completed' : '');
            
            const habitName = document.createElement('span');
            habitName.className = 'habit-name';
            habitName.textContent = habit.name;

            const completeBtn = document.createElement('button');
            completeBtn.className = 'complete-btn';
            completeBtn.textContent = habit.completed ? 'Undo' : 'Complete';
            completeBtn.addEventListener('click', () => {
                habitList[index].completed = !habitList[index].completed;
                localStorage.setItem('habitList', JSON.stringify(habitList));
                renderHabits();
            });

            habitItem.appendChild(habitName);
            habitItem.appendChild(completeBtn);
            habitListElement.appendChild(habitItem);
        });
    }

    // Event listener for adding a new habit
    habitForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const habitName = habitInput.value.trim();
        if (habitName) {
            // Check if the habit already exists to prevent duplicates
            const habitExists = habitList.some(habit => habit.name === habitName);
            if (!habitExists) {
                habitList.push({ name: habitName, completed: false });
                localStorage.setItem('habitList', JSON.stringify(habitList));
                renderHabits();
                habitInput.value = '';
            } else {
                alert('Habit already exists!');
            }
        }
    });

    // Initial render of habits
    renderHabits();
});
