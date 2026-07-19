let currentLang = 'ar';
const WHATSAPP_URL = "https://wa.me/201234567890?text=أود%20حجز%20الجلسات%20المجانية%20المبدئية";

const translations = {
    ar: {
        "logo-text": "د. مي محمود عطيّة",
        "nav-home": "الرئيسية",
        "nav-share": "شارك الموقع",
        "nav-book-btn": "احجز جلستك الآن",
        "hero-badge": "مساحة علاجية خاصة واستشارات سرية تماماً",
        "hero-title": "خطوتك الأولى نحو<br>نفسٍ مطمئنة وحياة أسرية مستقرة",
        "hero-desc": "مرحباً بك في مساحتك الآمنة للاستشارات والدعم المتخصص. نساعدك هنا عبر مناهج التحليل السلوكي المعرفي والإرشاد الأسري المعتمد لتجاوز التراكمات النفسية وبناء بيئة حياة مستقرة ومتوازنة.",
        "presence-title": "نحن متواجدون الآن للرد الفوري عبر المنصات التالية:",
        "presence-desc": "اضغط على أي منصة للتواصل المباشر مع الدكتورة أو متابعة المقالات.",
        "card-tag": "مبادرة الدعم النفسي الأولية",
        "card-main-title": "أول جلستين استشاريتين مجاناً بالكامل",
        "card-main-desc": "نؤمن أن الخطوة الأولى هي الأصعب؛ لذلك نتيح لك جلسات تمهيدية مجانية بالكامل (عدد 2 جلسة) للتقييم والتشخيص المبدئي، وبناء جسور الثقة والراحة التامة للبدء في خطتك العلاجية بدون أي قيود.",
        "section-title": "الخدمات الاستشارية والعلاجية المعتمدة",
        "service-1-title": "جلسات العلاج النفسي الفردي",
        "service-1-desc": "جلسات مخصصة وسرية للتعامل مع اضطرابات القلق، نوبات الاكتئاب، تشتت الانتباه، وبناء آليات مرنة لتخفيف وتجاوز ضغوطات ومخاوف الحياة اليومية.",
        "service-2-title": "الإرشاد الأسرى وتطوير العلاقات",
        "service-2-desc": "دراسة وتحليل الخلافات الزوجية، بناء قنوات اتصال متطورة وفعالة داخل الأسرة، وتقديم الدعم والحلول لضمان بيئة أسرية مستقرة تماماً.",
        "values-title": "القيم والمبادئ التي نلتزم بها",
        "v1-t": "الأمان والخصوصية المطلقة",
        "v1-d": "نوفر بيئة علاجية خالية تماماً من الأحكام المسبقة، حيث تُحاط بياناتك ونقاشاتك بأعلى مستويات السرية الطبية والمهنية المتكاملة.",
        "v2-t": "التمكين والدعم المستدام",
        "v2-d": "لا نكتفي بتقديم حلول مؤقتة، بل نعمل على تسليحك بالأدوات السلوكية والفكرية التي تجعلك قادراً على إدارة صحتك النفسية مستقبلياً.",
        "v3-t": "المرونة ومواكبة الفرد",
        "v3-d": "كل إنسان هو حالة فريدة وخاصة؛ لذلك يتم صياغة الخطة الاستشارية بناءً على وتيرتك الخاصة وظروفك المحيطة لضمان أفضل استجابة.",
        "workflow-title": "رحلتك العلاجية خطوة بخطوة",
        "wf-1-t": "التقييم الأولي المجاني",
        "wf-1-d": "خلال أول جلستين نقوم بفهم دقيق للمخاوف والتحديات دون أي كلفة مالية.",
        "wf-2-t": "بناء الخطة المخصصة",
        "wf-2-d": "نصمم برنامجاً علاجياً يتناسب تماماً مع نمط حياتك وظروفك الخاصة.",
        "wf-3-t": "التعافي المستدام",
        "wf-3-d": "تطوير مهارات سلوكية لمواجهة الأزمات المستقبلية وضمان مرونة نفسية دائمة.",
        "faq-title": "الأسئلة الشائعة",
        "q1": "هل الجلسات تتم بسرية تامة؟",
        "a1": "نعم، السرية والموثوقية هما الركيزة الأساسية في عيادتنا. كافة البيانات والنقاشات محمية بموجب القسم المهني الطبي ولا يتم مشاركتها مطلقاً مع أي جهة أو طرف ثالث.",
        "q2": "كيف يمكنني الاستفادة من العرض المجاني؟",
        "a2": "بمجرد الضغط على أزرار الحجز وتحويلك للواتساب المباشر، سيتم إدراجك تلقائياً ضمن المبادرة وتنسيق مواعيد أول جلستين لك مجاناً وبدون أي مقدمات دفع أو التزامات مالية.",
        "q3": "كم تبلغ مدة الجلسة الاستشارية؟",
        "a3": "تتراوح مدة الجلسة الأساسية بين 45 إلى 60 دقيقة كاملة، وهي مساحة زمنية كافية لمناقشة كافة التطورات السلوكية، ومراجعة الخطة والتدريبات المحددة سلفاً.",
        "q4": "هل تتوفر استشارات عن بُعد (أونلاين)؟",
        "a4": "نعم بكل تأكيد. نقدم خدمات الاستشارات والجلسات النفسية والأسرية عبر الإنترنت من خلال منصات الاتصال المشفرة والآمنة لتسهيل الحضور للعملاء من كافة المحافظات وخارج الدولة.",
        "q5": "هل يمكن حضور أفراد الأسرة معاً في الجلسة؟",
        "a5": "نعم، في جلسات الإرشاد الأسري والزواجي يُفضل حضور الأطراف المعنية لبناء قنوات تواصل مشتركة، ويتم تحديد ذلك بناءً على طبيعة الحالة في جلسة التقييم الأولى.",
        "q6": "ما هي سياسة إلغاء أو تعديل المواعيد؟",
        "a6": "يمكن تعديل أو إلغاء موعد الجلسة المحجوزة مسبقاً قبل 24 ساعة على الأقل من موعدها المحدد، لضمان إتاحة الفرصة لحالات أخرى بانتظار الدعم.",
        "cred-1": "ماجستير ودكتوراه مهنية في العلاج النفسي والأسري المعتمد",
        "cred-2": "عضوية رسمية وموثقة بالبورد البريطاني للاستشارات والعلاج النفسي",
        "cred-3": "حاصلة على برنامج تدريبي متقدم في التوجيه السلوكي من جامعة ستانفورد",
        "share-title": "شارك الموقع",
        "share-subtitle": "ساهم في نشر قنوات الدعم والإرشاد النفسي المتكامل ومشاركة رابط الموقع لتعم الفائدة لمن يحتاجه.",
        "share-link-head": "رابط الموقع المباشر",
        "share-link-sub": "اضغط لنسخ رابط الموقع الإلكتروني فوراً",
        "share-btn-copy": "نسخ الرابط",
        "share-qr-title": "رمز الاستجابة السريعة لمسح الموقع",
        "share-qr-desc": "يمكن للآخرين توجيه كاميرا الموبايل لهذا الرمز لفتح الموقع ومشاركته لحظياً",
        "footer-copy": "© 2026 د. مي محمود عطيّة. جميع الحقوق محفوظة.",
        "footer-secure": "مساحة علاجية آمنة ومحمية بالكامل."
    },
    en: {
        "logo-text": "Dr. Mai Mahmoud Attia",
        "nav-home": "Home",
        "nav-share": "Share Website",
        "nav-book-btn": "Book Session Now",
        "hero-badge": "Confidential & Private Psychological Space",
        "hero-title": "Your First Step Towards<br>Peace & Family Stability",
        "hero-desc": "Welcome to your safe space for specialized counseling. We assist you through certified cognitive behavioral approaches and family guidance to process mental weights and build stable environments.",
        "presence-title": "We are live & available on the following channels:",
        "presence-desc": "Click any platform to contact the doctor directly or review mental insights.",
        "card-tag": "Primary Psychological Support Initiative",
        "card-main-title": "First 2 Consultation Sessions Are 100% Free",
        "card-main-desc": "We believe the first step is always the hardest; therefore we offer you fully free preliminary sessions (2 Sessions) for initial evaluation and trust building to comfortably start your recovery plan.",
        "section-title": "Accredited Clinical Programs & Services",
        "service-1-title": "Individual Psychotherapy Sessions",
        "service-1-desc": "Tailored, fully private sessions addressing anxiety, depressive episodes, ADHD, and constructing resilient workflows to minimize daily trauma.",
        "service-2-title": "Family Guidance & Marital Counseling",
        "service-2-desc": "Analyzing ongoing relationship barriers, expanding flexible communication lines inside the home, and deploying solid parenting support.",
        "values-title": "Our Clinical Core Values",
        "v1-t": "Absolute Confidentiality",
        "v1-d": "We guarantee an environment strictly safe and free of pre-judgment, where all records are guarded by core legal medical ethics.",
        "v2-t": "Sustainable Empowerment",
        "v2-d": "We do not deploy temporary solutions; we provide dynamic tools ensuring you are capable of maintaining your psychological well-being.",
        "v3-t": "Personalized Adaptation",
        "v3-d": "Every individual is a standalone case; your strategy is structured around your speed and environmental factors for perfect output.",
        "workflow-title": "Your Therapeutic Journey Step-by-Step",
        "wf-1-t": "Free Initial Assessment",
        "wf-1-d": "During the first two sessions, we accurately assess your challenges with zero financial commitment.",
        "wf-2-t": "Tailored Strategy Building",
        "wf-2-d": "We structure a clinical recovery pipeline mapping your routine and specific life factors.",
        "wf-3-t": "Sustainable Recovery",
        "wf-3-d": "Polishing dynamic tactical behaviors to safely block future crisis and secure high resilience.",
        "faq-title": "Frequently Asked Questions",
        "q1": "Are all sessions fully confidential?",
        "a1": "Yes, confidentiality and reliability are the fundamental pillars of our clinic. All records and interactions are highly guarded under professional medical ethics and are never shared with third parties.",
        "q2": "How do I activate the free session bundle?",
        "a2": "By clicking any booking buttons and redirecting to our direct WhatsApp line, you will be automatically added to the initiative and we will coordinate your first two free assessment sessions with zero upfront costs.",
        "q3": "How long does a consultation session last?",
        "a3": "The standard session duration ranges from 45 to 60 minutes, providing ample space to evaluate behavioral changes, progress tracking, and scheduled target skills.",
        "q4": "Are remote (Online) consultations available?",
        "a4": "Yes, definitely. We provide global encrypted digital mental services and family guidance to facilitate comfortable attendance for clients outside our main physical scope.",
        "q5": "Can family members attend the session together?",
        "a5": "Yes, in family and marital guidance setups, joint presence is highly recommended to bridge communication gaps, which is structured accordingly during your first free evaluation check.",
        "q6": "What is the cancellation or rescheduling policy?",
        "a6": "Pre-booked slots can be adapted or cancelled at least 24 hours prior to the session time, securing clear allocation pathways for other cases awaiting clinical support.",
        "cred-1": "Master & Professional Doctorate in Certified Psychotherapy & Family Guidance",
        "cred-2": "Licensed and Accredited Member of the British Board of Psychotherapy",
        "cred-3": "Advanced Credentials in Behavioral Management Systems - Stanford University",
        "share-title": "Share Website",
        "share-subtitle": "Help expand mental health awareness by sharing our digital workspace address link.",
        "share-link-head": "Direct Website URL",
        "share-link-sub": "Click to instantly copy the website official address link",
        "share-btn-copy": "Copy URL",
        "share-qr-title": "Quick Response Code (QR) for Scanning",
        "share-qr-desc": "Others can aim their mobile camera at this code to launch the website immediately",
        "footer-copy": "© 2026 Dr. Mai Mahmoud Attia. All Rights Reserved.",
        "footer-secure": "Fully Secured & Confidential Therapeutic Workspace."
    }
};

function redirectToWhatsApp() {
    window.open(WHATSAPP_URL, '_blank');
}

function switchTab(tabName) {
    document.getElementById('tab-home').classList.add('hidden');
    document.getElementById('tab-share').classList.add('hidden');

    const tabs = ['home', 'share'];
    tabs.forEach(tab => {
        const btn = document.getElementById(`btn-${tab}`);
        if(btn) btn.classList.remove('bg-teal-600', 'text-white');
    });

    const targetTab = document.getElementById(`tab-${tabName}`);
    const targetBtn = document.getElementById(`btn-${tabName}`);
    if(targetTab) targetTab.classList.remove('hidden');
    if(targetBtn) targetBtn.classList.add('bg-teal-600', 'text-white');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleLanguage() {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';
    document.getElementById('lang-btn-text').innerText = (currentLang === 'ar') ? 'English' : 'العربية';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function toggleTheme() {
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        localStorage.setItem('clinic_theme', 'light');
    } else {
        htmlEl.classList.remove('light');
        htmlEl.classList.add('dark');
        localStorage.setItem('clinic_theme', 'dark');
    }
}

function toggleFaq(id) {
    const ans = document.getElementById(`faq-ans-${id}`);
    const icon = document.getElementById(`faq-icon-${id}`);
    if (ans.classList.contains('hidden')) {
        ans.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        ans.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        const statusText = document.getElementById("copyStatus");
        statusText.innerText = currentLang === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        setTimeout(() => { statusText.innerText = currentLang === 'ar' ? "نسخ الرابط" : "Copy URL"; }, 2000);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('clinic_theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }

    const qrcodeContainer = document.getElementById("qrcode");
    if(qrcodeContainer) {
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, {
            text: window.location.href,
            width: 140,
            height: 140,
            colorDark : "#0b0f19",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});