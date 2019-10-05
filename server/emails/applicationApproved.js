import {
    Email,
    Box,
    Item,
    Span,
    A,
    renderEmail
}                    from 'react-html-email'
import React         from 'react'
import ReactMarkdown from 'react-markdown'
import feeFactory    from '../../shared/fee/feeFactory.js'

const config = require('../../config');

export function html(values) {

    let button = '';

    switch(values.user.remoteId.substr(0,4)) {
        case 'goog':
            button = 'Google';
            break;
        case 'face':
            button = 'Facebook';
            break;
        case 'micr':
            button = 'Microsoft';
            break;
        case 'yaho':
            button = 'Yahoo';
            break;
    }

    return renderEmail(
        <Email title={`Application Approved for ${values.event.name}`}>
            <Item>
                <p> Hi {values.user.userName},</p>
                <p>You have been approved to book into Common Ground. We are so excited to have you join us! Please now complete your booking here:</p>
                <p><A href={config.BASE_PATH}>{config.BASE_PATH}</A></p>
                <p><b>Remember: booking and paying a deposit before 1st December 2019 will mean an Early Bird discount of £5 per person.</b></p>
            </Item>
            <Item>
                <p>Blue Skies and Friendship,</p>
                <p>Woodcraft Folk</p>
            </Item>
            <Item>
                <small>When logging in again make sure to log in as {values.user.email} using the {button} button</small>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `Application Approved for ${values.event.name}`
}