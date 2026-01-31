import React from 'react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697de8f0e16bb9fad3ffd3cb/95be42d30_LiceLifters_Horizontal_original-01.png"
            alt="Lice Lifters Of Omaha"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </div>
    </header>
  );
}