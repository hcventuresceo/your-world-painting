import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HomepageTransformations } from "./components/HomepageTransformations";
import { WhyChoose } from "./components/WhyChoose";
import { Testimonials } from "./components/Testimonials";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { HowItWorks } from "./components/HowItWorks";
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
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

  const openEstimateModal = (hookText?: string, service?: string, header?: string) => {
    setModalHookText(hookText);
    setPreSelectedService(service);
    setCustomHeader(header);
    setIsModalOpen(true);
  };

  const handleNavigate = (page: string) => {
    if (page === "reviews") {
      setCurrentPage("home");
      setPendingScrollTarget("reviews");
      window.scrollTo(0, 0);
      return;
    }

    setCurrentPage(page);
    setPendingScrollTarget(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!pendingScrollTarget) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(pendingScrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingScrollTarget(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pendingScrollTarget, currentPage]);

  const renderPage = () => {
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
            <HomepageTransformations />
            <Testimonials />
            <WhyChoose />
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
