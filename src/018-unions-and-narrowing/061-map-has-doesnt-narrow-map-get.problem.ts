type Event = {
    message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
    const err = eventMap.get("error");
    if (err) {
        const message = err.message;

        throw new Error(message);
    }
};
