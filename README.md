import React, { useState } from 'react';
import {
  Heart,
  Leaf,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  Star,
  Instagram,
  Send,
  X,
  Check
} from 'lucide-react';

const FlowerShop = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBouquet, setSelectedBouquet] = useState(null);
  const [filterEvent, setFilterEvent] = useState('all');
  const [filterFlower, setFilterFlower] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bouquets = [
    {
      id: 1,
      name: 'Нежная романтика',
      price: 'от 35€',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=600&fit=crop',
      event: 'romance',
      flowers: 'roses',
      description: 'Изысканный букет из розовых роз и эвкалипта, идеальный для выражения романтических чувств.'
    },
    {
      id: 2,
      name: 'Весенний сад',
      price: 'от 28€',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop',
      event: 'birthday',
      flowers: 'mixed',
      description: 'Яркая композиция из тюльпанов, хризантем и зелени, создающая весеннее настроение.'
    },
    {
      id: 3,
      name: 'Элегантность',
      price: 'от 42€',
      image: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=800&h=600&fit=crop',
      event: 'wedding',
      flowers: 'roses',
      description: 'Роскошный букет белых роз с декором, подходящий для торжественных мероприятий.'
    },
    {
      id: 4,
      name: 'Солнечный день',
      price: 'от 25€',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=600&fit=crop',
      event: 'birthday',
      flowers: 'sunflowers',
      description: 'Жизнерадостная композиция из подсолнухов и полевых цветов.'
    },
    {
      id: 5,
      name: 'Пионовая мечта',
      price: 'от 50€',
      image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800&h=600&fit=crop',
      event: 'romance',
      flowers: 'peonies',
      description: 'Роскошные пионы в нежно-розовых оттенках — воплощение романтики и красоты.'
    },
    {
      id: 6,
      name: 'Лавандовое поле',
      price: 'от 32€',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop',
      event: 'anniversary',
      flowers: 'mixed',
      description: 'Ароматная композиция с лавандой и сиреневыми цветами.'
    }
  ];

  const filteredBouquets = bouquets.filter(
    b =>
      (filterEvent === 'all' || b.event === filterEvent) &&
      (filterFlower === 'all' || b.flowers === filterFlower)
  );

  const reviews = [
    {
      id: 1,
      name: 'Anna K.',
      rating: 5,
      text: 'Замечательный магазин! Букет был свежим и красивым, доставили точно в срок.',
      date: '15.12.2024'
    },
    {
      id: 2,
      name: 'Mikhail S.',
      rating: 5,
      text: 'Заказывал букет для жены. Всё учли, результат превзошёл ожидания!',
      date: '08.12.2024'
    },
    {
      id: 3,
      name: 'Elena P.',
      rating: 5,
      text: 'Очень приятное обслуживание и качественные цветы.',
      date: '02.12.2024'
    }
  ];

  const faqs = [
    {
      q: 'Как быстро вы можете доставить букет?',
      a: 'При наличии цветов в наличии — в течение 2–3 часов по Таллинну. Индивидуальные букеты на заказ — до 24 часов.'
    },
    {
      q: 'Можно ли заказать букет по своему эскизу?',
      a: 'Да, наши опытные флористы с радостью создадут букет по вашему фото, эскизу или описанию.'
    },
    {
      q: 'Как долго стоят цветы?',
      a: 'При правильном уходе наши букеты остаются свежими от 7 до 14 дней. Мы прилагаем инструкции по уходу.'
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Быстрая доставка',
      text: 'От 2 часов по Таллинну'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Свежесть гарантирована',
      text: 'Только свежие цветы'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Опытные флористы',
      text: 'Более 10 лет опыта'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'С любовью',
      text: 'Индивидуальный подход'
    }
  ];

  const sendToTelegram = async (formData) => {
    const botToken = '8275112739:AAFKoB78mXAvPxSo5lv9uuM382JDcoWUH_0';
    const chatId = '8146157246';
    
    const message = `🌸 НОВАЯ ЗАЯВКА С САЙТА 🌸

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message}
${formData.bouquet ? `🌹 Букет: ${formData.bouquet}` : ''}
⏰ Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Tallinn' })}`;

    try {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      console.log('Отправка в Telegram...');
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });

      const result = await response.json();
      console.log('Telegram response:', result);
      
      return response.ok;
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      return false;
    }
  };

  const ContactModal = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      message: '',
      bouquet: selectedBouquet?.name || ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      const success = await sendToTelegram(formData);
      
      setIsSubmitting(false);
      
      if (success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setShowContactModal(false);
          setFormSubmitted(false);
          setFormData({ name: '', phone: '', message: '', bouquet: '' });
        }, 2500);
      } else {
        alert('Произошла ошибка. Попробуйте позвонить нам напрямую.');
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={() => setShowContactModal(false)}
      >
        <div
          className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
          onClick={e => e.stopPropagation()}
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #ffe6f0 100%)'
          }}
        >
          <button
            onClick={() => setShowContactModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {!formSubmitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Свяжитесь с нами</h3>
                <p className="text-gray-600 text-sm mt-2">Мы ответим в течение 15 минут</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none bg-white"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none bg-white"
                  placeholder="Телефон"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <textarea
                  className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none resize-none bg-white"
                  rows="4"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-xl transition-all font-medium shadow-lg disabled:opacity-50 relative"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Отправка...
                    </div>
                  ) : (
                    'Отправить'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-gray-800">Успешно! ✓</h3>
              <p className="text-gray-600 text-lg">Ваша заявка получена!</p>
              <p className="text-gray-500 text-sm mt-2">Мы свяжемся с вами в ближайшее время</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Header = () => (
    <header className="sticky top-0 bg-white shadow-md z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Цветочная лавка
            </span>
          </div>

          <nav className="space-x-8 hidden md:flex">
            {['home', 'catalog', 'about', 'contacts'].map(p => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`font-medium transition-colors ${
                  currentPage === p
                    ? 'text-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                {p === 'home' ? 'Главная' : p === 'catalog' ? 'Каталог' : p === 'about' ? 'О нас' : 'Контакты'}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            {['home', 'catalog', 'about', 'contacts'].map(p => (
              <button
                key={p}
                onClick={() => {
                  setCurrentPage(p);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded-lg ${
                  currentPage === p ? 'bg-pink-50 text-pink-500' : 'text-gray-700'
                }`}
              >
                {p === 'home' ? 'Главная' : p === 'catalog' ? 'Каталог' : p === 'about' ? 'О нас' : 'Контакты'}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );

  const HomePage = () => (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Свежие цветы<br />
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                для особенных моментов
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Создаём уникальные букеты с любовью и заботой о каждой детали
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-2xl font-medium transition-all transform hover:scale-105 shadow-xl"
              >
                Заказать букет
              </button>
              <button
                onClick={() => setCurrentPage('catalog')}
                className="bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-4 rounded-2xl font-medium transition-all transform hover:scale-105 shadow-xl"
              >
                Смотреть каталог
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full text-pink-500 mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Популярные букеты
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Наши самые востребованные композиции
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {bouquets.slice(0, 3).map(b => (
              <div
                key={b.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all hover:scale-105"
                onClick={() => {
                  setSelectedBouquet(b);
                  setCurrentPage('bouquet');
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{b.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{b.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-pink-500 text-2xl font-bold">{b.price}</p>
                    <button className="text-pink-500 hover:text-pink-600 font-medium">
                      Подробнее →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('catalog')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-2xl font-medium transition-all shadow-lg"
            >
              Смотреть все букеты
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Отзывы наших клиентов
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const CatalogPage = () => (
    <section className="py-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Каталог букетов
          </span>
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Выберите идеальный букет для вашего особенного случая
        </p>

        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center">
          <div>
            <label className="block text-sm font-medium mb-2">Событие:</label>
            <select
              className="border-2 border-pink-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none bg-white"
              value={filterEvent}
              onChange={e => setFilterEvent(e.target.value)}
            >
              <option value="all">Все события</option>
              <option value="romance">Романтика</option>
              <option value="birthday">День рождения</option>
              <option value="wedding">Свадьба</option>
              <option value="anniversary">Годовщина</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Цветы:</label>
            <select
              className="border-2 border-pink-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none bg-white"
              value={filterFlower}
              onChange={e => setFilterFlower(e.target.value)}
            >
              <option value="all">Все цветы</option>
              <option value="roses">Розы</option>
              <option value="peonies">Пионы</option>
              <option value="sunflowers">Подсолнухи</option>
              <option value="mixed">Микс</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredBouquets.map(b => (
            <div
              key={b.id}
              onClick={() => {
                setSelectedBouquet(b);
                setCurrentPage('bouquet');
              }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{b.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{b.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-pink-500 text-2xl font-bold">{b.price}</p>
                  <button className="text-pink-500 hover:text-pink-600 font-medium">
                    Подробнее →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBouquets.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">По выбранным фильтрам букеты не найдены</p>
            <button
              onClick={() => {
                setFilterEvent('all');
                setFilterFlower('all');
              }}
              className="mt-4 text-pink-500 hover:text-pink-600 font-medium"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </section>
  );

  const BouquetPage = () =>
    selectedBouquet && (
      <section className="py-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('catalog')}
            className="mb-8 flex items-center text-pink-500 hover:text-pink-600 font-medium"
          >
            ← Назад к каталогу
          </button>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={selectedBouquet.image}
                alt={selectedBouquet.name}
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4">{selectedBouquet.name}</h1>
              <p className="text-3xl text-pink-500 font-bold mb-6">{selectedBouquet.price}</p>
              <p className="text-gray-700 text-lg mb-8">{selectedBouquet.description}</p>

              <div className="space-y-4 mb-8 bg-pink-50 p-6 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Свежие цветы</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Бесплатная открытка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Доставка от 2 часов</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 rounded-2xl font-medium transition-all text-lg shadow-lg"
                >
                  Заказать букет
                </button>
                <a
                  href="https://wa.me/37255587955"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-medium transition-all text-lg shadow-lg"
                >
                  <MessageCircle />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  const AboutPage = () => (
    <section className="py-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            О нас
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 text-lg mb-12">
            Мы — команда профессиональных флористов с более чем 10-летним опытом
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Наша история</h2>
            <p className="text-gray-700 mb-4">
              С 2015 года мы создаём букеты, которые дарят эмоции и радость.
            </p>
            <p className="text-gray-700">
              Мы работаем только со свежими цветами от проверенных поставщиков.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-pink-500 mb-2">2015</div>
              <div className="text-gray-600">Год основания</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-pink-500 mb-2">5000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-600">Свежие цветы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactsPage = () => (
    <section className="py-16 min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Контакты
          </span>
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium mb-1">Телефон</div>
                  <a href="tel:+37255587955" className="text-pink-500 hover:text-pink-600">
                    +372 5558 7955
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:info@lilled.ee" className="text-pink-500 hover:text-pink-600">
                    info@lilled.ee
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium mb-1">Адрес</div>
                  <p className="text-gray-600">Tallinn, Narva mnt 5</p>
                  <p className="text-gray-600">10117, Estonia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-medium mb-1">Режим работы</div>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="font-medium mb-4">Социальные сети</div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/turroma19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center hover:from-pink-200 hover:to-rose-200 transition-all"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
                <a
                  href="https://wa.me/37255587955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center hover:from-green-200 hover:to-green-300 transition-all"
                >
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  name: formData.get('name'),
                  phone: formData.get('phone'),
                  message: formData.get('message')
                };
                
                setIsSubmitting(true);
                const success = await sendToTelegram(data);
                setIsSubmitting(false);
                
                if (success) {
                  setFormSubmitted(true);
                  setTimeout(() => {
                    setFormSubmitted(false);
                    e.target.reset();
                  }, 3000);
                } else {
                  alert('Произошла ошибка. Попробуйте позвонить нам напрямую.');
                }
              }}
              className="space-y-4"
            >
              {!formSubmitted ? (
                <>
                  <input
                    name="name"
                    className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none"
                    placeholder="Ваше имя"
                    required
                  />
                  <input
                    name="phone"
                    className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none"
                    type="tel"
                    placeholder="Телефон"
                    required
                  />
                  <textarea
                    name="message"
                    className="w-full border-2 border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none resize-none"
                    rows="5"
                    placeholder="Ваше сообщение"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Отправить сообщение
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Успешно! ✓</h3>
                  <p className="text-gray-600">Ваше сообщение отправлено</p>
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              Как нас найти
            </span>
          </h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.5419834794958!2d24.751644315674825!3d59.43696818167638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb3d9d4aa8a5%3A0x5c4e8c8b8f8b8b8b!2sNarva%20mnt%205%2C%2010117%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения магазина"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Цветочная лавка</span>
            </div>
            <p className="text-gray-400 text-sm">
              Создаём букеты с любовью с 2015 года
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <div className="space-y-2">
              <button
                onClick={() => setCurrentPage('catalog')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => setCurrentPage('contacts')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>+372 5558 7955</p>
              <p>info@lilled.ee</p>
              <p>Tallinn, Narva mnt 5</p>
              <p>Estonia</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/turroma19"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/37255587955"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          © 2025 Цветочная лавка Tallinn. Все права защищены.
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'catalog' && <CatalogPage />}
      {currentPage === 'bouquet' && <BouquetPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contacts' && <ContactsPage />}
      <Footer />
      {showContactModal && <ContactModal />}
    </div>
  );
};

export default FlowerShop;
