import React, { useEffect, useState } from 'react';

export default function UserWatch({ onClick }) {
  const [to, setTo] = useState('Guest');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const rawTo = url.searchParams.get('to');
      const normalized = normalizeGuestName(rawTo);
      setTo(normalized);
    }
  }, []);

  function normalizeGuestName(input) {
    if (!input || typeof input !== 'string') return 'Guest';
    try {
      // Treat plus as space to be robust across encoders
      const decoded = decodeURIComponent(input.replace(/\+/g, ' ')).trim();
      if (!decoded) return 'Guest';
      // Replace separators with spaces, collapse multiple spaces
      const spaced = decoded
        .replace(/[._-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .toLowerCase();
      // Title case each word
      const titled = spaced
        .split(' ')
        .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
        .join(' ');
      return titled;
    } catch (_) {
      return 'Guest';
    }
  }

  return (
    <div className="py-10 text-center space-y-28">
      <img
        className="mx-auto scale-110"
        src="images/NIKAHFIX.webp"
        width={'125px'}
        height={'48px'}
        alt="nikahfix"
      />
      <div>
        <p className="mb-10 text-2xl">Who's Watching?</p>
        <div onClick={onClick} className="group cursor-pointer">
          <img
            className="mx-auto group-hover:scale-125"
            src="images/guest-icon.png"
            width={100}
            height={100}
            alt="nikahfix"
          />
          <p className="text-xl mt-2 group-hover:scale-125 group-hover:pt-5">
            {to}
          </p>
        </div>
      </div>
    </div>
  );
}
