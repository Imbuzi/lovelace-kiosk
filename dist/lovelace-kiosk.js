function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if (findGetParameter("kiosk") != null) {
    setTimeout(function () {
        try {
            const home_assistant_main =  document
                  .querySelector("body > home-assistant").shadowRoot
                  .querySelector("home-assistant-main");
            
            const header = home_assistant_main.shadowRoot
                  .querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot
                  .querySelector("hui-root").shadowRoot
                  .querySelector("#layout > app-header > app-toolbar")
                  .style.display = "none";
            
            const drawer = home_assistant_main.shadowRoot
                  .querySelector("#drawer")
                  .style.display = 'none';
            
            home_assistant_main.style.setProperty("--app-drawer-width", 0);
            home_assistant_main.shadowRoot
                .querySelector("#drawer > ha-sidebar").shadowRoot
                .querySelector("div.menu > ha-icon-button")
                .click();
            window.dispatchEvent(new Event('resize'));
        }
        catch (e) {
            console.log(e);
        }
    }, 200);
}
