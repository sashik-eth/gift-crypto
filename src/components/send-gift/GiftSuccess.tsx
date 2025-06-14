'use client';

interface GiftSuccessProps {
  giftData: {
    email: string;
    amount: string;
    unlockDate: string;
  };
  onReset: () => void;
}

export function GiftSuccess({ giftData, onReset }: GiftSuccessProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-sm border border-indigo-100">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-indigo-800 mb-2">Gift Created Successfully!</h2>
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <p className="text-3xl font-bold text-indigo-600 mb-1">{giftData.amount} ETH</p>
          <p className="text-sm text-gray-500">will be unlocked on {giftData.unlockDate}</p>
        </div>
        <p className="text-indigo-700 text-lg">
          A gift link has been sent to <span className="font-medium">{giftData.email}</span>
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Another Gift
        </button>
      </div>
    </div>
  );
} 