const irmaPopup = irma.newPopup({
    debugging: true,            // Enable to get helpful output in the browser console
    // element:   '#irma-web-form', // Which DOM element to render to
  
    // Back-end options
    session: {
      // Point this to your controller:
      url: 'http://localhost:3000',
      
  
      start: {
        url: o => `${o.url}/start`,
        method: 'GET',
        headers: {'x-irma-session-id': crypto.randomUUID()},
      },
      
      mapping: {
        sessionPtr: r => r,
      },

      result: false
    }
  });
  
  irmaPopup.start()
  .then(result => console.log("Successful disclosure! 🎉", result))
  .catch(error => console.error("Couldn't do what you asked 😢", error));