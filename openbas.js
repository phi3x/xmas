///<reference path="../workadventure/front/src/iframe_api.ts" />
/**
 * 
 * @param {{
 *    zone:string,
 *    message:string,
 *    onActivate:()=>void
 * }} options 
 */
function activationInZone(options) {
    let messageObj;
    WA.onEnterZone(options.zone, () => {
        messageObj = WA.triggerMessage(options.message, options.onActivate)
    })

    WA.onLeaveZone(options.zone, () => {
        if(messageObj) {
            WA.removeTriggerMessage(messageObj)
            messageObj = undefined
        }
    })
}



activationInZone({
    zone: "timestamp",
    message: "press 'space' to record time",
    onActivate: () => {
        const parts = [["https", 'sapserver-master'].join('://'), 'abnahme', "brandad", "de"]
        WA.openCoWebSite(parts.join("."))
    }
})