// eslint-disable-next-line no-unused-vars
const Config = {
    alerting: {
        fetchBroadcastUrl: "../resources/newsFeedPortalAlerts.json"
    },
    namedProjections: [
       // ETRS89 UTM  -- 25833 hinzugfuegt      
      ["EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=WGS84 +towgs84=0,0,0,0,0,0,1 +units=m +no_defs"],
      // Soldner Berlin --hinzugefuegt
      ["EPSG:3068", "+title=Soldner Berlin +proj=cass +lat_0=52.41864827777778 +lon_0=13.62720366666667 +x_0=40000 +y_0=10000 +ellps=bessel +datum=potsdam +units=m +no_defs"],
      ["EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"],
	  ["EPSG:3006", "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +title=SWEREF99 TM"],
    ],
    tree: {
        "isFolderSelectable": true
    },
    layerConf: "../resources/services-internet.json",
    restConf: "../resources/rest-services-internet.json",
    styleConf: "../resources/style_v3.json",
    wfsImgPath: "../resources/img/",
    portalLanguage: {
        enabled: true,
        debug: false,
        languages: {
            de: "Deutsch",
            en: "English"
        },
        fallbackLanguage: "de",
        changeLanguageOnStartWhen: ["querystring", "localStorage", "htmlTag"]
    }
};
