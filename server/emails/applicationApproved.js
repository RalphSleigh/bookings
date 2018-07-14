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

    return renderEmail(
        <Email title={`Application Approved for ${values.event.name}`}>
            <Item>
                <p> Hi {values.user.userName}</p>
                <p>You have been approved to book into {values.event.name} and can do so at any time here:</p>
                <p><A href={config.BASE_PATH}>{config.BASE_PATH}</A></p>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `Application Approved for ${values.event.name}`
}