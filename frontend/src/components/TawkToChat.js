import React, { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/YOUR_WIDGET_ID';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default TawkToChat;
