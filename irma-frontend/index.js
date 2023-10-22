// const val = localStorage.getItem("wcc.988a7d97-4f85-4608-b58e-8a36b5cf7142.config")
// const cid = JSON.parse(val)
const uuid = crypto.randomUUID();

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
        headers: {'x-irma-session-id': uuid}
      },
      
      mapping: {
        sessionPtr: r => r,
      },

      result: false
    }
  });
  
  irmaPopup.start()
  .then(result => cmwc.get('352264d4-ac74-4b1f-8311-7bd82fa8ced6').addContext({Ingelogd: "ingelogd"}), cmwc.get('352264d4-ac74-4b1f-8311-7bd82fa8ced6').addConversationVariables({IrmaAuthenticated: uuid}))
  .catch(error => console.error("Couldn't do what you asked 😢", error));