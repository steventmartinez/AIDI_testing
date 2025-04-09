var SACAI_survey = {
    type: jsPsychSurveyLikert,
    preamble: "<p style='font-size: 2.2vw;'><b> Please answer all of the questions on this page. </b></p>",
    questions:  [
        {prompt: "<b>1. How often do you use AI to alter the tone of your messages, emails, (communication) with other people?</b>", name: 'SACAI_Q1', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>2. How often do you use AI to draft emotional communications when you're unsure of how to express yourself?</b>", name: 'SACAI_Q2', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>3. How often do you use AI to generate responses for online discussions and interactions?</b>", name: 'SACAI_Q3', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>4. How often do you use AI to enhance your writing to sound a certain way (ex: professional, concise, eager, knowledgable)?</b>", name: 'SACAI_Q4', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>5. How often do you share personal concerns or feelings with AI to gain perspective?</b>", name: 'SACAI_Q5', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>6. How often do you use AI to help with your social media presence (ex: photo captions, posts, comments)?</b>", name: 'SACAI_Q6', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true}, 
        {prompt: "<b>7. How often do you use AI for advice before making a decision?</b>", name: 'SACAI_Q7', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>8. How often do you ask AI to explain concepts in different ways until you understand them?</b>", name: 'SACAI_Q8', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>9. How often do you use AI to get a task off your hands?</b>", name: 'SACAI_Q9', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>10. How often does AI help you overcome mental blocks or creative stagnation?</b>", name: 'SACAI_Q10', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>11. How often do you use AI to practice and refine new skills (e.g., writing, coding, language learning)?</b>", name: 'SACAI_Q11', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
        {prompt: "<b>12. How often does AI support your ability to memorize, retain and recall information?</b>", name: 'SACAI_Q12', labels: ["Never", "Rarely", "Sometimes", "Often", "Always"], required: true},
]
}