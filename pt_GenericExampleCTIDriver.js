(function () {

    class GenericExampleCTIDriver {

        initialize() {
            console.log("CTI Driver: initialize()");
            return Promise.resolve(true);
        }

        bindEvents() {
            console.log("CTI Driver: bindEvents()");

            const sdk = window.Microsoft?.CCaaS?.EmbedSDK;
            if (!sdk) {
                console.error("EmbedSDK not ready");
                return;
            }

            sdk.conversation.onNewMessage(function(msg){
                console.log("🔥 NEW MESSAGE:", msg);
            });

            sdk.conversation.onStatusChange(function(evt){
                console.log("📞 STATUS CHANGE:", evt);
            });

            sdk.conversation.onCustomerSentimentChange(function(evt){
                console.log("😊 SENTIMENT:", evt);
            });
        }
    }

    // MUST expose instance globally
    window.CCaaS = window.CCaaS || {};
    window.CCaaS.CTIDriver = new GenericExampleCTIDriver();

})();
