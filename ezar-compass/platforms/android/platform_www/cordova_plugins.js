cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device-orientation.CompassError",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "id": "cordova-plugin-device-orientation.compass",
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.videoOverlay",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/videoOverlay.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "com.ezartech.ezar.videooverlay.camera",
        "file": "plugins/com.ezartech.ezar.videooverlay/www/camera.js",
        "pluginId": "com.ezartech.ezar.videooverlay",
        "clobbers": [
            "camera"
        ]
    },
    {
        "id": "com.ezartech.ezar.snapshot.snapshot",
        "file": "plugins/com.ezartech.ezar.snapshot/www/snapshot.js",
        "pluginId": "com.ezartech.ezar.snapshot",
        "merges": [
            "ezar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-device-orientation": "1.0.7",
    "com.ezartech.ezar.videooverlay": "0.2.11",
    "com.ezartech.ezar.snapshot": "0.2.7"
};
// BOTTOM OF METADATA
});