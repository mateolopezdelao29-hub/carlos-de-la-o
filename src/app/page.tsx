import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Beliefs } from "@/components/sections/beliefs";
import { Work } from "@/components/sections/work";
import { ColumnPreview } from "@/components/sections/column-preview";
import { ReportForm } from "@/components/sections/report-form";
import { Donations } from "@/components/sections/donations";
import { Volunteer } from "@/components/sections/volunteer";
import { Social } from "@/components/sections/social";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Beliefs />
        <Work />
        <ColumnPreview />
        <ReportForm />
        <Donations />
        <Volunteer />
        <Social />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
