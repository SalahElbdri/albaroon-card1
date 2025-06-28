
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

export default function AlbaroonCardLanding() {
  const [lang, setLang] = useState("en");

  const content = {
    en: {
      name: "Salah Elbdri",
      role: "Founder | CEO",
      location: "Tala, Menoufia Governorate – Egypt",
      email: "Salah.elbdri@albaroontours.com",
      phone: "+20 105 066 9295 (WhatsApp)",
      whatsapp: "Chat on WhatsApp",
      thanks: "Your Journey Begins with Albaroon Tours"
    },
    ar: {
      name: "صلاح البدري",
      role: "المؤسس | المدير التنفيذي",
      location: "طَلا - محافظة المنوفية - مصر",
      email: "Salah.elbdri@albaroontours.com",
      phone: "+20 105 066 9295 (واتساب)",
      whatsapp: "تواصل عبر واتساب",
      thanks: "رحلتك تبدأ مع البرّون للسياحة"
    },
  };

  const t = content[lang];

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to bottom right, white, #e0f2fe)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'right', marginBottom: 20 }}>
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 40, justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: 32, color: '#075985' }}>{t.name}</h1>
            <p style={{ fontSize: 18, color: '#475569' }}>{t.role}</p>
            <div style={{ marginTop: 20, color: '#334155', lineHeight: '1.8' }}>
              <div>📍 {t.location}</div>
              <div>✉️ {t.email}</div>
              <div>📞 {t.phone}</div>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="https://wa.me/201050669295?text=Hi%20Albaroon%2C%20I%20got%20your%20business%20card." target="_blank" rel="noopener noreferrer">
                <button style={{ background: '#0284c7', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 4, fontSize: 16 }}>
                  💬 {t.whatsapp}
                </button>
              </a>
            </div>
          </div>

          <div style={{ flex: 1, textAlign: 'center' }}>
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
            <h2 style={{ color: '#075985', margin: '10px 0' }}>Albaroon Tours</h2>
            <p style={{ color: '#64748b', fontSize: 14 }}>WhatsApp Business Account</p>
            <Image src="/qr.jpg" alt="QR" width={180} height={180} style={{ borderRadius: 8 }} />
          </div>
        </div>

        <p style={{ marginTop: 40, textAlign: 'center', color: '#64748b' }}>{t.thanks}</p>

        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 20, fontSize: 24, color: '#0284c7' }}>
          <a href="https://facebook.com/albaroontours" target="_blank"><FaFacebook /></a>
          <a href="https://www.instagram.com/albaroon_01/" target="_blank"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@albaroon_0" target="_blank"><FaTiktok /></a>
          <a href="https://www.snapchat.com/add/salahelbdri?share_id=Zl_EiBzX5gc&locale=en-GB" target="_blank"><FaSnapchatGhost /></a>
        </div>
      </div>
    </div>
  );
}
