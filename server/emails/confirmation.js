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
import feeFactory    from '../../shared/fee/feeFactory.ts'
import paymentReference from "../../shared/paymentReference";

export function html(values) {

    const participantsList = values.participants.map(p => <li key={p.id}>{p.name}</li>);

    const fees = feeFactory(values.event).emailHTML(values.event, values)

    let button = '';

    const payRef = paymentReference(values.id);

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
                <p>Blue Skies and Friendship,</p>
                <p>Woodcraft Folk</p>
            </Item>
            <Item>
                <p>THIS IS YOUR INVOICE</p>

                <p>DATE OF ISSUE: {new Date().toDateString()}</p>
                Detail of product:

            </Item>
            {fees}
            <Item>
                <ReactMarkdown source={values.event.paymentInfo.replace(/(%%%%)/g, paymentReference(payRef))}/>
            </Item>


        </Email>
    )
}

export function subject(values) {
    return `Booking Confirmation for ${values.event.name}`
}