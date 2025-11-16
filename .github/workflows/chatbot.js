// Chatbot functionality
const chatbotButton = document.getElementById('chatbotButton');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// FAQ Database
const faqDatabase = {
    'balanced diet': {
        question: 'What is a balanced diet?',
        answer: 'A balanced diet includes a variety of foods from all food groups: fruits, vegetables, whole grains, lean proteins, and healthy fats. It provides essential nutrients your body needs to function properly, maintain energy levels, and support overall health. Aim for colorful meals with diverse nutrients!'
    },
    'water': {
        question: 'How much water should I drink daily?',
        answer: 'The general recommendation is to drink at least 8 glasses (about 2 liters or 64 ounces) of water daily. However, individual needs vary based on activity level, climate, and body size. Listen to your body and drink when you feel thirsty. Water-rich foods like fruits and vegetables also contribute to hydration.'
    },
    'weight loss': {
        question: 'What foods are good for weight loss?',
        answer: 'Foods that support weight loss include: leafy greens, lean proteins (chicken, fish, legumes), whole grains, fruits, vegetables, and foods high in fiber. Focus on nutrient-dense, low-calorie options that keep you full longer. Avoid processed foods, sugary drinks, and excessive refined carbs.'
    },
    'calories': {
        question: 'How many calories do I need per day?',
        answer: 'Daily calorie needs vary based on age, gender, height, weight, and activity level. On average: women need 1,800-2,400 calories, and men need 2,200-3,000 calories. Use our Calorie Calculator on the website to get your personalized daily calorie requirement based on your specific goals!'
    },
    'protein': {
        question: 'What are good sources of protein?',
        answer: 'Excellent protein sources include: lean meats (chicken, turkey), fish, eggs, dairy products (Greek yogurt, cottage cheese), legumes (beans, lentils, chickpeas), nuts, seeds, tofu, and quinoa. Aim to include protein in every meal to support muscle maintenance and keep you feeling satisfied.'
    },
    'intermittent fasting': {
        question: 'Is intermittent fasting healthy?',
        answer: 'Intermittent fasting can be beneficial for some people when done correctly, but it\'s not suitable for everyone. It may help with weight management and metabolic health. However, consult with a healthcare provider or nutritionist before starting, especially if you have medical conditions, are pregnant, or have a history of eating disorders.'
    },
    'energy': {
        question: 'How to maintain energy throughout the day?',
        answer: 'To maintain steady energy: eat regular, balanced meals every 3-4 hours, include complex carbs and protein, stay hydrated, get adequate sleep (7-9 hours), manage stress, and avoid excessive caffeine and sugar. Whole foods like oats, nuts, fruits, and vegetables provide sustained energy without crashes.'
    },
    'healthy snacks': {
        question: 'What are healthy snacks?',
        answer: 'Healthy snack options include: fresh fruits, vegetables with hummus, Greek yogurt, nuts and seeds, whole grain crackers with nut butter, hard-boiled eggs, smoothies, and roasted chickpeas. Choose snacks that combine protein and fiber to keep you satisfied between meals.'
    },
    'digestion': {
        question: 'How can I improve digestion naturally?',
        answer: 'Improve digestion by: eating fiber-rich foods (fruits, vegetables, whole grains), staying hydrated, eating slowly and mindfully, including probiotics (yogurt, fermented foods), regular physical activity, managing stress, and avoiding overeating. Herbal teas like ginger or peppermint can also aid digestion.'
    },
    'budget': {
        question: 'How to start eating healthy on a budget?',
        answer: 'Eat healthy on a budget by: buying seasonal produce, purchasing frozen fruits and vegetables, buying in bulk (grains, legumes), planning meals ahead, cooking at home, choosing whole foods over processed items, and growing herbs/vegetables if possible. Focus on nutrient-dense, affordable staples like beans, rice, eggs, and seasonal vegetables.'
    }
};

// Keywords for matching questions
const keywordMap = {
    'balanced diet': ['balanced', 'diet', 'nutrition', 'food groups'],
    'water': ['water', 'hydration', 'drink', 'fluids'],
    'weight loss': ['weight loss', 'lose weight', 'slimming', 'dieting'],
    'calories': ['calories', 'calorie', 'caloric', 'energy needs'],
    'protein': ['protein', 'proteins', 'meat', 'muscle'],
    'intermittent fasting': ['fasting', 'intermittent', 'if diet'],
    'energy': ['energy', 'tired', 'fatigue', 'energetic', 'boost'],
    'healthy snacks': ['snacks', 'snacking', 'between meals'],
    'digestion': ['digestion', 'digestive', 'stomach', 'gut health'],
    'budget': ['budget', 'cheap', 'affordable', 'money', 'cost']
};

// Open/Close chatbot
chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
    if (chatbotContainer.classList.contains('active')) {
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Send message function
function sendMessage() {
    const userMessage = chatbotInput.value.trim().toLowerCase();
    
    if (!userMessage) return;
    
    // Add user message to chat
    addMessage(userMessage, 'user');
    chatbotInput.value = '';
    
    // Find matching FAQ
    let matched = false;
    for (const [key, keywords] of Object.entries(keywordMap)) {
        if (keywords.some(keyword => userMessage.includes(keyword))) {
            setTimeout(() => {
                addMessage(faqDatabase[key].answer, 'bot');
            }, 500);
            matched = true;
            break;
        }
    }
    
    // If no match found
    if (!matched) {
        setTimeout(() => {
            addMessage('I can only answer wellness and diet questions for now 😊. Try asking about balanced diets, calories, protein, weight loss, or other wellness topics!', 'bot');
        }, 500);
    }
}

// Add message to chat
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${type}-message`;
    
    const messageP = document.createElement('p');
    messageP.textContent = text;
    messageDiv.appendChild(messageP);
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

