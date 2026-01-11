<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Цветочная лавка - Свежие цветы в Таллинне</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: linear-gradient(to bottom, #ffffff 0%, #fff5f8 100%);
            padding: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
            font-weight: bold;
            background: linear-gradient(to right, #ec4899, #be185d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(to bottom right, #f9a8d4, #be185d);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }

        nav a {
            margin-left: 30px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #ec4899;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #ffe6f0 0%, #fff 25%, #ffe6f0 50%, #fff 75%, #ffe6f0 100%);
            padding: 120px 20px;
            text-align: center;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before,
        .hero::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300') center/cover;
            opacity: 0.15;
            filter: blur(3px);
        }

        .hero::before {
            top: 50px;
            left: 50px;
        }

        .hero::after {
            bottom: 50px;
            right: 50px;
            background-image: url('https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=300');
        }

        .hero-content {
            position: relative;
            z-index: 10;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero .gradient-text {
            background: linear-gradient(to right, #ec4899, #be185d, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.5rem;
            margin-bottom: 40px;
            color: #555;
        }

        .btn {
            display: inline-block;
            padding: 18px 45px;
            background: linear-gradient(to right, #ec4899, #be185d);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
        }

        .btn-secondary {
            background: white;
            color: #ec4899;
            border: 2px solid #ec4899;
            margin-left: 15px;
        }

        .btn-secondary:hover {
            background: #fff0f6;
        }

        /* Features Section */
        .features {
            padding: 80px 20px;
            background: linear-gradient(to bottom, #ffffff 0%, #fff5f8 100%);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .feature {
            text-align: center;
        }

        .feature-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(to bottom right, #fce7f3, #fbcfe8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
            color: #ec4899;
            box-shadow: 0 4px 15px rgba(236, 72, 153, 0.2);
        }

        .feature h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .feature p {
            color: #666;
        }

        /* Bouquets Section */
        .bouquets {
            padding: 100px 20px;
            background: white;
            position: relative;
        }

        .bouquets::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, #ffe6f0 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, #ffe6f0 0%, transparent 50%);
            opacity: 0.3;
            pointer-events: none;
        }

        .section-title {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 15px;
            background: linear-gradient(to right, #ec4899, #be185d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.2rem;
            margin-bottom: 50px;
        }

        .bouquets-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
        }

        .bouquet-card {
            background: white;
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .bouquet-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .bouquet-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .bouquet-info {
            padding: 30px;
        }

        .bouquet-info h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .bouquet-info p {
            color: #666;
            margin-bottom: 20px;
            font-size: 0.95rem;
        }

        .bouquet-price {
            font-size: 1.8rem;
            font-weight: bold;
            color: #ec4899;
        }

        /* Reviews Section */
        .reviews {
            padding: 100px 20px;
            background: linear-gradient(to bottom, #fff5f8 0%, #ffffff 100%);
        }

        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 50px auto 0;
        }

        .review-card {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .stars {
            color: #fbbf24;
            font-size: 1.2rem;
            margin-bottom: 15px;
        }

        .review-text {
            color: #555;
            margin-bottom: 20px;
            line-height: 1.8;
        }

        .review-author {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
        }

        .review-name {
            font-weight: 600;
        }

        .review-date {
            color: #999;
        }

        /* Form Section */
        .form-section {
            padding: 100px 20px;
            background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
        }

        .form-section h2 {
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: white;
            text-align: center;
        }

        .form-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 50px;
            border-radius: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #333;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #fce7f3;
            border-radius: 15px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #ec4899;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .btn-submit {
            width: 100%;
            padding: 18px;
            background: linear-gradient(to right, #ec4899, #be185d);
            color: white;
            border: none;
            border-radius: 15px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .btn-submit:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
        }

        .btn-submit:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .spinner {
            width: 20px;
            height: 20px;
            border: 3px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            display: inline-block;
            margin-right: 10px;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .success-message {
            display: none;
            text-align: center;
            padding: 50px;
        }

        .success-message.show {
            display: block;
        }

        .checkmark-circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(to bottom right, #4ade80, #22c55e);
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: scaleIn 0.5s ease-out;
        }

        .checkmark {
            width: 50px;
            height: 50px;
            border: 5px solid white;
            border-top: none;
            border-left: none;
            transform: rotate(45deg);
            animation: checkmark 0.6s ease-out 0.3s both;
        }

        @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
        }

        @keyframes checkmark {
            from {
                height: 0;
                width: 0;
            }
            to {
                height: 50px;
                width: 50px;
            }
        }

        .success-text {
            font-size: 2rem;
            color: #333;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .success-subtext {
            font-size: 1.1rem;
            color: #666;
        }

        /* Contacts Section */
        .contacts {
            padding: 100px 20px;
            background: linear-gradient(135deg, #fff5f8 0%, #ffffff 50%, #fff5f8 100%);
        }

        .contacts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: 50px auto 0;
        }

        .contact-card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            display: flex;
            align-items: flex-start;
            gap: 20px;
        }

        .contact-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(to bottom right, #fce7f3, #fbcfe8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: #ec4899;
            flex-shrink: 0;
        }

        .contact-info h3 {
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .contact-info a {
            color: #ec4899;
            text-decoration: none;
            transition: color 0.3s;
        }

        .contact-info a:hover {
            color: #be185d;
        }

        /* Footer */
        footer {
            background: linear-gradient(to bottom right, #1f2937, #111827);
            color: white;
            padding: 60px 20px 30px;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-section h3 {
            margin-bottom: 20px;
            font-size: 1.3rem;
        }

        .footer-section p,
        .footer-section a {
            color: #9ca3af;
            text-decoration: none;
            display: block;
            margin-bottom: 10px;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-link {
            width: 45px;
            height: 45px;
            background: #374151;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            transition: all 0.3s;
        }

        .social-link:hover {
            background: #ec4899;
            transform: translateY(-3px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #374151;
            color: #9ca3af;
        }

        /* WhatsApp Button */
        .whatsapp-btn {
            background: linear-gradient(to right, #22c55e, #16a34a);
            display: inline-flex;
            align-items: center;
            gap: 10px;
            margin-top: 20px;
        }

        .whatsapp-btn:hover {
            background: linear-gradient(to right, #16a34a, #15803d);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.2rem;
            }

            nav {
                display: none;
            }

            .btn-secondary {
                margin-left: 0;
                margin-top: 15px;
            }

            .section-title {
                font-size: 2rem;
            }

            .form-container {
                padding: 30px 25px;
            }

            .bouquets-grid,
            .reviews-grid,
            .contacts-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }

            .btn {
                padding: 15px 35px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-content">
            <div class="logo">
                <div class="logo-icon">🌸</div>
                <span>Цветочная лавка</span>
            </div>
            <nav>
                <a href="#hero">Главная</a>
                <a href="#bouquets">Каталог</a>
                <a href="#about">О нас</a>
                <a href="#contacts">Контакты</a>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Свежие цветы<br><span class="gradient-text">для особенных моментов</span></h1>
            <p>Создаём уникальные букеты с любовью и заботой о каждой детали</p>
            <div>
                <a href="#form" class="btn">Заказать букет</a>
                <a href="#bouquets" class="btn btn-secondary">Смотреть каталог</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="container">
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">⏰</div>
                    <h3>Быстрая доставка</h3>
                    <p>От 2 часов по Таллинну</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🏆</div>
                    <h3>Свежесть гарантирована</h3>
                    <p>Только свежие цветы</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">👥</div>
                    <h3>Опытные флористы</h3>
                    <p>Более 10 лет опыта</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">💝</div>
                    <h3>С любовью</h3>
                    <p>Индивидуальный подход</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Bouquets Section -->
    <section class="bouquets" id="bouquets">
        <div class="container">
            <h2 class="section-title">Популярные букеты</h2>
            <p class="section-subtitle">Наши самые востребованные композиции</p>
            <div class="bouquets-grid">
                <div class="bouquet-card">
                    <img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=600&fit=crop" alt="Нежная романтика" class="bouquet-image">
                    <div class="bouquet-info">
                        <h3>Нежная романтика</h3>
                        <p>Изысканный букет из розовых роз и эвкалипта, идеальный для выражения романтических чувств.</p>
                        <div class="bouquet-price">от 35€</div>
                    </div>
                </div>
                <div class="bouquet-card">
                    <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop" alt="Весенний сад" class="bouquet-image">
                    <div class="bouquet-info">
                        <h3>Весенний сад</h3>
                        <p>Яркая композиция из тюльпанов, хризантем и зелени, создающая весеннее настроение.</p>
                        <div class="bouquet-price">от 28€</div>
                    </div>
                </div>
                <div class="bouquet-card">
                    <img src="https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=800&h=600&fit=crop" alt="Элегантность" class="bouquet-image">
                    <div class="bouquet-info">
                        <h3>Элегантность</h3>
                        <p>Роскошный букет белых роз с декором, подходящий для торжественных мероприятий.</p>
                        <div class="bouquet-price">от 42€</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews">
        <div class="container">
            <h2 class="section-title">Отзывы наших клиентов</h2>
            <div class="reviews-grid">
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p class="review-text">Замечательный магазин! Букет был свежим и красивым, доставили точно в срок в Таллинн.</p>
                    <div class="review-author">
                        <span class="review-name">Anna K.</span>
                        <span class="review-date">15.12.2024</span>
                    </div>
                </div>
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p class="review-text">Заказывал букет для жены. Всё учли, результат превзошёл ожидания!</p>
                    <div class="review-author">
                        <span class="review-name">Mikhail S.</span>
                        <span class="review-date">08.12.2024</span>
                    </div>
                </div>
                <div class="review-card">
                    <div class="stars">★★★★★</div>
                    <p class="review-text">Очень приятное обслуживание и качественные цветы.</p>
                    <div class="review-author">
                        <span class="review-name">Elena P.</span>
                        <span class="review-date">02.12.2024</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="features" id="about">
        <div class="container">
            <h2 class="section-title">О нас</h2>
            <p class="section-subtitle">Мы — команда профессиональных флористов с более чем 10-летним опытом</p>
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">📅</div>
                    <h3>2015</h3>
                    <p>Год основания</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">😊</div>
                    <h3>5000+</h3>
                    <p>Довольных клиентов</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">✅</div>
                    <h3>100%</h3>
                    <p>Свежие цветы</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Form Section -->
    <section class="form-section" id="form">
        <div class="container">
            <h2>Свяжитесь с нами</h2>
            <div class="form-container">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">Ваше имя</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Ваше сообщение</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit" id="submitBtn">
                        <span id="btnText">Отправить</span>
                    </button>
                </form>
                
                <div class="success-message" id="successMessage">
                    <div class="checkmark-circle">
                        <div class="checkmark"></div>
                    </div>
                    <div class="success-text">Успешно отправлено! ✓</div>
                    <div class="success-subtext">Мы свяжемся с вами в ближайшее время</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacts Section -->
    <section class="contacts" id="contacts">
        <div class="container">
            <h2 class="section-title">Контакты</h2>
            <p class="section-subtitle">Свяжитесь с нами любым удобным способом</p>
            <div class="contacts-grid">
                <div class="contact-card">
                    <div class="contact-icon">📞</div>
                    <div class="contact-info">
                        <h3>Телефон</h3>
                        <a href="tel:+37255587955">+372 5558 7955</a>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-info">
                        <h3>Email</h3>
                        <a href="mailto:info@lilled.ee">info@lilled.ee</a>
                    </div>
                </div>
                <div class="contact-card">
                    <div class="contact-icon">📍</div>
                    <div class="contact-info">
                        <h3>Адрес</h3>
                        <p>Tallinn, Narva mnt 5<br>10117, Estonia</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center;">
                <a href="https://wa.me/37255587955" class="btn whatsapp-btn">
                    💬 Написать в WhatsApp
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <div class="logo" style="color: white; -webkit-text-fill-color: white;">
                    <div class="logo-icon">🌸</div>
                    <span>Цветочная лавка</span>
                </div>
                <p style="margin-top: 15px;">
