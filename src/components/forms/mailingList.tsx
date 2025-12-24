"use client";

export default function MailingList() {
  return (
    <div className="bg-linear-to-br from-gold-500 to-orange-400 rounded-xl p-6 text-navy-900 shadow-lg">
      <h4 className="font-display font-black text-xl mb-2">
        DON'T MISS A GAME
      </h4>
      <p className="text-sm font-semibold opacity-90 mb-4">
        Get weekly updates on field conditions, game times, and club news.
      </p>
      <input
        type="email"
        placeholder="Parent's Email Address"
        className="w-full p-3 rounded text-sm mb-2 focus:outline-none ring-2 ring-navy-900/20"
      />
      <button className="w-full bg-navy-900 text-white font-bold text-sm py-3 rounded hover:bg-navy-800 transition">
        SUBSCRIBE
      </button>
    </div>
  );
}
