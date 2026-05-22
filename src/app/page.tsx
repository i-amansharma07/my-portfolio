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
      <NpxSection command="curl https://f15.world/aman.sh | bash" title="Grab my info in your terminal using curl"/>
      <NpxSection command="npx hey-aman-sharma" title="or with NPM  :)"/>
      {/* <TODOSection /> */}
    </PageLayout>
  );
};

export default Home;
