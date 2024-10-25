@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Montserrat:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');

:root {
  --primary-color: #ff4500;  /* Neon orange */
  --secondary-color: #000000;  /* Black */
  --accent-color: #808080;  /* Gray */
  --text-color: #ffffff;  /* White */
  --hover-color: #ff69b4;  /* Hot pink for hover effects */
  --portfolio-bg: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #ffffff;
  background-color: #000000; /* Fallback background */
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

/* Navbar styles */
.navbar {
  background-color: rgba(0, 0, 0, 0.8);  /* Semi-transparent black */
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.logo {
    font-family: 'Dancing Script', cursive; /* Keep the script font for elegance */
    font-size: 2.5rem; /* Adjust size as needed */
    color: #ffffff; /* White color for the text */
    text-shadow: none; /* Remove the neon text shadow */
    transition: color 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effect */
}

.logo:hover {
    color: #ff4500; /* Change color on hover to neon orange */
    transform: scale(1.05); /* Slightly enlarge on hover for emphasis */
}

.nav-menu {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

/* Hero section */
.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: var(--text-color);
  text-align: center;
  padding: 8rem 2rem 6rem;
}

.hero h1 {
  font-size: 3.5rem;
}

.hero p {
  font-size: 1.3rem;
}

.cta-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: var(--hover-color);
}

/* About section */
#about {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #ff4500, #00ffff); /* Gradient from neon orange to cyan */
    color: #ffffff; /* Ensure text color is visible */
    border-radius: 10px; /* Optional: round the corners */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Optional: add shadow for depth */
    margin-top: 60px; /* Adjust based on navbar height */
}

.about-content {
    display: flex;
    flex-direction: column; /* Stack items on smaller screens */
    align-items: center; /* Center items */
    text-align: center; /* Center text */
}

.profile-photo {
  width: 150px; /* Responsive size */
  height: auto; /* Maintain aspect ratio */
  border-radius: 50%;
}

.about-text {
    color: var(--text-color); /* Ensure text color is visible */
    background-color: #000; /* Black background for visibility */
    padding: 1rem; /* Add padding for better appearance */
}

.about-text p {
    margin: 1rem 0; /* Add some margin for spacing */
    font-size: 1rem; /* Adjust font size as needed */
}

.about-text h2 {
  color: var(--accent-color);
}

/* Portfolio section */
#portfolio {
  padding: 4rem 2rem;
  background-color: var(--secondary-color);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  background-color: var(--portfolio-bg);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 0, 255, 0.3);
}

.portfolio-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

/* Contact section */
#contact {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: var(--text-color);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem;
  border: 2px solid var(--text-color);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
}

.contact-form button {
  background-color: var(--primary-color);
  color: var(--text-color);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--hover-color);
}

/* Footer */
footer {
  background-color: var(--text-color);
  color: var(--secondary-color);
  text-align: center;
  padding: 1.5rem;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }

  .profile-photo {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
  }

  .portfolio-grid {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
  }

  .navbar {
    flex-direction: column; /* Stack navbar items on mobile */
    align-items: flex-start; /* Align items to the start */
  }

  .logo {
    font-size: 2rem; /* Smaller logo on mobile */
  }
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
}

.social-icon {
    color: var(--text-color);
    font-size: 2rem; /* Adjust size as needed */
    transition: color 0.3s ease;
}

.social-icon:hover {
    color: var(--primary-color); /* Change color on hover */
}

.transparent-background {
    background-size: cover; /* Ensures the image covers the entire background */
    background-position: center; /* Centers the image */
    opacity: 1; /* Reset opacity if needed */
}

.skills-list {
    list-style-type: none; /* Remove default list styling */
    padding: 0; /* Remove padding */
    margin: 1rem 0; /* Add margin for spacing */
}

.skills-list li {
    display: flex; /* Use flexbox for alignment */
    align-items: center; /* Center items vertically */
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent white */
    color: var(--text-color); /* Ensure text is visible */
    padding: 0.5rem; /* Add padding for better appearance */
    border-radius: 5px; /* Optional: round the corners */
    margin-bottom: 0.5rem; /* Space between list items */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.skills-list li:hover {
    background-color: rgba(255, 255, 255, 0.5); /* Change background on hover */
}

.skills-list li i {
    margin-right: 0.5rem; /* Space between icon and text */
    font-size: 1.5rem; /* Adjust icon size */
    color: #ff4500; /* Neon orange for icons */
}

@keyframes gradientAnimation {
    0% {
        background-color: #ff4500; /* Neon orange */
    }
    50% {
        background-color: #00ffff; /* Cyan */
    }
    100% {
        background-color: #ff4500; /* Neon orange */
    }
}

#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1; /* Ensure it is behind other content */
}

/* Media Queries */
@media (min-width: 768px) {
    .about-content {
        flex-direction: row; /* Side by side on larger screens */
        justify-content: space-around; /* Space items evenly */
    }

    .profile-photo {
        width: 200px; /* Larger size for desktop */
    }
}

.project-buttons {
    display: flex; /* Use flexbox for button layout */
    flex-direction: column; /* Stack buttons vertically */
    gap: 1rem; /* Space between buttons */
    margin-top: 1rem; /* Space above buttons */
}

.button {
    display: inline-block; /* Make it behave like a button */
    background-color: #ff4500; /* Neon orange background */
    color: #ffffff; /* White text */
    padding: 0.75rem 1.5rem; /* Padding for button */
    border-radius: 5px; /* Rounded corners */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Bold text */
    text-align: center; /* Center text */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */
}

.button:hover {
    background-color: #00ffff; /* Change background on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
}
