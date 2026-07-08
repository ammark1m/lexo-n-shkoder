import './ShkodraLibrary.css';

const timeline = [
  { year: '1930', text: 'Krijohet biblioteka publike e qytetit.' },
  { year: '1968', text: 'Emërtohet "Marin Barleti".' },
  { year: '2007', text: 'Fillon procesi i digjitalizimit.' },
  { year: 'Sot', text: 'Ofron fond fizik dhe shërbime digjitale për komunitetin.' },
];

const values = [
  {
    title: 'Aksesueshmëria',
    text: 'Çdo lexues, pavarësisht moshës apo prejardhjes, gjen këtu një vend të hapur për t\'u informuar dhe edukuar.',
  },
  {
    title: 'Ruajtja e Trashëgimisë',
    text: 'Kujdesemi për botimet e rralla dhe veprat me vlerë historike, si pjesë e identitetit kulturor të Shkodrës.',
  },
  {
    title: 'Inovacioni Dixhital',
    text: 'Investojmë në digjitalizim dhe shërbime online, për ta afruar bibliotekën më pranë komunitetit.',
  },
  {
    title: 'Bashkësia',
    text: 'Organizojmë aktivitete, lexime dhe takime që e kthejnë bibliotekën në një hapësirë të gjallë shoqërore.',
  },
];

const openingHours = [
  { day: 'E Hënë – E Premte', hours: '08:00 – 19:00' },
  { day: 'E Shtunë', hours: '09:00 – 14:00' },
  { day: 'E Dielë', hours: 'Mbyllur' },
];

const borrowingRules = [
  'Karta e anëtarësisë është e domosdoshme për të rezervuar ose huazuar libra.',
  'Librat mund të rezervohen deri në 3 ditë para se të merren.',
  'Librat e huazuar duhet të kthehen brenda 21 ditësh.',
  'Deri në 5 libra mund të huazohen njëkohësisht.',
  'Koleksionet e rralla dhe ato të referencës lexohen vetëm në ambientet e bibliotekës.',
  'Kthimet me vonesë mund të pezullojnë përkohësisht të drejtën e rezervimit.',
];

function ShkodraLibrary() {
  return (
    <>
      {/* ---------- Hero / image section ---------- */}
      <section className="library-hero">
        <div className="container">
          <span className="eyebrow">Shkodër, Shqipëri</span>
          <h1>Biblioteka Publike "Marin Barleti"</h1>
          <p className="library-hero__slogan">
            "Duke lidhur lexuesit me dijen dhe historinë e Bibliotekës 'Marin Barleti'."
          </p>
        </div>
      </section>

      {/* ---------- Rreth Bibliotekës ---------- */}
      <section className="section">
        <div className="container library-intro">
          <span className="eyebrow">Rreth Bibliotekës</span>
          <p>
            Biblioteka Publike "Marin Barleti" është një nga institucionet më
            të rëndësishme kulturore të qytetit të Shkodrës dhe një qendër e
            rëndësishme e dijes dhe leximit në Shqipëri. E themeluar në
            fillim të viteve '30 dhe e emërtuar "Marin Barleti" në vitin
            1968, biblioteka ruan një fond të pasur librash, përfshirë
            botime të rralla dhe vepra me vlerë historike.
          </p>
        </div>
      </section>

      {/* ---------- Historia e Bibliotekës ---------- */}
      <section className="section section--alt">
        <div className="container library-grid">
          <div>
            <span className="eyebrow">Që nga themelimi</span>
            <h2>Historia e Bibliotekës</h2>
            <p>
              
              Shkodra ka qenë prej kohësh një qendër kulturore dhe
              intelektuale e Shqipërisë së Veriut, djep i shtypshkronjës së
              parë në vend dhe i breznive të shkrimtarëve e studiuesve.
              Biblioteka lindi pikërisht nga kjo traditë, duke ruajtur
              trashëgiminë letrare shqiptare përgjatë periudhave të ndryshme
              historike dhe duke u zgjeruar për t'u shërbyer çdo brezi
              lexuesish që erdhi më pas.
            </p>
            <p>
              Sot, biblioteka vazhdon këtë trashëgimi — duke bashkuar
              arkivat historike me një katalog modern në zgjerim, dhe duke
              mbetur një vend takimi për këdo që i vlerëson librat dhe dijen.
            </p>
          </div>

          <ol className="timeline">
            {timeline.map((item) => (
              <li className="timeline__item" key={item.year}>
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__text">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Misioni dhe Vlerat ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Çfarë na udhëheq</span>
            <h2>Misioni dhe Vlerat</h2>
            <p>
              Misioni ynë është t'i ofrojmë çdo banori të Shkodrës qasje të
              lirë dhe të barabartë në libra, dije e kulturë, duke ruajtur
              njëkohësisht trashëgiminë letrare të qytetit për brezat që
              vijnë.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Orari, Adresa, Rregullat ---------- */}
      <section className="section section--alt">
        <div className="container info-grid">
          <div className="info-card card">
            <h3>🕒 Orari i Punës</h3>
            <ul className="info-card__list">
              {openingHours.map((item) => (
                <li key={item.day}>
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card card">
            <h3>📍 Adresa dhe Kontakti</h3>
            <p className="info-card__text">
              Rruga 13 Dhjetori<br />
              Shkodër 4001, Shqipëri
            </p>
            <p className="info-card__text">
              +355 22 240 000<br />
              info@bibliotekamarinbarleti.al
            </p>
          </div>

          <div className="info-card card info-card--rules">
            <h3>📋 Rregullat e Huazimit</h3>
            <ul className="info-card__rules">
              {borrowingRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Vendndodhja në Hartë ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Na gjeni lehtë</span>
            <h2>Vendndodhja në Hartë</h2>
          </div>
          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.943021685848!2d19.506671475915073!3d42.065840671221736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134e00fd2aa45d61%3A0xce5b3852ffcca68d!2sBiblioteka%20%22Marin%20Barleti%22!5e0!3m2!1sen!2s!4v1783537686124!5m2!1sen!2s"
              title='Vendndodhja e Bibliotekës "Marin Barleti" në Google Maps'
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="map-embed__address">📍 Rruga 13 Dhjetori, Shkodër, Shqipëri</p>
        </div>
      </section>
    </>
  );
}

export default ShkodraLibrary;
