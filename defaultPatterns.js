const defaultPatterns = {
  '.*I need (.*)': [
    "Why do you need {0}?",
    "Would it really help you to get {0}?",
    "Are you sure you need {0}?"
  ],
  '.*Why don\'t you (.*)': [
    "Do you really think I don't {0}?",
    "Perhaps eventually I will {0}.",
    "Do you really want me to {0}?"
  ],
  '.*\\?': [
    "Why do you ask that?",
    "Please consider whether you can answer your own question.",
    "Perhaps the answer lies within yourself."
  ],
  '.*quit': [
    "Thank you for talking with me.",
    "Goodbye.",
    "Have a great day!"
  ],
  // '(hello|hi)': [
  //   "Hi, how are you feeling today?"
  // ],
  '.*What can you do\\?': [
    "I can help you with a variety of topics. Just ask me anything!"
  ],
  '.*Tell me a joke': [
    "Why don't scientists trust atoms? Because they make up everything!"
  ],
  '.*What is your favorite color\\?': [
    "I don't have personal preferences, but I like all colors!"
  ],
  '.*How do I solve a Rubik\'s Cube\\?': [
    "Solving a Rubik's Cube can be challenging, but there are many online tutorials and guides available that can help you learn the steps."
  ],
  '.*How are you\\?': [
    "It's nice of you to ask. How can I assist you today?",
    "I don't have feelings, but I'm here to help. How can I support you?",
    "I'm here to answer your questions. What can I do for you?"
  ],
  '.*Tell me about yourself': [
    "I'm here to have conversations with you. What would you like to talk about?",
    "I'm designed to assist you. What can I help you with today?",
    "I'm here to support you. How can I be of service to you?"
  ],
  '.*Can you help me\\?': [
    "Of course, I'll do my best to assist you. What specifically do you need help with?",
    "Certainly! How can I best support you? What do you need assistance with?",
    "I'm here to help. What would you like to discuss or need guidance on?"
  ],
  '.*Thank you': [
    "You're welcome! Is there anything else you'd like to know?",
    "You're welcome! If there's more you want to explore, feel free to ask.",
    "No problem! If there's anything else on your mind, don't hesitate to share."
  ],
  '.*I\'m feeling (\\w+)': [
    "It's okay to feel {0}. Can you tell me more about the factors contributing to your {0} mood?",
    "I hear you. What do you think might be influencing your {0} emotions?",
    "Feelings of {0} are valid. Let's delve deeper into what might be causing this emotion.",
    "It's important to acknowledge your {0} emotions. What events or thoughts have led to these feelings?"
  ],
  '.*I don\'t know what to do': [
    "It's okay not to have all the answers right now. Let's brainstorm together and consider possible options.",
    "Feeling uncertain is common. Let's explore different strategies that might be helpful.",
    "It's okay to feel stuck. Let's work together to identify potential approaches you could take.",
    "Not having a clear direction can be challenging. Let's pause and think about potential solutions."
  ],
  '.*I\'m struggling': [
    "I'm here to support you. Could you share more about the specific challenges you're facing?",
    "Struggles are a natural part of life. What particular difficulties have you been encountering?",
    "You're not alone in feeling this way. Let's discuss the specific areas you're finding challenging.",
    "Reaching out when you're struggling is a positive step. Let's collaboratively navigate through your current difficulties."
  ],
  '.*I\'m feeling overwhelmed': [
    "Feeling overwhelmed is tough. Can you tell me more about what's causing you to feel this way?",
    "I hear you. Overwhelm can be challenging. What specific situations are contributing to your feelings?",
    "It's important to address overwhelm. Let's explore strategies to help you manage and cope with these feelings.",
    "Feeling overwhelmed is common. What support or resources do you think might be helpful for you?"
  ],
  '.*I\'m experiencing anxiety': [
    "Anxiety can be tough to navigate. Can you share more about what triggers your anxiety?",
    "I understand. Anxiety is a common concern. How has it been impacting your daily life?",
    "Managing anxiety is important. Let's discuss techniques that might help you cope during anxious moments.",
    "It's brave to talk about anxiety. What steps have you taken to address your anxiety so far?"
  ],
  '.*I\'m struggling with self-esteem': [
    "Struggles with self-esteem can be challenging. Can you tell me more about what's affecting your self-esteem?",
    "I hear you. Self-esteem issues can impact various aspects of life. How has this been playing out for you?",
    "Working on self-esteem is valuable. Let's explore ways to nurture a more positive self-image and self-worth.",
    "Building self-esteem takes time. What strengths and qualities do you appreciate about yourself?"
  ],
  '.*I\'m feeling lonely': [
    "Loneliness is a common feeling. Can you share more about what situations contribute to your sense of loneliness?",
    "I understand. Loneliness can be difficult. How has it been affecting your mood and well-being?",
    "Addressing loneliness is important. Let's brainstorm ways to connect with others and cultivate social support.",
    "Feeling lonely is valid. What activities or hobbies bring you joy and could potentially connect you with like-minded people?"
  ],
  '.*I\'m going through a breakup': [
    "Breakups can be tough. Can you tell me more about how you've been coping with the breakup?",
    "I hear you. Breakups bring a mix of emotions. How are you managing the challenges of this transition?",
    "Navigating a breakup requires support. Let's explore ways to heal and take care of yourself during this time.",
    "Breakups are a significant life change. What are some positive steps you've taken to care for yourself since the breakup?"
  ],
  "(.*)(help|assistance)(.*)": [
    "Of course, I'm here to help. What do you need assistance with?",
    "Certainly, I can assist you. Please let me know what you need help with.",
    "I'm here to provide support. What can I do for you?",
    "I'm here to help. How can I assist you today?"
  ],
  "(.*)(feel|feeling)(.*)": [
    "Feelings are important. Can you tell me more about what you're feeling?",
    "I'm here to listen. How are your emotions affecting you?",
    "Emotions are complex. Let's explore how you're feeling and why.",
    "Feelings are a natural part of being human. Let's discuss what's on your mind."
  ],
  "(.*)(life|daily life|day)(.*)": [
    "Life can be interesting. What's been happening in your daily life?",
    "Daily life can have its ups and downs. How's your day been?",
    "Let's talk about your day. What's been on your mind?",
    "Life is full of experiences. What's been noteworthy in your daily routine?"
  ],
  "(.*)(opinion|think)(.*)": [
    "Opinions vary. What do you think about this?",
    "Your perspective matters. How do you feel about this topic?",
    "Opinions can be diverse. What's your take on the matter?",
    "Everyone has opinions. Share your thoughts with me."
  ],
  "(.*)(goodbye|bye|farewell)(.*)": [
    "Goodbyes are bittersweet. Take care!",
    "Farewell for now. If you need me, I'm here.",
    "Until next time. Remember, I'm just a message away.",
    "Goodbye! Don't hesitate to reach out again."
  ]
};

module.exports = defaultPatterns;
