import { Hero } from "@/components/Hero";
import { Heroes } from "@/components/Heroes";
import { Humanitarian } from "@/components/Humanitarian";
import { JoinForm } from "@/components/JoinForm";

export default function Index() {
  return (
    <>
      <Hero />
      <Heroes />
      <Humanitarian />
      <JoinForm />
    </>
  );
}