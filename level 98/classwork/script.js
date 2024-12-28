const emails = [
    { subject: "travel", content: "Don't forget your tickets", receivedDate: "2024-12-15" },
    { subject: "mention", content: "Please read the latest report", receivedDate: "2024-12-12" },
    { subject: "travel", content: "I have a very good offer", receivedDate: "2024-12-13" },
    { subject: "realize", content: "Minor errors are possible", receivedDate: "2024-12-10" },
    { subject: "work", content: "Submit your timesheet by Friday", receivedDate: "2024-12-11" },
    { subject: "promotion", content: "Exclusive deals just for you", receivedDate: "2024-12-14" },
    { subject: "holiday", content: "Happy Holidays from our team", receivedDate: "2024-12-09" },
    { subject: "invoice", content: "Your payment is due", receivedDate: "2024-12-08" },
    { subject: "reminder", content: "Don't miss the meeting at 3 PM", receivedDate: "2024-12-07" },
    { subject: "newsletter", content: "Here's what's new this month", receivedDate: "2024-12-06" },
    { subject: "update", content: "Your package is on the way", receivedDate: "2024-12-05" },
    { subject: "event", content: "Join us for the annual celebration", receivedDate: "2024-12-04" },
    { subject: "notification", content: "You have a new message", receivedDate: "2024-12-03" },
    { subject: "feedback", content: "We got your opinion", receivedDate: "2024-12-02" },
    { subject: "security", content: "Important account update", receivedDate: "2024-12-01" },
    { subject: "travel", content: "Flight is soon", receivedDate: "2024-12-15" },
    { subject: "travel", content: "Dont forget to buy gifts", receivedDate: "2024-12-13" },
    { subject: "promotion", content: "Now 20% off on everything", receivedDate: "2024-12-14" },
    { subject: "invoice", content: "Your payment is recived", receivedDate: "2024-12-08" },
    { subject: "feedback", content: "We value your opinion", receivedDate: "2024-12-02" }
];

const emailForm = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const contentInput = document.getElementById('content');
const emailList = document.getElementById('list');
const filterSelect = document.getElementById('filter');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newSubject = subjectInput.value;
    const newContent = contentInput.value;
    const currentDate = new Date().toISOString().split('T')[0];

    if (newSubject && newContent) {
        emails.push({ subject: newSubject, content: newContent, receivedDate: currentDate });
        renderEmails(filterSelect.value);
        emailForm.reset();
    } else {
        alert('Please fill in both fields.');
    }
    
});

function renderEmails(filter) {
    emailList.innerHTML = '';

    for (const email of emails) {
        if (filter === 'all' || email.subject.startsWith(filter)) {
            const li = document.createElement('li');
            li.textContent = `${email.subject}: ${email.content} (${email.receivedDate})`;
            emailList.appendChild(li);
        }
    }
    
}

filterSelect.addEventListener('change', function() {
    renderEmails(filterSelect.value);
});

renderEmails('all');