'use client';

import { useEffect, useState } from 'react';
import { useCreateWallet, usePrivy } from '@privy-io/react-auth';
import { useWindowSize } from 'react-use';
import dynamic from 'next/dynamic';
import { EmailVerification } from './EmailVerification';
import { GiftForm } from './GiftForm';
import { GiftSuccess } from './GiftSuccess';

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function SendGift() {
  const { createWallet, logout, user } = usePrivy();
  const { ready, authenticated } = usePrivy();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftData, setGiftData] = useState<{
    email: string;
    amount: string;
    unlockDate: string;
  } | null>(null);

  useEffect(() => {
    if (!authenticated) {
      return;
    }

    if (!user?.linkedAccounts.find(account => account.type === 'wallet' && account.chainType === 'ethereum')) {
      createWallet({ createAdditional: false });
    }
  }, [authenticated]);

  const handleSuccess = (data: { email: string; amount: string; unlockDate: string; }) => {
    setGiftData(data);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  };

  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!authenticated) {
    return <EmailVerification onVerified={() => {}} />;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {giftData ? "Gift Created Successfully!" : "Create a Crypto Gift"}
          </h1>
          {user?.email?.address && (
            <p className="text-sm text-gray-600 mt-1">
              Logged in as <span className="font-medium">{user.email.address}</span>
            </p>
          )}
        </div>
        <button
          onClick={() => logout()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Logout
        </button>
      </div>
      
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.3}
          colors={['#4F46E5', '#818CF8', '#C7D2FE']} // Indigo color palette
        />
      )}
      
      {!giftData ? (
        <GiftForm onSuccess={handleSuccess} />
      ) : (
        <GiftSuccess giftData={giftData} onReset={() => setGiftData(null)} />
      )}
    </div>
  );
} 