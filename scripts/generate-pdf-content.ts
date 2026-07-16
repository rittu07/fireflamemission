import * as fs from 'fs';
import * as path from 'path';
import { contentData } from '../src/data/contentData';

type Lang = 'en' | 'ta';

// Helper to get translated text from a TranslationBundle or string
const t = (bundle: any, lang: Lang): string => {
  if (!bundle) return '';
  if (typeof bundle === 'string') return bundle;
  return bundle[lang] || '';
};

function generateHTML(lang: Lang): string {
  const isEn = lang === 'en';
  
  // Document Title
  const docTitle = isEn ? 'Fire Flame Mission - Website Content Directory' : 'அக்கினி ஜீவாலை ஊழியம் - இணையதள உள்ளடக்கக் கோப்பு';
  
  // Main title headers
  const mainTitle = isEn ? 'FIRE FLAME MISSION' : 'அக்கினி ஜீவாலை ஊழியம்';
  const subtitle = t(contentData.general.motto, lang);
  
  // Headings
  const hAbout = isEn ? '1. About the Ministry' : '1. ஊழியம் பற்றி';
  const hVisionMission = isEn ? '2. Vision, Mission & Core Values' : '2. தரிசனம், இலக்கு & முக்கிய விழுமியங்கள்';
  const hTimeline = isEn ? '3. Historical Timeline' : '3. ஊழிய வரலாற்று மைல்கற்கள்';
  const hFounder = isEn ? "4. Founder's Testimony" : '4. நிறுவனரின் சாட்சி';
  const hMinistries = isEn ? '5. Active Ministries' : '5. ஊழியப் பிரிவுகள்';
  const hChurches = isEn ? '6. Branch Churches & Focus Areas' : '6. கிளைச் சபைகள் & செயல்பாடுகள்';
  const hLeadership = isEn ? '7. Leadership & Ministry Team' : '7. தலைமை & ஊழியக் குழு';
  const hStats = isEn ? '8. Ministry Statistics' : '8. ஊழியப் புள்ளிவிவரங்கள்';
  const hBooks = isEn ? '9. Featured Publications & Books' : '9. பிரசுரங்கள் & புத்தகங்கள்';
  const hSermons = isEn ? '10. Sermons & Messages' : '10. செய்திகள் & போதனைகள்';
  const hPromises = isEn ? '11. Daily Bible Promises' : '11. தினசரி வேத வாக்குத்தத்தங்கள்';
  const hContact = isEn ? '12. Contact Information' : '12. தொடர்பு விவரங்கள்';
  
  // Styles for clean printing
  const styles = `
    @page {
      margin: 1in;
    }
    body {
      font-family: ${isEn ? "'Segoe UI', Helvetica, Arial, sans-serif" : "'Nirmala UI', Latha, 'Arial Unicode MS', sans-serif"};
      color: #333333;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      font-size: 11pt;
    }
    .page-break {
      page-break-before: always;
    }
    h1 {
      font-size: 26pt;
      margin-top: 0;
      margin-bottom: 5px;
      color: #1a1a1a;
      text-align: center;
      letter-spacing: 1px;
    }
    .subtitle {
      font-size: 14pt;
      text-align: center;
      margin-bottom: 30px;
      font-style: italic;
      color: #555555;
      border-bottom: 2px solid #333333;
      padding-bottom: 15px;
    }
    h2 {
      font-size: 16pt;
      color: #000000;
      border-bottom: 1px solid #cccccc;
      padding-bottom: 5px;
      margin-top: 30px;
      margin-bottom: 15px;
      page-break-after: avoid;
    }
    h3 {
      font-size: 12pt;
      color: #222222;
      margin-top: 15px;
      margin-bottom: 8px;
      page-break-after: avoid;
    }
    p {
      margin-top: 0;
      margin-bottom: 12px;
      text-align: justify;
    }
    ul, ol {
      margin-top: 0;
      margin-bottom: 15px;
      padding-left: 20px;
    }
    li {
      margin-bottom: 6px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #dddddd;
      padding: 8px 12px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
    .item-card {
      margin-bottom: 15px;
      padding: 12px;
      border: 1px solid #e0e0e0;
      background-color: #fafafa;
      page-break-inside: avoid;
    }
    .item-title {
      font-weight: bold;
      font-size: 11pt;
      color: #111111;
      margin-bottom: 4px;
    }
    .item-meta {
      font-size: 9pt;
      color: #666666;
      margin-bottom: 6px;
      font-style: italic;
    }
    .footer-note {
      margin-top: 40px;
      font-size: 9pt;
      color: #777777;
      text-align: center;
      border-top: 1px solid #eeeeee;
      padding-top: 15px;
    }
    .badge {
      display: inline-block;
      padding: 2px 6px;
      background-color: #e0e0e0;
      color: #333333;
      font-size: 8pt;
      border-radius: 3px;
      margin-right: 5px;
      font-weight: bold;
    }
  `;

  // HTML parts assembly
  let html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${docTitle}</title>
  <style>
    ${styles}
  </style>
</head>
<body>
  <h1>${mainTitle}</h1>
  <div class="subtitle">${subtitle}</div>
    
    <p style="text-align: center; font-size: 10pt; color: #666666; margin-bottom: 40px;">
      ${isEn ? 'Official Website Content Directory' : 'அதிகாரப்பூர்வ இணையதள உள்ளடக்கக் கோப்பு'}<br>
      ${isEn ? 'Compiled Date' : 'தொகுக்கப்பட்ட தேதி'}: ${new Date().toLocaleDateString(isEn ? 'en-US' : 'ta-IN')}<br>
      ${isEn ? 'Founder' : 'நிறுவனர்'}: ${t(contentData.general.founderName, lang)}
    </p>

    <!-- 1. About -->
    <h2>${hAbout}</h2>
    <h3>${t(contentData.aboutText.title, lang)}</h3>
    ${contentData.aboutText.paragraphs.map(pObj => `<p>${t(pObj, lang)}</p>`).join('')}
    
    <!-- 2. Vision & Mission -->
    <h2>${hVisionMission}</h2>
    <p><strong>${isEn ? 'Vision Statement' : 'தரிசனம்'}:</strong> ${t(contentData.visionMission.vision, lang)}</p>
    
    <h3>${isEn ? 'Key Action Pillars' : 'முக்கிய செயல்பாடுகள்'}</h3>
    <ul>
      ${contentData.visionMission.mission.map(mItem => `
        <li><strong>${t(mItem.title, lang)}:</strong> ${t(mItem.description, lang)}</li>
      `).join('')}
    </ul>
    
    <h3>${isEn ? 'Core Values' : 'முக்கிய விழுமியங்கள்'}</h3>
    <ul>
      ${contentData.visionMission.coreValues.map(val => `<li>${t(val, lang)}</li>`).join('')}
    </ul>

    <div class="page-break"></div>

    <!-- 3. Timeline -->
    <h2>${hTimeline}</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">${isEn ? 'Year' : 'ஆண்டு'}</th>
          <th style="width: 30%;">${isEn ? 'Milestone' : 'மைல்கல்'}</th>
          <th style="width: 55%;">${isEn ? 'Description' : 'விவரம்'}</th>
        </tr>
      </thead>
      <tbody>
        ${contentData.timeline.map(item => `
          <tr>
            <td><strong>${item.year}</strong></td>
            <td><strong>${t(item.title, lang)}</strong></td>
            <td>${t(item.description, lang)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- 4. Founder's Testimony -->
    <h2>${hFounder}</h2>
    <h3>${t(contentData.founderTestimony.title, lang)} - ${t(contentData.founderTestimony.subtitle, lang)}</h3>
    ${contentData.founderTestimony.paragraphs.map(pObj => `<p>${t(pObj, lang)}</p>`).join('')}

    <div class="page-break"></div>

    <!-- 5. Active Ministries -->
    <h2>${hMinistries}</h2>
    <div style="margin-top: 15px;">
      ${contentData.ministries.map(min => `
        <div class="item-card">
          <div class="item-title">${lang === 'ta' && min.tamilName ? min.tamilName : t(min.title, lang)}</div>
          <div class="item-meta">Category: ${t(min.title, 'en')}</div>
          <p style="margin-bottom: 0; font-size: 10.5pt;">${t(min.description, lang)}</p>
        </div>
      `).join('')}
    </div>

    <div class="page-break"></div>

    <!-- 6. Branch Churches -->
    <h2>${hChurches}</h2>
    <p>${t(contentData.branchChurches.intro, lang)}</p>
    
    <h3>${isEn ? 'Active Regions & Locations' : 'செயல்படும் வட்டாரங்கள் & இடங்கள்'}</h3>
    <ul>
      ${contentData.branchChurches.locations.map(loc => `<li>${t(loc, lang)}</li>`).join('')}
    </ul>
    
    <h3>${isEn ? 'Ministry Focus Areas' : 'சபை மற்றும் ஊழியச் செயல்பாடுகள்'}</h3>
    <ul>
      ${contentData.branchChurches.focus.map(foc => `<li>${t(foc, lang)}</li>`).join('')}
    </ul>

    <!-- 7. Leadership Team -->
    <h2>${hLeadership}</h2>
    <p><strong>${isEn ? 'Founder' : 'நிறுவனர்'}:</strong> ${t(contentData.leadershipTeam.founder.name, lang)} (${t(contentData.leadershipTeam.founder.role, lang)})</p>
    <p>${t(contentData.leadershipTeam.intro, lang)}</p>
    
    <h3>${isEn ? 'Ministry Roles & Functions' : 'ஊழியப் பொறுப்புகள் & பணிகள்'}</h3>
    <ul>
      ${contentData.leadershipTeam.roles.map(role => `
        <li><strong>${t(role.title, lang)}:</strong> ${t(role.description, lang)}</li>
      `).join('')}
    </ul>
    
    <h3>${isEn ? 'Our Ministry Commitments' : 'எங்களது அர்ப்பணிப்புகள்'}</h3>
    <ul>
      ${contentData.leadershipTeam.commitments.map(comm => `<li>${t(comm, lang)}</li>`).join('')}
    </ul>

    <!-- 8. Ministry Statistics -->
    <h2>${hStats}</h2>
    <table>
      <thead>
        <tr>
          <th>${isEn ? 'Metric' : 'அளவுறு'}</th>
          <th>${isEn ? 'Value' : 'மதிப்பு'}</th>
        </tr>
      </thead>
      <tbody>
        ${contentData.statistics.map(stat => `
          <tr>
            <td>${t(stat.label, lang)}</td>
            <td><strong>${stat.value}</strong></td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="page-break"></div>

    <!-- 9. Featured Publications -->
    <h2>${hBooks}</h2>
    <div>
      ${contentData.books.filter(book => book.id === 'revival').map(book => `
        <div class="item-card">
          <div class="item-title">${t(book.title, lang)}</div>
          <div class="item-meta">
            ${isEn ? 'Author' : 'எழுத்தாளர்'}: ${t(book.author, lang)} | 
            ${isEn ? 'Category' : 'வகை'}: ${t(book.category, lang)} | 
            ${isEn ? 'Pages' : 'பக்கங்கள்'}: ${book.pages}
          </div>
          <p style="font-size: 10.5pt;">${t(book.description, lang)}</p>
          ${book.hardcopyLink && book.hardcopyLink !== '#' ? `<p style="margin-bottom: 0; font-size: 9pt; color: #0066cc;"><strong>${isEn ? 'Order hardcopy link' : 'புத்தகம் பெற தொடர்பு கொள்ள வேண்டிய இணைப்பு'}:</strong> ${book.hardcopyLink}</p>` : ''}
        </div>
      `).join('')}
    </div>

    <div class="page-break"></div>

    <!-- 10. Sermons -->
    <h2>${hSermons}</h2>
    <div>
      ${contentData.sermons.map(sermon => `
        <div class="item-card">
          <div class="item-title">${t(sermon.title, lang)}</div>
          <div class="item-meta">
            ${isEn ? 'Type' : 'வகை'}: <span class="badge">${sermon.type.toUpperCase()}</span> | 
            ${isEn ? 'Scripture Reference' : 'வேத வசன பகுதி'}: ${t(sermon.reference, lang)}
          </div>
          <p style="font-size: 10.5pt;">${t(sermon.excerpt, lang)}</p>
          ${sermon.mediaUrl && sermon.mediaUrl !== '#' ? `<p style="margin-bottom: 0; font-size: 9pt; color: #0066cc;"><strong>${isEn ? 'Link' : 'இணைப்பு'}:</strong> ${sermon.mediaUrl}</p>` : ''}
        </div>
      `).join('')}
    </div>

    <div class="page-break"></div>

    <!-- 11. Bible Promises -->
    <h2>${hPromises}</h2>
    <table>
      <thead>
        <tr>
          <th style="width: 10%;">${isEn ? 'S.No' : 'வ.எண்'}</th>
          <th style="width: 20%;">${isEn ? 'Reference / Category' : 'வசன பகுதி / வகை'}</th>
          <th style="width: 70%;">${isEn ? 'Promise Verse' : 'வாக்குத்தத்த வசனம்'}</th>
        </tr>
      </thead>
      <tbody>
        ${contentData.promises.map((promise, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>
              <strong>${promise.reference}</strong><br>
              <span style="font-size: 8.5pt; color: #666666;">(${t(promise.category, lang)})</span>
            </td>
            <td>${t(promise.text, lang)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- 12. Contact Information -->
    <h2>${hContact}</h2>
    <p><strong>${isEn ? 'Address' : 'முகவரி'}:</strong> ${t(contentData.general.address, lang)}</p>
    <p><strong>${isEn ? 'Email' : 'மின்னஞ்சல்'}:</strong> ${contentData.general.email}</p>
    <p><strong>${isEn ? 'Phone' : 'தொலைபேசி'}:</strong> ${contentData.general.phone1} ${contentData.general.phone2 ? `/ ${contentData.general.phone2}` : ''}</p>
    <p><strong>${isEn ? 'Donation Motto' : 'நன்கொடை நோக்கம்'}:</strong> ${t(contentData.general.donationMotto, lang)}</p>
    
    <div class="footer-note">
      <p>&copy; ${new Date().getFullYear()} ${mainTitle}. ${isEn ? 'All rights reserved.' : 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'}</p>
    </div>
</body>
</html>`;

  return html;
}

// Generate files in the scripts folder
const scriptsDir = __dirname;
const englishHTML = generateHTML('en');
fs.writeFileSync(path.join(scriptsDir, 'temp_english.html'), englishHTML, 'utf8');
console.log('Generated temp_english.html successfully.');

const tamilHTML = generateHTML('ta');
fs.writeFileSync(path.join(scriptsDir, 'temp_tamil.html'), tamilHTML, 'utf8');
console.log('Generated temp_tamil.html successfully.');
