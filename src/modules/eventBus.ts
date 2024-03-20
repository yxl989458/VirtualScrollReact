type EventMap = {
    [key: string]: (...args: unknown[]) => void;
};

export class EventBus {
    private eventMap: EventMap[] = [];

    public on<T extends keyof EventMap>(
        type: T,
        callback: EventMap[T]
    ): void {
        
        if (typeof type !== "function") {
            throw new Error("EventBus 'on' method expects a callback function.");
          }
        if (this.eventMap.some((event) => Object.prototype.hasOwnProperty.call(event, type))) {
            console.warn(`Event ${type} is already registered`);
            const index = this.eventMap.findIndex(
                (event) => Object.prototype.hasOwnProperty.call(event, type)
            );
            this.eventMap[index][type] = callback;
            return;
        }
        this.eventMap.push({ [type]: callback });
    }

    public emit<T extends keyof EventMap>(
        type: T,
        ...args: Parameters<EventMap[T]>
    ): void {
        const events = this.eventMap.filter(
            (event) => Object.prototype.hasOwnProperty.call(event, type)
        );
        if (events.length === 0) {
            throw new Error(`Event ${type} is not found`);
        }
        events.forEach((event) => event[type].apply(this, args));
    }

    public off<T extends keyof EventMap>(type: T): void {
        const index = this.eventMap.findIndex(
            (event) => Object.prototype.hasOwnProperty.call(event, type)
        );
        if (index === -1) {
            throw new Error(`Event ${type} is not found`);
        }
        this.eventMap.splice(index, 1);
    }
}

export default new EventBus();

