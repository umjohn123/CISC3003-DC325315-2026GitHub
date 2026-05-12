document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    function validateName() {
        const name = nameInput.value.trim();
        const error = document.getElementById('nameError');
        if (name === '') {
            error.textContent = '请输入姓名';
            return false;
        } else if (name.length < 2) {
            error.textContent = '姓名至少2个字符';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const error = document.getElementById('emailError');
        const regex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        if (email === '') {
            error.textContent = '请输入电子邮箱';
            return false;
        } else if (!regex.test(email)) {
            error.textContent = '请输入有效的邮箱地址';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function validateSubject() {
        const subject = subjectInput.value.trim();
        const error = document.getElementById('subjectError');
        if (subject === '') {
            error.textContent = '请输入主题';
            return false;
        } else if (subject.length < 2) {
            error.textContent = '主题至少2个字符';
            return false;
        }
        error.textContent = '';
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        const error = document.getElementById('messageError');
        if (message === '') {
            error.textContent = '请输入消息内容';
            return false;
        } else if (message.length < 10) {
            error.textContent = '消息内容至少10个字符';
            return false;
        }
        error.textContent = '';
        return true;
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    subjectInput.addEventListener('input', validateSubject);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('submit', function(e) {
        const valid = validateName() && validateEmail() && validateSubject() && validateMessage();
        if (!valid) {
            e.preventDefault();
            alert('请正确填写所有字段');
        }
    });
});