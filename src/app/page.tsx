import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uma Assists",
  description: "Expert preparation guides for Uma Musume Team Trials and Champions Meetings. Includes team composition strategies, character analysis, skill optimization, and deck-building tips.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
