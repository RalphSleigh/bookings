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

    const participantsList = values.participants.map(p => <li key={p.id}>{p.name}</li>);

    const fees = feeFactory(values.event).emailHTML(values.event, values);

    return renderEmail(
        <Email title={`Booking Confirmation for ${values.event.name}`}>
            <Item>
                <p> Hi {values.userName},</p>
                <p>Thanks for booking for {values.event.name}, You have
                    booked {values.participants.length} {values.participants.length === 1 ? 'person' : 'people'}:</p>
                <p>
                    <ul>{participantsList}</ul>
                </p>
                <p>You can come back and edit your booking <A href={values.editURL}>here</A>.</p>
            </Item>
            {fees}
            <Item>
                <ReactMarkdown source={values.event.paymentInfo}/>
            </Item>
            <Item>
                <p>Blue Skies</p>
                <p>Woodcraft Folk</p>
            </Item>
        </Email>
    )
}

export function subject(values) {
    return `Booking Confirmation for ${values.event.name}`
}