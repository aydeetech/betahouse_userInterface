import UserNavbar from "../../components/User components/UserNavbar"
import UserPropertyHeroSection from "../../components/User components/PropertiesSubComponents/UserPropertyHeroSection";
import UserPropertyCardComponent from "../../components/User components/PropertiesSubComponents/UserPropertyCardComponent";
import UserPropertyDiscover from "../../components/User components/PropertiesSubComponents/UserPropertyDiscover";
import UserFooter from "../../components/User components/UserFooter";
import { useGlobalContext } from "../../Hooks/useGlobalContext";

const Properties = () => {
  const {isDark} = useGlobalContext()
  return <div className={isDark ? "DarkMode" : null}>
    <UserNavbar />
    <UserPropertyHeroSection />
    <UserPropertyCardComponent />
    <UserPropertyDiscover />
    <UserFooter />
  </div>;
};

export default Properties;
