import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategory from "../../../components/SubCategory/SubCategory";
import { AuthContext } from "../../../providers/AuthProvider";

const TabSection = () => {
  const {setLoading } = useContext(AuthContext);

  const [toys, setToys] = useState({});
  const [activeTab, setActiveTab] = useState("allToyCars");
  // console.log(activeTab, toys);

  useEffect(() => {
    setLoading(true);
    fetch(`https://turbo-troop-server.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      });
  }, [activeTab, setLoading]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

 
  return (
    <Tabs className="my-16">
      <p className="text-center text-3xl font-bold mb-6"> Toys Tabs </p>
      <TabList className="text-center">
        <Tab onClick={() => handleTab("truck")}>Truck</Tab>
        <Tab onClick={() => handleTab("sportsCar")}>Sports Car</Tab>
        <Tab onClick={() => handleTab("fireTruck")}>Fire Truck</Tab>
      </TabList>

      <TabPanel>
        <h2 className="text-center my-5">Truck</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
      <TabPanel>
        <h2 className="text-center my-5">Sports Car</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
      <TabPanel>
        <h2 className="text-center my-5">Fire Truck</h2>
        <SubCategory toys={toys}></SubCategory>
      </TabPanel>
    </Tabs>
  );
};

export default TabSection;
