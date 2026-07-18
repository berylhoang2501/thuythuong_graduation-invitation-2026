import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InvitationHero from '../components/InvitationHero';
import InvitationMessage from '../components/InvitationMessage';
import GallerySection from '../components/GallerySection';
import EventDetails from '../components/EventDetails';
import LocationSection from '../components/LocationSection';
import ThankYouSection from '../components/ThankYouSection';
import Footer from '../components/Footer';
import getQueryValue from '../utils/getQueryValue';

const DESCRIPTION =
  'Thiệp mời tham dự Lễ Tốt Nghiệp Năm 2026 của Hoàng Ngọc Thủy Thương, diễn ra lúc 10:00 ngày 30/07/2026 tại Nhà hát Hòa Bình, TP.HCM.';

export default function Home({ location }) {
  const [opened, setOpened] = useState(false);
  const guestName = getQueryValue(location, 'to') || '';

  const openInvitation = () => {
    setOpened(true);
    setTimeout(() => {
      const section = document.getElementById('invitation-details');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <html lang="vi" />
        <title>Lễ Tốt Nghiệp 2026 | Hoàng Ngọc Thủy Thương</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content="Lễ Tốt Nghiệp 2026 - Hoàng Ngọc Thủy Thương" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#071b33" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <InvitationHero guestName={guestName} onOpen={openInvitation} />

      {opened && (
        <main className="reveal">
          <InvitationMessage />
          <GallerySection />
          <EventDetails />
          <LocationSection />
          <ThankYouSection guestName={guestName} />
          <Footer />
        </main>
      )}
    </>
  );
}
