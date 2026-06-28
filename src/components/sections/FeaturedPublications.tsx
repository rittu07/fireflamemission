"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Language } from "@/components/LanguageContext";
import { contentData } from "@/data/contentData";
import { OrnamentalSeparator } from "@/components/OrnamentalSeparator";
import { PaperCard } from "@/components/PaperCard";
import { BookOpen, Download, ShoppingCart, X, ChevronLeft, ChevronRight, BookMarked, ExternalLink } from "lucide-react";

// Bilingual sample pages for the interactive 3D Book Reader
const BOOK_PAGES: Record<string, { en: string[]; ta: string[] }> = {
  "akkini-mugam": {
    en: [
      "CHAPTER 1: THE FIERY CALL\n\nEvangelism is not a mere program; it is a spiritual fire that must burn in every believer's heart. We are called to be witnesses of the resurrection, carrying the torch of truth into the darkest corners of our societies.",
      "The Early Church was defined by its boldness. In Acts 4:31, we read that when they prayed, the place was shaken, and they were all filled with the Holy Spirit. This is the model of fiery revival Fire Flame Mission pursues.",
      "To stand as a witness in these last days, we must put on the full armor of God. The Word is our sword, and prayer is our breath. No barriers, not even spiritual walls like Jericho, can withstand a congregation unified in prayer.",
      "Go forth into the harvest fields. The harvest is plentiful but the workers are few. Proclaim the unsearchable riches of Christ through books, pamphlets, and personal visits, for the glory of His name."
    ],
    ta: [
      "அதிகாரம் 1: அக்கினி அழைப்பு\n\nசுவிசேஷப் பணி என்பது ஏதோ ஒரு சடங்கு அல்ல; அது ஒவ்வொரு விசுவாசியின் இருதயத்திலும் எரிய வேண்டிய ஆவிக்குரிய நெருப்பு. இருள் சூழ்ந்த உலகிற்கு சத்தியத்தின் வெளிச்சத்தைக் கொண்டு செல்ல நாம் சாட்சிகளாக அழைக்கப்பட்டுள்ளோம்.",
      "ஆதி திருச்சபை அதன் தைரியத்தால் அடையாளப்படுத்தப்பட்டது. அப்போஸ்தலர் 4:31-ல், அவர்கள் ஜெபித்தபோது, கூடின இடம் அசைந்தது, அவர்கள் எல்லாரும் பரிசுத்த ஆவியினால் நிரப்பப்பட்டு தேவவசனத்தை தைரியமாய்ச் சொன்னார்கள் என்று வாசிக்கிறோம்.",
      "இந்தக் கடைசி நாட்களில் சாட்சியாக நிற்பதற்கு, நாம் தேவனுடைய சர்வாயுதவர்க்கத்தையும் தரித்துக்கொள்ள வேண்டும். வேதம் நமது பட்டயம், ஜெபம் நமது சுவாசம். ஜெபத்தில் ஒருமித்த சபைக்கு முன்னால் எந்தவொரு ஆவிக்குரிய தடையோ, எரிகோ மதிலோ நிற்க முடியாது.",
      "அறுவடை வயல்களுக்குப் புறப்பட்டுச் செல்லுங்கள். அறுப்பு மிகுதி, வேலையாட்களோ குறைவு. புத்தகங்கள், துண்டுப் பிரசுரங்கள் மற்றும் இல்ல தரிசனங்கள் மூலம் கிறிஸ்துவின் அளவிட முடியாத ஐசுவரியங்களை உமது சபைகளில் அறிவியுங்கள்."
    ]
  },
  "jeba-mugam": {
    en: [
      "CHAPTER 1: THE HOUSE ALTAR\n\nActs 20:20 sets our apostolic standard: teaching publicly and from house to house. Intimacy with God is nurtured on the knees of family intercessors. Rebuilding the home altar is the key to local revival.",
      "When a family gathers in prayer, they establish a watchtower. The presence of God guards the threshold, shielding the home from spiritual conflicts and bringing peace. Weekly intercessions bring families together.",
      "Prophetic counseling is not about satisfying curiosity; it is about seeking God's counsel for direction. Our Hosur and Nagercoil sanctuaries stand ready to support you, counseling through the guiding light of scriptures.",
      "Let the fire on your family altar never grow cold. Pray for your neighbors, stand with the broken, and declare the promises of God daily over your children."
    ],
    ta: [
      "அதிகாரம் 1: இல்ல பலிபீடம்\n\nஅப்போஸ்தலர் 20:20 நமது அப்போஸ்தலிக் மாதிரியை அமைக்கிறது: பொதுவிடங்களிலும் வீடுகள் தோறும் உபதேசித்தல். தேவனுடனான ஐக்கியம் இல்லங்கள் தோறும் முழங்கால்களில் வளர்க்கப்படுகிறது. இல்ல பலிபீடங்களை மீண்டும் கட்டுவதே எழுப்புதலின் திறவுகோல்.",
      "ஒரு குடும்பம் ஜெபிக்க கூடும்போது, அங்கே ஒரு காவல் கோபுரம் நிறுவப்படுகிறது. தேவனுடைய பிரசன்னம் வாசல் படிகளைக் காக்கிறது, ஆவிக்குரிய போராட்டங்களிலிருந்து இல்லங்களைப் பாதுகாத்து சமாதானத்தை அருளுகிறது.",
      "தீர்க்கதரிசன ஆலோசனை என்பது வெறும் ஆர்வத்தை திருப்திப்படுத்துவது அல்ல; அது தேவனுடைய வழிகாட்டுதலை நாடுவது. ஓசூர் மற்றும் நாகர்கோவில் ஜெபக்கூடங்கள் வேத வெளிச்சத்தில் உங்களுக்கு வழிகாட்ட எப்போதும் தயாராக உள்ளன.",
      "உங்கள் குடும்ப பலிபீடத்தின் நெருப்பு ஒருபோதும் அணைந்துபோகாமல் இருக்கட்டும். உங்கள் அண்டை வீட்டாருக்காக ஜெபியுங்கள், சோர்ந்திருப்போரைத் தாங்குங்கள், தேவனுடைய வாக்குத்தத்தங்களை உங்கள் பிள்ளைகள்மேல் தினமும் அறிவியுங்கள்."
    ]
  },
  "daily-confession": {
    en: [
      "DAY 1: VICTORY & PROTECTION\n\nConfession: 'No weapon formed against me shall prosper, and every tongue that rises against me in judgment I shall condemn. This is my heritage as a servant of the Lord.' (Isaiah 54:17)",
      "DAY 2: FAITH & PROVISION\n\nConfession: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters. He restores my soul.' (Psalm 23:1-2)",
      "DAY 3: STRENGTH & HEALING\n\nConfession: 'God is my refuge and strength, a very present help in trouble. He heals my broken heart and binds up all my painful wounds.' (Psalm 46:1, Psalm 147:3)",
      "DAY 4: GUIDANCE & PEACE\n\nConfession: 'The peace of God, which surpasses all understanding, will guard my heart and mind through Christ Jesus. He guides my steps in perfect paths.' (Philippians 4:7)"
    ],
    ta: [
      "நாள் 1: ஜெயம் & பாதுகாப்பு\n\nஅறிக்கை: 'உனக்கு விரோதமாய் உருவாக்கப்படும் எந்த ஆயுதமும் வாய்க்காதேபோம்; நியாயத்தீர்ப்பில் உனக்கு விரோதமாய் எழும்பும் எந்த நாவையும் நீ குற்றப்படுத்துவாய். இது கர்த்தருடைய ஊழியக்காரரின் சுதந்தரம்.' (ஏசாயா 54:17)",
      "நாள் 2: விசுவாசம் & சந்தித்தல்\n\nஅறிக்கை: 'கர்த்தர் என் மேய்ப்பராயிருக்கிறார்; நான் தாழ்ச்சடையேன். அவர் என்னைப்புல்லுள்ள இடங்களில் மேய்த்து, அமர்ந்த தண்ணீர்கள் அண்டையில் நடத்துகிறார். அவர் என் ஆத்துமாவைத் தேற்றுகிறார்.' (சங்கீதம் 23:1-2)",
      "நாள் 3: பெலன் & சுகம்\n\nஅறிக்கை: 'தேவன் நமக்கு அடைக்கலமும் பெலனும், ஆபத்துக்காலத்தில் அனுகூலமான துணையுமானவர். அவர் இருதயம் நொறுங்குண்டவர்களைக் குணமாக்குகிறார், அவர்களின் காயங்களைக் கட்டுகிறார்.' (சங்கீதம் 46:1, 147:3)",
      "நாள் 4: நடத்துதல் & சமாதானம்\n\nஅறிக்கை: 'எல்லா புத்திக்கும் மேலான தேவ சமாதானம் என் இருதயத்தையும் சிந்தையையும் கிறிஸ்து இயேசுவுக்குள் காத்துக்கொள்ளும். அவர் என் பாதைகளைச் செம்மைப்படுத்துகிறார்.' (பிலிப்பியர் 4:7)"
    ]
  },
  "holy-bible": {
    en: [
      "GENESIS 1:1-3\n\nIn the beginning God created the heaven and the earth.\n\nAnd the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.\n\nAnd God said, Let there be light: and there was light.",
      "JOHN 3:16\n\nFor God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      "PSALM 23:1-3\n\nThe Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters. He restores my soul; He leads me in paths of righteousness for his name's sake.",
      "REVELATION 22:20-21\n\nHe which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen."
    ],
    ta: [
      "ஆதியாகமம் 1:1-3\n\nஆதியிலே தேவன் வானத்தையும் பூமியையும் சிருஷ்டித்தார்.\n\nபூமியானது ஒழுங்கின்மையும் வெற்றுமையுமாய் இருந்தது; ஆழத்தின்மேல் இருள் இருந்தது; தேவ ஆவியானவர் ஜலத்தின்மேல் அசைவாடிக்கொண்டிருந்தார்.\n\nதேவன்: வெளிச்சம் உண்டாகக்கடவது என்றார், வெளிச்சம் உண்டாயிற்று.",
      "யோவான் 3:16\n\nதேவன், தம்முடைய ஒரேபேறான குமாரனை விசுவாசிக்கிறவன் எவனோ அவன் கெட்டுப்போகாமல் நித்தியஜீவனை அடையும்படிக்கு, அவரைத் தந்தருளி, இவ்வளவாய் உலகத்தில் அன்புகூர்ந்தார்.",
      "சங்கீதம் 23:1-3\n\nகர்த்தர் என் மேய்ப்பராயிருக்கிறார்; நான் தாழ்ச்சியடையேன். அவர் என்னைப்புல்லுள்ள இடங்களில் மேய்த்து, அமர்ந்த தண்ணீர்கள் அண்டையில் நடத்துகிறார். அவர் என் ஆத்துமாவைத் தேற்றுகிறார்.",
      "வெளிப்படுத்தின விசேஷம் 22:20-21\n\nஇவைகளைச் சாட்சியாக அறிவிக்கிறவர்: மெய்யாகவே நான் சீக்கிரமாய் வருகிறேன் என்கிறார். ஆமென், கர்த்தராகிய இயேசுவே, வாரும். நம்முடைய கர்த்தராகிய இயேசு கிறிஸ்துவின் கிருபை உங்கள் அனைவரோடுங்கூட இருப்பதாக. ஆமென்."
    ]
  },
  "revival": {
    en: [
      "1. INTRODUCTION\n\nRevival is My Longing\n\nThe days when Jesus lived on this earth, the three and a half years of His ministry, were days of the greatest revival this world has ever seen. The name of Jesus was exalted in every city and village. There was no chance for rulers, governors, or kings not to know Jesus. His fame spread throughout the land (Matthew 4:23-24).\n\nToday, the most powerful word heard everywhere and at all times in the church is 'Revival'. Many churches call themselves 'Revival Churches', their meetings 'Revival Meetings', and those who preach with power 'Revival Preachers'.",
      "CHAPTER 1: WHAT IS REVIVAL?\n\nRevival, in English, means 'REVIVAL' (to live again, to recover life, or spiritual resurrection).\n\n'And believers were increasingly added to the Lord, multitudes of both men and women' (Acts 5:14). Revival is when God tangibly comes down among us and works. It is being refreshed and renewed in the presence of God.",
      "CHAPTER 2: PREPARING FOR REVIVAL\n\nTransitioning from routine prayers to praying with a deep burden for the nation is the preparation for revival. Just as Elijah repaired the broken altar on Mount Carmel, we must rebuild our broken altars of prayer.\n\n'Then the fire of the Lord fell and consumed the burnt sacrifice, and the wood and the stones and the dust' (1 Kings 18:38). When we seek God with a broken heart in prayer, the fire of revival will fall upon our land.",
      "CONCLUSION\n\nWherever true revival breaks out, there will be a burden for souls and salvation. Societies will be transformed, chains of sin broken, and churches sanctified.\n\n'O Lord, revive Your work in the midst of the years' (Habakkuk 3:2). May the Lord help each of us to burn as a fire of revival. Amen."
    ],
    ta: [
      "1. முன்னுரை\n\nஎழுப்புதலே எனது வாஞ்சை\n\nஇயேசு இந்த உலகத்தில் வாழ்ந்த நாட்கள், அவர் ஊழியம் செய்த மூன்றரை வருடங்கள், இந்த உலகம் இதுவரை கண்டிராத மாபெரும் எழுப்புதலின் நாட்களாய் இருந்தது. சகல பட்டணங்களிலும், கிராமங்களிலும் இயேசுவின் நாமம் உயர்த்தப்பட்டது. இயேசுவை அறியாத ஜனங்கள், அதிபதிகள், ஆளுநர்கள், ராஜாக்கள் இருந்திருக்க வாய்ப்பே இல்லை. அவருடைய கீர்த்தி தேசமெங்கும் பரவிற்று (மத் 4:23,24).\n\nஇன்று எங்கும், எப்போதும், திருச்சபையில் கேட்கும் ஆற்றல் மிகுந்த வார்த்தை, 'எழுப்புதல்'. அநேக திருச்சபைகள் 'எழுப்புதல் சபை' என்றும், நடத்தும் கூட்டங்களுக்கு 'எழுப்புதல் கூட்டம்' என்றும், வல்லமையாய் பிரசங்கிப்பவர்களை 'எழுப்புதல் பிரசங்கியார்' என்றும் அழைப்பார்கள்.",
      "அதிகாரம் 1: எழுப்புதல் என்றால் என்ன?\n\nஎழுப்புதல் என்பது ஆங்கிலத்தில் 'REVIVAL' என்பதாகும். இவ்வார்த்தையின் பொருள் மறுபடி வாழ்தல், மரித்தல், பிழைத்தல் அல்லது உயிர்மீட்சி என்பதாகும்.\n\n'திரளான புருஷர்களும் ஸ்திரீகளும் விசுவாசமுள்ளவர்களாகி கர்த்தரிடமாக அதிகமதிகமாய் சேர்க்கப்பட்டார்கள்' (அப் 5:14). எழுப்புதல் என்பது தேவன் நம் மத்தியில் பிரத்தியட்சமாய் இறங்கி வந்து கிரியை செய்வதே ஆகும். தேவ பிரசன்னத்தில் புத்துயிர் பெறுவது.",
      "அதிகாரம் 2: எழுப்புதலுக்கு ஆயத்தம்\n\nவழக்கமான ஜெபங்கள் மாறி, தேசத்திற்கான பாரத்தோடு ஜெபிப்பதே எழுப்புதலுக்கான ஆயத்தமாகும். கர்மேல் பர்வதத்தில் எலியா உடைந்த பலிபீடத்தை செப்பனிட்டது போல, நம்முடைய உடைந்த ஜெப பலிபீடங்களை மீண்டும் செப்பனிட வேண்டும்.\n\n'அப்பொழுது கர்த்தரிடத்திலிருந்து அக்கினி இறங்கி, அந்த சர்வாங்க தகனபலியையும், விறகுகளையும், கற்களையும், மண்ணையும் பட்சித்தது' (1 இராஜா 18:38). நாம் ஜெபத்தில் உடைந்த இதயத்தோடு தேவனைத் தேடும்போது எழுப்புதலின் அக்கினி தேசத்தில் இறங்கும்.",
      "முடிவுரை\n\nஉண்மையான எழுப்புதல் எங்கே உண்டாகிறதோ, அங்கே ஆத்தும பாரமும் இரட்சிப்பும் உண்டாகும். சமுதாயத்தில் மாற்றங்கள் ஏற்படும், பாவக்கட்டுகள் உடையும், சபைகள் பரிசுத்தமடையும்.\n\n'கர்த்தாவே, வருஷங்களின் நடுவிலே உம்முடைய கிரியையை உயிர்ப்பியும்' (ஆபகூக் 3:2). எழுப்புதலின் அக்கினியாய் நாம் ஒவ்வொருவரும் எரிய கர்த்தர் நமக்கு உதவி செய்வாராக. ஆமென்."
    ]
  }
};

interface FeaturedPublicationsProps {
  showTitle?: boolean;
  limit?: number;
}

const getBookCoverStyles = (bookId: string, category: string) => {
  if (bookId === "akkini-mugam") {
    return { borderLeftColor: "#5C1A1A", backgroundColor: "#3B1111", color: "#E5C185" };
  }
  if (bookId === "jeba-mugam") {
    return { borderLeftColor: "#1E3A2F", backgroundColor: "#0F1E18", color: "#E5C185" };
  }
  if (bookId === "daily-confession") {
    return { borderLeftColor: "#1C2D37", backgroundColor: "#0F181E", color: "#E5C185" };
  }
  if (bookId === "holy-bible") {
    return { borderLeftColor: "#4A2E1B", backgroundColor: "#2B1A0F", color: "#E5C185" };
  }
  if (bookId === "revival") {
    return { borderLeftColor: "#1A2530", backgroundColor: "#0E151C", color: "#E5C185" };
  }

  switch (category) {
    case "Evangelism":
      return { borderLeftColor: "#5C1A1A", backgroundColor: "#471515", color: "#F0D5A6" };
    case "Prayer":
      return { borderLeftColor: "#1E3A2F", backgroundColor: "#14261F", color: "#F0D5A6" };
    case "Devotional":
      return { borderLeftColor: "#1C2D37", backgroundColor: "#131F26", color: "#F0D5A6" };
    case "Scripture":
      return { borderLeftColor: "#4A2E1B", backgroundColor: "#362215", color: "#F0D5A6" };
    case "Spiritual Warfare":
      return { borderLeftColor: "#2D2D2D", backgroundColor: "#1E1E1E", color: "#E5C185" };
    case "Faith":
      return { borderLeftColor: "#1F223D", backgroundColor: "#141627", color: "#E5C185" };
    case "Christian Living":
    default:
      return { borderLeftColor: "#3F2742", backgroundColor: "#2A1A2C", color: "#F0D5A6" };
  }
};

export const FeaturedPublications: React.FC<FeaturedPublicationsProps> = ({ 
  showTitle = true,
  limit
}) => {
  const { language, t } = useLanguage();
  
  // Selection states
  const [selectedBook, setSelectedBook] = useState<any | null>(null);
  const [readingBook, setReadingBook] = useState<any | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isReaderMobile, setIsReaderMobile] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Monitor viewport size for responsive layout behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsReaderMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectBook = (book: any) => {
    setSelectedBook(book);
    if (isMobile) {
      setMobileDrawerOpen(true);
    }
  };
  
  // Reader navigation states
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [readerOpened, setReaderOpened] = useState(false);
  const [turningDirection, setTurningDirection] = useState<"next" | "prev" | null>(null);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("base");

  // Touch gesture states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Search & Filter states
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "All", en: "All", ta: "எல்லாம்" },
    { id: "Evangelism", en: "Evangelism", ta: "சுவிசேஷம்" },
    { id: "Prayer", en: "Prayer", ta: "ஜெப ஊழியம்" },
    { id: "Devotional", en: "Devotional", ta: "வாக்குத்தத்தங்கள்" },
    { id: "Scripture", en: "Scripture", ta: "வேதாகமம்" },
    { id: "Christian Living", en: "Christian Living", ta: "கிறிஸ்தவ வாழ்க்கை" },
    { id: "Spiritual Warfare", en: "Spiritual Warfare", ta: "ஆவிக்குரிய யுத்தம்" },
    { id: "Faith", en: "Faith", ta: "விசுவாசம்" }
  ];

  const displayBooks = (limit ? contentData.books.slice(0, limit) : contentData.books)
    .filter(book => book.pdfUrl && book.pdfUrl !== "#");

  // Filter books dynamically
  const filteredBooks = displayBooks.filter(book => {
    const categoryMatch = filterCategory === "All" || book.category.en === filterCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return categoryMatch;
    
    const titleEn = book.title.en.toLowerCase();
    const titleTa = book.title.ta.toLowerCase();
    const descEn = book.description.en.toLowerCase();
    const descTa = book.description.ta.toLowerCase();
    const catEn = book.category.en.toLowerCase();
    const catTa = book.category.ta.toLowerCase();
    const authorEn = book.author.en.toLowerCase();
    const authorTa = book.author.ta.toLowerCase();
    
    return categoryMatch && (
      titleEn.includes(query) ||
      titleTa.includes(query) ||
      descEn.includes(query) ||
      descTa.includes(query) ||
      catEn.includes(query) ||
      catTa.includes(query) ||
      authorEn.includes(query) ||
      authorTa.includes(query)
    );
  });

  // Set default selection when filters change
  useEffect(() => {
    if (filteredBooks.some(b => b.id === selectedBook?.id)) {
      return;
    }
    if (filteredBooks.length > 0) {
      setSelectedBook(filteredBooks[0]);
    } else {
      setSelectedBook(null);
    }
  }, [filterCategory, searchQuery]);

  // Open the reader
  const handleStartReading = (book: any) => {
    setReadingBook(book);
    setCurrentPageIdx(0);
    setReaderOpened(false);
  };

  // Keyboard navigation for reader
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!readingBook || !readerOpened) return;
      if (e.key === "Escape") {
        setReadingBook(null);
      } else if (e.key === "ArrowRight") {
        handleNextPage();
      } else if (e.key === "ArrowLeft") {
        handlePrevPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [readingBook, readerOpened, currentPageIdx, isReaderMobile]);

  const getPagesText = () => {
    if (!readingBook) return [];
    const bookData = BOOK_PAGES[readingBook.id];
    if (bookData) {
      return bookData[language] || [];
    }
    
    const titleText = t(readingBook.title);
    const categoryText = t(readingBook.category);
    
    if (language === "en") {
      return [
        `INTRODUCTION\n\nWelcome to "${titleText}".\n\nThis publication is dedicated to exploring the depths of biblical truth, helping believers mature in their faith and experience the life-changing power of God.\n\nAs you read these pages, we pray that your heart will be stirred, your faith strengthened, and your devotion to the Lord Jesus Christ deepened.`,
        `CHAPTER 1: THE FOUNDATION\n\nEvery spiritual journey begins with a solid foundation. In this chapter, we explore how ${categoryText.toLowerCase()} guides us into a relationship with God.\n\nAs Pr. V. Jeromias writes, we must establish our lives on the unchanging truth of Scripture, allowing the Holy Spirit to transform us daily.`,
        `CHAPTER 2: WALKING IN VICTORY\n\nTo walk in victory, we must apply these truths to our daily lives. Standing firm in the face of challenges requires constant prayer and reliance on God's grace.\n\nLet us continue to seek His presence, press forward in faith, and proclaim the riches of His glory to those around us.`,
        `CONCLUSION\n\nThank you for reading this sample of "${titleText}".\n\nMay the grace of our Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit be with you all. Amen.`
      ];
    } else {
      return [
        `அறிமுகம்\n\n"${titleText}" நூலுக்கு உங்களை வரவேற்கிறோம்.\n\nஇந்த வெளியீடு விவிலிய சத்தியத்தின் ஆழங்களை ஆராய்வதற்கும், விசுவாசிகள் தங்கள் விசுவாசத்தில் முதிர்ச்சியடைந்து தேவனுடைய மாற்றும் வல்லமையை அனுபவிப்பதற்கும் அர்ப்பணிக்கப்பட்டுள்ளது.\n\nஇந்தப் பக்கங்களை நீங்கள் வாசிக்கும்போது, உங்கள் இருதயம் தூண்டப்படவும், உங்கள் விசுவாசம் பலப்படவும், கர்த்தராகிய இயேசு கிறிஸ்துவின் மீதான உங்கள் அர்ப்பணிப்பு ஆழமடையவும் ஜெபிக்கிறோம்.`,
        `அதிகாரம் 1: அஸ்திவாரம்\n\nஒவ்வொரு ஆவிக்குரிய பயணமும் ஒரு பலமான அஸ்திவாரத்துடன் தொடங்குகிறது. தேவனுடனான ஆழமான உறவுக்குள் ${categoryText} எவ்வாறு நம்மை வழிநடத்துகிறது என்பதை இந்த அதிகாரத்தில் ஆராய்வோம்.\n\nபரிசுத்த ஆவியானவர் நம்மை தினமும் மாற்றியமைக்க அனுமதிக்க வேண்டும் என்று ஆசிரியர் குறிப்பிடுகிறார்.`,
        `அதிகாரம் 2: ஜெயமுள்ள வாழ்க்கை\n\nஜெயமுள்ள வாழ்க்கையில் நடக்க, இந்த சத்தியங்களை நமது அன்றாட வாழ்வில் பயன்படுத்த வேண்டும். சவால்களின் மத்தியில் உறுதியாக நிற்பதற்கு ஜெபமும் தேவனுடைய கிருபையைச் சார்ந்திருப்பதும் அவசியம்.\n\nஅவரது பிரசன்னத்தைத் தொடர்ந்து தேடுவோம், விசுவாசத்தில் முன்னேறுவோம், அவருடைய மகிமையின் ஐசுவரியங்களை நமக்குச் சுற்றியுள்ளவர்களுக்கு அறிவிப்போம்.`,
        `முடிவுரை\n\n"${titleText}" புத்தகத்தின் இந்த மாதிரியை வாசித்தமைக்கு நன்றி.\n\nநம்முடைய கர்த்தராகிய இயேசு கிறிஸ்துவின் கிருபையும், தேவனுடைய அன்பும், பரிசுத்த ஆவியானவருடைய ஐக்கியமும் உங்கள் அனைவரோடுங்கூட இருப்பதாக. ஆமென்.`
      ];
    }
  };

  const totalSpreads = () => {
    return Math.ceil(getPagesText().length / 2);
  };

  const handleNextPage = () => {
    const pagesList = getPagesText();
    if (isReaderMobile) {
      if (currentPageIdx >= pagesList.length - 1) return;
      setTurningDirection("next");
      setTimeout(() => {
        setCurrentPageIdx(prev => prev + 1);
        setTurningDirection(null);
      }, 350);
    } else {
      const leftPage = Math.floor(currentPageIdx / 2) * 2;
      if (leftPage + 2 >= pagesList.length) return;
      setTurningDirection("next");
      setTimeout(() => {
        setCurrentPageIdx(leftPage + 2);
        setTurningDirection(null);
      }, 350);
    }
  };

  const handlePrevPage = () => {
    if (isReaderMobile) {
      if (currentPageIdx === 0) return;
      setTurningDirection("prev");
      setTimeout(() => {
        setCurrentPageIdx(prev => prev - 1);
        setTurningDirection(null);
      }, 350);
    } else {
      const leftPage = Math.floor(currentPageIdx / 2) * 2;
      if (leftPage - 2 < 0) return;
      setTurningDirection("prev");
      setTimeout(() => {
        setCurrentPageIdx(leftPage - 2);
        setTurningDirection(null);
      }, 350);
    }
  };

  // Touch handlers for page swiping on mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextPage();
    } else if (isRightSwipe) {
      handlePrevPage();
    }
  };

  const pages = getPagesText();
  const leftPageIdx = Math.floor(currentPageIdx / 2) * 2;
  const rightPageIdx = leftPageIdx + 1;

  const fontSizeClass = {
    sm: "text-xs md:text-sm",
    base: "text-sm md:text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl"
  }[fontSize];

  const renderBookCover = (book: any) => {
    if (!book) return null;
    const isSelected = selectedBook && selectedBook.id === book.id;
    const colors = getBookCoverStyles(book.id, book.category.en);
    
    return (
      <div 
        key={book.id}
        className={`book-container flex flex-col justify-between items-center transition-all duration-355 ${isSelected ? 'scale-[1.03]' : 'opacity-85 hover:opacity-100'}`}
        onClick={() => handleSelectBook(book)}
      >
        <div 
          className={`book-cover h-[220px] w-[140px] rounded-r-md leading-none border-l-[15px] shadow-md transform-gpu cursor-pointer flex flex-col justify-between p-4 relative transition-all duration-355 ${
            isSelected ? 'ring-2 ring-brand-gold ring-offset-4 ring-offset-[#F5F0E6] shadow-[0_0_25px_rgba(176,141,87,0.4)]' : ''
          }`}
          style={{ 
            borderLeftColor: colors.borderLeftColor,
            backgroundColor: colors.backgroundColor,
            color: colors.color
          }}
        >
          {book.coverImageUrl ? (
            <img src={book.coverImageUrl} alt={t(book.title)} className="absolute inset-0 w-full h-full object-cover rounded-r-sm" />
          ) : (
            <>
              <div className="book-cover-shine"></div>
              
              {/* Embossed gold corner border */}
              <div className="absolute inset-1.5 border border-brand-gold/15 pointer-events-none"></div>

              {/* Selected Bookmark Ribbon */}
              {isSelected && (
                <div className="absolute top-0 right-3 w-3 h-10 bg-[#A62B2B] shadow-md z-20 flex items-end justify-center rounded-b-sm animate-slideDown">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[4px] border-b-[#3B1111]"></div>
                </div>
              )}

              <span className="block text-[6px] uppercase tracking-[0.25em] font-serif-cinzel text-center opacity-70">
                {t(book.category)}
              </span>
              
              <div className="my-auto text-center z-10 px-1 py-4 flex flex-col items-center">
                {book.id === "holy-bible" && (
                  <span className="text-brand-gold/80 mb-2 text-xl font-light block leading-none">†</span>
                )}
                <h4 className={`font-serif-cinzel font-bold tracking-wider leading-relaxed text-center ${book.id === "holy-bible" ? 'text-[9px]' : 'text-[10px]'}`}>
                  {t(book.title).replace(/\(.*?\)/g, "")}
                </h4>
                <div className="w-5 h-[0.5px] bg-brand-gold/30 mx-auto my-2"></div>
                {book.id === "holy-bible" ? (
                  <span className="font-serif-eb text-[6px] italic block opacity-70">
                    {language === "en" ? "Authorized Version" : "அங்கீகரிக்கப்பட்ட பதிப்பு"}
                  </span>
                ) : (
                  <span className="font-accent-great text-[11px] block">
                    {t(book.author)}
                  </span>
                )}
              </div>

              <span className="text-[5px] uppercase tracking-widest font-serif-cinzel text-center opacity-60">
                {book.id === "holy-bible" ? "Word of God" : "Heritage Press"}
              </span>
            </>
          )}
        </div>
        
        {/* Title under cover */}
        <span className={`text-[10px] font-serif-cinzel tracking-wider font-bold mt-3 text-center transition-colors duration-300 max-w-[120px] line-clamp-1 ${
          isSelected ? 'text-brand-gold' : 'text-brand-brown/70 hover:text-brand-brown'
        }`}>
          {t(book.title)}
        </span>

        {/* Wood Shelf Board */}
        <div className="w-[160px] h-3 bg-brand-brown rounded shadow relative z-10 flex items-center justify-center mt-2">
          <div className="w-full h-[1px] bg-brand-gold/40"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="featured-publications" className="py-16 px-4 md:py-36 md:px-24 bg-[#F5F0E6] parchment-texture border-b border-brand-gold/20 relative select-none">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-8 md:mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-semibold block mb-2">
              {language === "en" ? "Publications Library" : "நூல் பிரசுரங்கள்"}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif-cinzel text-brand-brown font-bold uppercase tracking-wider">
              {language === "en" ? "Featured Publications" : "சிறப்பு பிரசுரங்கள்"}
            </h2>
            <OrnamentalSeparator />
          </div>
        )}

        {/* Search & Filter Bar */}
        <div className="sticky top-20 z-30 flex flex-col md:flex-row gap-6 justify-between items-center mb-6 md:mb-10 bg-brand-cream/80 backdrop-blur-md border border-brand-gold/20 p-4 md:p-5 shadow-sm rounded-sm transition-all duration-300">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder={language === "en" ? "Search library..." : "நூல்களைத் தேடுக..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-cream/60 border border-brand-gold/30 rounded-none px-4 py-2.5 text-sm text-brand-brown focus:outline-none focus:border-brand-gold font-serif-eb placeholder-brand-muted/50"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-brown text-sm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Horizontal List */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = filterCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3 py-1.5 text-[10px] font-serif-cinzel tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-brand-brown text-brand-cream border-brand-brown shadow-sm"
                      : "bg-transparent text-brand-muted border-brand-gold/30 hover:border-brand-gold hover:text-brand-brown"
                  }`}
                >
                  {language === "en" ? cat.en : cat.ta}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column library bookcase & spotlight details panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bookcase Library Shelf Grid (Natural flow, no nested scrollbar) */}
          <div className="lg:col-span-7 flex flex-col bg-brand-parchment/15 border border-brand-gold/20 p-6 md:p-8 rounded shadow-md relative min-h-[550px]">
            <div className="absolute inset-[3px] border border-brand-gold/10 pointer-events-none rounded"></div>
            
            <h3 className="font-serif-cinzel text-xs font-bold tracking-[0.2em] text-brand-gold text-center mb-8 uppercase border-b border-brand-gold/15 pb-4">
              {language === "en" ? "Publications Archive" : "நூலகக் காப்பகம்"} ({filteredBooks.length})
            </h3>
            
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-6 pb-6 relative">
                {filteredBooks.map((book) => renderBookCover(book))}
              </div>
            ) : (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-12 text-brand-muted">
                <BookMarked className="w-12 h-12 text-brand-gold/35 mb-4" />
                <p className="font-serif-cinzel text-sm tracking-wider">
                  {language === "en" ? "No books found matching your criteria" : "உங்கள் தேடலுக்குரிய புத்தகங்கள் எதுவும் இல்லை"}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Spotlight Panel (Sticky - Hidden on Mobile, Shown on Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 lg:sticky lg:top-24 flex-col justify-between bg-brand-cream p-8 md:p-10 border border-brand-gold/45 shadow-xl rounded-sm relative min-h-[550px]">
            <div className="absolute inset-1 border border-brand-gold/15 pointer-events-none"></div>
            
            {selectedBook ? (
              <div className="flex-grow flex flex-col justify-between h-full relative z-10">
                <div className="space-y-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-bold">
                      {t(selectedBook.category)}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-muted/70 px-2 py-0.5 border border-brand-gold/20 rounded-full">
                      {selectedBook.pages} {language === "en" ? "Pages" : "பக்கங்கள்"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-serif-cinzel font-bold text-brand-brown tracking-wide leading-tight">
                    {t(selectedBook.title)}
                  </h3>

                  {/* Decorative Separator */}
                  <div className="flex items-center justify-start gap-4">
                    <div className="h-[1px] bg-brand-gold/30 w-12"></div>
                    <span className="text-brand-gold text-sm font-light">❦</span>
                    <div className="h-[1px] bg-brand-gold/30 w-12"></div>
                  </div>

                  {/* Author */}
                  <p className="text-sm font-serif-eb italic text-brand-muted">
                    {language === "en" ? "By" : "ஆசிரியர்"}: <span className="font-bold text-brand-brown not-italic font-serif-cinzel text-xs tracking-wider uppercase">{t(selectedBook.author)}</span>
                  </p>

                  {/* Description */}
                  <p className="font-serif-eb text-brand-muted text-base md:text-lg leading-relaxed text-justify">
                    {t(selectedBook.description)}
                  </p>
                </div>

                {/* Statistics Bar */}
                <div className="grid grid-cols-3 border-y border-brand-gold/25 py-4 my-8 text-center bg-brand-parchment/10 rounded-sm">
                  <div>
                    <span className="block text-2xl font-serif-eb font-bold text-brand-brown">{selectedBook.pages}</span>
                    <span className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Pages" : "பக்கங்கள்"}</span>
                  </div>
                  <div className="border-x border-brand-gold/20">
                    <span className="block text-2xl font-serif-eb font-bold text-brand-brown">
                      {selectedBook.id === "akkini-mugam" ? "01" : selectedBook.id === "jeba-mugam" ? "02" : selectedBook.id === "daily-confession" ? "03" : "—"}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Volume" : "தொகுதி"}</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif-eb font-bold text-[#2A6B4E] uppercase">{language === "en" ? "Free" : "இலவசம்"}</span>
                    <span className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Price" : "விலை"}</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => handleStartReading(selectedBook)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-brand-gold bg-brand-brown text-brand-cream text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-parchment hover:text-brand-brown hover:border-brand-gold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-brand-gold" />
                    {language === "en" ? "Read Online" : "வாசிக்க"}
                  </button>

                  <a
                    href={selectedBook.hardcopyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-[#B08D57]/45 text-brand-brown text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <ShoppingCart className="w-4 h-4 text-brand-gold hover:text-inherit" />
                    {language === "en" ? "Order Print" : "ஆர்டர் செய்ய"}
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-brand-muted">
                <BookMarked className="w-12 h-12 text-brand-gold/40 mb-4" />
                <p className="font-serif-cinzel text-sm tracking-wider">
                  {language === "en" ? "Select a book from the shelf to spotlight" : "விவரங்களைப் பார்க்க ஒரு புத்தகத்தைத் தேர்ந்தெடுக்கவும்"}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 2. IMMERSIVE 3D BOOK READER OVERLAY */}
      {readingBook && (
        <div className="reader-backdrop-blur fixed inset-0 z-[100] flex flex-col justify-between items-center p-4 md:p-8" role="dialog" aria-modal="true">
          
          {/* Top Header Bar */}
          <div className={`w-full flex justify-between items-center z-50 pb-3 border-b border-brand-gold/20 mb-4 ${
            readingBook.pdfUrl && readingBook.pdfUrl !== "#" && !isReaderMobile ? "max-w-7xl" : "max-w-4xl md:max-w-5xl"
          }`}>
            <div className="flex items-center gap-2 truncate pr-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold">
                {language === "en" ? "Reading" : "வாசிக்கிறது"}:
              </span>
              <span className="text-xs md:text-sm font-serif-eb text-brand-cream truncate font-semibold">
                {t(readingBook.title)}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {readingBook.pdfUrl && readingBook.pdfUrl !== "#" && !isReaderMobile && (
                <a
                  href={readingBook.pdfUrl}
                  download
                  className="flex items-center gap-1.5 border border-brand-gold/40 hover:bg-brand-gold hover:text-brand-brown rounded-none px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-widest font-serif-cinzel text-brand-cream bg-transparent transition-all duration-300 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-brand-gold hover:text-inherit" />
                  {language === "en" ? "Download PDF" : "பதிவிறக்கம் செய்ய"}
                </a>
              )}
              <button
                onClick={() => setReadingBook(null)}
                className="hover:bg-brand-gold hover:text-brand-brown border border-brand-gold/30 rounded-none px-3 py-1.5 text-[10px] md:text-xs uppercase tracking-widest font-serif-cinzel text-brand-cream bg-transparent transition-all duration-300 cursor-pointer"
              >
                ✕ {language === "en" ? "Close Reader" : "மூடுக"}
              </button>
            </div>
          </div>

          <div className={readingBook.pdfUrl && readingBook.pdfUrl !== "#" && !isReaderMobile 
            ? "w-full max-w-7xl flex-grow flex items-center justify-center relative my-2 h-[82vh]" 
            : "reader-stage-3d flex items-center justify-center w-full flex-grow relative"
          }>
            
            {readingBook.pdfUrl && readingBook.pdfUrl !== "#" ? (
              isReaderMobile ? (
                /* Mobile: Beautiful PDF reader prompt */
                <div className="w-full max-w-sm bg-brand-cream p-6 border border-brand-gold/45 shadow-2xl relative z-10 flex flex-col items-center text-center rounded-sm animate-fadeIn mx-4">
                  {/* Book Cover */}
                  <div className="w-24 h-36 shadow-lg mb-4 rounded-r border-l-[12px] flex flex-col justify-between p-4 relative overflow-hidden"
                    style={{
                      borderLeftColor: getBookCoverStyles(readingBook.id, readingBook.category.en).borderLeftColor,
                      backgroundColor: getBookCoverStyles(readingBook.id, readingBook.category.en).backgroundColor,
                      color: getBookCoverStyles(readingBook.id, readingBook.category.en).color
                    }}
                  >
                    <div className="book-cover-shine"></div>
                    <span className="block text-[5px] uppercase tracking-[0.25em] font-serif-cinzel text-center opacity-70">
                      {t(readingBook.category)}
                    </span>
                    <h4 className="font-serif-cinzel font-bold tracking-wider leading-normal text-center text-[7px] my-auto">
                      {t(readingBook.title).replace(/\(.*?\)/g, "")}
                    </h4>
                    <span className="text-[5px] uppercase tracking-widest font-serif-cinzel text-center opacity-60">
                      Heritage Press
                    </span>
                  </div>

                  <h3 className="text-lg font-serif-cinzel font-bold text-brand-brown mb-1 px-2 leading-tight">
                    {t(readingBook.title)}
                  </h3>
                  <p className="text-xs font-serif-eb italic text-brand-muted mb-4">
                    {language === "en" ? "By" : "ஆசிரியர்"}: <span className="font-bold text-brand-brown not-italic font-serif-cinzel text-[10px] uppercase">{t(readingBook.author)}</span>
                  </p>

                  <div className="w-12 h-[0.5px] bg-brand-gold/30 mx-auto mb-4"></div>

                  <p className="text-xs font-serif-eb text-brand-muted/95 mb-6 px-2 leading-relaxed text-center">
                    {language === "en" 
                      ? "For the best reading experience on mobile devices, open the PDF in a new tab or download it to read offline."
                      : "கைப்பேசியில் எளிதாக வாசிக்க, PDF கோப்பை புதிய விண்டோவில் திறக்கவும் அல்லது உங்கள் சாதனத்தில் பதிவிறக்கம் செய்யவும்."}
                  </p>

                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={readingBook.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-brown text-brand-cream text-xs font-bold tracking-widest uppercase font-serif-cinzel border border-brand-gold hover:bg-brand-parchment hover:text-brand-brown transition-all duration-300 shadow-md cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                      {language === "en" ? "Open PDF Reader" : "PDF-ஐத் திறக்க"}
                    </a>

                    <a
                      href={readingBook.pdfUrl}
                      download
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-[#B08D57]/45 text-brand-brown text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-brown hover:text-brand-cream transition-all duration-300 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-brand-gold" />
                      {language === "en" ? "Download PDF" : "பதிவிறக்கம் செய்ய"}
                    </a>
                  </div>
                </div>
              ) : (
                /* Desktop: Standard PDF iframe with toolbar disabled for custom look */
                <div className="w-full h-full bg-[#1C120C]/90 p-3 border border-brand-gold/30 shadow-2xl relative z-10 flex flex-col animate-fadeIn">
                  <iframe 
                    src={`${readingBook.pdfUrl}#toolbar=0&navpanes=0`} 
                    className="w-full h-full border-none rounded-sm bg-white"
                    title={t(readingBook.title)}
                  />
                </div>
              )
            ) : !readerOpened ? (
              <div 
                className="closed-book-cover transform-gpu flex"
                onClick={() => setReaderOpened(true)}
                style={{ 
                  backgroundColor: getBookCoverStyles(readingBook.id, readingBook.category.en).backgroundColor,
                }}
              >
                <div 
                  className="closed-book-spine"
                  style={{ backgroundColor: getBookCoverStyles(readingBook.id, readingBook.category.en).borderLeftColor }}
                ></div>
                
                <div className="closed-book-front relative">
                  <div className="absolute inset-2 border border-brand-gold/15 pointer-events-none"></div>
                  
                  <span className="cb-genre text-[8px] uppercase tracking-[0.2em] font-serif-cinzel text-brand-gold font-bold">
                    {t(readingBook.category)}
                  </span>
                  
                  <h3 className="cb-title font-serif-cinzel font-bold text-xl md:text-3xl leading-snug tracking-wide text-brand-cream max-w-xs px-2 mt-4 mb-2">
                    {t(readingBook.title)}
                  </h3>
                  
                  <span className="cb-author text-xs font-serif-cormorant italic text-brand-gold">
                    {t(readingBook.author)}
                  </span>

                  <span className="cb-hint text-[10px] tracking-widest text-brand-cream/40 uppercase pt-6 border-t border-brand-cream/10 w-24 mt-6">
                    {language === "en" ? "Click to open" : "திறக்க அழுத்தவும்"}
                  </span>
                </div>
              </div>
            ) : (
              
              /* B. OPEN TWO-PAGE SPREAD (DESKTOP) OR SINGLE-PAGE (MOBILE) VIEW */
              <div className="open-book-spread relative z-10 max-w-4xl w-full h-full bg-brand-cream shadow-2xl flex border border-brand-gold/30">
                
                {!isReaderMobile ? (
                  <>
                    {/* Left Page */}
                    <div className={`reader-page-sheet reader-page-left flex flex-col justify-between ${
                      turningDirection === "next" ? "reader-page-turning-next" : turningDirection === "prev" ? "reader-page-turning-prev" : ""
                    }`}>
                      <div className={`page-content font-serif-eb leading-relaxed text-brand-brown whitespace-pre-line h-full overflow-y-auto ${fontSizeClass}`}>
                        {pages[leftPageIdx] || ""}
                      </div>
                      <span className="page-num block text-center text-[10px] font-serif-cinzel text-brand-muted opacity-60 mt-4 border-t border-brand-gold/10 pt-2">
                        {pages[leftPageIdx] ? leftPageIdx + 1 : ""}
                      </span>
                    </div>

                    {/* Book Spine Center Gutter shadow */}
                    <div className="reader-book-gutter" aria-hidden="true"></div>

                    {/* Right Page */}
                    <div className={`reader-page-sheet reader-page-right flex flex-col justify-between ${
                      turningDirection === "next" ? "reader-page-turning-next" : turningDirection === "prev" ? "reader-page-turning-prev" : ""
                    }`}>
                      <div className={`page-content font-serif-eb leading-relaxed text-brand-brown whitespace-pre-line h-full overflow-y-auto font-light ${fontSizeClass}`}>
                        {pages[rightPageIdx] || ""}
                      </div>
                      <span className="page-num block text-center text-[10px] font-serif-cinzel text-brand-muted opacity-60 mt-4 border-t border-brand-gold/10 pt-2">
                        {pages[rightPageIdx] ? rightPageIdx + 1 : ""}
                      </span>
                    </div>
                  </>
                ) : (
                  /* Mobile: Single Page View with Swiping Gestures */
                  <div 
                    className={`reader-page-sheet w-full flex flex-col justify-between ${
                      turningDirection === "next" ? "reader-page-turning-next" : turningDirection === "prev" ? "reader-page-turning-prev" : ""
                    }`}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    <div className={`page-content leading-relaxed text-brand-brown whitespace-pre-line h-full overflow-y-auto px-1 ${fontSizeClass}`}>
                      {pages[currentPageIdx] || ""}
                    </div>
                    <span className="page-num block text-center text-[11px] font-serif-cinzel text-brand-muted opacity-60 mt-4 border-t border-brand-gold/10 pt-2">
                      {currentPageIdx + 1} / {pages.length}
                    </span>
                  </div>
                )}

              </div>
            )}

          </div>

          {/* Controls toolbar */}
          {readerOpened && !(readingBook.pdfUrl && readingBook.pdfUrl !== "#") && (
            <div className="reader-controls flex flex-col md:flex-row items-center justify-between gap-4 mt-6 z-20 relative w-full max-w-4xl border-t border-brand-gold/15 pt-4">
              
              {/* Left Side: Font Size controls */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider font-serif-cinzel text-brand-cream/60">
                  {language === "en" ? "Text Size" : "எழுத்து அளவு"}:
                </span>
                <div className="flex border border-brand-gold/30 rounded-none bg-brand-cream/5 overflow-hidden">
                  {(["sm", "base", "lg", "xl"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-3 py-1 text-xs font-bold uppercase transition-colors cursor-pointer border-r last:border-r-0 border-brand-gold/20 ${
                        fontSize === size 
                          ? "bg-brand-gold text-brand-brown animate-none font-bold" 
                          : "text-brand-cream hover:bg-brand-cream/10"
                      }`}
                    >
                      {size === "sm" ? "A-" : size === "base" ? "A" : size === "lg" ? "A+" : "A++"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Center: Navigation controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrevPage}
                  disabled={isReaderMobile ? currentPageIdx === 0 : Math.floor(currentPageIdx / 2) === 0}
                  className="page-btn flex items-center gap-1 text-[11px] uppercase tracking-widest font-serif-cinzel text-brand-cream border border-brand-cream/20 bg-brand-cream/5 px-4 py-2 hover:bg-brand-cream/15 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  {language === "en" ? "Prev" : "முந்தைய"}
                </button>

                <span className="reader-progress text-xs font-serif-cinzel text-brand-cream/70 tracking-widest min-w-[100px] text-center">
                  {isReaderMobile ? (
                    `${language === "en" ? "PAGE" : "பக்கம்"} ${currentPageIdx + 1} / ${pages.length}`
                  ) : (
                    `${language === "en" ? "SPREAD" : "பக்கம்"} ${Math.floor(currentPageIdx / 2) + 1} / ${totalSpreads()}`
                  )}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={isReaderMobile ? currentPageIdx >= pages.length - 1 : Math.floor(currentPageIdx / 2) >= totalSpreads() - 1}
                  className="page-btn flex items-center gap-1 text-[11px] uppercase tracking-widest font-serif-cinzel text-brand-cream border border-brand-cream/20 bg-brand-cream/5 px-4 py-2 hover:bg-brand-cream/15 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  {language === "en" ? "Next" : "அடுத்த"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Side: Layout mode info */}
              <div className="hidden md:block text-[10px] uppercase tracking-widest font-serif-cinzel text-brand-cream/55">
                {language === "en" ? "Double Page Spread" : "இருபக்கப் பார்வை"}
              </div>

            </div>
          )}

        </div>
      )}

      {/* 3. MOBILE DRAWER OVERLAY FOR BOOK DETAILS */}
      {mobileDrawerOpen && selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-brand-cream border-t border-brand-gold w-full max-h-[85vh] overflow-y-auto rounded-t-2xl p-6 relative shadow-2xl z-50 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle Indicator */}
            <div className="w-12 h-1 bg-brand-gold/30 rounded-full mx-auto mb-4"></div>

            {/* Close Button */}
            <button
              onClick={() => setMobileDrawerOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-brand-brown"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] font-serif-cinzel text-brand-gold font-bold">
                  {t(selectedBook.category)}
                </span>
                <span className="text-[9px] uppercase tracking-wider font-serif-cinzel text-brand-muted/70 px-2 py-0.5 border border-brand-gold/20 rounded-full">
                  {selectedBook.pages} {language === "en" ? "Pages" : "பக்கங்கள்"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif-cinzel font-bold text-brand-brown tracking-wide leading-tight">
                {t(selectedBook.title)}
              </h3>

              {/* Decorative Separator */}
              <div className="flex items-center justify-start gap-4">
                <div className="h-[1px] bg-brand-gold/30 w-12"></div>
                <span className="text-brand-gold text-sm font-light">❦</span>
                <div className="h-[1px] bg-brand-gold/30 w-12"></div>
              </div>

              {/* Author */}
              <p className="text-xs font-serif-eb italic text-brand-muted">
                {language === "en" ? "By" : "ஆசிரியர்"}: <span className="font-bold text-brand-brown not-italic font-serif-cinzel text-[10px] tracking-wider uppercase">{t(selectedBook.author)}</span>
              </p>

              {/* Description */}
              <p className="font-serif-eb text-brand-muted text-sm leading-relaxed text-justify">
                {t(selectedBook.description)}
              </p>

              {/* Statistics Bar */}
              <div className="grid grid-cols-3 border-y border-brand-gold/25 py-3 my-4 text-center bg-brand-parchment/10 rounded-sm">
                <div>
                  <span className="block text-xl font-serif-eb font-bold text-brand-brown">{selectedBook.pages}</span>
                  <span className="text-[8px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Pages" : "பக்கங்கள்"}</span>
                </div>
                <div className="border-x border-brand-gold/20">
                  <span className="block text-xl font-serif-eb font-bold text-brand-brown">
                    {selectedBook.id === "akkini-mugam" ? "01" : selectedBook.id === "jeba-mugam" ? "02" : selectedBook.id === "daily-confession" ? "03" : "—"}
                  </span>
                  <span className="text-[8px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Volume" : "தொகுதி"}</span>
                </div>
                <div>
                  <span className="block text-xl font-serif-eb font-bold text-[#2A6B4E] uppercase">{language === "en" ? "Free" : "இலவசம்"}</span>
                  <span className="text-[8px] uppercase tracking-wider font-serif-cinzel text-brand-gold">{language === "en" ? "Price" : "விலை"}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    handleStartReading(selectedBook);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-brand-gold bg-brand-brown text-brand-cream text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-parchment hover:text-brand-brown hover:border-brand-gold transition-all duration-300 shadow-md cursor-pointer animate-none"
                >
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  {language === "en" ? "Read Online" : "வாசிக்க"}
                </button>

                <a
                  href={selectedBook.hardcopyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-[#B08D57]/45 text-brand-brown text-xs font-bold tracking-widest uppercase font-serif-cinzel hover:bg-brand-brown hover:text-brand-cream hover:border-brand-brown transition-all duration-300 shadow-sm"
                >
                  <ShoppingCart className="w-4 h-4 text-brand-gold" />
                  {language === "en" ? "Order Print" : "ஆர்டர் செய்ய"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedPublications;
