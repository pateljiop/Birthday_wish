import { useEffect } from 'react';

// Import components
import { OpeningSequence } from './components/OpeningSequence';
import { BirthdayHero } from './components/BirthdayHero';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FloatingHearts } from './components/FloatingHearts';
import { ParticleEffect } from './components/ParticleEffect';
import { AppreciationCarousel } from './components/AppreciationCarousel';
import { CelebrationSetup } from './components/CelebrationSetup';
import { BirthdayCakeCeremony } from './components/BirthdayCakeCeremony';
import { PhotoSlideshow } from './components/PhotoSlideshow';
import { ReasonsILoveYou } from './components/ReasonsILoveYou';
import { SpecialWish } from './components/SpecialWish';
import { CurtainReveal } from './components/CurtainReveal';
import { LoveLetter } from './components/LoveLetter';
import { InteractiveLoveTest } from './components/InteractiveLoveTest';
import { PolaroidGallery } from './components/PolaroidGallery';
import { HiddenMessages } from './components/HiddenMessages';
import { LoveCounter } from './components/LoveCounter';
import { RomanticPromises } from './components/RomanticPromises';
import { RomanticShayari } from './components/RomanticShayari';
import { PhotoGalleryFinale } from './components/PhotoGalleryFinale';
import { FinalMessage } from './components/FinalMessage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden relative">
      <OpeningSequence />
      <FloatingHearts />
      <ParticleEffect />
      <ScrollToTop />
      <ScrollIndicator />
      <BirthdayHero />
      <AppreciationCarousel />
      <CelebrationSetup />
      <BirthdayCakeCeremony />
      <PhotoSlideshow />
      <ReasonsILoveYou />
      <SpecialWish />
      <CurtainReveal />
      <LoveLetter />
      <InteractiveLoveTest />
      <PolaroidGallery />
      <HiddenMessages />
      <LoveCounter />
      <RomanticPromises />
      <RomanticShayari />
      <PhotoGalleryFinale />
      <FinalMessage />
    </div>
  );
}
