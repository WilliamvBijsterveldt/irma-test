// const val = localStorage.getItem("wcc.988a7d97-4f85-4608-b58e-8a36b5cf7142.config")
// const cid = JSON.parse(val)

const irmaPopup = irma.newPopup({
    debugging: true,            // Enable to get helpful output in the browser console
    // element:   '#irma-web-form', // Which DOM element to render to
  
    // Back-end options
    session: {
      // Point this to your controller:
      url: 'http://kiesz-irma-test.westeurope.cloudapp.azure.com:3000',
      

      start: {
        url: o => `${o.url}/start`,
        method: 'GET',
        headers: {'x-irma-session-id': 'c593d790-0041-45ee-a48e-7970ed5703bc'}
      },
      
      mapping: {
        sessionPtr: r => r,
      },

      result: false
    }
  });
  
  irmaPopup.start()
  .then(result => wcc['988a7d97-4f85-4608-b58e-8a36b5cf7142'].setContext('IrmaAuthenticated', 'true'))
  .catch(error => console.error("Couldn't do what you asked 😢", error));