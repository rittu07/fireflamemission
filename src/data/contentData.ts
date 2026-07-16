export interface TranslationBundle {
  en: string;
  ta: string;
}

export interface PromiseItem {
  id: number;
  reference: string;
  text: TranslationBundle;
  category: TranslationBundle;
}

export interface TimelineItem {
  year: string;
  title: TranslationBundle;
  description: TranslationBundle;
}

export interface BookItem {
  id: string;
  title: TranslationBundle;
  author: TranslationBundle;
  description: TranslationBundle;
  category: TranslationBundle;
  pages: number;
  pdfUrl: string;
  hardcopyLink: string;
  coverImageUrl?: string;
}

export interface SermonItem {
  id: string;
  title: TranslationBundle;
  type: "video" | "audio" | "written";
  reference: TranslationBundle;
  excerpt: TranslationBundle;
  mediaUrl: string;
}

export interface MinistryItem {
  id: string;
  title: TranslationBundle;
  description: TranslationBundle;
  tamilName: string;
  iconName: string;
}

export interface TestimonyItem {
  id: number;
  author: TranslationBundle;
  location: TranslationBundle;
  text: TranslationBundle;
}

export interface MagazineItem {
  id: string;
  title: TranslationBundle;
  issueDate: TranslationBundle;
  description: TranslationBundle;
  coverColor: string;
  pdfUrl: string;
}

export const contentData = {
  promises: [
    {
      id: 1,
      reference: "Genesis 12:2",
      text: {
        en: "I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.",
        ta: "நான் உன்னை ஆசீர்வதித்து, உன் பேரை பெருமைப்படுத்துவேன்; நீ ஆசீர்வாதமாய் இருப்பாய்."
      },
      category: { en: "Blessing", ta: "ஆசீர்வாதம்" }
    },
    {
      id: 2,
      reference: "Genesis 28:15",
      text: {
        en: "I am with you and will watch over you wherever you go, and I will bring you back to this land.",
        ta: "நான் உன்னோடு கூட இருந்து, நீ போகிற இடத்திலெல்லாம் உன்னைக் காத்து, உன்னை இந்தத் தேசத்திற்குத் திரும்பிவரப்பண்ணுவேன்."
      },
      category: { en: "Protection", ta: "பாதுகாப்பு" }
    },
    {
      id: 3,
      reference: "Joshua 1:5",
      text: {
        en: "No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you.",
        ta: "நீ உயிரோடிருக்கும் நாட்களெல்லாம் ஒருவனும் உனக்கு முன்பாக எதிர்த்து நிற்பதில்லை; நான் மோசேயோடு இருந்ததுபோல உன்னோடும் இருப்பேன்; நான் உன்னைவிட்டு விலகுவதுமில்லை, உன்னைக் கைவிடுவதுமில்லை."
      },
      category: { en: "Presence", ta: "தேவ பிரசன்னம்" }
    },
    {
      id: 4,
      reference: "Isaiah 41:10",
      text: {
        en: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        ta: "நீ பயப்படாதே, நான் உன்னுடனே இருக்கிறேன்; திகைக்காதே, நான் உன் தேவன்; நான் உன்னை பலப்படுத்தி உனக்குச் சகாயம் பண்ணுவேன்; என் நீதியின் வலதுகரத்தினால் உன்னைத் தாங்குவேன்."
      },
      category: { en: "Strength", ta: "பெலன்" }
    },
    {
      id: 5,
      reference: "Isaiah 40:31",
      text: {
        en: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        ta: "கர்த்தருக்குக் காத்திருக்கிறவர்களோ புதுப் பெலன் அடைந்து, கழுகுகளைப்போலச் செட்டைகளை அடித்து எழும்புவார்கள்; அவர்கள் ஓடினாலும் இளைப்படையார்கள், நடந்தாலும் சோர்ந்துபோகார்கள்."
      },
      category: { en: "Hope", ta: "நம்பிக்கை" }
    },
    {
      id: 6,
      reference: "Deuteronomy 28:7",
      text: {
        en: "The Lord will grant that the enemies who rise up against you will be defeated before you. They will come at you from one direction but flee from you in seven.",
        ta: "உனக்கு விரோதமாய் எழும்பும் உன் சத்துருக்களைக் கர்த்தர் உனக்கு முன்பாக முறியடிக்க ஒப்புக்கொடுப்பார்; ஒரு வழியாய் உனக்கு விரோதமாய் வருவார்கள்; ஏழு வழியாய் உனக்கு முன்பாக ஓடிப்போவார்கள்."
      },
      category: { en: "Victory", ta: "ஜெயம்" }
    },
    {
      id: 7,
      reference: "Psalm 34:10",
      text: {
        en: "The lions may grow weak and hungry, but those who seek the Lord lack no good thing.",
        ta: "சிங்கக்குட்டிகள் தாழ்ச்சியடைந்து பட்டினியாயிருக்கும்; கர்த்தரைத் தேடுகிறவர்களுக்கோ ஒரு நன்மையும் குறைபடாது."
      },
      category: { en: "Provision", ta: "தேவைகள் சந்தித்தல்" }
    },
    {
      id: 8,
      reference: "Psalm 32:8",
      text: {
        en: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
        ta: "நான் உனக்குப் போதித்து, நீ நடக்கவேண்டிய வழியை உனக்குக் காட்டுவேன்; உன்மேல் என் கண்ணை வைத்து, உனக்கு ஆலோசனை சொல்லுவேன்."
      },
      category: { en: "Guidance", ta: "நடத்துதல்" }
    },
    {
      id: 9,
      reference: "Psalm 121:7",
      text: {
        en: "The Lord will keep you from all harm—he will watch over your life.",
        ta: "கர்த்தர் உன்னை எல்லாத் தீங்குக்கும் விலக்கிக் காப்பார்; அவர் உன் ஆத்துமாவைக் காப்பார்."
      },
      category: { en: "Protection", ta: "பாதுகாப்பு" }
    },
    {
      id: 10,
      reference: "Jeremiah 1:19",
      text: {
        en: "They will fight against you but will not overcome you, for I am with you and will rescue you, declares the Lord.",
        ta: "அவர்கள் உனக்கு விரோதமாக யுத்தம்பண்ணuவார்கள், ஆனாலும் உன்னை ஜெயிக்கமாட்டார்கள்; உன்னைத் தப்புவிப்பதற்காக நான் உன்னுடனே இருக்கிறேன் என்று கர்த்தர் சொல்லுகிறார்."
      },
      category: { en: "Victory", ta: "ஜெயம்" }
    }
  ] as PromiseItem[],

  books: [
    {
      id: "akkini-mugam",
      title: { en: "Akkini Mugam (Face of Fire)", ta: "அக்கினி முகம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A powerful booklet calling believers to a life of fiery evangelism, spiritual authority, and complete dedication to Christ.",
        ta: "விசுவாசிகளை அக்கினியான சுவிசேஷப் பணிக்கும், ஆவிக்குரிய அதிகாரத்திற்கும், கிறிஸ்துவுக்கான அர்ப்பணிப்பிற்கும் அழைக்கும் வல்லமையான புத்தகம்."
      },
      category: { en: "Evangelism", ta: "சுவிசேஷம்" },
      pages: 48,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Akkini%20Mugam"
    },
    {
      id: "jeba-mugam",
      title: { en: "Jeba Mugam (Face of Prayer)", ta: "ஜெப முகம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "An exhaustive guide on the apostolic model of house-to-house prayer meetings, intercession, and personal intimacy with God.",
        ta: "வீட்டு ஜெபக்கூட்டங்கள் மற்றும் தேவனுடனான தனிப்பட்ட ஐக்கியத்தின் அப்போஸ்தலிக் மாதிரியைப் பற்றிய விரிவான வழிகாட்டி."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 64,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Jeba%20Mugam"
    },
    {
      id: "daily-confession",
      title: { en: "Daily Confession Prayer", ta: "தினசரி அறிக்கை ஜெபங்கள்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Scriptural confessions and prayers to align your daily speech with the victory, protection, and provision of God's Word.",
        ta: "உமது தினசரி வார்த்தைகளை தேவனுடைய வெற்றியோடும், பாதுகாப்போடும், வாக்குத்தத்தங்களோடும் இணைக்கும் வேதப்பூர்வமான அறிக்கை ஜெபங்கள்."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 32,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20Daily%20Confession%20Prayer%20book"
    },
    {
      id: "holy-bible",
      title: { en: "Holy Bible", ta: "சத்திய வேதாகமம்" },
      author: { en: "Word of God", ta: "தேவனுடைய வார்த்தை" },
      description: {
        en: "The Authorized Version of the Holy Bible, containing both Old and New Testaments, offering spiritual direction, divine guidance, and eternal truth.",
        ta: "பழைய மற்றும் புதிய ஏற்பாடுகளை உள்ளடக்கிய பரிசுத்த வேதாகமத்தின் அங்கீகரிக்கப்பட்ட தமிழ் மொழிபெயர்ப்பு, ஆவிக்குரிய வழிகாட்டுதலையும் நித்திய சத்தியத்தையும் வழங்குகிறது."
      },
      category: { en: "Scripture", ta: "வேதாகமம்" },
      pages: 1200,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20Holy%20Bible"
    },
    {
      id: "rebuilding-family-altar",
      title: { en: "Rebuilding the Family Altar", ta: "இல்ல பலிபீடத்தை மீண்டும் கட்டுதல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A spiritual guide detailing the steps to establish family intercession, daily devotion, and spiritual protection for your home.",
        ta: "குடும்ப ஜெபம், தினசரி ஆராதனை மற்றும் உங்கள் வீட்டிற்கான ஆவிக்குரிய பாதுகாப்பை நிறுவுவதற்கான படிகளை விவரிக்கும் ஆவிக்குரிய வழிகாட்டி."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 80,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Rebuilding%20the%20Family%20Altar"
    },
    {
      id: "spiritual-authority",
      title: { en: "Spiritual Authority", ta: "ஆவிக்குரிய அதிகாரம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Understanding the spiritual keys to walk in divine authority, overcome obstacles, and live a victorious life in Christ.",
        ta: "தேவனுடைய அதிகாரத்தில் நடப்பதற்கும், தடைகளை வெல்வதற்கும், கிறிஸ்துவுக்குள் ஜெயமுள்ள வாழ்க்கை வாழ்வதற்கும் ஆவிக்குரிய வழிகள்."
      },
      category: { en: "Spiritual Warfare", ta: "ஆவிக்குரிய யுத்தம்" },
      pages: 72,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Spiritual%20Authority"
    },
    {
      id: "walking-by-faith",
      title: { en: "Walking by Faith", ta: "விசுவாசத்தினால் நடத்தல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A guide on moving from doubt and fear into absolute trust in God's promises, experiencing miracles through unwavering faith.",
        ta: "சந்தேகத்திலிருந்தும் பயத்திலிருந்தும் தேவ வாக்குத்தத்தங்களின் மீதான முழுமையான விசுவாசத்திற்கு நகர்ந்து, அற்புதங்களை அனுபவிப்பதற்கான ஒரு வழிகாட்டி."
      },
      category: { en: "Faith", ta: "விசுவாசம்" },
      pages: 56,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Walking%20by%20Faith"
    },
    {
      id: "power-of-fasting",
      title: { en: "The Power of Fasting", ta: "உபவாசத்தின் வல்லமை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Unlocking spiritual breakthroughs, healing, and divine intervention through scriptural fasting and prayer.",
        ta: "வேதப்பூர்வமான உபவாசம் மற்றும் ஜெபத்தின் மூலம் ஆவிக்குரிய உடைப்புகள், சுகமளித்தல் மற்றும் தேவனுடைய தலையீட்டைப் பெறுதல்."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 96,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Power%20of%20Fasting"
    },
    {
      id: "apostolic-model",
      title: { en: "The Apostolic Model", ta: "அப்போஸ்தலிக் மாதிரி" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Exploring the practices of the early church to establish home fellowships, sound doctrine, and community service.",
        ta: "இல்ல ஐக்கியங்கள், தூய உபதேசங்கள் மற்றும் சமூக ஊழியங்களை நிறுவுவதற்கு ஆதி திருச்சபையின் நடைமுறைகளை ஆராய்தல்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 88,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Apostolic%20Model"
    },
    {
      id: "shield-of-faith",
      title: { en: "The Shield of Faith", ta: "விசுவாசக் கேடயம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "How to use the shield of faith to quench the fiery darts of the enemy and remain steadfast in trials.",
        ta: "எதிரியின் அக்கினியாஸ்திரங்களை அணைக்கவும், சோதனைகளின் மத்தியில் உறுதியாக நிற்கவும் விசுவாசக் கேடயத்தை எவ்வாறு பயன்படுத்துவது."
      },
      category: { en: "Spiritual Warfare", ta: "ஆவிக்குரிய யுத்தம்" },
      pages: 64,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Shield%20of%20Faith"
    },
    {
      id: "streams-of-blessing",
      title: { en: "Streams of Blessing", ta: "ஆசீர்வாத ஊற்றுகள்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Devotional teachings on the covenants of God, unlocking His favor and spiritual abundance in daily life.",
        ta: "தேவனுடைய உடன்படிக்கைகள் பற்றிய தியானப் போதனைகள், அன்றாட வாழ்வில் அவரது கிருபையையும் ஆவிக்குரிய ஆசீர்வாதத்தையும் வெளிப்படுத்துகிறது."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 48,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Streams%20of%20Blessing"
    },
    {
      id: "preparing-harvest",
      title: { en: "Preparing for the Harvest", ta: "அறுவடைக்கு ஆயத்தப்படுதல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Equipping local congregations for effective evangelism, training soul-winners, and establishing local missions.",
        ta: "உள்ளூர் சபைகளைச் சுவிசேஷப் பணிகளுக்காக ஆயத்தப்படுத்துதல், ஆத்தும ஆதாயம் செய்பவர்களுக்குப் பயிற்சி அளித்தல்."
      },
      category: { en: "Evangelism", ta: "சுவிசேஷம்" },
      pages: 112,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Preparing%20for%20the%20Harvest"
    },
    {
      id: "voice-of-god",
      title: { en: "The Voice of God", ta: "தேவ சத்தம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Learning to discern the Holy Spirit's guidance from other voices, and walking in obedience to divine directions.",
        ta: "பரிசுத்த ஆவியானவரின் வழிகாட்டுதலைப் பிற சத்தங்களிலிருந்து பிரித்தறியக் கற்றுக்கொள்வது, மற்றும் தேவ கட்டளைகளுக்குக் கீழ்ப்படிந்து நடப்பது."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 80,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Voice%20of%20God"
    },
    {
      id: "prevailing-prayer",
      title: { en: "Prevailing Prayer", ta: "ஜெய ஜெபம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Deep intercessory prayer principles that move heaven and earth, bringing answers to complex situations.",
        ta: "பரலோகத்தையும் பூமியையும் அசைக்கும் ஆழமான பரிந்துரை ஜெபக் கொள்கைகள், கடினமான சூழ்நிலைகளுக்கு பதிலைக் கொண்டுவருகிறது."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 104,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Prevailing%20Prayer"
    },
    {
      id: "walking-holiness",
      title: { en: "Walking in Holiness", ta: "பரிசுத்த வாழ்க்கை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A call to spiritual purity, separating oneself from worldly influences and growing in Christ-like character.",
        ta: "ஆவிக்குரிய தூய்மைக்கான அழைப்பு, உலக செல்வாக்குகளிலிருந்து உங்களைப் பிரித்து கிறிஸ்துவைப் போன்ற குணத்தில் வளர்தல்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 90,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Walking%20in%20Holiness"
    },
    {
      id: "armor-of-light",
      title: { en: "The Armor of Light", ta: "ஒளியின் சர்வாயுதவர்க்கம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A study on the armor of light mentioned in Romans 13, walking in righteousness and overcoming darkness.",
        ta: "ரோமர் 13 இல் குறிப்பிடப்பட்டுள்ள ஒளியின் சர்வாயுதத்தைப் பற்றிய ஆய்வு, நீதியில் நடப்பது மற்றும் இருளை வெல்வது."
      },
      category: { en: "Spiritual Warfare", ta: "ஆவிக்குரிய யுத்தம்" },
      pages: 60,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Armor%20of%20Light"
    },
    {
      id: "overcoming-temptation",
      title: { en: "Overcoming Temptation", ta: "சோதனைகளை வெல்லுதல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Practical and scriptural strategies to guard your heart, resist temptations, and maintain spiritual integrity.",
        ta: "உங்கள் இருதயத்தைக் காக்கவும், சோதனைகளை எதிர்க்கவும், ஆவிக்குரிய நேர்மையைக் காக்கவும் நடைமுறை மற்றும் வேதப்பூர்வமான உத்திகள்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 68,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Overcoming%20Temptation"
    },
    {
      id: "sound-doctrine",
      title: { en: "Sound Doctrine", ta: "ஆரோக்கியமான உபதேசம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Guarding the purity of the Gospel, avoiding false teachings, and establishing your faith on solid biblical truth.",
        ta: "சுவிசேஷத்தின் தூய்மையைப் பாதுகாத்தல், தவறான போதனைகளைத் தவிர்த்தல், உங்கள் விசுவாசத்தை வேத சத்தியத்தில் நிலைநிறுத்துதல்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 120,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Sound%20Doctrine"
    },
    {
      id: "joy-of-lord",
      title: { en: "The Joy of the Lord", ta: "கர்த்தருக்குள் மகிழ்ச்சி" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "How to maintain inner joy and peace in times of trouble, finding strength in the presence of God.",
        ta: "துன்ப காலங்களிலும் உள் மகிழ்ச்சியையும் சமாதானத்தையும் எவ்வாறு பராமரிப்பது, தேவனுடைய பிரசன்னத்தில் பெலன் காண்பது."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 40,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Joy%20of%20the%20Lord"
    },
    {
      id: "standing-gap",
      title: { en: "Standing in the Gap", ta: "திறப்பிலே நிற்றல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "The urgent call for intercessors to stand in the gap for their families, communities, and nations.",
        ta: "குடும்பங்கள், சமுதாயங்கள் மற்றும் தேசங்களுக்காகத் திறப்பிலே நிற்பதற்கான பரிந்துரையாளர்களின் அவசர அழைப்பு."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 76,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Standing%20in%20the%20Gap"
    },
    {
      id: "call-discipleship",
      title: { en: "The Call to Discipleship", ta: "சீஷத்துவ அழைப்பு" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "What it means to follow Jesus truly, count the cost, and bear fruit in service to God's kingdom.",
        ta: "இயேசுவை மெய்யாகவே பின்பற்றுவது, அதற்கான விலையைக் கொடுப்பது, மற்றும் தேவனுடைய ராஜ்யப் பணியில் கனி கொடுப்பது என்ன என்பதன் அர்த்தம்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 84,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Call%20to%20Discipleship"
    },
    {
      id: "fire-holy-spirit",
      title: { en: "The Fire of the Holy Spirit", ta: "பரிசுத்த ஆவியின் நெருப்பு" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Experiencing the power, gifts, and fire of the Holy Spirit for effective ministry and personal renewal.",
        ta: "பயனுள்ள ஊழியம் மற்றும் தனிப்பட்ட புதுப்பித்தலுக்காகப் பரிசுத்த ஆவியானவரின் வல்லமை, வரங்கள் மற்றும் நெருப்பை அனுபவித்தல்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 92,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Fire%20of%20the%20Holy%20Spirit"
    },
    {
      id: "victory-in-christ",
      title: { en: "Victory in Christ", ta: "கிறிஸ்துவுக்குள் ஜெயம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Living in the finished work of the cross, overcoming defeatism, and walking as overcomers.",
        ta: "சிலுவையின் முற்றுப்பெற்ற பணியில் வாழ்வது, தோல்வி மனப்பான்மையை வெல்வது மற்றும் வெற்றியாளர்களாக நடப்பது."
      },
      category: { en: "Faith", ta: "விசுவாசம்" },
      pages: 50,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Victory%20in%20Christ"
    },
    {
      id: "good-shepherd",
      title: { en: "The Good Shepherd", ta: "நல்ல மேய்ப்பன்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Meditations on Psalm 23, experiencing the comfort, guidance, and abundance of our Shepherd.",
        ta: "சங்கீதம் 23 பற்றிய தியானங்கள், நமது மேய்ப்பரின் ஆறுதல், நடத்துதல் மற்றும் ஆசீர்வாதங்களை அனுபவித்தல்."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 44,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Good%20Shepherd"
    },
    {
      id: "heavenly-wisdom",
      title: { en: "Heavenly Wisdom", ta: "பரலோக ஞானம்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Seeking the wisdom that comes from above to make righteous decisions and lead a blessed, orderly life.",
        ta: "நீதியான முடிவுகளை எடுக்கவும், ஆசீர்வதிக்கப்பட்ட, ஒழுங்கான வாழ்க்கையை நடத்தவும் பரலோகத்திலிருந்து வரும் ஞானத்தை நாடுதல்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 74,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Heavenly%20Wisdom"
    },
    {
      id: "reaping-harvest",
      title: { en: "Reaping the Harvest", ta: "அறுவடையைச் சேகரித்தல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Strategies for effective follow-up and discipleship of new converts, ensuring lasting spiritual fruits.",
        ta: "புதிய விசுவாசிகளின் பயனுள்ள தொடர் பராமரிப்பு மற்றும் சீஷத்துவத்திற்கான உத்திகள், நிலையான ஆவிக்குரிய கனிகளை உறுதிப்படுத்துதல்."
      },
      category: { en: "Evangelism", ta: "சுவிசேஷம்" },
      pages: 82,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Reaping%20the%20Harvest"
    },
    {
      id: "covenant-of-grace",
      title: { en: "The Covenant of Grace", ta: "கிருபையின் உடன்படிக்கை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A deep study on God's grace under the New Covenant, breaking the chains of legalism and condemnation.",
        ta: "புதிய உடன்படிக்கையின் கீழ் தேவனுடைய கிருபையைப் பற்றிய ஆழமான ஆய்வு, நியாயப்பிரமாண மற்றும் குற்றச்சாட்டின் சங்கிலிகளை உடைத்தல்."
      },
      category: { en: "Faith", ta: "விசுவாசம்" },
      pages: 66,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Covenant%20of%20Grace"
    },
    {
      id: "quiet-time",
      title: { en: "Quiet Time with God", ta: "தேவனுடன் தனித்திருத்தல்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "The practice of daily personal devotion, reading scriptures, listening to God, and secret prayer.",
        ta: "தினசரி தனிப்பட்ட தியானம், வேதம் வாசித்தல், தேவனுக்கு செவிகொடுத்தல் மற்றும் தனி ஜெபத்தின் நடைமுறை."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 36,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20Quiet%20Time%20with%20God"
    },
    {
      id: "mind-of-christ",
      title: { en: "The Mind of Christ", ta: "கிறிஸ்துவின் சிந்தை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Walking in humility, love, and unity by aligning our thoughts and attitudes with Christ Jesus.",
        ta: "நமது எண்ணங்களையும் அணுகுமுறைகளையும் கிறிஸ்து இயேசுவுக்குள் இணைப்பதன் மூலம் தாழ்மை, அன்பு மற்றும் ஒற்றுமையில் நடப்பது."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 78,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Mind%20of%20Christ"
    },
    {
      id: "hope-of-glory",
      title: { en: "The Hope of Glory", ta: "மகிமையின் நம்பிக்கை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "Strengthening our hope in the second coming of Christ, eternal life, and the inheritance of the saints.",
        ta: "கிறிஸ்துவின் இரண்டாம் வருகை, நித்திய ஜீவன் மற்றும் பரிசுத்தவான்களின் சுதந்தரம் ஆகியவற்றின் மீதான நமது நம்பிக்கையை பலப்படுத்துதல்."
      },
      category: { en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
      pages: 52,
      pdfUrl: "#",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20The%20Hope%20of%20Glory"
    },
    {
      id: "revival",
      title: { en: "Revival (Ezhupputhale Enathu Vaanchai)", ta: "எழுப்புதலே எனது வாஞ்சை" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A powerful Tamil Christian book that explores the biblical foundation of spiritual revival and personal transformation. Through Scripture, inspiring historical revival movements, and practical teachings on prayer, holiness, repentance, and the work of the Holy Spirit, this book encourages believers to deepen their relationship with God and become instruments of revival in their families, churches, and communities. Whether you are seeking spiritual renewal or a greater passion for God's presence, this book serves as a guide toward a vibrant and Christ-centered life.",
        ta: "எழுப்புதல் என்பது ஆவிக்குரிய விழிப்புணர்வு மற்றும் தேவனோடு ஆழமான உறவை உருவாக்கும் நோக்கில் எழுதப்பட்ட தமிழ் கிறிஸ்தவ நூல். வேதாகம அடிப்படைகள், வரலாற்றில் நிகழ்ந்த எழுப்புதல்கள், ஜெபம், பரிசுத்தம், மனந்திரும்புதல் மற்றும் பரிசுத்த ஆவியின் செயல்பாடு ஆகியவற்றை தெளிவாக விளக்கி, ஒவ்வொரு விசுவாசியும் தனிப்பட்ட வாழ்க்கையிலும், குடும்பத்திலும், சமூகத்திலும் தேவனுடைய எழுப்புதலின் கருவியாக மாற ஊக்குவிக்கிறது. கிறிஸ்துவுக்குள் புதிய அர்ப்பணிப்பையும் ஆவிக்குரிய வளர்ச்சியையும் விரும்பும் அனைவருக்கும் இந்நூல் ஒரு மதிப்புமிக்க வழிகாட்டியாகும்."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 101,
      pdfUrl: "/books/Elupputal.pdf",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Revival%20(Ezhupputhale%20Enathu%20Vaanchai)",
      coverImageUrl: "/assets/extracted_img_1_1.png"
    },
    {
      id: "valibar",
      title: { en: "Young Man, You Are Born to Win!", ta: "வாலிபனே நீ ஜெயிக்கப் பிறந்தவன்!" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A powerful guidance book for Christian youth, exploring how young men and women can keep their ways pure according to God's Word, overcome temptations, and become victorious instruments for God's kingdom.",
        ta: "கிறிஸ்தவ வாலிபர்களுக்கான ஒரு வழிகாட்டி நூல். வாலிபர்கள் தங்கள் வழிகளை கர்த்தருடைய வார்த்தையின்படி எவ்வாறு சுத்தம் பண்ணலாம், பொல்லாங்கனை எவ்வாறு ஜெயிக்கலாம் மற்றும் தங்களை தேவனுடைய அழைப்பிற்கு எவ்வாறு அர்ப்பணிக்கலாம் என்பதை வேதாகம வெளிச்சத்தில் இந்நூல் விளக்குகிறது."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 40,
      pdfUrl: "/books/Valibar.pdf",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Valibar%20(Young%20Man,%20You%20Are%20Born%20to%20Win!)"
    },
    {
      id: "chronicles-of-the-redeemed",
      title: { en: "Chronicles of the Redeemed", ta: "பரிசுத்த ஆவியின் வரங்கள்" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A comprehensive guide on the gifts of the Holy Spirit, exploring their biblical foundations, manifestation, and how believers can walk in spiritual power for the edification of the church.",
        ta: "பரிசுத்த ஆவியானவரின் வரங்களைப் பற்றிய விரிவான வழிகாட்டி. அவற்றின் வேதாகம அஸ்திவாரங்கள், வெளிப்பாடுகள் மற்றும் விசுவாசிகள் சபையின் பக்திவிருத்திக்காக எவ்வாறு ஆவிக்குரிய வல்லமையில் நடக்கலாம் என்பதை விளக்குகிறது."
      },
      category: { en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
      pages: 205,
      pdfUrl: "/books/Chronicles_of_the_Redeemed.pdf",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Chronicles%20of%20the%20Redeemed",
      coverImageUrl: "/assets/chronicles_cover.png"
    },
    {
      id: "prayer-is-my-lifebreath",
      title: { en: "Prayer Is My Lifebreath", ta: "ஜெபமே என் சுவாசக்காற்றே" },
      author: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      description: {
        en: "A deep spiritual journey into the power of personal prayer, outlining how daily communication with God becomes the lifebreath of a victorious and faithful Christian life.",
        ta: "தனிப்பட்ட ஜெபத்தின் வல்லமையைக் குறிக்கும் ஆழமான ஆவிக்குரிய பயணம். தேவனுடனான தினசரி உரையாடல் எவ்வாறு ஒரு விசுவாசியின் ஜெயம் உள்ள மற்றும் விசுவாசம் உள்ள கிறிஸ்தவ வாழ்க்கையின் சுவாசக்காற்றாக மாறுகிறது என்பதை இது விளக்குகிறது."
      },
      category: { en: "Prayer", ta: "ஜெப ஊழியம்" },
      pages: 301,
      pdfUrl: "/books/Prayer_Is_My_Lifebreath.pdf",
      hardcopyLink: "https://wa.me/918870083746?text=I%20would%20like%20to%20order%20the%20book%20Prayer%20Is%20My%20Lifebreath",
      coverImageUrl: "/assets/prayer_cover.png"
    }
  ] as BookItem[],

  aboutText: {
    title: { en: "About Fire Flame Mission", ta: "அக்கினி ஜுவாலை ஊழியம் பற்றி" },
    paragraphs: [
      {
        en: "Fire Flame Mission is a Christ-centered ministry founded in 1996 with a vision to proclaim the Gospel of Jesus Christ, strengthen believers through prayer, and spread the Kingdom of God throughout India through Christian literature.",
        ta: "அக்கினி ஜுவாலை ஊழியங்கள் என்பது 1996 ஆம் ஆண்டில் நிறுவப்பட்ட ஒரு கிறிஸ்துவை மையமாகக் கொண்ட ஊழியமாகும். இயேசு கிறிஸ்துவின் சுவிசேஷங்களை அறிவிக்கவும், ஜெபத்தின் மூலம் விசுவாசிகளை பலப்படுத்தவும், ஆவிக்குரிய புத்தகங்கள் மூலம் தேவனுடைய ராஜ்ஜியத்தை இந்தியா முழுவதும் பரப்புவதற்காக இந்த ஊழியம் தொடங்கப்பட்டது."
      },
      {
        en: "Over the years, the ministry has faithfully served communities through evangelistic outreach, prayer meetings, discipleship programs, youth development, children's ministry, and Christian publishing. Through the grace of God, the ministry has expanded its reach across Tamil Nadu and beyond, touching thousands of lives with the message of salvation and hope.",
        ta: "பல ஆண்டுகளாக, சுவிசேஷப் பணி, ஜெபக் கூட்டங்கள், சீஷத்துவப் பயிற்சிகள், இளைஞர் மேம்பாடு, சிறுவர் ஊழியம் மற்றும் புத்தக ஊழியங்கள் ஆகியவற்றின் மூலம் இந்த ஊழியம் விசுவாசத்தோடு பணியாற்றி வருகிறது. தேவனுடைய கிருபையினால், இந்த ஊழியம் தமிழ்நாடு மற்றும் பிற மாநிலங்களுக்கும் விரிவடைந்து, ஆயிரக்கணக்கான மக்களின் வாழ்வில் இரட்சிப்பையும் விசுவாசத்தையும் கொண்டு சேர்த்துள்ளது."
      },
      {
        en: "The ministry remains committed to its founding purpose of leading people to Christ, nurturing spiritual growth, and equipping believers for effective Christian living.",
        ta: "மக்களை கிறிஸ்துவிடம் வழிநடத்தவும், ஆவிக்குரிய வளர்ச்சியை ஊக்கப்படுத்தவும், விசுவாசிகளை பயனுள்ள கிறிஸ்தவ வாழ்விற்கு ஆயத்தப்படுத்தவும் இந்த ஊழியம் தொடர்ந்து அர்ப்பணிப்புடன் செயல்படுகிறது."
      }
    ]
  },

  timeline: [
    {
      year: "1996",
      title: { en: "Ministry Inception", ta: "ஊழியத் துவக்கம்" },
      description: {
        en: "The Lord placed a burden for evangelism and prayer ministry, leading to the establishment of Fire Flame Mission.",
        ta: "சுவிசேஷப் பணி மற்றும் ஜெப ஊழியத்திற்கான பாரத்தை கர்த்தர் தந்தார், இது அக்கினி ஜுவாலை ஊழியம் நிறுவப்படுவதற்கு வழிவகுத்தது."
      }
    },
    {
      year: "1997",
      title: { en: "First Major Jesus Festival", ta: "முதலாம் இயேசு பெருவிழா" },
      description: {
        en: "The ministry expanded through prayer meetings, village outreach programs, and evangelistic campaigns. The first major Jesus Festival was conducted, impacting numerous communities.",
        ta: "ஜெபக் கூட்டங்கள், கிராமப்புற சுவிசேஷப் பணிகள் மற்றும் பிரச்சாரங்கள் மூலம் ஊழியம் விரிவடைந்தது. முதலாம் பெரும் இயேசு திருவிழா நடத்தப்பட்டு அநேக மக்களின் வாழ்வில் மாற்றத்தை ஏற்படுத்தியது."
      }
    },
    {
      year: "1999",
      title: { en: "Mission Expansion", ta: "ஊழிய விரிவாக்கம்" },
      description: {
        en: "New mission stations and outreach centers were established. Prayer ministry activities expanded into several districts.",
        ta: "புதிய மிஷனரி தளங்களும் சுவிசேஷ மையங்களும் நிறுவப்பட்டன. ஜெப ஊழியப் பணிகள் பல மாவட்டங்களுக்கு விரிவுபடுத்தப்பட்டன."
      }
    },
    {
      year: "2003",
      title: { en: "Publishing Ministry Launched", ta: "புத்தக மற்றும் பத்திரிக்கை ஊழியம் துவக்கம்" },
      description: {
        en: "The publishing ministry was launched, producing Christian magazines and spiritual literature to strengthen believers.",
        ta: "பத்திரிக்கை ஊழியம் தொடங்கப்பட்டது. விசுவாசிகளை பலப்படுத்தும் நோக்கில் கிறிஸ்தவ இதழ்கள் மற்றும் ஆவிக்குரிய நூல்கள் அச்சிடப்பட்டன."
      }
    },
    {
      year: "2006",
      title: { en: "Outreach & Training Growth", ta: "சுவிசேஷ & பயிற்சி வளர்ச்சி" },
      description: {
        en: "The ministry continued to grow through revival meetings, leadership training, and missionary support programs.",
        ta: "எழுப்புதல் கூட்டங்கள், தலைமைத்துவப் பயிற்சிகள் மற்றும் மிஷனரி ஆதரவுத் திட்டங்கள் மூலம் ஊழியம் தொடர்ந்து வளர்ந்தது."
      }
    },
    {
      year: "2010",
      title: { en: "Additional Centers Established", ta: "கூடுதல் மையங்கள் அமைப்பு" },
      description: {
        en: "Additional ministry centers were established, strengthening evangelistic and prayer activities throughout various regions.",
        ta: "கூடுதல் ஊழிய மையங்கள் நிறுவப்பட்டு, பல்வேறு பகுதிகளில் சுவிசேஷ மற்றும் ஜெபப் பணிகள் பலப்படுத்தப்பட்டன."
      }
    },
    {
      year: "2015",
      title: { en: "Publications Library Expansion", ta: "நூல் பிரசுரங்கள் விரிவாக்கம்" },
      description: {
        en: "Publication ministry expanded significantly with the release of multiple Christian books and teaching resources.",
        ta: "அநேக கிறிஸ்தவ புத்தகங்கள் மற்றும் போதக வளங்கள் வெளியீட்டுடன் பிரசுர ஊழியம் கணிசமாக விரிவடைந்தது."
      }
    },
    {
      year: "2021",
      title: { en: "Silver Jubilee Milestone", ta: "வெள்ளி விழா மைல்கல்" },
      description: {
        en: "The ministry celebrated its Silver Jubilee, marking 25 years of God's faithfulness, spiritual growth, and service to communities through prayer, evangelism, and Christian publishing.",
        ta: "ஊழியம் தனது வெள்ளி விழாவைக் கொண்டாடியது, இது ஜெபம், சுவிசேஷப் பணி மற்றும் பிரசுரங்கள் மூலம் 25 ஆண்டுகால தேவனுடைய உண்மையையும் ஆவிக்குரிய வளர்ச்சியையும் குறிக்கிறது."
      }
    }
  ] as TimelineItem[],

  founderTestimony: {
    title: { en: "A Life Journey Dedicated to God's Calling", ta: "தேவ அழைப்பிற்கு அர்ப்பணிக்கப்பட்ட வாழ்க்கைப் பயணம்" },
    subtitle: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
    quote: {
      en: "Through God's grace, a deeper understanding of the Scriptures was received, leading to a lifelong commitment to proclaiming the Gospel.",
      ta: "தேவனுடைய கிருபையால் வேதாகமத்தின் ஆழமான சத்தியங்கள் உணரப்பட்டு, சுவிசேஷப் பணிக்காக வாழ்நாள் முழுவதும் அர்ப்பணிப்பு செய்யப்பட்டுள்ளது."
    },
    paragraphs: [
      {
        en: "Born on May 7, 1951, in the historic harbor town of Colachel, Kanyakumari District, Rev. Jerominas was raised in a Christian family as the third son of Mr. Viagappar and Mrs. Christinamma. From an early age, he was nurtured with strong Christian values, a heart for community service, and a deep reverence for God.",
        ta: "1951 ஆம் ஆண்டு மே 7 ஆம் தேதி கன்னியாகுமரி மாவட்டத்தின் வரலாற்றுச் சிறப்புமிக்க துறைமுக நகரமான குளச்சலில் திரு. வியாகப்பர் மற்றும் திருமதி கிறிஸ்டீனம்மாள் தம்பதியரின் மூன்றாவது மகனாக ஜெரோமினாஸ் அவர்கள் பிறந்தார். சிறுவயதிலிருந்தே தேவபக்தி, சமூகப் பணி மற்றும் கிறிஸ்தவ மதிப்புகளுடன் வளர்க்கப்பட்டார்."
      },
      {
        heading: { en: "Early Life", ta: "ஆரம்பகால வாழ்க்கை" },
        en: "Training was completed in Tamil Education, while additional qualifications were obtained in Natural Medicine, Siddha Medicine, and Art Education. Skills in handicrafts were also developed, and active participation was maintained in literary, cultural, and social service activities.",
        ta: "தமிழ் ஆசிரியர் பயிற்சி, இயற்கை மருத்துவம், சித்த மருத்துவம் மற்றும் ஓவிய ஆசிரியர் பயிற்சிகள் பெறப்பட்டதுடன், கைவினைப் பொருட்கள் தயாரித்தல், இலக்கியம், நாடகம் மற்றும் பல்வேறு சமூகப் பணிகளிலும் ஆர்வமுடன் ஈடுபாடு காட்டப்பட்டது."
      },
      {
        en: "At the age of 16, leadership of the Legion of Mary in Colachel was entrusted to him. At 18, eight months of ministry were completed at the Rosary Mission in Vadakkankulam. At 30, he was appointed as the President of the St. Vincent de Paul Society, Kanyakumari Region, while also leading several prayer groups. At 33, the Christian Workers Movement was introduced to Kanyakumari District with the blessing of the Bishop, and district leadership was faithfully carried out for four years.",
        ta: "16-வது வயதில் குளச்சல் மரியாவின் சேனை தலைவராகப் பொறுப்பு வழங்கப்பட்டது. 18-வது வயதில் வடக்கன்குளம் ஜெபமாலை மாதா சபையில் எட்டு மாதங்கள் ஊழியம் செய்யப்பட்டது. 30-வது வயதில் சேன்ட் வின்சென்ட் டி பவுல் சங்கத்தின் குமரி வட்டார தலைவராகவும் பல ஜெபக் குழுக்களின் தலைவராகவும் சேவை செய்யப்பட்டது. 33-வது வயதில் ஆயரின் அனுமதியுடன் குமரி மாவட்டத்தில் கிறிஸ்தவ தொழிலாளர் இயக்கம் அறிமுகப்படுத்தப்பட்டு, அதன் மாவட்டத் தலைவராக நான்கு ஆண்டுகள் பணியாற்றப்பட்டது."
      },
      {
        heading: { en: "Spiritual Journey", ta: "ஆவிக்குரிய பயணம்" },
        en: "At the age of 40, while employed in Bahrain, Rev. Jerominas encountered the Gospel through the testimony of a Hindu Brahmin. During this period, Jesus Christ was accepted as his personal Lord and Savior, and a clear call to full-time ministry was received.",
        ta: "40-வது வயதில் வேலை நிமித்தமாக பஹ்ரைன் நாட்டில் இருந்தபோது, ஒரு இந்து பிராமணரின் சாட்சியின் மூலம் இயேசு கிறிஸ்துவின் சுவிசேஷம் அறிமுகப்படுத்தப்பட்டது. அதன் மூலம் இயேசு கிறிஸ்து தனிப்பட்ட இரட்சகராக ஏற்றுக்கொள்ளப்பட்டு, தேவனுடைய ஊழிய அழைப்பு தெளிவாக உணரப்பட்டது."
      },
      {
        en: "Following God's calling, his employment was resigned from, and he returned to his homeland to dedicate his life to Christian ministry.",
        ta: "அதனைத் தொடர்ந்து வேலை ராஜினாமா செய்யப்பட்டு, முழுநேர ஊழியத்திற்காக தாய்நாட்டிற்கு திரும்பப்பட்டது."
      },
      {
        en: "Since 1992, prayer meetings have been conducted throughout Kanyakumari District, biblical teachings have been delivered, and believers have been equipped with the truth of God's Word.",
        ta: "1992 ஆம் ஆண்டு முதல் கன்னியாகுமரி மாவட்டம் முழுவதும் ஜெபக் கூட்டங்கள் நடத்தப்பட்டு, வேதாகம போதனைகள் வழங்கப்பட்டு, விசுவாசிகள் தேவனுடைய வார்த்தையில் வளர்ச்சியடைய வழிநடத்தப்பட்டு வருகின்றனர்."
      },
      {
        en: "Today, the ministry remains devoted to preaching the Gospel, teaching the Word of God, strengthening believers in faith, and leading people into a deeper relationship with Jesus Christ through biblical truth and prayer.",
        ta: "இன்றளவும், சுவிசேஷத்தை அறிவித்தல், தேவ வார்த்தையை போதித்தல், விசுவாசிகளை பலப்படுத்துதல் மற்றும் மக்களை இயேசு கிறிஸ்துவுடன் நெருக்கமான உறவுக்குள் வழிநடத்துதல் ஆகியவை இவ்வூழியத்தின் முக்கிய நோக்கங்களாக தொடர்கின்றன."
      }
    ]
  },

  visionMission: {
    vision: {
      en: "To glorify God by proclaiming the Gospel of Jesus Christ, equipping believers through biblical teaching, and transforming lives through prayer and discipleship.",
      ta: "இயேசு கிறிஸ்துவின் சுவிசேஷத்தை அறிவித்தல், வேதாகமப் போதனை மூலம் விசுவாசிகளை ஆவிக்குரிய வளர்ச்சியில் மேம்படுத்துதல், ஜெபம் மற்றும் ஆராதனையின் மூலம் மக்களின் ஆவிக்குரிய வாழ்க்கையை பலப்படுத்துதல், ஆவிக்குரிய புத்தகங்களை இந்தியா முழுவதும் மற்றும் பிற மாநிலங்களுக்கும் கொண்டு சேர்த்தல், இறைவனின் மகிமையை வெளிப்படுத்துதல்."
    },
    mission: [
      {
        title: { en: "Evangelism", ta: "சுவிசேஷப் பணி" },
        description: {
          en: "To reach people with the saving message of Jesus Christ through personal evangelism, outreach programs, and Gospel campaigns.",
          ta: "தனிநபர் சுவிசேஷம், சுவிசேஷக் கூடுகைகள் மற்றும் நற்செய்தி கூட்டங்கள் மூலம் இயேசு கிறிஸ்துவின் இரட்சிப்பின் செய்தியை மக்களைச் சென்றடையச் செய்தல்."
        }
      },
      {
        title: { en: "Prayer", ta: "ஜெப ஊழியம்" },
        description: {
          en: "To establish a strong prayer movement that intercedes for individuals, families, churches, and nations.",
          ta: "தனிநபர்கள், குடும்பங்கள், சபைகள் மற்றும் தேசங்களுக்காக பரிந்துரை செய்யும் ஒரு பலத்த ஜெப இயக்கத்தை உருவாக்குதல்."
        }
      },
      {
        title: { en: "Christian Publishing", ta: "புத்தக ஊழியங்கள்" },
        description: {
          en: "To publish and distribute biblical books, magazines, devotionals, and teaching materials that strengthen believers.",
          ta: "விசுவாசிகளைப் பலப்படுத்தும் வேதப்பூர்வமான புத்தகங்கள், மாதாந்திர இதழ்கள் மற்றும் போதக நூல்களை பிரசுரித்து விநியோகித்தல்."
        }
      },
      {
        title: { en: "Discipleship", ta: "சீஷத்துவம்" },
        description: {
          en: "To nurture believers through sound biblical teaching, leadership development, and spiritual mentoring.",
          ta: "ஆரோக்கியமான வேதாகமப் போதனை, தலைமைத்துவ மேம்பாடு மற்றும் ஆவிக்குரிய ஆலோசனைகள் மூலம் விசுவாசிகளை சீஷர்களாக உருவாக்குதல்."
        }
      },
      {
        title: { en: "Community Transformation", ta: "சமூக மாற்றம்" },
        description: {
          en: "To serve society through compassionate ministry and practical expressions of Christian love.",
          ta: "அன்பின் நற்செயல்களின் மூலமாகவும், இரக்கமுள்ள ஊழியங்களின் மூலமாகவும் சமூகத்திற்குச் சேவை செய்தல்."
        }
      }
    ],
    coreValues: [
      { en: "Christ-Centered Living", ta: "கிறிஸ்துவை மையமாகக் கொண்ட வாழ்வு" },
      { en: "Biblical Integrity", ta: "வேதாகம மதிப்புகளின்படி வாழ்தல்" },
      { en: "Prayer Dependence", ta: "ஜெபத்தில் நிலைத்திருத்தல்" },
      { en: "Evangelistic Passion", ta: "சுவிசேஷ தாகம்" },
      { en: "Servant Leadership", ta: "சேவை மனப்பான்மையுடன் வழிநடத்துதல்" },
      { en: "Compassionate Service", ta: "இரக்கமுள்ள சேவை" },
      { en: "Spiritual Excellence", ta: "ஆவிக்குரிய மேன்மை" }
    ]
  },

  branchChurches: {
    intro: {
      en: "Through God's grace, Fire Flame Mission has established and supported multiple churches and mission stations across Tamil Nadu.",
      ta: "தேவனுடைய கிருபையினால், அக்கினி ஜுவாலை ஊழியம் தமிழ்நாட்டின் பல்வேறு பகுதிகளில் பல சபைகளையும் மிஷனரி மையங்களையும் நிறுவி ஆதரித்து வருகிறது."
    },
    locations: [
      { en: "Nagercoil", ta: "நாகர்கோவில்" },
      { en: "Kanyakumari", ta: "கன்னியாகுமரி" },
      { en: "Hosur", ta: "ஓசூர்" },
      { en: "Kanchipuram", ta: "காஞ்சிபுரம்" },
      { en: "Chengalpattu", ta: "செங்கல்பட்டு" },
      { en: "Tirunelveli", ta: "திருநெல்வேலி" },
      { en: "Tenkasi", ta: "தென்காசி" },
      { en: "Coimbatore Region", ta: "கோயம்புத்தூர் மற்றும் சுற்றுவட்டாரங்கள்" },
      { en: "Various Rural Mission Fields", ta: "பல்வேறு கிராமப்புற மிஷனரி தளங்கள்" }
    ],
    focus: [
      { en: "Sunday Worship Services", ta: "ஞாயிறு ஆராதனைகள்" },
      { en: "Prayer Meetings", ta: "ஜெபக் கூட்டங்கள்" },
      { en: "Bible Study Classes", ta: "வேத ஆராய்ச்சி வகுப்புகள்" },
      { en: "Youth Fellowships", ta: "இளைஞர் ஐக்கியங்கள்" },
      { en: "Children's Programs", ta: "சிறுவர் ஊழியங்கள்" },
      { en: "Evangelistic Outreach", ta: "சுவிசேஷப் பணிகள்" },
      { en: "Community Care", ta: "சமூக உதவிகள்" }
    ]
  },

  leadershipTeam: {
    founder: {
      name: { en: "Rev. S. Jerominas", ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்" },
      role: { en: "Founder & Chief Pastor", ta: "நிறுவனர் & தலைமை போதகர்" }
    },
    intro: {
      en: "The ministry is supported by dedicated pastors, evangelists, missionaries, prayer warriors, and volunteers who faithfully serve in different regions.",
      ta: "பல்வேறு பகுதிகளில் விசுவாசத்தோடு சேவை செய்யும் அர்ப்பணிப்புள்ள போதகர்கள், சுவிசேஷகர்கள், மிஷனரிகள், ஜெப வீரர்கள் மற்றும் தன்னார்வலர்களால் இந்த ஊழியம் தாங்கப்படுகிறது."
    },
    roles: [
      {
        title: { en: "Pastors", ta: "போதகர்கள்" },
        description: { en: "Providing spiritual leadership and shepherding local congregations.", ta: "உள்ளூர் சபைகளை வழிநடத்தி விசுவாசிகளுக்கு ஆவிக்குரிய ஆகாரம் அளிப்பவர்கள்." }
      },
      {
        title: { en: "Evangelists", ta: "சுவிசேஷகர்கள்" },
        description: { en: "Leading Gospel outreach and evangelistic campaigns.", ta: "நற்செய்தி கூட்டங்கள் மற்றும் கிராமப்புற சுவிசேஷப் பணிகளை முன்னின்று நடத்துபவர்கள்." }
      },
      {
        title: { en: "Missionaries", ta: "மிஷனரிகள்" },
        description: { en: "Serving in mission fields, villages, and developing ministry centers.", ta: "சுவிசேஷம் சென்றடையாத கிராமப்புற மிஷனரி தளங்களில் புதிய ஊழியங்களை உருவாக்குபவர்கள்." }
      },
      {
        title: { en: "Prayer Coordinators", ta: "ஜெப ஒருங்கிணைப்பாளர்கள்" },
        description: { en: "Organizing prayer networks and intercessory ministries.", ta: "ஜெப வலையமைப்புகள், வாராந்திர மற்றும் மாதாந்திர பரிந்துரை ஜெபங்களை நடத்துபவர்கள்." }
      },
      {
        title: { en: "Youth Leaders", ta: "இளைஞர் தலைவர்கள்" },
        description: { en: "Mentoring and equipping the next generation.", ta: "இளைஞர்களை ஆவிக்குரிய வாழ்வில் வழிநடத்தி நற்செய்திப் பணிகளுக்கு ஆயத்தப்படுத்துபவர்கள்." }
      },
      {
        title: { en: "Children's Ministry Workers", ta: "சிறுவர் ஊழியர்கள்" },
        description: { en: "Teaching and nurturing children in biblical truth.", ta: "சிறுவர்களுக்கு நற்பண்புகளையும் வேதாகம சத்தியங்களைக் கற்றுத் தருபவர்கள்." }
      }
    ],
    commitments: [
      { en: "Proclaim Christ", ta: "கிறிஸ்துவை அறிவித்தல்" },
      { en: "Build the Church", ta: "சபையைக் கட்டுதல்" },
      { en: "Equip Believers", ta: "விசுவாசிகளை ஆயத்தப்படுத்துதல்" },
      { en: "Serve Communities", ta: "சமூகத்திற்குச் சேவை செய்தல்" },
      { en: "Advance God's Kingdom", ta: "தேவனுடைய ராஜ்யத்தை விரிவாக்குதல்" }
    ]
  },

  statistics: [
    { value: "25+", label: { en: "Years in Ministry", ta: "ஆண்டுகள் ஊழியம்" } },
    { value: "100+", label: { en: "Publications Released", ta: "வெளியிடப்பட்ட நூல்கள்" } },
    { value: "1,000+", label: { en: "Families Reached", ta: "சென்றடைந்த குடும்பங்கள்" } },
    { value: "50+", label: { en: "Mission Activities", ta: "மிஷனரி செயல்பாடுகள்" } }
  ],

  ministries: [
    {
      id: "church",
      title: { en: "Church Ministry", ta: "திருச்சபை ஊழியம்" },
      description: {
        en: "Establishing and supporting local churches and missionary centers to build strong faith communities.",
        ta: "உள்ளூர் சபைகள் மற்றும் மிஷனரி மையங்களை நிறுவி, விசுவாசிகளை ஆவிக்குரிய வாழ்வில் வளர்த்தல்."
      },
      tamilName: "திருச்சபை மற்றும் மிஷனரி ஊழியம்",
      iconName: "Church"
    },
    {
      id: "prayer",
      title: { en: "Prayer Ministry", ta: "ஜெப ஊழியம்" },
      description: {
        en: "Daily prayer support, fasting prayer meetings, intercessory gatherings, and spiritual counseling for individuals and families.",
        ta: "தனிநபர்கள் மற்றும் குடும்பங்களுக்கான தினசரி ஜெப உதவி, உபவாச ஜெபக் கூட்டங்கள் மற்றும் ஆவிக்குரிய ஆலோசனைகள்."
      },
      tamilName: "ஜெப மற்றும் தீர்க்கதரிசன ஊழியம்",
      iconName: "Flame"
    },
    {
      id: "evangelism",
      title: { en: "Evangelism Ministry", ta: "சுவிசேஷ ஊழியம்" },
      description: {
        en: "Village outreach programs, Gospel campaigns, house-to-house ministry, and community evangelism initiatives.",
        ta: "கிராமப்புற சுவிசேஷப் பணிகள், நற்செய்தி பெருவிழாக்கள் மற்றும் இல்லங்கள் தோறும் சுவிசேஷத்தை அறிவித்தல்."
      },
      tamilName: "வீடு வீடாக சுவிசேஷ ஊழியம்",
      iconName: "Compass"
    },
    {
      id: "publishing",
      title: { en: "Christian Publishing", ta: "புத்தக ஊழியங்கள்" },
      description: {
        en: "Publication of books, magazines, devotionals, teaching materials, and Gospel literature in multiple formats.",
        ta: "கிறிஸ்தவ புத்தகங்கள், மாதாந்திர செய்தி இதழ்கள் மற்றும் ஆவிக்குரிய நூல்களை அச்சிடுதல்."
      },
      tamilName: "நூல் மற்றும் பத்திரிக்கை ஊழியம்",
      iconName: "BookOpen"
    },
    {
      id: "youth",
      title: { en: "Youth Ministry", ta: "வாலிபர் ஊழியம்" },
      description: {
        en: "Leadership training, youth conferences, discipleship programs, and spiritual growth initiatives for young people.",
        ta: "இளைஞர்களுக்கான தலைமைத்துவப் பயிற்சிகள், மாநாடுகள், சீஷத்துவப் பயிற்சி மற்றும் ஆவிக்குரிய வளர்ச்சி திட்டங்கள்."
      },
      tamilName: "அக்கினி ஜுவாலை வாலிபர் ஊழியம்",
      iconName: "Users"
    },
    {
      id: "children",
      title: { en: "Children's Ministry", ta: "சிறுவர் ஊழியம்" },
      description: {
        en: "Bible teaching, character development, and faith formation programs designed for children.",
        ta: "சிறுவர்களுக்கான வேதாகமப் போதனை, நற்பண்புகள் வளர்த்தல் மற்றும் விசுவாசப் பயிற்சி வகுப்புகள்."
      },
      tamilName: "விசுவாச சிறுவர் ஊழியம்",
      iconName: "Baby"
    },
    {
      id: "women",
      title: { en: "Women's Ministry", ta: "மகளிர் ஊழியம்" },
      description: {
        en: "Encouraging and equipping women through fellowship meetings, prayer gatherings, and biblical teaching.",
        ta: "சகோதரிகள் ஐக்கியக் கூட்டங்கள், ஜெபக் கூடங்கள் மற்றும் வேதாகமப் படிப்புகள் மூலம் பெண்களை ஆவிக்குரிய வாழ்வில் பலப்படுத்துதல்."
      },
      tamilName: "சகோதரிகள் ஜெப ஐக்கியம்",
      iconName: "Heart"
    },
    {
      id: "missionary-support",
      title: { en: "Missionary Support", ta: "மிஷனரி ஆதரவு" },
      description: {
        en: "Training, supporting, and partnering with missionaries serving in various rural regions.",
        ta: "பல்வேறு கிராமப்புற மற்றும் தொலைதூரப் பகுதிகளில் சேவை செய்யும் மிஷனரிகளுக்குப் பயிற்சி மற்றும் நிதி ஆதரவு அளித்தல்."
      },
      tamilName: "மிஷனரி பணித் தாங்குதல்",
      iconName: "TrendingUp"
    },
    {
      id: "revival-meetings",
      title: { en: "Revival Meetings", ta: "எழுப்புதல் கூட்டங்கள்" },
      description: {
        en: "Special conventions, revival services, prayer conferences, and spiritual enrichment programs.",
        ta: "சிறப்பு நற்செய்தி பெருங் கூட்டங்கள், எழுப்புதல் கூட்டங்கள் மற்றும் ஆவிக்குரிய ஜெபப் பயிற்சி மாநாடுகள்."
      },
      tamilName: "ஆவிக்குரிய எழுப்புதல் மாநாடுகள்",
      iconName: "Sparkles"
    },
    {
      id: "bible-teaching",
      title: { en: "Bible Teaching", ta: "வேதாகமப் போதனை" },
      description: {
        en: "Regular Bible study programs, leadership training sessions, seminars, and discipleship courses.",
        ta: "முறையான வேதாகமக் கல்வி, ஊழியர்களுக்கான தலைமைத்துவப் பயிற்சிகள் மற்றும் கருத்தரங்குகள்."
      },
      tamilName: "வேத ஆராய்ச்சி போதகம்",
      iconName: "BookOpenCheck"
    },
    {
      id: "literature-distribution",
      title: { en: "Literature Distribution", ta: "இலக்கிய விநியோகம்" },
      description: {
        en: "Distribution of Christian books, magazines, tracts, and biblical resources to churches, families, and communities.",
        ta: "சபைகள், குடும்பங்கள் மற்றும் சமுதாயத்திற்கு இலவசமாக ஆவிக்குரிய நூல்கள் மற்றும் துண்டுப் பிரசுரங்களை விநியோகித்தல்."
      },
      tamilName: "இலக்கிய சுவிசேஷ விநியோகம்",
      iconName: "Share2"
    },
    {
      id: "church-ministry",
      title: { en: "Church Ministry", ta: "திருச்சபை ஊழியங்கள்" },
      description: {
        en: "Establishing and nurturing local churches, teaching sound biblical doctrines, and building strong spiritual communities.",
        ta: "உள்ளூர் சபைகளை நிறுவி வளர்த்தல், ஆரோக்கியமான வேத போதனைகளை போதித்தல் மற்றும் வலுவான ஆவிக்குரிய சமூகங்களை உருவாக்குதல்."
      },
      tamilName: "திருச்சபை ஊழியங்கள்",
      iconName: "Church"
    }
  ] as MinistryItem[],

  sermons: [
    {
      id: "video-sermon",
      title: { en: "Video Sermon: Overcoming Jericho Barriers", ta: "வீடியோ செய்தி: எரிகோ தடைகளை வெல்லுதல்" },
      type: "video",
      reference: { en: "Joshua 6:1-20", ta: "யோசுவா 6:1-20" },
      excerpt: {
        en: "Watch the full teaching on how praise and faithful obedience bring down spiritual walls in life.",
        ta: "துதியும் விசுவாசமான கீழ்ப்படிதலும் எவ்வாறு வாழ்வில் உள்ள ஆவிக்குரிய மதில்களைத் தகர்க்கும் என்பதை வீடியோவில் பார்க்கவும்."
      },
      mediaUrl: "https://youtube.com/@akkinijwalaimissionpr.jero6636?si=OidlbtYcvEzTOZ_7"
    },
    {
      id: "audio-sermon",
      title: { en: "Audio Sermon: Rebuilding the Family Altar", ta: "ஆடியோ செய்தி: குடும்ப ஜெப பலிபீடம்" },
      type: "audio",
      reference: { en: "Acts 20:20", ta: "அப்போஸ்தலர் 20:20" },
      excerpt: {
        en: "Listen to the audio podcast on house-to-house discipleship and rebuilding daily intercessions.",
        ta: "வீடு வீடான சீஷத்துவம் மற்றும் தினசரி பரிந்துரை ஜெபங்களை மீண்டும் கட்டியெழுப்புவது குறித்த ஆடியோ போட்காஸ்ட் கேட்கவும்."
      },
      mediaUrl: "#"
    },
    {
      id: "written-message",
      title: { en: "Written Message: Proclaiming the Unsearchable Riches", ta: "எழுதப்பட்ட செய்தி: அளவிட முடியாத ஐசுவரியங்கள்" },
      type: "written",
      reference: { en: "Ephesians 3:8", ta: "எபேசியர் 3:8" },
      excerpt: {
        en: "Read this classical publication transcript on sharing Christ's riches through literature.",
        ta: "நூல்கள் மூலம் கிறிஸ்துவின் அளவிட முடியாத ஐசுவரியங்களை அறிவிப்பது குறித்த கட்டுரைத் தொகுப்பை வாசிக்கவும்."
      },
      mediaUrl: "#"
    }
  ] as SermonItem[],

  magazines: [] as MagazineItem[],

  general: {
    motto: {
      en: "Who maketh his angels spirits; his ministers a flaming fire. — Psalm 104:4",
      ta: "தம்முடைய தூதர்களை காற்றுகளாகவும் தம்முடைய ஊழியக்காரரை அக்கினி ஜுவாலைகளாகவும் செய்கிறார் — சங்கீதம் 104:4"
    },
    address: {
      en: "K.R. Complex Chithambaranagar P.W.D.Road, Nagercoil-2-K.K.Dist",
      ta: "K.R. காம்ப்ளக்ஸ், சிதம்பரநகர், பி.டபிள்யூ.டி. ரோடு, நாகர்கோவில்-2, கன்னியாகுமரி மாவட்டம்"
    },
    founderName: {
      en: "Rev. S. Jerominas",
      ta: "அருட்பணி. எஸ். ஜெரோமினாஸ்"
    },
    phone1: "+91 88700 83746",
    phone2: "",
    email: "fireflamemission07@gmail.com",
    donationMotto: {
      en: "Your support enables the printing and free distribution of Bible promise materials and missionary support.",
      ta: "வாக்குத்தத்த அட்டைகள் அச்சிடுவதற்கும் இலவச சுவிசேஷப் புத்தக விநியோகத்திற்கும் உங்களது நன்கொடைகள் உதவுகின்றன."
    }
  },
  churches: {
    kanyakumari: [
      { sNo: 1, location: { en: "Nagercoil", ta: "நாகர்கோவில்" }, pastor: { en: "Pr. V. Jerominas", ta: "Pr. V. ஜெரமியா" } },
      { sNo: 2, location: { en: "Colachel", ta: "குளச்சல்" }, pastor: { en: "Pr. Jinoth", ta: "Pr. ஜினோத்" } },
      { sNo: 3, location: { en: "Karungal Paloor", ta: "கருங்கல் பாலூர்" }, pastor: { en: "Pr. Jeba", ta: "Pr. ஜெபா" } },
      { sNo: 4, location: { en: "Kanyakumari", ta: "கன்னியாகுமரி" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
      { sNo: 5, location: { en: "Kollamcode", ta: "கொல்லங்கோடு" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
      { sNo: 6, location: { en: "Midalam", ta: "மிடாலம்" }, pastor: { en: "Pr. Selvam", ta: "Pr. செல்வம்" } },
      { sNo: 7, location: { en: "Keezh Manakkudy", ta: "கீழ மணக்குடி" }, pastor: { en: "Pr. Anthony", ta: "Pr. ஆண்ட்ரனி" } },
      { sNo: 8, location: { en: "Kesavanputhenthurai", ta: "கேசவன்புத்தன்துறை" }, pastor: { en: "Pr. Jerominas (Stalin)", ta: "Pr. ஜெரமியா (ஸ்டாலின்)" } },
      { sNo: 9, location: { en: "Karungal (Junction)", ta: "கருங்கல் (ஜங்ஷன்)" }, pastor: { en: "Pr. Robinson", ta: "Pr. ராபின்சன்" } },
      { sNo: 10, location: { en: "Ramanthurai", ta: "இராமந்துறை" }, pastor: { en: "Bro. Jerome", ta: "Bro. ஜெரோம்" } },
    ],
    other: [
      { sNo: 1, location: { en: "Tuticorin", ta: "தூத்துக்குடி" }, pastor: { en: "Jhansi", ta: "ஜான்சி" } },
      { sNo: 2, location: { en: "Alangulam", ta: "ஆலங்குளம்" }, pastor: { en: "Pr. James", ta: "Pr. ஜேம்ஸ்" } },
      { sNo: 3, location: { en: "Madurai", ta: "மதுரை" }, pastor: { en: "Paul Kegin", ta: "பால்கேகின்" } },
      { sNo: 4, location: { en: "Madurai", ta: "மதுரை" }, pastor: { en: "Pr. Kannan", ta: "Pr. கண்ணன்" } },
      { sNo: 5, location: { en: "Mayiladuthurai", ta: "மயிலாடுதுறை" }, pastor: { en: "S. S. Paul", ta: "S.S. பால்" } },
      { sNo: 6, location: { en: "Neyveli", ta: "நெய்வேலி" }, pastor: { en: "Pr. Abraham", ta: "Pr. ஆபிரகாம்" } },
      { sNo: 7, location: { en: "Thondi", ta: "தொண்டி" }, pastor: { en: "Pr. James Jebaraj", ta: "Pr. ஜேம்ஸ் ஜெபராஜ்" } },
      { sNo: 8, location: { en: "Poompuhar (Nagai)", ta: "பூம்புகார் (நாகை)" }, pastor: { en: "Pr. Ambrose", ta: "Pr. அம்புரோஸ்" } },
      { sNo: 9, location: { en: "Parappadi", ta: "பரப்பாடி" }, pastor: { en: "Pr. James", ta: "Pr. ஜேம்ஸ்" } },
      { sNo: 10, location: { en: "Chennai (Vadapalani)", ta: "சென்னை (வடபழனி)" }, pastor: { en: "Roobavathi", ta: "ரூபவதி" } },
      { sNo: 11, location: { en: "Delhi", ta: "டெல்லி" }, pastor: { en: "Pr. Arokia Dass", ta: "Pr. ஆரோக்கிய தாஸ்" } },
      { sNo: 12, location: { en: "Red Hills (Chennai)", ta: "செங்குன்றம் (சென்னை)" }, pastor: { en: "Sis. Yamuna", ta: "Sis. யமுனா" } },
    ]
  },
  missionaries: [
    { sNo: 1, location: { en: "Uttar Pradesh", ta: "உத்திரபிரதேசம்" }, missionary: { en: "Pr. Sadan Johnson", ta: "Pr. சதன் ஜான்சன்" } },
    { sNo: 2, location: { en: "Chhattisgarh", ta: "சத்தீஸ்கர்" }, missionary: { en: "Pr. S. Suresh", ta: "Pr. S. சுரேஷ்" } },
    { sNo: 3, location: { en: "Bihar", ta: "பீகார்" }, missionary: { en: "Pr. Vinoth", ta: "Pr. வினோத்" } },
    { sNo: 4, location: { en: "Maharashtra", ta: "மகாராஷ்டிரா" }, missionary: { en: "Pr. Joshua", ta: "Pr. யோசுவா" } },
    { sNo: 5, location: { en: "Kerala", ta: "கேரளா" }, missionary: { en: "Pr. Akhila", ta: "Pr. அகிலா" } },
    { sNo: 6, location: { en: "Puducherry", ta: "பாண்டி" }, missionary: { en: "Pr. Jeyaraj", ta: "Pr. ஜெயராஜ்" } },
    { sNo: 7, location: { en: "Vembanur", ta: "வேம்பனூர்" }, missionary: { en: "Child Care Support", ta: "ஒரு குழந்தை பராமரிப்பு" } },
    { sNo: 8, location: { en: "Mother Teresa Home, Narode", ta: "அன்னை தெரசா இல்லம், நாரோடு" }, missionary: { en: "Sis. Seena", ta: "Sis. சீனா" } },
    { sNo: 9, location: { en: "Chengalpattu", ta: "செங்கல்பட்டு" }, missionary: { en: "Pr. Abraham", ta: "Pr. ஆபிரகாம்" } },
    { sNo: 10, location: { en: "Thanjavur", ta: "தஞ்சை" }, missionary: { en: "Pr. Johnson", ta: "Pr. ஜான்சன்" } }
  ]
};