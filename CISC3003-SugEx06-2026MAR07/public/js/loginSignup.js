document.addEventListener('DOMContentLoaded', function() {
            const loginTab = document.getElementById('login-tab');
            const signupTab = document.getElementById('signup-tab');
            const loginPane = document.getElementById('login-pane');
            const signupPane = document.getElementById('signup-pane');

            if (loginTab && signupTab && loginPane && signupPane) {
                loginTab.addEventListener('click', function() {
                    loginTab.classList.add('active');
                    signupTab.classList.remove('active');
                    loginPane.classList.add('active');
                    signupPane.classList.remove('active');
                });

                signupTab.addEventListener('click', function() {
                    signupTab.classList.add('active');
                    loginTab.classList.remove('active');
                    signupPane.classList.add('active');
                    loginPane.classList.remove('active');
                });
            }
        });