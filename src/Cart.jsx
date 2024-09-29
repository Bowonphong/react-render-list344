import React, { useState } from 'react';

function Cart({ cart, removeFromCart, updateQuantity, calculateTotal, applyDiscount }) {
  const [couponCode, setCouponCode] = useState('');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">รถเข็น</h2>
      {cart.length === 0 ? (
        <p>ไม่มีสิ้นค้าอยู่ในรถเข็น</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="border p-4 rounded mb-2">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p>ราคา:฿{item.price}</p>
              <p>ค่าจัดส่ง:100</p>
              <p>จำนวน: 
                <button
                  className="mx-2 bg-gray-200 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="mx-2 bg-gray-200 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => removeFromCart(item.id)}
              >
                ลบ
              </button>
            </div>
          ))}
          <div className="mt-4">
            <input
              type="text"
              placeholder="ป้อนรหัสคูปอง(เหมียว)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border px-2 py-1 rounded mr-2"
            />
            <button
              onClick={() => applyDiscount(couponCode)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              ใช้คูปอง
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">ทั้งหมด:฿{calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
