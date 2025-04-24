import PageLayout from "@/components/PageLayout";
import { HeroSection, BlogsSection, TODOSection } from "./HomePageComponents";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <BlogsSection />
      <TODOSection />
    </PageLayout>
  );
};

export default Home;
