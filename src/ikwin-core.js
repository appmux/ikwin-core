import expect from 'ikwin-expect'
import ServiceManager from 'ikwin-service-manager'

let serviceManager

function getServiceManager() {
    if (!serviceManager) {
        serviceManager = new ServiceManager()
    }

    return serviceManager
}

function init() {
    window.ikwin = {serviceManager: getServiceManager()}
}

function ready() {
    if (window.ikwin) {
        return Promise.resolve(window.ikwin.serviceManager)
    }

    return new Promise((resolve, reject) => {
        expect(() => window.ikwin).then(() => resolve(window.ikwin.serviceManager))
    })
}

export default {
    getServiceManager,
    init,
    ready
}
