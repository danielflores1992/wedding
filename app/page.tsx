import CountdownTimer from "@/components/countdown-timer"
import InvitationMain from "@/components/invitation-main"
import EventDetails from "@/components/event-details"
import Itinerary from "@/components/itinerary"
import LocationMap from "@/components/location-map"
import GiftRegistry from "@/components/gift-registry"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import FallingPetals from "@/components/FallingPetals"
import RSVPSection from "@/components/rsvp-section"

export default function Home() {
  const weddingDate = new Date("2025-08-23T17:00:00")

  return (
    <main className="min-h-screen bg-[#faf9f6] font-serif">
       <FallingPetals color="#55104d" quantity={30} />
      <InvitationMain weddingDate={weddingDate} />
      <CountdownTimer targetDate={weddingDate} />
      <EventDetails />
      <Itinerary />
      <LocationMap />
      <RSVPSection />
      <GiftRegistry />
      <Gallery />
      <Footer />
    </main>
  )
}

