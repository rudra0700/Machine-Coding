import { useState } from "react";

const ProductCart = () => {
  const ORIGINAL_PRICE = 1000;
  const DISCOUNTED_PERCENTAGE = 0.2;

  const [couponCode, setCouponCode] = useState("");
  const [isAppliedCoupon, setIsAppliedCoupon] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const currentPrice = isAppliedCoupon
    ? ORIGINAL_PRICE * (1 - DISCOUNTED_PERCENTAGE)
    : ORIGINAL_PRICE;

  const handleCouponApply = () => {
    if (couponCode.trim()) {
      setIsAppliedCoupon(true);
      setPurchaseComplete(false);
    }
  };

  const handlePurchase = () => {
    setPurchaseComplete(true);
  };
  return (
    <div className="w-125 mx-auto bg-[#FFF5ED] p-3 mt-3 rounded-xl shadow-2xl">
      <h1 className="text-2xl font-bold">
        Your Cart : {ORIGINAL_PRICE.toFixed(2)}
      </h1>
      <p className="text-gray-600 mt-3">
        Review your items and apply a coupon code for saving
      </p>

      <div className="flex items-center justify-between bg-[#FFF9EC] p-4 rounded-xl mt-7">
        <div>
          <h3 className="text-xl font-semibold">Premium Product Bundle</h3>
          <p className="text-sm mt-2 text-gray-600">
            High-quality items selected for you
          </p>
        </div>
        <div>
          <p className="text-gray-600">Original Price</p>
          <h5
            className={`text-xl font-bold ${isAppliedCoupon ? "text-gray-600 line-through" : "text-amber-700"}`}
          >
            ${ORIGINAL_PRICE}
          </h5>
        </div>
      </div>
      {isAppliedCoupon && (
        <div className="mt-5 border border-green-700 rounded-md flex justify-between items-center p-5 bg-[#EEFDF4]">
          <h5 className="font-semibold text-green-700">
            Discount applied ({DISCOUNTED_PERCENTAGE * 100}% off)
          </h5>
          <p className="text-green-700">
            -${ORIGINAL_PRICE * DISCOUNTED_PERCENTAGE}
          </p>
        </div>
      )}

      <hr className="text-amber-400 mt-5" />

      <div className="mt-7 space-y-5">
        <h4 className="font-bold">Have a coupon code?</h4>
        <input
          className={`w-80 p-2 rounded-md  focus:border-amber-400 focus: outline focus:outline-amber-400 ${isAppliedCoupon && "border-none bg-gray-50"}`}
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
          disabled={isAppliedCoupon}
        />

        <button
          disabled={!couponCode.trim() || isAppliedCoupon}
          onClick={handleCouponApply}
          className={`py-2 px-5 rounded-md ml-12 ${!couponCode.trim() || isAppliedCoupon ? "bg-[#F3AE83]" : "bg-[#C1430C]"} text-white font-semibold`}
        >
          Apply
        </button>
        <hr className="text-amber-400 mt-5" />
      </div>

      {isAppliedCoupon && (
        <p className="font-semibold text-sm mt-3 text-green-700">
          Coupon applied successfully
        </p>
      )}

      <div className="flex justify-between items-center mt-7 rounded-md bg-[#FEF0CD] p-5 border-2 border-amber-500">
        <h3 className="font-bold text-lg text-black">Total Price</h3>
        <h2 className="text-2xl font-bold">${currentPrice}</h2>
      </div>
      <button
        className="text-xl bg-green-400 font-bold rounded-md p-5 text-white w-full mt-5 "
        onClick={handlePurchase}
      >
        Complete Purchase
      </button>
      {purchaseComplete && (
        <p className="text-xl font-semibold mt-3">
          Purchase confirmed! You paid ${currentPrice}
          {isAppliedCoupon &&
            ` (saved $${ORIGINAL_PRICE * DISCOUNTED_PERCENTAGE} with your coupon)`}
          . Thank you for your order
        </p>
      )}
    </div>
  );
};

export default ProductCart;
