/* =========================================================
   روح للروح — Dr. Mai Mahmoud
   Main JavaScript
   Clean + Lightweight + Mobile Optimized
   ========================================================= */


/* =========================================================
   1. TRANSLATIONS
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

        "card-tag":
            "مبادرة الدعم النفسي الأولية",

        "card-main-title":
            "أول جلسة بسعر 200 جنيه",

        "card-main-desc":
            "ابدأ جلستك الأولى بسعر 200 جنيه، وبعد التقييم والتشخيص يتم تحديد سعر الجلسات التالية وفقاً لطبيعة الحالة والخطة العلاجية المناسبة.",

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

        "workflow-title":
            "رحلتك العلاجية خطوة بخطوة",

        "wf-1-t":
            "الجلسة الأولى بسعر 200 جنيه",

        "wf-1-d":
            "تبدأ الجلسة الأولى بسعر 200 جنيه للتقييم وفهم الحالة وتحديد الاحتياجات الأساسية.",

        "wf-2-t":
            "بناء الخطة المخصصة",

        "wf-2-d":
            "بعد التقييم والتشخيص يتم تحديد الخطة المناسبة للحالة والسعر الخاص بالجلسات التالية.",

        "wf-3-t":
            "التعافي المستدام",

        "wf-3-d":
            "تطوير مهارات سلوكية لمواجهة الأزمات المستقبلية وضمان مرونة نفسية دائمة.",

        "faq-title":
            "الأسئلة الشائعة",

        "q1":
            "هل الجلسات تتم بسرية تامة؟",

        "a1":
            "نعم، السرية والموثوقية هما الركيزة الأساسية في عيادتنا. كافة البيانات والنقاشات محمية بموجب القسم المهني الطبي ولا يتم مشاركتها مطلقاً مع أي جهة أو طرف ثالث.",

        "q2":
            "كم سعر الجلسة الأولى والجلسات التالية؟",

        "a2":
            "سعر الجلسة الأولى هو 200 جنيه. بعد التقييم والتشخيص يتم تحديد سعر الجلسات التالية وفقاً لطبيعة الحالة والخطة العلاجية المناسبة.",

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

        "cred-1":
            "ماجستير ودكتوراه مهنية في العلاج النفسي والأسري المعتمد",

        "cred-2":
            "عضوية رسمية وموثقة بالبورد البريطاني للاستشارات والعلاج النفسي",

        "cred-3":
            "حاصلة على برنامج تدريبي متقدم في التوجيه السلوكي والمعرفي السلوكي (CBT) والجدلي (DBT) والإكلينيكي من جامعة ستانفورد",

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

        "footer-copy":
            "© 2026 موقع روح للروح مع د.مي محمود. جميع الحقوق محفوظة.",

        "footer-secure":
            "مساحة علاجية آمنة ومحمية بالكامل."
    },


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

        "card-tag":
            "Initial Psychological Support Initiative",

        "card-main-title":
            "First Session for 200 EGP",

        "card-main-desc":
            "Start your first session for 200 EGP. After assessment and diagnosis, the price of subsequent sessions is determined according to the nature of the case and the appropriate treatment plan.",

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

        "workflow-title":
            "Your Healing Journey",

        "wf-1-t":
            "First Session — 200 EGP",

        "wf-1-d":
            "The first session costs 200 EGP for assessment, understanding the case, and identifying the main needs.",

        "wf-2-t":
            "Custom Plan Building",

        "wf-2-d":
            "After assessment and diagnosis, the appropriate treatment plan and pricing for subsequent sessions are determined.",

        "wf-3-t":
            "Sustainable Recovery",

        "wf-3-d":
            "Developing behavioral skills to face future crises and ensuring lasting mental resilience.",

        "faq-title":
            "Frequently Asked Questions",

        "q1":
            "Are the sessions completely confidential?",

        "a1":
            "Yes, confidentiality and reliability are the core pillars of our clinic. All data and discussions are protected under medical professional secrecy and are never shared with any third party.",

        "q2":
            "How much does the first session cost?",

        "a2":
            "The first session costs 200 EGP. After assessment and diagnosis, the price of subsequent sessions is determined according to the nature of the case and the appropriate treatment plan.",

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

        "cred-1":
            "Professional Master's & PhD in Certified Psycho-Family Therapy",

        "cred-2":
            "Official Member of the British Board for Counseling & Psychotherapy",

        "cred-3":
            "Advanced Training Program in Behavioral Guidance, Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Clinical Psychology from Stanford University",

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

        "footer-copy":
            "© 2026 Rouh Lil Rouh with Dr. Mai Mahmoud. All rights reserved.",

        "footer-secure":
            "A safe and fully protected therapeutic space."
    }
};


/* =========================================================
   2. GLOBAL STATE
   ========================================================= */

let currentLang = "ar";
let qrGenerated = false;
let qrLoading = false;


/* =========================================================
   3. LANGUAGE
   ========================================================= */

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";

    applyLanguage();
}


function applyLanguage() {
    const html = document.documentElement;
    const langButton = document.getElementById("lang-btn-text");

    if (!html) return;

    html.dir = currentLang === "ar" ? "rtl" : "ltr";
    html.lang = currentLang;

    if (langButton) {
        langButton.textContent =
            currentLang === "ar" ? "English" : "العربية";
    }

    const currentTranslations = translations[currentLang];

    if (!currentTranslations) return;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");

        if (!key || !(key in currentTranslations)) {
            return;
        }

        const value = currentTranslations[key];

        if (key === "hero-title") {
            element.innerHTML = value;
            return;
        }

        if (element.tagName === "TITLE") {
            document.title = value;
            return;
        }

        element.textContent = value;
    });
}


/* =========================================================
   4. THEME
   ========================================================= */

function toggleTheme() {
    const html = document.documentElement;
    const body = document.body;

    if (!html || !body) return;

    const isLight = html.classList.contains("light");

    html.classList.toggle("light", !isLight);
    html.classList.toggle("dark", isLight);

    body.classList.toggle("light-theme", !isLight);
}


/* =========================================================
   5. TAB SWITCHING
   ========================================================= */

function switchTab(tabId) {
    const tabHome = document.getElementById("tab-home");
    const tabShare = document.getElementById("tab-share");

    const btnHome = document.getElementById("btn-home");
    const btnShare = document.getElementById("btn-share");

    if (!tabHome || !tabShare) return;

    const isHome = tabId === "home";

    tabHome.classList.toggle("hidden", !isHome);
    tabShare.classList.toggle("hidden", isHome);

    if (btnHome && btnShare) {
        btnHome.className = isHome
            ? "px-4 py-2.5 rounded-xl transition cursor-pointer bg-teal-600 text-white font-semibold"
            : "px-4 py-2.5 rounded-xl transition cursor-pointer text-slate-300 tab-share-btn hover:bg-slate-800/60";

        btnShare.className = !isHome
            ? "px-4 py-2.5 rounded-xl transition cursor-pointer bg-teal-600 text-white font-semibold"
            : "px-4 py-2.5 rounded-xl transition cursor-pointer text-slate-300 tab-share-btn hover:bg-slate-800/60";
    }

    /*
     * استخدام auto بدل smooth.
     * ده يمنع التهنيج أو الحركة البطيئة عند تغيير التبويب.
     */
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

    if (!isHome) {
        requestAnimationFrame(() => {
            loadQRCode();
        });
    }
}


/* =========================================================
   6. WHATSAPP
   ========================================================= */

function redirectToWhatsApp() {
    const whatsappUrl = "https://wa.me/201274350130";

    window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================================================
   7. FAQ
   ========================================================= */

function toggleFaq(id) {
    const answer = document.getElementById(`faq-ans-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);

    if (!answer || !icon) return;

    const isHidden = answer.classList.contains("hidden");

    answer.classList.toggle("hidden", !isHidden);

    icon.style.transform = isHidden
        ? "rotate(180deg)"
        : "rotate(0deg)";
}


/* =========================================================
   8. COPY WEBSITE LINK
   ========================================================= */

async function copyLink() {
    const statusText = document.getElementById("copyStatus");

    if (!statusText) return;

    const originalText =
        translations[currentLang]?.["share-btn-copy"] ||
        (currentLang === "ar" ? "نسخ الرابط" : "Copy Link");

    const successText =
        currentLang === "ar"
            ? "تم النسخ!"
            : "Copied!";

    const failedText =
        currentLang === "ar"
            ? "تعذر النسخ"
            : "Copy failed";

    try {
        const url = window.location.href;

        /*
         * الطريقة الحديثة
         */
        if (
            navigator.clipboard &&
            typeof navigator.clipboard.writeText === "function"
        ) {
            await navigator.clipboard.writeText(url);
        } else {
            /*
             * Fallback للمتصفحات التي لا تدعم Clipboard API
             */
            fallbackCopyText(url);
        }

        statusText.textContent = successText;

        window.setTimeout(() => {
            statusText.textContent = originalText;
        }, 2000);

    } catch (error) {
        console.error("Copy failed:", error);

        statusText.textContent = failedText;

        window.setTimeout(() => {
            statusText.textContent = originalText;
        }, 2000);
    }
}


function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");

    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";

    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const successful = document.execCommand("copy");

    textarea.remove();

    if (!successful) {
        throw new Error("Fallback copy failed");
    }
}


/* =========================================================
   9. QR CODE
   ========================================================= */

function loadQRCode() {
    if (qrGenerated || qrLoading) {
        return;
    }

    const qrElement = document.getElementById("qrcode");

    if (!qrElement) {
        return;
    }

    /*
     * لو المكتبة موجودة بالفعل نستخدمها مباشرة.
     */
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
        console.error("QR Code library failed to load.");
    };

    document.head.appendChild(script);
}


function generateQRCode() {
    if (qrGenerated) return;

    const qrElement = document.getElementById("qrcode");

    if (!qrElement) return;

    if (typeof QRCode === "undefined") {
        return;
    }

    qrElement.innerHTML = "";

    try {
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
        console.error("QR Code generation failed:", error);
    }
}


/* =========================================================
   10. SCROLL REVEAL
   ========================================================= */

function initializeRevealAnimations() {
    const revealElements =
        document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }

    /*
     * لو المستخدم مفعّل تقليل الحركة:
     * نظهر كل العناصر فوراً بدون Animation.
     */
    const reducedMotion =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
        revealElements.forEach((element) => {
            element.classList.add("active");
        });

        return;
    }

    /*
     * rootMargin أكبر شوية عشان العناصر تبدأ
     * تظهر قبل ما تدخل الشاشة بالكامل.
     */
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px 120px 0px",
        threshold: 0.05
    };

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => {
            element.classList.add("active");
        });

        return;
    }

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                });
            },
            observerOptions
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}


/* =========================================================
   11. INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    /*
     * تطبيق اللغة الحالية.
     */
    applyLanguage();

    /*
     * تشغيل Reveal.
     */
    initializeRevealAnimations();

    /*
     * التأكد أن الصفحة تبدأ على Home.
     */
    switchTab("home");
});