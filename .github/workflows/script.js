// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Diet Plan Form
const getPlanBtn = document.getElementById('getPlanBtn');
const planForm = document.getElementById('planForm');
const dietPlanForm = document.getElementById('dietPlanForm');
const planResult = document.getElementById('planResult');

getPlanBtn.addEventListener('click', () => {
    planForm.classList.remove('hidden');
    planForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

dietPlanForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const goal = document.getElementById('goal').value;
    const activity = document.getElementById('activity').value;
    const dietary = document.getElementById('dietary').value;
    
    // Generate personalized plan
    const planMessages = {
        'weight-loss': {
            title: 'Weight Loss Plan',
            content: `
                <h4>Your Personalized Weight Loss Plan</h4>
                <p><strong>Goal:</strong> Weight Loss</p>
                <p><strong>Activity Level:</strong> ${activity}</p>
                <p><strong>Dietary Preference:</strong> ${dietary}</p>
                <br>
                <p><strong>Daily Recommendations:</strong></p>
                <ul style="text-align: left; margin-top: 1rem;">
                    <li>Calorie target: 1,500-1,800 calories per day</li>
                    <li>Focus on lean proteins, vegetables, and whole grains</li>
                    <li>3 main meals + 2 healthy snacks</li>
                    <li>Drink 8-10 glasses of water daily</li>
                    <li>Include 30 minutes of daily activity</li>
                </ul>
                <p style="margin-top: 1rem;"><strong>Sample Meal Plan:</strong></p>
                <ul style="text-align: left;">
                    <li><strong>Breakfast:</strong> Oat & Berry Bowl with Greek yogurt</li>
                    <li><strong>Lunch:</strong> Quinoa Power Salad with grilled chicken</li>
                    <li><strong>Dinner:</strong> Grilled Veggie Bowl with lean protein</li>
                    <li><strong>Snacks:</strong> Roasted Chickpeas, fresh fruit, nuts</li>
                </ul>
            `
        },
        'muscle-gain': {
            title: 'Muscle Gain Plan',
            content: `
                <h4>Your Personalized Muscle Gain Plan</h4>
                <p><strong>Goal:</strong> Muscle Gain</p>
                <p><strong>Activity Level:</strong> ${activity}</p>
                <p><strong>Dietary Preference:</strong> ${dietary}</p>
                <br>
                <p><strong>Daily Recommendations:</strong></p>
                <ul style="text-align: left; margin-top: 1rem;">
                    <li>Calorie target: 2,500-3,000 calories per day</li>
                    <li>High protein intake: 1.6-2.2g per kg of body weight</li>
                    <li>5-6 meals per day for optimal nutrient timing</li>
                    <li>Complex carbs for energy and recovery</li>
                    <li>Post-workout protein within 30 minutes</li>
                </ul>
                <p style="margin-top: 1rem;"><strong>Sample Meal Plan:</strong></p>
                <ul style="text-align: left;">
                    <li><strong>Breakfast:</strong> Protein-rich oatmeal with eggs and whole grain toast</li>
                    <li><strong>Pre-workout:</strong> Banana with almond butter</li>
                    <li><strong>Post-workout:</strong> Protein shake with fruit</li>
                    <li><strong>Lunch:</strong> Quinoa Power Salad with grilled chicken or fish</li>
                    <li><strong>Dinner:</strong> Lean protein with sweet potato and vegetables</li>
                    <li><strong>Snacks:</strong> Greek yogurt, nuts, protein bars</li>
                </ul>
            `
        },
        'energy-boost': {
            title: 'Energy Boost Plan',
            content: `
                <h4>Your Personalized Energy Boost Plan</h4>
                <p><strong>Goal:</strong> Energy Boost</p>
                <p><strong>Activity Level:</strong> ${activity}</p>
                <p><strong>Dietary Preference:</strong> ${dietary}</p>
                <br>
                <p><strong>Daily Recommendations:</strong></p>
                <ul style="text-align: left; margin-top: 1rem;">
                    <li>Balanced meals every 3-4 hours to maintain steady energy</li>
                    <li>Focus on complex carbohydrates and lean proteins</li>
                    <li>Include iron-rich foods (spinach, legumes, lean meats)</li>
                    <li>Stay hydrated with water and herbal teas</li>
                    <li>Limit processed sugars and refined carbs</li>
                </ul>
                <p style="margin-top: 1rem;"><strong>Sample Meal Plan:</strong></p>
                <ul style="text-align: left;">
                    <li><strong>Breakfast:</strong> Oat & Berry Bowl with nuts and seeds</li>
                    <li><strong>Mid-morning:</strong> Apple with almond butter</li>
                    <li><strong>Lunch:</strong> Quinoa Power Salad with mixed vegetables</li>
                    <li><strong>Afternoon:</strong> Green smoothie or roasted chickpeas</li>
                    <li><strong>Dinner:</strong> Grilled Veggie Bowl with whole grains</li>
                    <li><strong>Evening:</strong> Herbal tea and a small portion of dark chocolate</li>
                </ul>
            `
        },
        'balanced': {
            title: 'Balanced Diet Plan',
            content: `
                <h4>Your Personalized Balanced Diet Plan</h4>
                <p><strong>Goal:</strong> Balanced Diet</p>
                <p><strong>Activity Level:</strong> ${activity}</p>
                <p><strong>Dietary Preference:</strong> ${dietary}</p>
                <br>
                <p><strong>Daily Recommendations:</strong></p>
                <ul style="text-align: left; margin-top: 1rem;">
                    <li>Calorie target: 2,000-2,400 calories per day (adjust based on activity)</li>
                    <li>50% carbohydrates, 25% protein, 25% healthy fats</li>
                    <li>5 servings of fruits and vegetables daily</li>
                    <li>Whole grains, lean proteins, and healthy fats</li>
                    <li>Regular meal times for optimal digestion</li>
                </ul>
                <p style="margin-top: 1rem;"><strong>Sample Meal Plan:</strong></p>
                <ul style="text-align: left;">
                    <li><strong>Breakfast:</strong> Oat & Berry Bowl with Greek yogurt</li>
                    <li><strong>Lunch:</strong> Quinoa Power Salad with mixed vegetables</li>
                    <li><strong>Dinner:</strong> Grilled Veggie Bowl with lean protein</li>
                    <li><strong>Snacks:</strong> Fresh fruit, roasted chickpeas, nuts, vegetables with hummus</li>
                </ul>
            `
        }
    };
    
    const plan = planMessages[goal];
    if (plan) {
        planResult.innerHTML = plan.content;
        planResult.classList.remove('hidden');
        planResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.tip-card, .recipe-card, .plan-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add scroll-to-top functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});

// Diet Calorie Calculator
const calorieCalculatorForm = document.getElementById('calorieCalculatorForm');
if (calorieCalculatorForm) {
    const calorieResult = document.getElementById('calorieResult');
    const calorieValue = document.getElementById('calorieValue');
    const calorieNote = document.getElementById('calorieNote');

    calorieCalculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const gender = document.getElementById('gender').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activity-level').value;
    const goal = document.getElementById('goal-calc').value;
    
    // Validate inputs
    if (!gender || !age || !height || !weight || !activityLevel || !goal) {
        alert('Please fill in all fields');
        return;
    }
    
    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Activity multipliers
    const activityMultipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'very-active': 1.725
    };
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityMultipliers[activityLevel];
    
    // Adjust for goal
    let dailyCalories;
    let note;
    
    if (goal === 'lose') {
        dailyCalories = Math.round(tdee - 500);
        note = 'Eat around this amount to lose about 0.5 kg per week.';
    } else if (goal === 'maintain') {
        dailyCalories = Math.round(tdee);
        note = 'This keeps your current weight steady.';
    } else if (goal === 'gain') {
        dailyCalories = Math.round(tdee + 500);
        note = 'Eat around this to gain healthy weight gradually.';
    }
    
    // Display results
    calorieValue.textContent = dailyCalories.toLocaleString();
    calorieNote.textContent = note;
    
    // Show result with animation
    calorieResult.classList.remove('hidden');
    calorieResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.className = 'form-message error';
            formMessage.classList.remove('hidden');
            return;
        }
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.classList.remove('hidden');
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
}

