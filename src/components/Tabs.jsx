import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <button key={tab.title} onClick={() => setActiveTab(tab.title)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.title && <div key={tab.title}>{tab.content}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
