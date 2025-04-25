import { useState } from 'react';
import { PLATFORMS } from './config/platforms';
import { TRADING_PAIRS } from './config/tradingPairs';

export function TradingPanel() {
  // Déclarez d'abord tous les états
  const [platform, setPlatform] = useState(PLATFORMS[0].value);
  const [tradingPair, setTradingPair] = useState(TRADING_PAIRS[0].value);
  const [leverage, setLeverage] = useState(10);
  const [initialBalance, setInitialBalance] = useState(1000);
  const [upperLimit, setUpperLimit] = useState(1000);
  const [lowerLimit, setLowerLimit] = useState(300);

  // Maintenant vous pouvez utiliser tradingPair
  const selectedPair = TRADING_PAIRS.find(pair => pair.value === tradingPair);

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow overflow-hidden">
      {/* En-tête */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Configuration du Trading</h2>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Ligne 1 - Plateforme et Paire de trading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-1">
              Plateforme
            </label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border bg-white"
            >
              {PLATFORMS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tradingPair" className="block text-sm font-medium text-gray-700 mb-1">
              Paire de trading
            </label>
            <select
              id="tradingPair"
              value={tradingPair}
              onChange={(e) => setTradingPair(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border bg-white"
            >
              {TRADING_PAIRS.map((pair) => (
                <option key={pair.value} value={pair.value}>
                  {pair.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ligne 2 - Balance et Levier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="initialBalance" className="block text-sm font-medium text-gray-700 mb-1">
              Balance initiale (USDT)
            </label>
            <input
              type="number"
              id="initialBalance"
              value={initialBalance}
              onChange={(e) => setInitialBalance(Number(e.target.value))}
              min="0"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border"
            />
          </div>
          <div>
            <label htmlFor="leverage" className="block text-sm font-medium text-gray-700 mb-1">
              Levier (x) {selectedPair && `(Max: ${selectedPair.maxLeverage})`}
            </label>
            <input
              type="number"
              id="leverage"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              min={selectedPair?.minLeverage || 1}
              max={selectedPair?.maxLeverage || 100}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border"
            />
          </div>
        </div>

        {/* Ligne 3 - Limites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="upperLimit" className="block text-sm font-medium text-gray-700 mb-1">
              Limite supérieure ($)
            </label>
            <input
              type="number"
              id="upperLimit"
              value={upperLimit}
              onChange={(e) => setUpperLimit(Number(e.target.value))}
              min="0"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border"
            />
          </div>
          <div>
            <label htmlFor="lowerLimit" className="block text-sm font-medium text-gray-700 mb-1">
              Limite inférieure ($)
            </label>
            <input
              type="number"
              id="lowerLimit"
              value={lowerLimit}
              onChange={(e) => setLowerLimit(Number(e.target.value))}
              min="0"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base py-2 px-3 border"
            />
          </div>
        </div>

        {/* Bouton de soumission */}
        <div className="mt-8 text-center">
          <button
            type="button"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Démarrer le Trading
          </button>
        </div>
      </div>
    </div>
  );
}