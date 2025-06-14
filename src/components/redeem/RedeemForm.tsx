// src/components/redeem/RedeemForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { encodeFunctionData, Address, formatEther, decodeFunctionResult } from 'viem';
import { LOCK_GIFT_ABI, LOCKER_CONTRACT_ADDRESS } from '@/utils/abi';
import { useSmartWallets } from '@privy-io/react-auth/smart-wallets';
import { apiClient, callRPC } from '@/repositories';
import { GiftCard } from './GiftCard';

interface Gift {
  amount: string;
  unlockTime: number;
  message: string;
  index: number;
}

interface RedeemFormProps {
  onSuccess: (data: { amount: string; message: string }) => void;
}

export function RedeemForm({ onSuccess }: RedeemFormProps) {
  const { client } = useSmartWallets();
  const { user } = usePrivy();
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGifts = async () => {
      if (!client || !user?.smartWallet) return;

      try {
        const result = await apiClient.getGifts(user.smartWallet.address as Address);

        const decodedResult = decodeFunctionResult({
          abi: LOCK_GIFT_ABI,
          functionName: 'getGifts',
          data: result as `0x${string}`
        });

        const [amounts, unlockTimes, messages] = decodedResult as [bigint[], bigint[], string[]];
        
        const availableGifts = amounts.map((amount, index) => ({
          amount: formatEther(amount),
          unlockTime: Number(unlockTimes[index]),
          message: messages[index],
          index
        }));

        setGifts(availableGifts);
      } catch (err) {
        console.error('Failed to fetch gifts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch gifts');
      }
    };

    fetchGifts();
  }, [client, user?.smartWallet]);

  if (gifts.length === 0) {
    return (
      <div className="text-center text-gray-600">
        No gifts available for your address.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {gifts.map((gift) => (
          <GiftCard
            key={gift.index}
            gift={gift}
            onSuccess={onSuccess}
          />
        ))}
      </div>
    </div>
  );
}