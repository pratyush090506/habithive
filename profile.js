// JavaScript to handle profile editing and picture change

document.addEventListener("DOMContentLoaded", function() {
  const editButton = document.querySelector('.edit-profile-btn');
  const profileName = document.querySelector('.profile-name');
  const profileBio = document.querySelector('.profile-bio');
  const editAvatarBtn = document.querySelector('.edit-avatar-btn');
  const avatarInput = document.querySelector('#avatarInput');
  const avatar = document.querySelector('#avatar');

  // Function to toggle edit mode
  function toggleEditMode() {
      if (editButton.textContent === 'Edit Profile') {
          editButton.textContent = 'Save Changes';
          profileName.contentEditable = true;
          profileBio.contentEditable = true;
          profileName.style.border = '1px solid #ccc';
          profileBio.style.border = '1px solid #ccc';
          profileName.focus();
      } else {
          editButton.textContent = 'Edit Profile';
          profileName.contentEditable = false;
          profileBio.contentEditable = false;
          profileName.style.border = 'none';
          profileBio.style.border = 'none';
          saveProfileData(profileName.textContent, profileBio.textContent);
      }
  }

  // Function to save profile data (for example, in localStorage)
  function saveProfileData(name, bio) {
      localStorage.setItem('profileName', name);
      localStorage.setItem('profileBio', bio);
  }

  // Load saved profile data from localStorage
  function loadProfileData() {
      const savedName = localStorage.getItem('profileName');
      const savedBio = localStorage.getItem('profileBio');
      const savedAvatar = localStorage.getItem('profileAvatar');

      if (savedName) profileName.textContent = savedName;
      if (savedBio) profileBio.textContent = savedBio;
      if (savedAvatar) avatar.src = savedAvatar;
  }

  // Handle avatar change
  editAvatarBtn.addEventListener('click', function() {
      avatarInput.click();
  });

  avatarInput.addEventListener('change', function() {
      const file = avatarInput.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              avatar.src = e.target.result;
              localStorage.setItem('profileAvatar', e.target.result);
          }
          reader.readAsDataURL(file);
      }
  });

  // Load profile data on page load
  loadProfileData();

  // Add event listener to the edit button
  editButton.addEventListener('click', toggleEditMode);
});
