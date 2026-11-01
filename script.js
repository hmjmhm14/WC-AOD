document.addEventListener("DOMContentLoaded", function () {
    
    // --- Логика регистрации (на странице register_setup.html) ---
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const catName = document.getElementById("catName").value.trim();
            const tribe = document.getElementById("tribeSelect").value;

            if (!catName) {
                alert("Пожалуйста, введите имя кота!");
                return;
            }

            // Создаем объект кота
            const newCat = {
                name: catName,
                tribe: tribe,
                createdAt: new Date().toLocaleDateString()
            };

            // Сохраняем кота в localStorage браузера
            localStorage.setItem("catPlayer", JSON.stringify(newCat));

            alert(`Персонаж ${catName} успешно создан!`);
            
            // Перенаправляем в игру (можно заменить на вашу страницу game.html)
            window.location.href = "index.html";
        });
    }

    // --- Логика входа (на странице login.html) ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const loginUser = document.getElementById("loginUser").value.trim();

            // Проверяем, есть ли сохраненный кот
            const savedCat = localStorage.getItem("catPlayer");

            if (savedCat) {
                const cat = JSON.parse(savedCat);
                if (cat.name.toLowerCase() === loginUser.toLowerCase()) {
                    alert(`С возвращением, ${cat.name}!`);
                    window.location.href = "index.html"; // Игровая страница
                } else {
                    alert("Персонаж с таким именем не найден!");
                }
            } else {
                alert("Аккаунт не найден. Сначала зарегистрируйте кота!");
            }
        });
    }

});
