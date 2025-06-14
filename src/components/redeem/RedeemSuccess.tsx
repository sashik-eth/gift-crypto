'use client';

interface RedeemSuccessProps {
  redeemData: {
    amount: string;
    message: string;
  };
  onReset: () => void;
}

export function RedeemSuccess({ redeemData, onReset }: RedeemSuccessProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-sm border border-green-100">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Gift Redeemed Successfully!</h2>
        <p className="text-green-700 text-lg mb-6">{redeemData.message}</p>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <p className="text-3xl font-bold text-green-600 mb-1">{redeemData.amount} ETH</p>
          <p className="text-sm text-gray-500">has been transferred to your wallet</p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Redeem Another Gift
        </button>
      </div>
    </div>
  );
} 