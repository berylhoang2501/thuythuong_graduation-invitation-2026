import React, { useEffect, useState } from "react";
import InvitationHero from "../components/InvitationHero";
import Countdown from "../components/Countdown";
import InvitationMessage from "../components/InvitationMessage";
import EventDetails from "../components/EventDetails";
import LocationSection from "../components/LocationSection";
import GallerySection from "../components/GallerySection";
import ThankYouSection from "../components/ThankYouSection";
import Footer from "../components/Footer";
import { getQueryValue } from "../utils/getQueryValue";

export default function HomePage() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    setGuestName(getQueryValue("to"));
  }, []);

  return (
    <main>
      <InvitationHero guestName={guestName} />
      <Countdown />
      <InvitationMessage />
      <EventDetails />
      <LocationSection />
      <GallerySection />
      <ThankYouSection />
      <Footer />
    </main>
  );
}

export function Head() {
  return (
    <>
      <html lang="vi" />
      <title>Lễ Tốt Nghiệp 2026 | Hoàng Ngọc Thủy Thương</title>
      <meta
        name="description"
        content="Thiệp mời tham dự Lễ Tốt Nghiệp Năm 2026 của Hoàng Ngọc Thủy Thương."
      />
    </>
  );
}
