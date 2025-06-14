// src/components/redeem/GiftCard.tsx
import { useState } from 'react';
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
  const isUnlocked = Date.now() >= gift.unlockTime * 1000;

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
    <div className="border rounded-lg p-4">
      <p className="text-lg font-medium">Amount: {gift.amount} ETH</p>
      <p className="text-sm text-gray-600">
        Unlock Time: {new Date(gift.unlockTime * 1000).toLocaleString()}
      </p>
      {gift.message && (
        <p className="text-sm text-gray-600 mt-2">Message: {gift.message}</p>
      )}
      
      {isUnlocked && (
        <div className="mt-4 space-y-3">
          <div>
            <label htmlFor={`address-${gift.index}`} className="block text-sm font-medium text-gray-700">
              Send to Address
            </label>
            <input
              id={`address-${gift.index}`}
              type="text"
              value={targetAddress}
              onChange={(e) => setTargetAddress(e.target.value)}
              placeholder="0x..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isLoading ? 'Redeeming...' : 'Redeem Gift'}
          </button>
        </div>
      )}
      
      {!isUnlocked && (
        <div className="mt-4 text-center text-gray-500">
          Not Yet Unlocked
        </div>
      )}
    </div>
  );
}