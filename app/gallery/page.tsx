import type { Metadata } from "next";
import Gallery from "@/Components/Gallery";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Our Gallery | Optimized Home",
  description:
    "View completed work and service projects by Optimized Home for Trading & Services.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Gallery />
      </main>

      <Footer />
    </>
  );
}