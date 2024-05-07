import { Header } from '@/wigets';
import { MainSection, DateSpotSection } from './ui';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <DateSpotSection />
      </main>
    </>
  );
}
