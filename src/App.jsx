import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouseChimney, faBars, faLightbulb, faFan, faLock, faTemperatureHigh, 
  faEnvelope, faPhone, faCheckCircle, faChevronRight, faTools, faWrench,
  faShieldAlt, faCog, faUsers, faAward, faClock, faHeadset
} from '@fortawesome/free-solid-svg-icons';
import './App.css'; 

// ----------------------------------------------------------------------
// 1. Компонент Header
// ----------------------------------------------------------------------

const Header = ({ setCurrentPage }) => (
  <header className="header-container">
    <div className="logo" onClick={() => setCurrentPage('home')}>
      <FontAwesomeIcon icon={faHouseChimney} className="logo-icon" /> SmartHome Pro
    </div>
    <nav className="nav-links">
      <a onClick={() => setCurrentPage('home')} href="#home">Головна</a>
      <a onClick={() => setCurrentPage('home')} href="#services">Послуги</a>
      <a onClick={() => setCurrentPage('products')} href="#products">Пакети</a>
      <a onClick={() => setCurrentPage('home')} href="#about">Про Нас</a>
      <a onClick={() => setCurrentPage('home')} href="#contact">Контакти</a>
    </nav>
    <div className="header-actions">
      <button className="cta-button">Замовити Консультацію</button>
      <button className="menu-toggle">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  </header>
);

// ----------------------------------------------------------------------
// 2. Компонент HeroSection
// ----------------------------------------------------------------------

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>
        Професійне Встановлення <br />
        <span className="highlight">Розумного Будинку</span>
      </h1>
      <p>
        Експертна команда з 10+ років досвіду встановлює та обслуговує 
        інтелектуальні системи для вашого комфорту та безпеки.
      </p>
      <div className="hero-buttons">
        <button className="main-cta">Замовити Консультацію</button>
        <button className="secondary-cta">Наші Проекти</button>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Встановлених Систем</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Років Досвіду</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Підтримка</span>
        </div>
      </div>
    </div>
    <div className="hero-image">
        <div className="mockup-screen">
          <FontAwesomeIcon icon={faTools} size="3x" />
          <p>Професійне Встановлення</p>
        </div>
    </div>
  </section>
);

// ----------------------------------------------------------------------
// 3. Секція Послуг
// ----------------------------------------------------------------------

const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="page-header">
      <h2>Наші Послуги</h2>
      <p>Повний спектр послуг для створення вашого розумного будинку</p>
    </div>
    <div className="services-grid">
      <div className="service-card">
        <FontAwesomeIcon icon={faTools} className="service-icon" />
        <h3>Встановлення</h3>
        <p>Професійне встановлення всіх компонентів системи розумного будинку</p>
        <ul>
          <li>Планування та проектування</li>
          <li>Монтаж обладнання</li>
          <li>Налаштування системи</li>
          <li>Тестування та запуск</li>
        </ul>
      </div>
      <div className="service-card">
        <FontAwesomeIcon icon={faWrench} className="service-icon" />
        <h3>Обслуговування</h3>
        <p>Регулярне технічне обслуговування для стабільної роботи</p>
        <ul>
          <li>Профілактичні перевірки</li>
          <li>Оновлення програмного забезпечення</li>
          <li>Ремонт та заміна компонентів</li>
          <li>Технічна підтримка 24/7</li>
        </ul>
      </div>
      <div className="service-card">
        <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
        <h3>Безпека</h3>
        <p>Комплексні рішення для захисту вашого будинку</p>
        <ul>
          <li>Системи відеоспостереження</li>
          <li>Датчики руху та відкриття</li>
          <li>Системи пожежогасіння</li>
          <li>Моніторинг 24/7</li>
        </ul>
      </div>
    </div>
  </section>
);

// ----------------------------------------------------------------------
// 4. Секція Про Компанію
// ----------------------------------------------------------------------

const AboutSection = () => (
  <section id="about" className="about-section">
    <div className="page-header">
      <h2>Про Нашу Компанію</h2>
      <p>10+ років досвіду в галузі розумних технологій</p>
    </div>
    <div className="about-content">
      <div className="about-text">
        <h3>Наша Місія</h3>
        <p>
          Ми створюємо інтелектуальні рішення для дому, які роблять життя 
          комфортнішим, безпечнішим та енергоефективнішим. Наша команда 
          експертів забезпечує професійне встановлення та надійне обслуговування.
        </p>
        <div className="about-features">
          <div className="feature-item">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <div>
              <h4>Досвідчена команда</h4>
              <p>Сертифіковані спеціалісти з багаторічним досвідом</p>
            </div>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faAward} className="feature-icon" />
            <div>
              <h4>Якісне обладнання</h4>
              <p>Тільки перевірені бренди та найновіші технології</p>
            </div>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faClock} className="feature-icon" />
            <div>
              <h4>Швидке встановлення</h4>
              <p>Мінімальні терміни без втрати якості</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-box">
          <span className="stat-number">500+</span>
          <span className="stat-label">Задоволених клієнтів</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">10+</span>
          <span className="stat-label">Років на ринку</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Техпідтримка</span>
        </div>
      </div>
    </div>
  </section>
);

// ----------------------------------------------------------------------
// 5. Секція Пакетів Послуг
// ----------------------------------------------------------------------

const productsData = [
    {
        name: "Стандартний Пакет",
        price: 1500,
        features: ["Встановлення освітлення", "2 розумні розетки", "Мобільний додаток", "Гарантія 1 рік", "Техпідтримка"],
        isFeatured: false
    },
    {
        name: "Преміум Пакет",
        price: 3500,
        features: ["Повна автоматизація", "Система безпеки", "Клімат-контроль", "Гарантія 2 роки", "Піоритетна підтримка"],
        isFeatured: true
    },
    {
        name: "Бізнес Пакет",
        price: 7500,
        features: ["Преміум пакет +", "Енергомоніторинг", "Інтеграція з офісом", "Гарантія 3 роки", "Особистий менеджер"],
        isFeatured: false
    }
];

const ProductCard = ({ product }) => (
    <div className={`product-card ${product.isFeatured ? 'featured' : ''}`}>
        {product.isFeatured && <div className="badge">Найкращий Вибір</div>}
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">
            {product.price.toLocaleString()}₴<span className="price-term">/повний пакет</span>
        </p>
        <ul className="product-features">
            {product.features.map((feature, index) => (
                <li key={index}>
                    <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                    {feature}
                </li>
            ))}
        </ul>
        <button className="buy-button">
            Замовити Пакет <FontAwesomeIcon icon={faChevronRight} />
        </button>
    </div>
);

const ProductsPage = ({ setCurrentPage }) => (
    <section id="products" className="products-page">
        <div className="page-header">
            <button 
                className="back-button" 
                onClick={() => setCurrentPage('home')}
            >
                ← Назад до головної
            </button>
            <h2>Оберіть Свій Пакет SmartHome</h2>
            <p>Персоналізуйте свою систему відповідно до потреб вашого будинку.</p>
        </div>
        <div className="products-grid">
            {productsData.map((p, index) => <ProductCard key={index} product={p} />)}
        </div>
    </section>
);

// ----------------------------------------------------------------------
// 6. Компонент Footer
// ----------------------------------------------------------------------

const Footer = () => (
    <footer id="contact" className="footer-container">
        <div className="footer-content">
            <div className="footer-logo">
                <FontAwesomeIcon icon={faHouseChimney} className="footer-logo-icon" />
                SmartHome Pro
            </div>
            <div className="footer-contact">
                <h4>Зв'яжіться з нами</h4>
                <p><FontAwesomeIcon icon={faPhone} /> +380 44 123 4567</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> info@smarthome.ua</p>
                <p><FontAwesomeIcon icon={faHeadset} /> Підтримка 24/7</p>
            </div>
            <div className="footer-links">
                <h4>Наші послуги</h4>
                <p><a href="#services">Встановлення</a></p>
                <p><a href="#services">Обслуговування</a></p>
                <p><a href="#products">Пакети</a></p>
            </div>
            <div className="footer-company">
                <h4>Компанія</h4>
                <p><a href="#about">Про нас</a></p>
                <p><a href="#security">Гарантії</a></p>
                <p><a href="#contact">Контакти</a></p>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <p>&copy; {new Date().getFullYear()} SmartHome Pro. Всі права захищено.</p>
                <p>Професійне встановлення розумних систем</p>
            </div>
        </div>
    </footer>
);

// ----------------------------------------------------------------------
// Головний Компонент App
// ----------------------------------------------------------------------

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'products') {
      return <ProductsPage setCurrentPage={setCurrentPage} />;
    }
    return (
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <section id="security" className="security-section">
            <h2>Надійність та Безпека</h2>
            <p>Наші системи забезпечують цілодобовий захист вашого майна та даних.</p>
        </section>
      </>
    );
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;