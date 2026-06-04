import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Heroes } from "@/components/Heroes";
import { Humanitarian } from "@/components/Humanitarian";
import { Events } from "@/components/Events";
import { JoinForm } from "@/components/JoinForm";
import { Partners } from "@/components/Partners";

export default function Index() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Heroes />
      <Humanitarian />
      <Events />
      <Partners />
      <JoinForm />
    </>
  );
}