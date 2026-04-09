import PageLayout from "@/components/PageLayout";
import {
  HeroSection,
  BlogsSection,
  NpxSection,
  TODOSection,
} from "./HomePageComponents";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <BlogsSection />
      <NpxSection />
      {/* <TODOSection /> */}
    </PageLayout>
  );
};

export default Home;
