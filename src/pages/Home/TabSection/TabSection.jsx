import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategory from "../../../components/SubCategory/SubCategory";
import { AuthContext } from "../../../providers/AuthProvider";

const TabSection = () => {

  const { loading } = useContext(AuthContext);

  const [toys, setToys] = useState({});
  const [activeTab, setActiveTab] = useState("allToyCars");
  // console.log(activeTab, toys);

  useEffect(() => {
    fetch(`https://turbo-troop-server.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [activeTab]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  }; 
  

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }


  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => handleTab("truck")}>Truck</Tab>
        <Tab onClick={() => handleTab("sportsCar")}>Sports Car</Tab>
        <Tab onClick={() => handleTab("fireTruck")}>Fire Truck</Tab>
      </TabList>

      <TabPanel>
        <h2 className="text-center">Truck</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
      <TabPanel>
        <h2 className="text-center">Sports Car</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
      <TabPanel>
        <h2 className="text-center ">Fire Truck</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
    </Tabs>
  );
};

export default TabSection;
