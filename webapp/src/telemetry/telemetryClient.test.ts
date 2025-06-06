// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import '@testing-library/jest-dom'

import TelemetryClient from './telemetryClient'

describe('trackEvent', () => {
    const track = jest.fn()
    const page = jest.fn()
    test('should call Rudder\'s track when a RudderTelemetryHandler is attached to TelemetryClient', () => {
        TelemetryClient.setTelemetryHandler()
        TelemetryClient.trackEvent('test', 'onClick')
        TelemetryClient.pageVisited('karmaboard', 'test')
        expect(track).not.toHaveBeenCalled()
        expect(page).not.toHaveBeenCalled()

        TelemetryClient.setTelemetryHandler({trackEvent: track, pageVisited: page})
        TelemetryClient.trackEvent('test', 'onClick')
        TelemetryClient.pageVisited('karmaboard', 'test')

        expect(track).toHaveBeenCalledTimes(1)
        expect(page).toHaveBeenCalledTimes(1)
    })
})
