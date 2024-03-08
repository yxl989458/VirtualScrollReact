type events = Record<string, (...arg: unknown[]) => void>
type type = keyof events
interface EventBusType {
    events: events[];
    emit: (type: type, ...arg: unknown[]) => void;
    on: (type: type, callback: (...arg: unknown[]) => void) => void;
    off: (type: type, callback: (...arg: unknown[]) => void) => void;
}

class EventBus implements EventBusType {
    events: events[] = [];
    on(type: type, callBack: (...args: unknown[]) => void) {

        if (this.events.some((event) => Object.keys(event).includes(type))) {
            console.warn("event already registered for " + type);
            const index = this.events.findIndex((event) => Object.keys(event).includes(type))
            this.events[index][type] = callBack
            return
        }
        this.events.push({ [type]: callBack });
    }
    emit(type: string, ...arg: unknown[]) {
        if (this.events.some((event) => Object.keys(event).includes(type))) {
            this.events.filter((event) => Object.keys(event).includes(type))
                .forEach((event) => event[type].apply(this, arg));
            return
        }
        throw new Error(`Event ${type} not found`)

    }
    off(type: string) {
        if (this.events.some((event) => Object.keys(event).includes(type))) {
            this.events = this.events.filter((event) => !Object.keys(event).includes(type))
            return
        }
        throw new Error(`Event ${type} not found`)
    }
}


export default new EventBus();

