import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import Swipper from "../Swiper";

const SectionFilter = ({ title, topAlbum, genreData, executeFilter }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <p>{title}</p>

      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(genreData[value].key)
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: { backgroundColor: "var(--css-primary)" },
        }}
      >
        {genreData.map((items) => (
          <Tab style={{ color: "white" }} key={items.key} label={items.label} />
        ))}
      </Tabs>

      <Swipper topAlbum={topAlbum} navId="filter"/>
    </div>
  );
};

export default SectionFilter;
