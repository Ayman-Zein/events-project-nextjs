export async function getAllEvents() {
    const response = await fetch('https://ecommerce-71396.firebaseio.com/events.json');
    const data = await response.json();

    //console.log('data', data)
    //const events = Object.entries(data).map(item => ({ [item[0]]: item[1] }));
    //console.log('events', events);
    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}