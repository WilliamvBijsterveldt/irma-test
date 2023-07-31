const irmaWeb = irma.newWeb({
    debugging: true,            // Enable to get helpful output in the browser console
    element:   '#irma-web-form', // Which DOM element to render to
  
    // Back-end options
    session: {
      // Point this to your controller:
      url: 'http://localhost:3000',
  
      start: {
        url: o => `${o.url}/start`,
        method: 'GET'
      },
      
      mapping: {
        sessionPtr: r => r,
      },

      result: false
    }
  });
  
  irmaWeb.start()
  .then(result => console.log("Successful disclosure! 🎉", result))
  .catch(error => console.error("Couldn't do what you asked 😢", error));