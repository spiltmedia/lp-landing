import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        :root {
          --primary-blue: #2196F3;
          --primary-blue-dark: #1976D2;
          --primary-blue-light: #42A5F5;
          --accent-orange: #FF9800;
          --accent-orange-dark: #F57C00;
          --text-dark: #333333;
          --text-light: #666666;
        }
        
        /* Override default teal colors with Lice Lifters blue */
        .bg-teal-50 { background-color: #E3F2FD !important; }
        .bg-teal-100 { background-color: #BBDEFB !important; }
        .bg-teal-400 { background-color: #42A5F5 !important; }
        .bg-teal-500 { background-color: #2196F3 !important; }
        .bg-teal-600 { background-color: #1976D2 !important; }
        .bg-teal-700 { background-color: #1565C0 !important; }
        
        .text-teal-200 { color: #90CAF9 !important; }
        .text-teal-400 { color: #42A5F5 !important; }
        .text-teal-500 { color: #2196F3 !important; }
        .text-teal-600 { color: #1976D2 !important; }
        .text-teal-700 { color: #1565C0 !important; }
        
        .border-teal-200 { border-color: #BBDEFB !important; }
        .border-teal-300 { border-color: #90CAF9 !important; }
        .border-teal-600 { border-color: #1976D2 !important; }
        
        .from-teal-50 { --tw-gradient-from: #E3F2FD !important; }
        .via-teal-400 { --tw-gradient-via: #42A5F5 !important; }
        .to-teal-200 { --tw-gradient-to: #BBDEFB !important; }
        .from-teal-500 { --tw-gradient-from: #2196F3 !important; }
        .to-teal-600 { --tw-gradient-to: #1976D2 !important; }
        .from-teal-400 { --tw-gradient-from: #42A5F5 !important; }
        
        .hover\:bg-teal-50:hover { background-color: #E3F2FD !important; }
        .hover\:border-teal-600:hover { border-color: #1976D2 !important; }
        .hover\:text-teal-600:hover { color: #1976D2 !important; }
        .hover\:text-teal-400:hover { color: #42A5F5 !important; }
        
        .ring-teal-100 { --tw-ring-color: #BBDEFB !important; }
        
        .shadow-teal-500\/25 { --tw-shadow-color: rgb(33 150 243 / 0.25) !important; }
        .shadow-teal-500\/30 { --tw-shadow-color: rgb(33 150 243 / 0.3) !important; }
        .hover\:shadow-teal-500\/30:hover { --tw-shadow-color: rgb(33 150 243 / 0.3) !important; }
        
        /* Orange accent colors - keep as is */
        .bg-orange-50 { background-color: #FFF3E0 !important; }
        .bg-orange-100 { background-color: #FFE0B2 !important; }
        .bg-orange-500 { background-color: #FF9800 !important; }
        .bg-orange-600 { background-color: #F57C00 !important; }
        .text-orange-700 { color: #E65100 !important; }
        .text-orange-300 { color: #FFB74D !important; }
        .border-orange-200 { border-color: #FFCC80 !important; }
        
        /* Additional customizations */
        [data-state=open].data-\[state\=open\]\:bg-teal-50 { background-color: #E3F2FD !important; }
        [data-state=open].data-\[state\=open\]\:border-teal-200 { border-color: #BBDEFB !important; }
        [data-state=open].data-\[state\=open\]\:text-teal-600 { color: #1976D2 !important; }
      `}</style>
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}