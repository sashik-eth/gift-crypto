// src/components/redeem/GiftCard.tsx
import { useState, useEffect } from 'react';
import { encodeFunctionData, Address } from 'viem';
import { LOCK_GIFT_ABI, LOCKER_CONTRACT_ADDRESS } from '@/utils/abi';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';

interface GiftCardProps {
  gift: {
    amount: string;
    unlockTime: number;
    message: string;
    index: number;
  };
  onSuccess: (data: { amount: string; message: string }) => void;
}

export function GiftCard({ gift, onSuccess }: GiftCardProps) {
  const { client } = useSmartWallets();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [targetAddress, setTargetAddress] = useState('');
  const [now, setNow] = useState(Date.now());
  const isUnlocked = now >= gift.unlockTime * 1000;

  useEffect(() => {
    if (!isUnlocked) {
      const interval = setInterval(() => setNow(Date.now()), 1000);
      return () => clearInterval(interval);
    }
  }, [isUnlocked]);

  const getCountdown = () => {
    const diff = gift.unlockTime * 1000 - now;
    if (diff <= 0) return 'Unlocked!';
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `${days > 0 ? days + 'd ' : ''}${hours}h ${minutes}m ${seconds}s`;
  };

  const handleRedeem = async () => {
    if (!targetAddress) {
      setError('Please enter a target address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (!client) {
        throw new Error('No smart wallet found');
      }

      const transactionHash = await client.sendTransaction({
        to: LOCKER_CONTRACT_ADDRESS,
        data: encodeFunctionData({
          abi: LOCK_GIFT_ABI,
          functionName: 'unlockGift',
          args: [BigInt(gift.index), targetAddress as Address],
        }),
      });

      console.log('Transaction sent:', transactionHash);
      onSuccess({
        amount: gift.amount,
        message: gift.message
      });
      
    } catch (err) {
      console.error('Failed to redeem gift:', err);
      setError(err instanceof Error ? err.message : 'Failed to redeem gift');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="mb-4">
        <p className="text-2xl font-bold text-indigo-700 mb-1">Amount: {gift.amount} ETH</p>
        {gift.message && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-2 mb-2 text-indigo-900 font-medium text-base shadow-sm">
            <span className="block text-indigo-700 font-semibold mb-1">🎉 Congratulations!</span>
            {gift.message}
          </div>
        )}
      </div>
      {!isUnlocked && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="text-xl font-mono text-indigo-600 mb-2">{getCountdown()}</div>
        </div>
      )}
      {isUnlocked && (
        <div className="mt-4 space-y-3">
          <div>
            <label htmlFor={`address-${gift.index}`} className="block text-sm font-medium text-gray-700 mb-1">
              Send to Address
            </label>
            <input
              id={`address-${gift.index}`}
              type="text"
              value={targetAddress}
              onChange={(e) => setTargetAddress(e.target.value)}
              placeholder="0x..."
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm">
              {error}
            </div>
          )}
          <button
            onClick={handleRedeem}
            disabled={isLoading || !targetAddress}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 font-semibold text-base transition-colors"
          >
            {isLoading ? 'Redeeming...' : 'Redeem Gift'}
          </button>
        </div>
      )}
    </div>
  );
}