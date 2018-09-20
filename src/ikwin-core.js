import expect from 'ikwin-expect'
import ServiceManager from 'ikwin-service-manager'

window.ikwin = window.ikwin || {ready: false}

function getServiceManager() {
    if (!window.ikwin.serviceManager) {
      window.ikwin.serviceManager = new ServiceManager()
    }

    return window.ikwin.serviceManager
}

function init() {
    window.ikwin.ready = true
}

function ready() {
    if (window.ikwin.ready) {
        return Promise.resolve(window.ikwin.serviceManager)
    }

    return new Promise((resolve, reject) => {
        expect(() => window.ikwin.ready).then(() => resolve(window.ikwin.serviceManager))
    })
}

export default {
    getServiceManager,
    init,
    ready
}
