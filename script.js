/* =========================================================
   روح للروح — Dr. Mai Mahmoud
   Main JavaScript
   Clean + Lightweight + Mobile Optimized
   ========================================================= */


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {
    ar: {
        "page-title":
            "موقع روح للروح مع د.مي محمود - للاستشارات النفسية والأسرية",

        "logo-text":
            "روح للروح مع د.مي محمود",

        "nav-home":
            "الرئيسية",

        "nav-share":
            "شارك الموقع",

        "nav-book-btn":
            "احجز جلستك الآن",

        "hero-slogan":
            "كل خطوة نحو التعافي حياة.",

        "hero-title":
            "خطوتك الأولى نحو<br>نفسٍ مطمئنة وحياة أسرية مستقرة",

        "hero-desc":
            "مرحباً بك في مساحتك الآمنة للاستشارات والدعم المتخصص مع د. مي محمود عطية. نساعدك هنا عبر مناهج التحليل السلوكي المعرفي والإرشاد الأسري المعتمد لتجاوز التراكمات النفسية وبناء بيئة حياة مستقرة ومتوازنة.",

        "presence-title":
            "نحن متواجدون الآن للرد الفوري عبر المنصات التالية:",

        "presence-desc":
            "اضغط على أي موقع للتواصل المباشر مع الدكتورة أو متابعة المقالات.",


        /* =====================================================
           PROMOTION CARD
        ====================================================== */

        "promo-title":
            "مش كل وجع بيبان… ومش كل حاجة تقدر تحكيها لأي حد.",

        "promo-tag":
            "مستني إيه؟",

        "promo-p1a":
            "هتفضل شايل اللي جواك لحد إمتى؟",

        "promo-p1b":
            'هتفضل تقول "أنا كويس"، وأنت من جواك عارف إنك محتاج تتكلم؟',

        "promo-p2a":
            "القلق، الضغط، التفكير المستمر، ومشاكل العلاقات…",

        "promo-p2b":
            "كل حاجة بتبدأ بخطوة، وأصعب خطوة أحيانًا هي إنك تقرر تبدأ.",

        "promo-with":
            "مع",

        "promo-doctor":
            "د. مي محمود",

        "promo-comma":
            "،",

        "promo-p3":
            "هتلاقي مساحة آمنة تتكلم فيها براحتك، بخصوصية واحترام ومن غير حكم.",

        "promo-bold1":
            "خد الخطوة الأولى لنفسك.",

        "promo-bold2":
            "واحجز جلستك الآن.",

        "promo-slogan":
            "كل خطوة نحو التعافي، حياة.",


        /* =====================================================
           SERVICES
        ====================================================== */

        "section-title":
            "الخدمات الاستشارية والعلاجية المعتمدة",

        "service-1-title":
            "جلسات العلاج النفسي الفردي",

        "service-1-desc":
            "جلسات مخصصة وسرية للتعامل مع اضطرابات القلق، نوبات الاكتئاب، تشتت الانتباه، وبناء آليات مرنة لتخفيف وتجاوز ضغوطات ومخاوف الحياة اليومية.",

        "service-2-title":
            "الإرشاد الأسرى وتطوير العلاقات",

        "service-2-desc":
            "دراسة وتحليل الخلافات الزوجية، بناء قنوات اتصال متطورة وفعالة داخل الأسرة، وتقديم الدعم والحلول لضمان بيئة أسرية مستقرة تماماً.",

        "service-4-title":
            "جلسات الدعم وتطوير الذات",

        "service-4-desc":
            "برامج مخصصة لرفع تقدير الذات، التخلص من متلازمة الاحتراق النفسي والمهني، وتدريبات التنفس والاسترخاء للتحكم في الانفعالات الحادة.",


        /* =====================================================
           VALUES
        ====================================================== */

        "values-title":
            "القيم والمبادئ التي نلتزم بها",

        "v1-t":
            "الأمان والخصوصية المطلقة",

        "v1-d":
            "نوفر بيئة علاجية خالية تماماً من الأحكام المسبقة، حيث تُحاط بياناتك ونقاشاتك بأعلى مستويات السرية الطبية والمهنية المتكاملة.",

        "v2-t":
            "التمكين والدعم المستدام",

        "v2-d":
            "لا نكتفي بتقديم حلول مؤقتة، بل نعمل على تسليحك بالأدوات السلوكية والفكرية التي تجعلك قادراً على إدارة صحتك النفسية مستقبلياً.",

        "v3-t":
            "المرونة ومواكبة الفرد",

        "v3-d":
            "كل إنسان هو حالة فريدة وخاصة؛ لذلك يتم صياغة الخطة الاستشارية بناءً على وتيرتك الخاصة وظروفك المحيطة لضمان أفضل استجابة.",


        /* =====================================================
           WORKFLOW
        ====================================================== */

        "workflow-title":
            "رحلتك العلاجية خطوة بخطوة",

        "wf-1-t":
            "الجلسة الأولى",

        "wf-1-d":
            "نبدأ بالتقييم وفهم الحالة وتحديد الاحتياجات الأساسية.",

        "wf-2-t":
            "بناء الخطة المخصصة",

        "wf-2-d":
            "بعد التقييم وفهم الحالة يتم تحديد الخطة المناسبة وفقاً للاحتياجات وطبيعة الحالة.",

        "wf-3-t":
            "التعافي المستدام",

        "wf-3-d":
            "تطوير مهارات سلوكية لمواجهة الأزمات المستقبلية وضمان مرونة نفسية دائمة.",


        /* =====================================================
           FAQ
        ====================================================== */

        "faq-title":
            "الأسئلة الشائعة",

        "q1":
            "هل الجلسات تتم بسرية تامة؟",

        "a1":
            "نعم، السرية والموثوقية هما الركيزة الأساسية في عيادتنا. كافة البيانات والنقاشات محمية بموجب القسم المهني الطبي ولا يتم مشاركتها مطلقاً مع أي جهة أو طرف ثالث.",

        "q2":
            "كيف يتم تحديد الخطة المناسبة للجلسات؟",

        "a2":
            "بعد التقييم وفهم الحالة يتم تحديد الخطة المناسبة وفقاً للاحتياجات وطبيعة الحالة.",

        "q3":
            "كم تبلغ مدة الجلسة الاستشارية؟",

        "a3":
            "تتراوح مدة الجلسة الأساسية بين 45 إلى 60 دقيقة كاملة، وهي مساحة زمنية كافية لمناقشة كافة التطورات السلوكية، ومراجعة الخطة والتدريبات المحددة سلفاً.",

        "q4":
            "هل تتوفر استشارات عن بُعد (أونلاين)؟",

        "a4":
            "نعم بكل تأكيد. نقدم خدمات الاستشارات والجلسات النفسية والأسرية عبر الإنترنت من خلال منصات الاتصال المشفرة والآمنة لتسهيل الحضور للعملاء من كافة المحافظات وخارج الدولة.",

        "q5":
            "هل يمكن حضور أفراد الأسرة معاً في الجلسة؟",

        "a5":
            "نعم، في جلسات الإرشاد الأسري والزواجي يُفضل حضور الأطراف المعنية لبناء قنوات تواصل مشتركة، ويتم تحديد ذلك بناءً على طبيعة الحالة في جلسة التقييم الأولى.",

        "q6":
            "ما هي سياسة إلغاء أو تعديل المواعيد؟",

        "a6":
            "يمكن تعديل أو إلغاء موعد الجلسة المحجوزة مسبقاً قبل 24 ساعة على الأقل من موعدها المحدد، لضمان إتاحة الفرصة لحالات أخرى بانتظار الدعم.",

        "q7":
            "كم عدد الجلسات التي أحتاجها للتعافي الكامل؟",

        "a7":
            "لا يوجد عدد ثابت؛ الأمر يعتمد تماماً على نوع المشكلة واستجابة الشخص. يتم تحديد الخطة العلاجية والمدة المقترحة بناءً على التقييم والتشخيص.",

        "q8":
            "هل يتم تقديم استشارات طارئة أو فورية؟",

        "a8":
            "نعم، نعمل على توفير خانات عاجلة للحالات المتقدمة التي تمر بأزمات نفسية حادة، ويمكنك إخطار فريق الدعم عبر الواتساب لتنسيق موعد استثنائي سريع.",


        /* =====================================================
           CREDENTIALS
        ====================================================== */

        "cred-1":
            "ماجستير ودكتوراه مهنية في العلاج النفسي والأسري المعتمد",

        "cred-2":
            "عضوية رسمية وموثقة بالبورد البريطاني للاستشارات والعلاج النفسي",

        "cred-3":
            "حاصلة على برنامج تدريبي متقدم في التوجيه السلوكي والمعرفي السلوكي (CBT) والجدلي (DBT) والإكلينيكي من جامعة ستانفورد",


        /* =====================================================
           SHARE
        ====================================================== */

        "share-title":
            "شارك الموقع",

        "share-subtitle":
            "ساهم في نشر قنوات الدعم والإرشاد النفسي المتكامل ومشاركة رابط الموقع لتعم الفائدة لمن يحتاجه.",

        "share-link-head":
            "رابط الموقع المباشر",

        "share-link-sub":
            "اضغط لنسخ رابط الموقع الإلكتروني فوراً",

        "share-btn-copy":
            "نسخ الرابط",

        "share-qr-title":
            "رمز الاستجابة السريعة لمسح الموقع",

        "share-qr-desc":
            "يمكن للآخرين توجيه كاميرا الموبايل لهذا الرمز لفتح الموقع ومشاركته لحظياً",


        /* =====================================================
           FOOTER
        ====================================================== */

        "footer-copy":
            "© 2026 موقع روح للروح مع د.مي محمود. جميع الحقوق محفوظة.",

        "footer-secure":
            "مساحة علاجية آمنة ومحمية بالكامل."
    },


    /* =========================================================
       ENGLISH
    ========================================================= */

    en: {
        "page-title":
            "Rouh Lil Rouh with Dr. Mai Mahmoud - Psychological Consultations",

        "logo-text":
            "Rouh Lil Rouh with Dr. Mai Mahmoud",

        "nav-home":
            "Home",

        "nav-share":
            "Share Site",

        "nav-book-btn":
            "Book Your Session",

        "hero-slogan":
            "Every journey towards recovery begins with a step.",

        "hero-title":
            "Your First Step Towards<br>Mental Peace & Family Stability",

        "hero-desc":
            "Welcome to your safe space for specialized consultations and support with Dr. Mai Mahmoud Attia. We assist you through CBT and certified family counseling to overcome emotional burdens and build a stable life.",

        "presence-title":
            "We are available for immediate response via:",

        "presence-desc":
            "Click on any platform to directly contact the doctor or follow our articles.",


        /* =====================================================
           PROMOTION CARD
        ====================================================== */

        "promo-title":
            "Not every pain is visible… and not everything can be shared with just anyone.",

        "promo-tag":
            "What are you waiting for?",

        "promo-p1a":
            "How long will you keep carrying what's inside you?",

        "promo-p1b":
            'How long will you keep saying "I\'m fine" while deep down you know you need to talk?',

        "promo-p2a":
            "Anxiety, pressure, overthinking, and relationship problems…",

        "promo-p2b":
            "Everything starts with a step, and sometimes the hardest step is deciding to begin.",

        "promo-with":
            "With",

        "promo-doctor":
            "Dr. Mai Mahmoud",

        "promo-comma":
            ",",

        "promo-p3":
            "you'll find a safe space to speak freely, with privacy, respect, and without judgment.",

        "promo-bold1":
            "Take the first step for yourself.",

        "promo-bold2":
            "Book your session now.",

        "promo-slogan":
            "Every step towards recovery is a life.",


        /* =====================================================
           SERVICES
        ====================================================== */

        "section-title":
            "Certified Counseling & Therapy Services",

        "service-1-title":
            "Individual Psychotherapy",

        "service-1-desc":
            "Dedicated and confidential sessions to deal with anxiety, depression, ADHD, and build flexible mechanisms to cope with daily life stress.",

        "service-2-title":
            "Family Counseling & Relationship Development",

        "service-2-desc":
            "Analyzing marital conflicts, building effective communication channels within the family, and providing solutions for a stable family environment.",

        "service-4-title":
            "Support & Self-Development Sessions",

        "service-4-desc":
            "Customized programs to boost self-esteem, overcome burnout, and breathing/relaxation exercises to control intense emotions.",


        /* =====================================================
           VALUES
        ====================================================== */

        "values-title":
            "Our Core Values",

        "v1-t":
            "Absolute Safety & Privacy",

        "v1-d":
            "We provide a completely non-judgmental environment, where your data is protected by the highest medical confidentiality standards.",

        "v2-t":
            "Empowerment & Sustainable Support",

        "v2-d":
            "We equip you with the behavioral and cognitive tools to manage your mental health independently in the future.",

        "v3-t":
            "Flexibility & Personalization",

        "v3-d":
            "Every person is unique; your consultation plan is tailored to your own pace and circumstances for the best response.",


        /* =====================================================
           WORKFLOW
        ====================================================== */

        "workflow-title":
            "Your Healing Journey",

        "wf-1-t":
            "First Session",

        "wf-1-d":
            "We begin with an assessment to understand your situation and identify your main needs.",

        "wf-2-t":
            "Custom Plan Building",

        "wf-2-d":
            "After assessment and understanding your situation, the appropriate plan is determined according to your needs.",

        "wf-3-t":
            "Sustainable Recovery",

        "wf-3-d":
            "Developing behavioral skills to face future crises and ensuring lasting mental resilience.",


        /* =====================================================
           FAQ
        ====================================================== */

        "faq-title":
            "Frequently Asked Questions",

        "q1":
            "Are the sessions completely confidential?",

        "a1":
            "Yes, confidentiality and reliability are the core pillars of our clinic. All data and discussions are protected under medical professional secrecy and are never shared with any third party.",

        "q2":
            "How is the appropriate session plan determined?",

        "a2":
            "After assessing and understanding your situation, the appropriate plan is determined according to your needs and circumstances.",

        "q3":
            "How long is the consultation session?",

        "a3":
            "The standard session duration ranges between 45 to 60 full minutes, providing ample time to discuss behavioral progress and review predetermined exercises.",

        "q4":
            "Are online consultations available?",

        "a4":
            "Yes, absolutely. We offer online psychological and family consultation services via secure, encrypted platforms to accommodate clients from all regions and abroad.",

        "q5":
            "Can family members attend the session together?",

        "a5":
            "Yes, in family and marital counseling sessions, it is preferred that concerned parties attend together to build communication channels, which is determined based on the initial evaluation.",

        "q6":
            "What is the cancellation or rescheduling policy?",

        "a6":
            "Booked sessions can be modified or canceled at least 24 hours prior to the scheduled time to allow other clients waiting for support to take the slot.",

        "q7":
            "How many sessions do I need for full recovery?",

        "a7":
            "There is no fixed number; it depends entirely on the nature of the issue and individual response. The treatment plan and suggested duration are determined based on assessment and diagnosis.",

        "q8":
            "Do you provide emergency or immediate consultations?",

        "a8":
            "Yes, we arrange urgent slots for critical cases going through severe psychological crises. You can notify our support team via WhatsApp to coordinate a fast emergency appointment.",


        /* =====================================================
           CREDENTIALS
        ====================================================== */

        "cred-1":
            "Professional Master's & PhD in Certified Psycho-Family Therapy",

        "cred-2":
            "Official Member of the British Board for Counseling & Psychotherapy",

        "cred-3":
            "Advanced Training Program in Behavioral Guidance, Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Clinical Psychology from Stanford University",


        /* =====================================================
           SHARE
        ====================================================== */

        "share-title":
            "Share The Website",

        "share-subtitle":
            "Help spread integrated psychological support channels by sharing the website link.",

        "share-link-head":
            "Direct Website Link",

        "share-link-sub":
            "Click to instantly copy the website link",

        "share-btn-copy":
            "Copy Link",

        "share-qr-title":
            "QR Code To Scan Website",

        "share-qr-desc":
            "Others can point their mobile camera at this code to open the site instantly",


        /* =====================================================
           FOOTER
        ====================================================== */

        "footer-copy":
            "© 2026 Rouh Lil Rouh with Dr. Mai Mahmoud. All rights reserved.",

        "footer-secure":
            "A safe and fully protected therapeutic space."
    }
};


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let currentLang = "ar";
let qrGenerated = false;
let qrLoading = false;


/* =========================================================
   LANGUAGE
   ========================================================= */

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    applyLanguage();
}


/* =========================================================
   PROMOTION CARD TRANSLATION
   ========================================================= */

function translatePromotionCard() {
    const promoCard = document.querySelector(".promo-card");

    if (!promoCard) {
        return;
    }

    const t = translations[currentLang];

    if (!t) {
        return;
    }

    const title = promoCard.querySelector("h3");

    const tag = promoCard.querySelector("div > span");

    const paragraphs = promoCard.querySelectorAll(
        ".text-muted p"
    );

    const slogan = promoCard.querySelector("h4");

    const strongElements = promoCard.querySelectorAll(
        ".text-muted strong"
    );

    if (title) {
        title.textContent = t["promo-title"];
    }

    if (tag) {
        tag.textContent = t["promo-tag"];
    }

    if (paragraphs.length >= 1) {
        const firstParagraph = paragraphs[0];

        const em = firstParagraph.querySelector("em");

        firstParagraph.innerHTML = "";

        const line1 = document.createElement("span");
        line1.textContent = t["promo-p1a"];

        const br = document.createElement("br");

        const line2 = document.createElement("span");

        if (em) {
            const text = t["promo-p1b"];

            if (currentLang === "ar") {
                const parts = text.split('"أنا كويس"');

                line2.textContent = parts[0];

                const newEm = document.createElement("em");
                newEm.textContent = '"أنا كويس"';

                line2.appendChild(newEm);

                if (parts[1]) {
                    line2.appendChild(
                        document.createTextNode(parts[1])
                    );
                }
            } else {
                const parts = text.split('"I\'m fine"');

                line2.textContent = parts[0];

                const newEm = document.createElement("em");
                newEm.textContent = '"I\'m fine"';

                line2.appendChild(newEm);

                if (parts[1]) {
                    line2.appendChild(
                        document.createTextNode(parts[1])
                    );
                }
            }
        } else {
            line2.textContent = t["promo-p1b"];
        }

        firstParagraph.appendChild(line1);
        firstParagraph.appendChild(br);
        firstParagraph.appendChild(line2);
    }


    if (paragraphs.length >= 2) {
        const secondParagraph = paragraphs[1];

        secondParagraph.innerHTML = "";

        const line1 = document.createElement("span");
        line1.textContent = t["promo-p2a"];

        const br = document.createElement("br");

        const line2 = document.createElement("span");
        line2.textContent = t["promo-p2b"];

        secondParagraph.appendChild(line1);
        secondParagraph.appendChild(br);
        secondParagraph.appendChild(line2);
    }


    if (paragraphs.length >= 3) {
        const thirdParagraph = paragraphs[2];

        thirdParagraph.innerHTML = "";

        const prefix = document.createElement("span");
        prefix.textContent = `${t["promo-with"]} `;

        const doctor = document.createElement("strong");
        doctor.className = "text-white";
        doctor.textContent = t["promo-doctor"];

        const comma = document.createTextNode(
            `${t["promo-comma"]} `
        );

        const description = document.createTextNode(
            t["promo-p3"]
        );

        thirdParagraph.appendChild(prefix);
        thirdParagraph.appendChild(doctor);
        thirdParagraph.appendChild(comma);
        thirdParagraph.appendChild(description);
    }


    if (paragraphs.length >= 4) {
        const fourthParagraph = paragraphs[3];

        fourthParagraph.innerHTML = "";

        const firstStrong = document.createElement("strong");
        firstStrong.className = "text-white";
        firstStrong.textContent = t["promo-bold1"];

        const br = document.createElement("br");

        const secondStrong = document.createElement("strong");
        secondStrong.className = "text-white";
        secondStrong.textContent = t["promo-bold2"];

        fourthParagraph.appendChild(firstStrong);
        fourthParagraph.appendChild(br);
        fourthParagraph.appendChild(secondStrong);
    }


    if (slogan) {
        slogan.textContent = t["promo-slogan"];
    }
}


function applyLanguage() {
    const html = document.documentElement;
    const langButton = document.getElementById("lang-btn-text");
    const currentTranslations = translations[currentLang];

    if (!html || !currentTranslations) {
        return;
    }

    html.dir = currentLang === "ar" ? "rtl" : "ltr";
    html.lang = currentLang;

    if (langButton) {
        langButton.textContent =
            currentLang === "ar" ? "English" : "العربية";
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (!key || !(key in currentTranslations)) {
            return;
        }

        const value = currentTranslations[key];

        if (element.tagName === "TITLE") {
            document.title = value;
        } else if (key === "hero-title") {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    });

    /* Translate promotion card separately */
    translatePromotionCard();
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {
    const html = document.documentElement;
    const body = document.body;

    if (!html || !body) {
        return;
    }

    const isLight = html.classList.contains("light");

    html.classList.toggle("light", !isLight);
    html.classList.toggle("dark", isLight);
    body.classList.toggle("light-theme", !isLight);
}


/* =========================================================
   TAB SWITCHING
   ========================================================= */

function switchTab(tabId) {
    const tabHome = document.getElementById("tab-home");
    const tabShare = document.getElementById("tab-share");
    const btnHome = document.getElementById("btn-home");
    const btnShare = document.getElementById("btn-share");

    if (!tabHome || !tabShare) {
        return;
    }

    const isHome = tabId === "home";

    tabHome.classList.toggle("hidden", !isHome);
    tabShare.classList.toggle("hidden", isHome);

    if (btnHome) {
        btnHome.classList.toggle("bg-teal-600", isHome);
        btnHome.classList.toggle("text-white", isHome);
        btnHome.classList.toggle("font-semibold", isHome);
        btnHome.classList.toggle("text-slate-300", !isHome);
        btnHome.classList.toggle("tab-share-btn", !isHome);
        btnHome.classList.toggle(
            "hover:bg-slate-800/60",
            !isHome
        );
    }

    if (btnShare) {
        btnShare.classList.toggle("bg-teal-600", !isHome);
        btnShare.classList.toggle("text-white", !isHome);
        btnShare.classList.toggle("font-semibold", !isHome);
        btnShare.classList.toggle("text-slate-300", isHome);
        btnShare.classList.toggle("tab-share-btn", isHome);
        btnShare.classList.toggle(
            "hover:bg-slate-800/60",
            isHome
        );
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    if (!isHome) {
        requestAnimationFrame(loadQRCode);
    }
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function redirectToWhatsApp() {
    window.open(
        "https://wa.me/201274350130",
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   FAQ
   ========================================================= */

function toggleFaq(id) {
    const answer = document.getElementById(`faq-ans-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);

    if (!answer || !icon) {
        return;
    }

    const isOpen = !answer.classList.contains("hidden");

    answer.classList.toggle("hidden", isOpen);

    icon.style.transform = isOpen
        ? "rotate(0deg)"
        : "rotate(180deg)";
}


/* =========================================================
   COPY WEBSITE LINK
   ========================================================= */

async function copyLink() {
    const statusText = document.getElementById("copyStatus");

    if (!statusText) {
        return;
    }

    const originalText =
        translations[currentLang]?.["share-btn-copy"] ||
        (currentLang === "ar"
            ? "نسخ الرابط"
            : "Copy Link");

    try {
        const url = window.location.href;

        if (
            navigator.clipboard &&
            typeof navigator.clipboard.writeText === "function"
        ) {
            await navigator.clipboard.writeText(url);
        } else {
            fallbackCopyText(url);
        }

        statusText.textContent =
            currentLang === "ar"
                ? "تم النسخ!"
                : "Copied!";

    } catch (error) {
        console.error("Copy failed:", error);

        statusText.textContent =
            currentLang === "ar"
                ? "تعذر النسخ"
                : "Copy failed";
    }

    window.setTimeout(() => {
        statusText.textContent = originalText;
    }, 2000);
}


function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");

    textarea.value = text;
    textarea.readOnly = true;

    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";

    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(
        0,
        textarea.value.length
    );

    const successful = document.execCommand("copy");

    textarea.remove();

    if (!successful) {
        throw new Error("Fallback copy failed");
    }
}


/* =========================================================
   QR CODE
   ========================================================= */

function loadQRCode() {
    if (qrGenerated || qrLoading) {
        return;
    }

    const qrElement = document.getElementById("qrcode");

    if (!qrElement) {
        return;
    }

    if (typeof QRCode !== "undefined") {
        generateQRCode();
        return;
    }

    qrLoading = true;

    const script = document.createElement("script");

    script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";

    script.async = true;

    script.onload = () => {
        qrLoading = false;
        generateQRCode();
    };

    script.onerror = () => {
        qrLoading = false;
        console.error(
            "QR Code library failed to load."
        );
    };

    document.head.appendChild(script);
}


function generateQRCode() {
    const qrElement = document.getElementById("qrcode");

    if (
        qrGenerated ||
        !qrElement ||
        typeof QRCode === "undefined"
    ) {
        return;
    }

    try {
        qrElement.innerHTML = "";

        new QRCode(qrElement, {
            text: window.location.href,
            width: 128,
            height: 128,
            colorDark: "#0f766e",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        qrGenerated = true;

    } catch (error) {
        console.error(
            "QR Code generation failed:",
            error
        );
    }
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initializeRevealAnimations() {
    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }

    const reducedMotion =
        window.matchMedia?.(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (
        reducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        elements.forEach((element) => {
            element.classList.add("active");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("active");

                observerInstance.unobserve(
                    entry.target
                );
            });
        },
        {
            rootMargin: "0px 0px 120px 0px",
            threshold: 0.05
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        applyLanguage();
        initializeRevealAnimations();
        switchTab("home");
    }
);