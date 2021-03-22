/* eslint-disable @typescript-eslint/camelcase */

export const systemInfo = {
    system_info: {
        version: "0.3.1",
        os: "Linux-5.10.11-v7l+-armv7l-with-debian-10.7",
        hostname: "fake-websocket",
        network: {
            wlan0: {
                mac: "dc:a6:32:55:4f:bf",
                ip: "192.168.1.124"
            },
            eth0: {
                mac: "dc:a6:32:55:4f:bd",
                ip: null
            }
        },
        python: {
            version: "3.7.3 (default, Jul 25 2020, 13:03:44) "
        },
        node: {
            version: "v15.8.0"
        },
        uptime: "up 1 week, 4 days, 1 hour, 53 minutes"
    }
}

export const settings = {
    settings: {
        wanted_temperature: 36.0,
        wanted_temperature_range: 1.0,
        brightness: 255,
        low_light: false,
        display_speed: 0.075,
        rotation: 180
    }
}

export const sensorValues = () => {
    return {
        // eslint-disable-next-line
        sensor_values: {
            temperature: 20.0 + Math.random() * 10,
            pressure: 1003.10 + Math.random() * 10,
            humidity: 20.0 + Math.random() * 50
        }
    }
}