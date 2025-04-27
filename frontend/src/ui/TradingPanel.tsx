import React, { useState } from "react";
import { SelectField } from "../components";
import { useTradingPanelTranslations } from "../i18n/hooks";
import { tradingOptions } from "../constants/tradingOptions";

const TradingPanel: React.FC = () => {
  const tTradingPanel = useTradingPanelTranslations();

  // États séparés pour chaque SelectField
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedPair, setSelectedPair] = useState<string>("");
  const [selectedSide, setSelectedSide] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
        {tTradingPanel.title()}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField
          id="trading-platform-select"
          label={tTradingPanel.platform()}
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          options={tradingOptions.platforms}
          required={true}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-700"
        />

        <SelectField
          id="trading-pair-select"
          label={tTradingPanel.tradingPair()}
          value={selectedPair}
          onChange={(e) => setSelectedPair(e.target.value)}
          options={tradingOptions.symbols}
          required={true}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-700"
        />

        <SelectField
          id="trading-side-select"
          label={tTradingPanel.side()}
          value={selectedSide}
          onChange={(e) => setSelectedSide(e.target.value)}
          options={tradingOptions.sides}
          required={true}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-700"
        />

        <SelectField
          id="trading-type-select"
          label={tTradingPanel.type()}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          options={tradingOptions.types}
          required={true}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-700"
        />
      </div>
    </div>
  );
};

export default TradingPanel;
