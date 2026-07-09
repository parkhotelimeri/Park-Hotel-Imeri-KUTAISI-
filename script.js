/* =============================================
   IMERI HOTEL — JAVASCRIPT
   Multilingual | Dark/Light | Booking | Animations
   ============================================= */
/* ══════════════════════════════════════
   TRANSLATIONS
   ══════════════════════════════════════ */
const i18n = {
  en: {
    nav_about:      "About",
    nav_rooms:      "Rooms",
    nav_amenities:  "Amenities",
    nav_book:       "Book",
    nav_contact:    "Contact",
    hero_pre:       "Kutaisi · Georgia",
    hero_sub:       "Where Georgian Elegance Meets Modern Comfort",
    hero_cta_book:  "Book a Stay",
    hero_cta_explore:"Explore",
    scroll:         "Scroll",
    about_label:    "Our Story",
    about_title:    "Nestled in the Heart of Kutaisi",
    about_body1:    "Imeri Hotel is a refined boutique retreat in the historic city of Kutaisi — Georgia's ancient capital. Inspired by the warmth and tradition of the Caucasus, every detail of Imeri has been thoughtfully crafted to offer you an unforgettable stay.",
    about_body2:    "From our elegantly appointed rooms to our curated dining experiences, we invite you to discover the magic of Georgia in unparalleled style and comfort.",
    about_badge:    "Boutique Hotel",
    stat_rooms:     "Rooms",
    stat_service:   "Service",
    stat_years:     "Years",
    rooms_label:    "Accommodation",
    rooms_title:    "Our Rooms & Suites",
    room_popular:   "Popular",
    room_best:      "Best Value",
    room_luxury:    "Luxury",
    room1_name:     "Classic Room",
    room1_desc:     "Cozy and elegant with all essential comforts. Perfect for solo travelers and couples seeking a refined retreat.",
    room2_name:     "Deluxe Room",
    room2_desc:     "Spacious interiors with premium furnishings, a city view balcony, and a luxurious en-suite bathroom.",
    room3_name:     "Imeri Suite",
    room3_desc:     "Our flagship suite — a full living room, panoramic views of Kutaisi, private jacuzzi, and exclusive concierge service.",
    per_night:      "/ night",
    book_now:       "Book Now",
    amenities_label:"What We Offer",
    amenities_title:"Hotel Amenities",
    am1_title:      "Restaurant & Bar",
    am1_desc:       "Traditional Georgian cuisine with a modern twist. Wine cellar with finest Kakheti vintages.",
    am2_title:      "Wellness & Spa",
    am2_desc:       "Full-service spa with massages, steam room, and traditional Georgian sulfur bath experiences.",
    am3_title:      "Fitness Center",
    am3_desc:       "Modern gym equipped with premium machines, open 24 hours for hotel guests.",
    am4_title:      "Free Parking",
    am4_desc:       "Secure, covered parking available for all guests at no additional charge.",
    am5_title:      "High-Speed Wi-Fi",
    am5_desc:       "Complimentary fibre-optic internet throughout all areas of the hotel.",
    am6_title:      "City Tours",
    am6_desc:       "Guided tours to Bagrati Cathedral, Gelati Monastery, and Prometheus Cave.",
    booking_label:  "Reservations",
    booking_title:  "Book Your Stay",
    booking_subtitle:"Fill in the form below and we'll confirm your reservation within 2 hours.",
    label_fname:    "First Name",
    label_lname:    "Last Name",
    label_email:    "Email Address",
    label_phone:    "Phone Number",
    label_checkin:  "Check-In",
    label_checkout: "Check-Out",
    label_room:     "Room Type",
    label_guests:   "Number of Guests",
    label_requests: "Special Requests",
    select_room:    "— Select Room —",
    submit_book:    "Confirm Reservation",
    success_title:  "Reservation Received!",
    success_body:   "Thank you! We'll confirm your booking within 2 hours via email or phone.",
    success_again:  "Make Another Booking",
    contact_label:  "Get in Touch",
    contact_title:  "Contact Us",
    contact_addr_title:"Address",
    contact_addr:   "Your Street, Kutaisi, Georgia",
    contact_phone_title:"Phone",
    contact_email_title:"Email",
    contact_hours_title:"Reception Hours",
    contact_hours:  "24 / 7",
    footer_tagline: "Georgian Hospitality Redefined.",
    footer_copy:    "© 2025 Imeri Hotel. All rights reserved.",
    err_required:   "This field is required.",
    err_email:      "Please enter a valid email.",
    err_dates:      "Check-out must be after check-in.",
  },
  ru: {
    nav_about:      "О нас",
    nav_rooms:      "Номера",
    nav_amenities:  "Удобства",
    nav_book:       "Бронь",
    nav_contact:    "Контакты",
    hero_pre:       "Кутаиси · Грузия",
    hero_sub:       "Где грузинское изящество встречает современный комфорт",
    hero_cta_book:  "Забронировать",
    hero_cta_explore:"Узнать больше",
    scroll:         "Прокрутить",
    about_label:    "Наша история",
    about_title:    "В сердце Кутаиси",
    about_body1:    "Отель Imeri — изысканный бутик-отель в историческом городе Кутаиси — древней столице Грузии. Вдохновлённый теплом и традициями Кавказа, каждая деталь Imeri тщательно продумана для незабываемого пребывания.",
    about_body2:    "От элегантных номеров до ресторана с грузинскими гастрономическими впечатлениями — мы приглашаем вас открыть магию Грузии в сочетании стиля и комфорта.",
    about_badge:    "Бутик-отель",
    stat_rooms:     "Номеров",
    stat_service:   "Сервис",
    stat_years:     "Лет",
    rooms_label:    "Размещение",
    rooms_title:    "Номера и апартаменты",
    room_popular:   "Популярный",
    room_best:      "Лучшая цена",
    room_luxury:    "Люкс",
    room1_name:     "Классический номер",
    room1_desc:     "Уютный и элегантный с основными удобствами. Идеально для одиноких путешественников и пар.",
    room2_name:     "Делюкс номер",
    room2_desc:     "Просторный интерьер с премиальной мебелью, балконом с видом на город и роскошной ванной комнатой.",
    room3_name:     "Люкс Imeri",
    room3_desc:     "Наш флагманский люкс — гостиная, панорамный вид на Кутаиси, джакузи и консьерж-сервис.",
    per_night:      "/ ночь",
    book_now:       "Забронировать",
    amenities_label:"Что мы предлагаем",
    amenities_title:"Удобства отеля",
    am1_title:      "Ресторан и бар",
    am1_desc:       "Традиционная грузинская кухня в современной интерпретации. Винный погреб с кахетинскими винами.",
    am2_title:      "СПА и велнес",
    am2_desc:       "Полный спектр спа-услуг: массаж, паровая комната и грузинские серные ванны.",
    am3_title:      "Фитнес-центр",
    am3_desc:       "Современный тренажёрный зал с премиальным оборудованием, открытый 24 часа.",
    am4_title:      "Бесплатная парковка",
    am4_desc:       "Закрытая охраняемая парковка для всех гостей без дополнительной платы.",
    am5_title:      "Высокоскоростной Wi-Fi",
    am5_desc:       "Бесплатный оптоволоконный интернет во всех зонах отеля.",
    am6_title:      "Экскурсии по городу",
    am6_desc:       "Экскурсии в Багратский собор, монастырь Гелати и пещеру Прометея.",
    booking_label:  "Бронирование",
    booking_title:  "Забронировать номер",
    booking_subtitle:"Заполните форму и мы подтвердим вашу бронь в течение 2 часов.",
    label_fname:    "Имя",
    label_lname:    "Фамилия",
    label_email:    "Email адрес",
    label_phone:    "Номер телефона",
    label_checkin:  "Дата заезда",
    label_checkout: "Дата выезда",
    label_room:     "Тип номера",
    label_guests:   "Количество гостей",
    label_requests: "Особые пожелания",
    select_room:    "— Выберите номер —",
    submit_book:    "Подтвердить бронь",
    success_title:  "Заявка получена!",
    success_body:   "Спасибо! Мы подтвердим вашу бронь в течение 2 часов по email или телефону.",
    success_again:  "Новая бронь",
    contact_label:  "Связаться с нами",
    contact_title:  "Контакты",
    contact_addr_title:"Адрес",
    contact_addr:   "Ваша улица, Кутаиси, Грузия",
    contact_phone_title:"Телефон",
    contact_email_title:"Email",
    contact_hours_title:"Приёмная",
    contact_hours:  "24 / 7",
    footer_tagline: "Грузинское гостеприимство переосмыслено.",
    footer_copy:    "© 2025 Отель Imeri. Все права защищены.",
    err_required:   "Это поле обязательно.",
    err_email:      "Введите корректный email.",
    err_dates:      "Дата выезда должна быть позже даты заезда.",
  },
  ka: {
    nav_about:      "ჩვენ შესახებ",
    nav_rooms:      "ნომრები",
    nav_amenities:  "სერვისები",
    nav_book:       "დაჯავშნა",
    nav_contact:    "კონტაქტი",
    hero_pre:       "ქუთაისი · საქართველო",
    hero_sub:       "სადაც ქართული სიმდიდრე თანამედროვე კომფორტს ხვდება",
    hero_cta_book:  "დაჯავშნე",
    hero_cta_explore:"გაიგე მეტი",
    scroll:         "გადახვევა",
    about_label:    "ჩვენი ისტორია",
    about_title:    "ქუთაისის გულში",
    about_body1:    "სასტუმრო Imeri — ეს არის მდიდრული ბუტიკ-სასტუმრო ისტორიულ ქუთაისში — საქართველოს უძველეს დედაქალაქში. კავკასიის სითბოითა და ტრადიციებით შთაგონებული, Imeri-ს ყველა დეტალი გულდასმით შეიქმნა თქვენი დასაუვიწყარი დასვენებისთვის.",
    about_body2:    "ელეგანტური ნომრებიდან გასტრონომიულ სიამოვნებამდე — მოგიწვევთ აღმოაჩინოთ საქართველოს ჯადო სტილის უნიკალური კომბინაციით.",
    about_badge:    "ბუტიკ სასტუმრო",
    stat_rooms:     "ნომერი",
    stat_service:   "სერვისი",
    stat_years:     "წელი",
    rooms_label:    "განთავსება",
    rooms_title:    "ჩვენი ნომრები და სუიტები",
    room_popular:   "პოპულარული",
    room_best:      "საუკეთესო ფასი",
    room_luxury:    "ლუქსი",
    room1_name:     "კლასიკური ნომერი",
    room1_desc:     "მყუდრო და ელეგანტური, ყველა საჭირო სიმარტივით. იდეალური მარტოხელა მოგზაურთა და წყვილებისთვის.",
    room2_name:     "დელუქს ნომერი",
    room2_desc:     "ფართო ინტერიერი, პრემიუმ ავეჯი, ქალაქის ხედი და ფუფუნებური სააბაზანო.",
    room3_name:     "Imeri სუიტი",
    room3_desc:     "ჩვენი ფლაგმანი — სასტუმრო ოთახი, ქუთაისის პანორამა, პრივატული ჯაკუზი და კონსიერჟ სერვისი.",
    per_night:      "/ ღამე",
    book_now:       "დაჯავშნა",
    amenities_label:"ჩვენი სერვისები",
    amenities_title:"სასტუმროს სერვისები",
    am1_title:      "რესტორანი და ბარი",
    am1_desc:       "ტრადიციული ქართული სამზარეულო თანამედროვე ინტერპრეტაციით. კახური ღვინოების კოლექცია.",
    am2_title:      "სპა და ველნეს",
    am2_desc:       "სრული სპა სერვისი: მასაჟი, ორთქლის ოთახი და ქართული გოგირდოვანი აბანოები.",
    am3_title:      "ფიტნეს ცენტრი",
    am3_desc:       "პრემიუმ აღჭურვილი სავარჯიშო დარბაზი, ღია 24 საათი.",
    am4_title:      "უფასო პარკინგი",
    am4_desc:       "დაცული, სახურავიანი პარკინგი ყველა სტუმრისთვის, დამატებითი გადასახადის გარეშე.",
    am5_title:      "მაღალსიჩქარიანი Wi-Fi",
    am5_desc:       "უფასო ოპტიკური ინტერნეტი სასტუმროს ყველა ზონაში.",
    am6_title:      "ქალაქის ტურები",
    am6_desc:       "ექსკურსიები ბაგრატის ტაძარში, გელათის მონასტერში და პრომეთეს მღვიმეში.",
    booking_label:  "დაჯავშნა",
    booking_title:  "დაჯავშნე ნომერი",
    booking_subtitle:"შეავსეთ ფორმა და ჩვენ 2 საათში დაგიდასტურებთ ჯავშანს.",
    label_fname:    "სახელი",
    label_lname:    "გვარი",
    label_email:    "Email მისამართი",
    label_phone:    "ტელეფონის ნომერი",
    label_checkin:  "შემოსვლა",
    label_checkout: "გასვლა",
    label_room:     "ნომრის ტიპი",
    label_guests:   "სტუმართა რაოდენობა",
    label_requests: "სპეციალური სურვილები",
    select_room:    "— აირჩიეთ ნომერი —",
    submit_book:    "ჯავშნის დადასტურება",
    success_title:  "ჯავშანი მიღებულია!",
    success_body:   "გმადლობთ! ჩვენ 2 საათში დავადასტურებთ თქვენს ჯავშანს Email-ით ან ტელეფონით.",
    success_again:  "ახალი ჯავშანი",
    contact_label:  "დაგვიკავშირდით",
    contact_title:  "კონტაქტი",
    contact_addr_title:"მისამართი",
    contact_addr:   "თქვენი ქუჩა, ქუთაისი, საქართველო",
    contact_phone_title:"ტელეფონი",
    contact_email_title:"Email",
    contact_hours_title:"მიმღები",
    contact_hours:  "24 / 7",
    footer_tagline: "ქართული სტუმარმასპინძლობა ახლებურად.",
    footer_copy:    "© 2025 სასტუმრო Imeri. ყველა უფლება დაცულია.",
    err_required:   "ეს ველი სავალდებულოა.",
    err_email:      "შეიყვანეთ სწორი Email მისამართი.",
    err_dates:      "გასვლის თარიღი გვიანდელი უნდა იყოს.",
  }
};
/* ══════════════════════════════════════
   STATE
   ══════════════════════════════════════ */
let currentLang  = localStorage.getItem('imeri_lang')  || 'en';
let currentTheme = localStorage.getItem('imeri_theme') || 'dark';
/* ══════════════════════════════════════
   THEME
   ══════════════════════════════════════ */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('imeri_theme', theme);
}
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
/* ══════════════════════════════════════
   LANGUAGE
   ══════════════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('imeri_lang', lang);
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Translate all [data-i18n] elements
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
}
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
/* ══════════════════════════════════════
   NAVBAR SCROLL EFFECT
   ══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
/* ══════════════════════════════════════
   HAMBURGER MENU
   ══════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
/* ══════════════════════════════════════
   HERO PARTICLES
   ══════════════════════════════════════ */
(function spawnParticles() {
  const container = document.getElementById('particles');
  const count = 40;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      --dur:   ${6 + Math.random() * 10}s;
      --delay: ${Math.random() * 8}s;
      width:  ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `;
    container.appendChild(p);
  }
})();
/* ══════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ══════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
// Add reveal classes dynamically
function initReveal() {
  document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.about-grid').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.rooms-grid').forEach(el => {
    el.classList.add('reveal-stagger');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.amenities-grid').forEach(el => {
    el.classList.add('reveal-stagger');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.booking-wrapper').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.contact-grid').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}
/* ══════════════════════════════════════
   BOOKING FORM — DATE DEFAULTS
   ══════════════════════════════════════ */
function initDateDefaults() {
  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const fmt = d => d.toISOString().split('T')[0];
  const checkin  = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  checkin.min  = fmt(today);
  checkin.value = fmt(today);
  checkout.min  = fmt(tomorrow);
  checkout.value = fmt(tomorrow);
  checkin.addEventListener('change', () => {
    const ci = new Date(checkin.value);
    const co = new Date(ci);
    co.setDate(ci.getDate() + 1);
    checkout.min   = fmt(co);
    if (new Date(checkout.value) <= ci) {
      checkout.value = fmt(co);
    }
  });
}
/* ══════════════════════════════════════
   BOOKING FORM — VALIDATION & SUBMIT
   ══════════════════════════════════════ */
function validateField(field) {
  const val = field.value.trim();
  let ok = true;
  if (field.required && !val) {
    showError(field, i18n[currentLang].err_required);
    ok = false;
  } else if (field.type === 'email' && val) {
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(val)) {
      showError(field, i18n[currentLang].err_email);
      ok = false;
    }
  }
  if (ok) clearError(field);
  return ok;
}
function showError(field, msg) {
  field.classList.add('error');
  let errEl = field.parentElement.querySelector('.error-msg');
  if (!errEl) {
    errEl = document.createElement('span');
    errEl.className = 'error-msg';
    field.parentElement.appendChild(errEl);
  }
  errEl.textContent = msg;
  errEl.classList.add('show');
}
function clearError(field) {
  field.classList.remove('error');
  const errEl = field.parentElement.querySelector('.error-msg');
  if (errEl) errEl.classList.remove('show');
}
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const fields  = this.querySelectorAll('input[required], select[required]');
  let allValid  = true;
  fields.forEach(f => { if (!validateField(f)) allValid = false; });
  // Date cross-validation
  const ci = new Date(document.getElementById('checkin').value);
  const co = new Date(document.getElementById('checkout').value);
  if (co <= ci) {
    showError(document.getElementById('checkout'), i18n[currentLang].err_dates);
    allValid = false;
  }
  if (!allValid) return;
  // Simulate submission
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = `<span data-i18n="submit_book" style="opacity:0.6">Sending…</span>`;
  setTimeout(() => {
    document.getElementById('bookingForm').style.display    = 'none';
    document.getElementById('bookingSuccess').classList.add('show');
  }, 1200);
});
// Live validation on blur
document.querySelectorAll('#bookingForm input, #bookingForm select').forEach(f => {
  f.addEventListener('blur', () => validateField(f));
  f.addEventListener('input', () => { if (f.classList.contains('error')) validateField(f); });
});
/* ══════════════════════════════════════
   RESET FORM
   ══════════════════════════════════════ */
window.resetForm = function () {
  const form    = document.getElementById('bookingForm');
  const success = document.getElementById('bookingSuccess');
  const btn     = document.getElementById('submitBtn');
  form.reset();
  initDateDefaults();
  success.classList.remove('show');
  form.style.display = '';
  btn.disabled = false;
  btn.innerHTML = `<span data-i18n="submit_book">${i18n[currentLang].submit_book}</span><span class="btn-arrow">→</span>`;
};
/* ══════════════════════════════════════
   ACTIVE NAV LINK (scroll spy)
   ══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.style.color = '';
        link.style.background = '';
      });
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) {
        active.style.color = 'var(--gold)';
      }
    }
  });
}, { threshold: 0.4 });
sections.forEach(sec => spyObserver.observe(sec));
/* ══════════════════════════════════════
   INIT
   ══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initDateDefaults();
  initReveal();
});
