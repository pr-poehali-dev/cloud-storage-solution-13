const menuCategories = [
  {
    title: "ПЕЛЬМЕНИ",
    emoji: "🥟",
    items: [
      { name: "Пельмени свинина-говядина", price: "700 ₽", desc: "500 г" },
      { name: "Пельмени свинина-курица", price: "680 ₽", desc: "500 г" },
      { name: "Пельмени цветные куриные", price: "680 ₽", desc: "500 г" },
    ],
  },
  {
    title: "МАНТЫ",
    emoji: "🫕",
    items: [
      { name: "Манты свинина", price: "630 ₽", desc: "500 г" },
      { name: "Манты курица-картофель", price: "600 ₽", desc: "500 г" },
    ],
  },
  {
    title: "ВАРЕНИКИ",
    emoji: "🥙",
    items: [
      { name: "Вареники картофель-бекон-лук", price: "480 ₽", desc: "500 г" },
      { name: "Вареники творог-сыр-зелень", price: "450 ₽", desc: "500 г" },
      { name: "Вареники творог-вишня", price: "450 ₽", desc: "500 г" },
      { name: "Вареники капуста-фарш", price: "440 ₽", desc: "500 г" },
    ],
  },
  {
    title: "БЛИНЫ",
    emoji: "🫓",
    items: [
      { name: "Блины творог-вишня", price: "440 ₽", desc: "500 г" },
      { name: "Блины творог-зелень-сыр", price: "400 ₽", desc: "500 г" },
      { name: "Блины ветчина-сыр", price: "450 ₽", desc: "500 г" },
      { name: "Блины грибы-сыр-курица-сливки", price: "500 ₽", desc: "500 г" },
      { name: "Блины сладкие (сгущёнка, джем, шоколадная паста)", price: "380 ₽", desc: "500 г" },
      { name: "Блины Рафаэлло (творог-кокос-сгущёнка)", price: "450 ₽", desc: "500 г" },
    ],
  },
  {
    title: "ХИНКАЛИ",
    emoji: "🫙",
    items: [
      { name: "Хинкали свинина-говядина", price: "700 ₽", desc: "500 г" },
      { name: "Хинкали курица-сыр", price: "680 ₽", desc: "500 г" },
    ],
  },
  {
    title: "КОТЛЕТЫ",
    emoji: "🍖",
    items: [
      { name: "Котлеты свинина-говядина", price: "630 ₽", desc: "500 г" },
      { name: "Котлеты куриные", price: "590 ₽", desc: "500 г" },
      { name: "Котлеты куриные рубленые с цветной капустой и сыром", price: "550 ₽", desc: "500 г" },
      { name: "Котлеты куриные рубленые с кукурузой и моцареллой", price: "600 ₽", desc: "500 г" },
      { name: "Котлеты курица-индейка с брокколи", price: "650 ₽", desc: "500 г" },
    ],
  },
  {
    title: "КУРИНЫЕ ГНЁЗДА",
    emoji: "🍗",
    items: [
      { name: "Гнёзда Том Ям (грибы-лук-сметана-моцарелла-соус том ям)", price: "180 ₽ / шт", desc: "200 г" },
      { name: "Гнёзда Жульен (грибы-сыр-сливки-лук)", price: "180 ₽ / шт", desc: "200 г" },
      { name: "Гнёзда с ананасом-сыром-помидором", price: "160 ₽ / шт", desc: "200 г" },
      { name: "Гнёзда сулугуни-творог-зелень", price: "150 ₽ / шт", desc: "200 г" },
    ],
  },
  {
    title: "ДОЛМА И ГОЛУБЦЫ",
    emoji: "🥬",
    items: [
      { name: "Долма свинина-говядина (готовая)", price: "750 ₽", desc: "500 г" },
      { name: "Голубцы свинина-говядина", price: "650 ₽", desc: "500 г" },
      { name: "Голубцы курица-булгур", price: "600 ₽", desc: "500 г" },
    ],
  },
  {
    title: "СЫРНИКИ",
    emoji: "🧀",
    items: [
      { name: "Сырники мини ванильные", price: "550 ₽", desc: "500 г" },
      { name: "Сырники с изюмом", price: "500 ₽", desc: "500 г" },
      { name: "Сырники с маком и ягодным конфи", price: "580 ₽", desc: "500 г" },
      { name: "Сырники с вишней", price: "550 ₽", desc: "500 г" },
      { name: "Сырники с зеленью и сулугуни", price: "550 ₽", desc: "500 г" },
      { name: "Сырники с варёной сгущёнкой", price: "550 ₽", desc: "500 г" },
      { name: "Сырники с кокосом и сгущёнкой", price: "520 ₽", desc: "500 г" },
    ],
  },
];

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ХОЛОДОК</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ДОМАШНИЙ
              <br />
              ВКУС <span>без лишних трат</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Магазин полуфабрикатов ХОЛОДОК — настоящая еда как у мамы, только быстрее. Пельмени, котлеты, вареники и многое другое — всегда свежие и готовые за 15 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#menu">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Смотреть меню
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Наши адреса
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВКУСНО
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              БЕЗ ХИМИИ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПЕЛЬМЕНИ РУЧНОЙ ЛЕПКИ * КОТЛЕТЫ КАК У БАБУШКИ * ТОЛЬКО СВЕЖИЕ ПРОДУКТЫ * БЕЗ КОНСЕРВАНТОВ * ХИНКАЛИ И МАНТЫ * СЫРНИКИ И БЛИНЫ *
            ПЕЛЬМЕНИ РУЧНОЙ ЛЕПКИ * КОТЛЕТЫ КАК У БАБУШКИ * ТОЛЬКО СВЕЖИЕ ПРОДУКТЫ * БЕЗ КОНСЕРВАНТОВ * ХИНКАЛИ И МАНТЫ * СЫРНИКИ И БЛИНЫ
          </div>
        </div>

        {/* ПОЛНОЕ МЕНЮ */}
        <section id="menu" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ПОЛНОЕ МЕНЮ</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {menuCategories.map((cat) => (
              <div key={cat.title}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                  borderBottom: "3px solid var(--dark)",
                  paddingBottom: "12px",
                }}>
                  <span style={{ fontSize: "28px" }}>{cat.emoji}</span>
                  <h3 style={{
                    fontFamily: "'Unbounded', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 3vw, 28px)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.5px",
                  }}>{cat.title}</h3>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "2px",
                }}>
                  {cat.items.map((item) => (
                    <div key={item.name} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      padding: "14px 16px",
                      border: "2px solid var(--dark)",
                      background: "white",
                      gap: "12px",
                      transition: "0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "white")}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "14px", lineHeight: 1.3, marginBottom: "4px" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "12px", color: "#888" }}>{item.desc}</div>
                      </div>
                      <div style={{
                        fontFamily: "'Unbounded', sans-serif",
                        fontWeight: 800,
                        fontSize: "14px",
                        color: "var(--primary)",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">НАСТОЯЩАЯ ЕДА — ЭТО ПРОСТО.</h2>
            <p className="vibe-text">
              В ХОЛОДКЕ нет E-добавок и усилителей. Только мясо, тесто, овощи и немного любви. Мы готовим так, как готовили раньше — руками, с уважением к продукту. Заходи, выбирай, готовь дома как профи.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О магазине
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @HOLODOK.SHOP
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Фото 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ХОЛОДОК</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Магазин полуфабрикатов. Настоящая еда без лишних хлопот — как дома, только быстрее.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Доставка</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 20:00</li>
            <li>Сб–Вс: 10:00 – 19:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Адрес и контакты</h4>
          <ul>
            <li>г. Боготол</li>
            <li>ул. Кирова, 8а</li>
            <li style={{ marginTop: "8px" }}>
              <a href="tel:+79232809259" style={{ color: "inherit", textDecoration: "none" }}>
                +7 923 280-92-59
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}