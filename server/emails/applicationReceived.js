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

export function html(values) {

    return renderEmail(
        <Email title={`Booking Confirmation for ${values.name}`}>
            <Item>
                <p> Hi {values.user.userName}</p>
                <p>Thanks for applying to book for {values.name}. One of our team will check you application as soon as
                    possible and you will recieve another e-mail as soon as you are approved to book in.</p>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `Application Confirmation for ${values.name}`
}