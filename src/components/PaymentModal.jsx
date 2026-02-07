import { X, CreditCard, Lock } from "lucide-react";
import { useState } from "react";
import Spinner from "./Spinner";

const PaymentModal = ({ bookingDetails, onClose, onConfirm }) => {
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const totalAmount = bookingDetails.price;
  const advanceAmount = Math.round(totalAmount * 0.2); // 20% advance
  const remainingAmount = totalAmount - advanceAmount;

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment gateway delay
    setTimeout(() => {
      setProcessing(false);
      onConfirm({
        ...bookingDetails,
        amountPaid: advanceAmount,
        paymentStatus: "Partial",
        transactionId: "TXN" + Date.now(),
      });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <Lock size={18} className="mr-2 text-green-600" /> Secure Payment
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-4 rounded-md mb-6 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Court:</span>
              <span className="font-semibold">{bookingDetails.courtName}</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span className="font-semibold">
                {bookingDetails.date} | {bookingDetails.slot}
              </span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-blue-600 font-bold mt-1">
                <span>Advance Payable (20%):</span>
                <span>₹{advanceAmount}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handlePayment}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number (Mock)
                </label>
                <div className="relative">
                  <CreditCard
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    maxLength={19}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="123"
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                    maxLength={3}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className={`w-full mt-6 py-3 rounded-lg font-bold text-white shadow-md transition-all
                                ${processing ? "bg-blue-400 cursor-wait" : "bg-blue-600 hover:bg-blue-700"}
                            `}
            >
              {processing ? (
                <div className="flex items-center justify-center">
                  <Spinner size="sm" />{" "}
                  <span className="ml-2">Processing...</span>
                </div>
              ) : (
                `Pay ₹${advanceAmount}`
              )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              This is a secure mock payment. No real money will be deducted.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
