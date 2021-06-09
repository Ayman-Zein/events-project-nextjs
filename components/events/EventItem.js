import React from 'react';
import Image from 'next/image'
import classes from './event-item.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem({ event }) {
    const { image, title, date, location, id } = event;
    const formattedDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <Image src={'/' + image} alt={event.title} width={250} height={160} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>

                    <Button link={exploreLink}><span>Explore Event</span><span className={classes.icon}><ArrowRightIcon /></span></Button>
                </div>
            </div>

        </li>
    )
}

export default EventItem
