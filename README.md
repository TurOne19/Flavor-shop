import React, { useState } from 'react';
import { Heart, Leaf, MapPin, Phone, Mail, MessageCircle, Clock, Award, Users, ChevronDown, ChevronUp, Star, Instagram, Facebook, Send } from 'lucide-react';

const FlowerShop = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBouquet, setSelectedBouquet] = useState(null);
  const [filterEvent, setFilterEvent] = useState('all');
  const [filterFlower, setFilterFlower] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const bouquets = [
    {
      id: 1,
      name: 'Нежная романтика',
      price: 'от 3500₽',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500',
      event: 'romance',
      flowers: 'roses',
      description: 'Изысканный букет из розовых роз и эвкалипта, идеальный для выражения романтических чувств'
    },
    {
      id: 2,
      name: 'Весенний сад',
      price: 'от 2800₽',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500',
      event: 'birthday',
      flowers: 'mixed',
      description: 'Яркая композиция из тюльпанов, хризантем и зелени, создающая весеннее настроение'
    },
    {
      id: 3,
      name: 'Элегантность',
      price: 'от 4200₽',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500',
      event: 'wedding',
      flowers: 'roses',
      description: 'Роскошный букет белых роз с декором, подходящий для торжественных мероприятий'
    },
    {
      id: 4,
      name: 'Солнечный день',
      price: 'от 2500₽',
      image: 'https://images.unsplash.com/photo-1477857965735-b8c7d0f96619?w=500',
      event: 'birthday',
      flowers: 'sunflowers',
      description: 'Жизнерадостная композиция из подсолнухов и полевых цветов'
    },
    {
      id: 5,
      name: 'Пионовая мечта',
      price: 'от 5000₽',
      image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500',
      event: 'romance',
      flowers: 'peonies',
      description: 'Роскошные пионы в нежно-розовых оттенках — воплощение романтики и красоты'
    },
    {
      id: 6,
      name: 'Лавандовое поле',
      price: 'от 3200₽',
      image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=500',
      event: 'anniversary',
      flowers: 'mixed',
      description: 'Ароматная композиция с лавандой и сиреневыми цветами'
    }
  ];

  const filteredBouquets = bouquets.filter(b => 
    (filterEvent === 'all' || b.event === filterEvent) &&
    (filterFlower === 'all' || b.flowers === filterFlower)
  );

  const reviews = [
    {
      id: 1,
      name: 'Анна К.',
      rating: 5,
      text: 'Замечательный магазин! Букет был свежим и красивым, доставили точно в срок. Обязательно вернусь!',
      date: '15.12.2024'
    },
    {
      id: 2,
      name: 'Михаил С.',
      rating: 5,
      text: 'Заказывал букет для жены на годовщину. Флористы учли все пожелания, результат превзошел ожидания!',
      date: '08.12.2024'
    },
    {
      id: 3,
      name: 'Елена П.',
      rating: 5,
      text: 'Очень приятное обслуживание и качественные цветы. Цены адекватные, ассортимент большой.',
      date: '02.12.2024'
    }
  ];

  const faqs = [
    {
      q: 'Как быстро вы можете доставить букет?',
      a: 'При наличии цветов в магазине, мы можем доставить букет в течение 2-3 часов. Для индивидуальных композиций потребуется от 4 до 24 часов.'
    },
    {
      q: 'Можно ли заказать букет по своему эскизу?',
      a: 'Да, наши флористы с радостью создадут букет по вашему эскизу или фотографии. Свяжитесь с нами для обсуждения деталей.'
    },
    {
      q: 'Какие районы вы обслуживаете?',
      a: 'Мы доставляем цветы по всему городу. Стоимость доставки зависит от района и рассчитывается индивидуально.'
    },
    {
      q: 'Как долго будут стоять цветы?',
      a: 'При правильном уходе наши букеты стоят от 7 до 14 дней. Мы даём рекомендации по уходу с каждым букетом.'
    }
  ];

  const ContactModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowContactModal(false)}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h3>
        <div className="space-y-4">
          <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300" />
          <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300" />
          <textarea placeholder="Сообщение" rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300"></textarea>
          <button className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl hover:shadow-lg transition-all">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <Leaf className="text-green-500" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Цветочная лавка</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition-colors`}>Главная</button>
            <button onClick={() => setCurrentPage('catalog')} className={`${currentPage === 'catalog' ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition-colors`}>Каталог</button>
            <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition-colors`}>О нас</button>
            <button onClick={() => setCurrentPage('delivery')} className={`${currentPage === 'delivery' ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition-colors`}>Доставка</button>
            <button onClick={() => setCurrentPage('contacts')} className={`${currentPage === 'contacts' ? 'text-pink-500' : 'text-gray-600'} hover:text-pink-500 transition-colors`}>Контакты</button>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-pink-500 transition-colors">
              <Phone size={20} />
              <span>+7 (495) 123-45-67</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-pink-50 to-rose-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1487070183336-b863922373d4?w=1200" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Свежие цветы<br />для особенных<br />моментов
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Создаём уникальные букеты с любовью и заботой о каждой детали
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowContactModal(true)} className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105">
                Связаться с нами
              </button>
              <a href="https://wa.me/74951234567" className="bg-green-500 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Свежие цветы каждый день</h3>
              <p className="text-gray-600">Ежедневные поставки прямо от лучших производителей</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Индивидуальный подход</h3>
              <p className="text-gray-600">Создаём букеты по вашим пожеланиям и предпочтениям</p>
            </div>
            <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Удобное расположение</h3>
              <p className="text-gray-600">Находимся в центре города с удобной парковкой</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Bouquets */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Популярные букеты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bouquets.slice(0, 3).map(bouquet => (
              <div key={bouquet.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer" onClick={() => { setSelectedBouquet(bouquet); setCurrentPage('bouquet'); }}>
                <img src={bouquet.image} alt={bouquet.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{bouquet.name}</h3>
                  <p className="text-2xl font-bold text-pink-500 mb-4">{bouquet.price}</p>
                  <button onClick={(e) => { e.stopPropagation(); setShowContactModal(true); }} className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl hover:shadow-lg transition-all">
                    Уточнить наличие
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setCurrentPage('catalog')} className="bg-white text-pink-500 px-8 py-3 rounded-xl border-2 border-pink-500 hover:bg-pink-50 transition-all">
              Смотреть весь каталог
            </button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Выбираете букет', desc: 'Из каталога или описываете свои пожелания' },
              { step: '2', title: 'Связываетесь с нами', desc: 'Через телефон, WhatsApp или форму на сайте' },
              { step: '3', title: 'Согласовываем детали', desc: 'Уточняем состав, цену и время доставки' },
              { step: '4', title: 'Получаете букет', desc: 'Доставляем или готовим к самовывозу' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Почему нам доверяют</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Индивидуальный подход</h4>
                  <p className="text-gray-600">Учитываем все пожелания и создаём уникальные композиции</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Пунктуальность</h4>
                  <p className="text-gray-600">Всегда доставляем вовремя, ценим ваше время</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Гарантия качества</h4>
                  <p className="text-gray-600">Если что-то не так — мы всё исправим</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Тысячи довольных клиентов</h4>
                  <p className="text-gray-600">Нам доверяют уже более 9 лет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DeliveryPage = () => (
    <div className="py-16 bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Доставка и информация</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Условия доставки</h2>
            <div className="space-y-4 text-gray-700">
              <p>Мы доставляем цветы по всему городу и ближайшим районам. Стоимость доставки зависит от удалённости адреса и рассчитывается индивидуально.</p>
              <div className="bg-pink-50 p-4 rounded-xl">
                <p className="font-semibold mb-2">Бесплатная доставка:</p>
                <p>При заказе от 5000₽ в пределах центра города</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border-l-4 border-pink-400 pl-4">
                  <p className="font-semibold mb-1">Стандартная доставка</p>
                  <p className="text-sm">300-800₽ в зависимости от района</p>
                  <p className="text-sm text-gray-500">Доставка в течение 4-6 часов</p>
                </div>
                <div className="border-l-4 border-rose-400 pl-4">
                  <p className="font-semibold mb-1">Срочная доставка</p>
                  <p className="text-sm">От 1000₽</p>
                  <p className="text-sm text-gray-500">Доставка в течение 2-3 часов</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-semibold text-gray-800">{faq.q}</span>
                    {expandedFaq === idx ? <ChevronUp className="text-pink-500" /> : <ChevronDown className="text-pink-500" />}
                  </button>
                  {expandedFaq === idx && (
                    <p className="mt-3 text-gray-600">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Время работы</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-xl">
                <span>Понедельник - Пятница</span>
                <span className="font-semibold">9:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-xl">
                <span>Суббота - Воскресенье</span>
                <span className="font-semibold">10:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactsPage = () => (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Контакты</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Наши контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Телефон</p>
                    <a href="tel:+74951234567" className="text-lg text-gray-700 hover:text-pink-500">+7 (495) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:info@flowers.ru" className="text-lg text-gray-700 hover:text-pink-500">info@flowers.ru</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Адрес</p>
                    <p className="text-lg text-gray-700">г. Москва, ул. Цветочная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-pink-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Время работы</p>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 21:00</p>
                    <p className="text-gray-700">Сб-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-pink-200">
                <p className="font-semibold text-gray-800 mb-4">Мессенджеры</p>
                <div className="flex space-x-4">
                  <a href="https://wa.me/74951234567" className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a href="https://t.me/flowers" className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors">
                    <Send size={20} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Напишите нам</h2>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 bg-white"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 bg-white"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 bg-white"
                />
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300 bg-white"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl hover:shadow-lg transition-all font-semibold">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Как нас найти</h2>
            <div className="bg-white rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-gray-300 mx-auto mb-4" size={64} />
                <p className="text-gray-500">Карта магазина</p>
                <p className="text-sm text-gray-400 mt-2">г. Москва, ул. Цветочная, д. 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="text-pink-400" size={28} />
              <span className="text-xl font-bold">Цветочная лавка</span>
            </div>
            <p className="text-gray-400">Создаём красоту и дарим радость с 2015 года</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block text-gray-400 hover:text-pink-400 transition-colors">Главная</button>
              <button onClick={() => setCurrentPage('catalog')} className="block text-gray-400 hover:text-pink-400 transition-colors">Каталог</button>
              <button onClick={() => setCurrentPage('about')} className="block text-gray-400 hover:text-pink-400 transition-colors">О нас</button>
              <button onClick={() => setCurrentPage('delivery')} className="block text-gray-400 hover:text-pink-400 transition-colors">Доставка</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@flowers.ru</p>
              <p>Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Соцсети</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/74951234567" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Цветочная лавка. Все права защищены.</p>
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
      {currentPage === 'delivery' && <DeliveryPage />}
      {currentPage === 'contacts' && <ContactsPage />}
      <Footer />
      {showContactModal && <ContactModal />}
    </div>
  );
};

export default FlowerShop;br from-pink-100 to-rose-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-pink-500" size={24} />
                    <span className="text-lg">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-pink-500" size={24} />
                    <span className="text-lg">info@flowers.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-pink-500" size={24} />
                    <span className="text-lg">г. Москва, ул. Цветочная, д. 15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-pink-500" size={24} />
                    <span className="text-lg">Пн-Вс: 9:00 - 21:00</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  <MapPin className="text-gray-400" size={48} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const CatalogPage = () => (
    <div className="py-16 bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Наш ассортимент</h1>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">По событию</label>
              <select value={filterEvent} onChange={(e) => setFilterEvent(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300">
                <option value="all">Все события</option>
                <option value="romance">Романтика</option>
                <option value="birthday">День рождения</option>
                <option value="wedding">Свадьба</option>
                <option value="anniversary">Годовщина</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">По цветам</label>
              <select value={filterFlower} onChange={(e) => setFilterFlower(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-300">
                <option value="all">Все цветы</option>
                <option value="roses">Розы</option>
                <option value="mixed">Микс</option>
                <option value="sunflowers">Подсолнухи</option>
                <option value="peonies">Пионы</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bouquets Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredBouquets.map(bouquet => (
            <div key={bouquet.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer" onClick={() => { setSelectedBouquet(bouquet); setCurrentPage('bouquet'); }}>
              <img src={bouquet.image} alt={bouquet.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{bouquet.name}</h3>
                <p className="text-2xl font-bold text-pink-500 mb-4">{bouquet.price}</p>
                <button onClick={(e) => { e.stopPropagation(); setShowContactModal(true); }} className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl hover:shadow-lg transition-all">
                  Написать нам
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BouquetPage = () => {
    if (!selectedBouquet) return null;
    
    return (
      <div className="py-16 bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('catalog')} className="text-pink-500 hover:text-pink-600 mb-6 flex items-center space-x-2">
            <span>← Вернуться к каталогу</span>
          </button>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src={selectedBouquet.image} alt={selectedBouquet.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedBouquet.name}</h1>
                <p className="text-3xl font-bold text-pink-500 mb-6">{selectedBouquet.price}</p>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selectedBouquet.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Leaf className="text-green-500" size={24} />
                    <span>Свежие цветы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-amber-500" size={24} />
                    <span>Профессиональная упаковка</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="text-pink-500" size={24} />
                    <span>Создано с любовью</span>
                  </div>
                </div>
                
                <button onClick={() => setShowContactModal(true)} className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-4 rounded-xl hover:shadow-xl transition-all text-lg font-semibold">
                  Связаться для заказа
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AboutPage = () => (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">О нас</h1>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Наша история</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Цветочная лавка была основана в 2015 году группой энтузиастов, влюблённых в цветы и флористику. 
              За эти годы мы выросли от небольшого магазинчика до одного из ведущих цветочных салонов города.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Наша миссия — дарить радость и красоту через уникальные цветочные композиции, 
              создавая незабываемые моменты для наших клиентов.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-pink-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Опытная команда</h3>
              <p className="text-gray-600">Профессиональные флористы с многолетним опытом</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Свежесть гарантирована</h3>
              <p className="text-gray-600">Только свежие цветы от проверенных поставщиков</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Качество премиум</h3>
              <p className="text-gray-600">Внимание к каждой детали в каждом букете</p>
            </div>
          </div>

          <div className="bg-gradient-to-