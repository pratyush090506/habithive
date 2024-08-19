// Get elements
const currentStreakElement = document.getElementById('currentStreak');
const longestStreakElement = document.getElementById('longestStreak');
const markCompleteButton = document.getElementById('markComplete');

// Initialize streak data
let currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
let longestStreak = parseInt(localStorage.getItem('longestStreak')) || 0;
let lastCompletedDate = localStorage.getItem('lastCompletedDate');

// Update streak data in the DOM
currentStreakElement.textContent = currentStreak;
longestStreakElement.textContent = longestStreak;

// Function to update streak
function updateStreak() {
  const today = new Date().toDateString();

  if (lastCompletedDate === today) {
    alert("You've already marked today as complete!");
    return;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastCompletedDate === yesterday.toDateString()) {
    currentStreak++;
  } else {
    currentStreak = 1; // Reset streak if more than a day has passed
  }

  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }

  // Update local storage
  localStorage.setItem('currentStreak', currentStreak);
  localStorage.setItem('longestStreak', longestStreak);
  localStorage.setItem('lastCompletedDate', today);

  // Update the DOM
  currentStreakElement.textContent = currentStreak;
  longestStreakElement.textContent = longestStreak;
}

// Event listener for the button
markCompleteButton.addEventListener('click', updateStreak);
