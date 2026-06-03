import { Hero } from "@/components/Hero";
import { Heroes } from "@/components/Heroes";
import { Humanitarian } from "@/components/Humanitarian";
import { Events } from "@/components/Events";
import { JoinForm } from "@/components/JoinForm";
import { Partners } from "@/components/Partners";

export default function Index() {
  return (
    <>
      <Hero />
      <Heroes />
      <Humanitarian />
      <Events />
      <JoinForm />
      <Partners />
    </>
  );
}