import UserFooter from "../../components/User components/UserFooter";
import UserInspectionPage from "../../components/User components/UserInspectionPage";
import UserNavbar from "../../components/User components/UserNavbar";
import { useGlobalContext } from "../../Hooks/useGlobalContext";


const Inspection = () => {
  const {isDark} = useGlobalContext()
  return <div className={isDark ? "DarkMode" : null}>
    <UserNavbar />
    <UserInspectionPage />
    <UserFooter />
  </div>;
};

export default Inspection;
