"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home as HomeComponent } from "./Home";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HomeComponent />
      <Footer />
    </div>
  );
}
