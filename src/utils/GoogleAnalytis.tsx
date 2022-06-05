import React from "react";

const GoogleAnalytis = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BCKCVEJ9LW"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BCKCVEJ9LW');
                `,
        }}
      />
      <div id="google_translate_element"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'ko'}, 'google_translate_element');
          }
                `,
        }}
      />

      <script
        type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      ></script>
    </>
  );
};

export default GoogleAnalytis;
