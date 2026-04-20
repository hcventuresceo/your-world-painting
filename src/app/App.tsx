import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyChoose } from "./components/WhyChoose";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { Testimonials } from "./components/Testimonials";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturedProjectsStrip } from "./components/FeaturedProjectsStrip";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EstimateModal } from "./components/EstimateModal";
import { LeadCaptureSlideIn } from "./components/LeadCaptureSlideIn";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { FlyrPage } from "./pages/FlyrPage";
import { QuotePage } from "./pages/QuotePage";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [modalHookText, setModalHookText] = useState<string | undefined>(undefined);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);
  const [customHeader, setCustomHeader] = useState<string | undefined>(undefined);

  const openEstimateModal = (hookText?: string, service?: string, header?: string) => {
    setModalHookText(hookText);
    setPreSelectedService(service);
    setCustomHeader(header);
    setIsModalOpen(true);
  };

  const handleNavigate = (page: string) => {
    console.log('handleNavigate called with page:', page);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    console.log('Current page:', currentPage);
    switch (currentPage) {
      case "gallery":
        return <GalleryPage onEstimateClick={openEstimateModal} />;
      case "about":
        return <AboutPage onEstimateClick={openEstimateModal} />;
      case "flyr":
        return <FlyrPage onEstimateClick={openEstimateModal} />;
      case "quote":
        return <QuotePage />;
      default:
        return (
          <>
            <Hero onEstimateClick={openEstimateModal} onNavigate={handleNavigate} />
            <Testimonials />
            <WhyChoose />
            <FeaturedProjectsStrip
              onEstimateClick={openEstimateModal}
              onNavigate={handleNavigate}
            />
            <HowItWorks />
            <TestimonialsSection />
            <Contact onEstimateClick={openEstimateModal} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pt-[33px] pb-[64px] md:pb-0">
      <AnnouncementBar onEstimateClick={openEstimateModal} />
      <Header
        onEstimateClick={openEstimateModal}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
      <Footer />
      <EstimateModal open={isModalOpen} onOpenChange={setIsModalOpen} hookText={modalHookText} preSelectedService={preSelectedService} customHeader={customHeader} />
      <LeadCaptureSlideIn />
      <StickyMobileBar />
    </div>
  );
}