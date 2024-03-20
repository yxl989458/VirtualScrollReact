export class EventBus {
    private events: Record<string, ((...arg: unknown[]) => void)[]> = {};

    public on(eventName: string, callback: (...arg: unknown[]) => void): this {
        if (typeof callback !== "function") {
            throw new Error("EventBus 'on' method expects a callback function.");
        }

        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return this;
    }

    public emit(eventName: string, ...args: unknown[]): this {
        const callbacks = this.events[eventName];
        if (callbacks) {
            callbacks.forEach((callback) => callback(...args));
        }

        return this;
    }

    public off(event?: string | string[], callback?: (...arg: unknown[]) => void): this {
        // 清空所有事件监听器
        if (!event || (Array.isArray(event) && !event.length)) {
            this.events = {};
            return this;
        }

        // 处理事件数组
        if (Array.isArray(event)) {
            event.forEach((e) => this.off(e, callback));
            return this;
        }

        // 如果没有提供回调函数，则删除该事件的所有监听器
        if (!callback) {
            delete this.events[event];
            return this;
        }

        // 移除特定的回调函数
        const callbacks = this.events[event];
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }

        return this;
    }

    public once(eventName: string, callback: (...arg: unknown[]) => void): this {
        const onceWrapper = (...args: unknown[]) => {
            this.off(eventName, onceWrapper);
            callback(...args);
        };

        this.on(eventName, onceWrapper);

        return this;
    }
}

export default new EventBus();
