document.addEventListener("DOMContentLoaded", function () {
    
    // --- Логика регистрации (на странице register_setup.html) ---
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const catName = document.getElementById("catName").value.trim();
            const tribeSelect = document.getElementById("tribeSelect");
            // Получаем название выбранного племени
            const tribeName = tribeSelect.options[tribeSelect.selectedIndex].text;

            if (!catName) {
                alert("Пожалуйста, введите имя кота!");
                return;
            }

            // Создаем полный объект кота со стартовыми параметрами для профиля
            const newCat = {
                name: catName,
                tribe: tribeName,
                moons: 1, // Начальный возраст (1 луна)
                avatar: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop", // Дефолтное фото
                createdAt: new Date().toLocaleDateString()
            };

            // Сохраняем в localStorage браузера
            localStorage.setItem("catPlayer", JSON.stringify(newCat));

            alert(`Поздравляем с рождением персонажа, ${catName}!`);
            
            // Перенаправляем на страницу профиля и игры
            window.location.href = "profile.html";
        });
    }

    // --- Логика входа (на странице login.html) ---
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const loginUser = document.getElementById("loginUser").value.trim();

            // Проверяем, есть ли сохраненный кот в браузере
            const savedCat = localStorage.getItem("catPlayer");

            if (savedCat) {
                const cat = JSON.parse(savedCat);
                if (cat.name.toLowerCase() === loginUser.toLowerCase()) {
                    alert(`С возвращением, ${cat.name}!`);
                    // Перенаправляем на страницу профиля и игры
                    window.location.href = "profile.html";
                } else {
                    alert("Персонаж с таким именем не найден!");
                }
            } else {
                alert("Аккаунт не найден. Сначала зарегистрируйте кота!");
            }
        });
    }

});
