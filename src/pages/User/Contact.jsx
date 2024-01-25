import UserContactCardComponent from "../../components/User components/ContactSubComponents/UserContactCardComponent";
import UserContactHeaderComponent from "../../components/User components/ContactSubComponents/UserContactHeaderComponent";
import UserContactMap from "../../components/User components/ContactSubComponents/UserContactMap";
import UserNavbar from "../../components/User components/UserNavbar";
import UserFooter from "../../components/User components/UserFooter";
import { useGlobalContext } from "../../Hooks/useGlobalContext";


const Contact = () => {
  const {isDark} = useGlobalContext()
  return <div className={isDark ? "DarkMode" : null}>
    <UserNavbar />
    <UserContactHeaderComponent />
    <UserContactCardComponent />
    <UserContactMap />
    <UserFooter />
    
  </div>;
};

export default Contact;
