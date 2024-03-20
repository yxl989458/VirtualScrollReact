import eventBus from "@modules/eventBus";
import { describe, expect, it } from "vitest";

describe("eventBusDescribe", () => {
  it("eventBus", () => {
    eventBus.on("submit4", (...arg: unknown[]) => {
      expect(arg).toMatchInlineSnapshot(`
        [
          1,
          2,
          3,
          4,
        ]
      `)
    })
    eventBus.on("submit4", (...arg: unknown[]) => {
      console.log(arg);
      expect(arg).toMatchInlineSnapshot(`
            [
              1,
              2,
              3,
              4,
            ]
          `)

    })
    eventBus.emit('submit4', 1, 2, 3, 4)

  });
  it('off clear all', () => {
    const events = eventBus.off()
    expect(Object.getOwnPropertyNames(events.events).length).toBe(0)
  })
  //移除特定的回调函数
  it('off clear one event callback', () => {
    const callBackFn = (...arg: unknown[]) => {
      console.log("submit5 callback", arg);
    }
    const callBackFn1 = (...arg: unknown[]) => {
      console.log("submit5 callback", arg);
    }
    eventBus.on('submit5', callBackFn)
    eventBus.on('submit5', callBackFn1)
    const events = eventBus.off('submit5', callBackFn)
    expect(events.events['submit5'].length).toBe(1)
  })
  it('one callback', () => {
    let i = 0
    const callBackFn = () => {
      i++
    }
    eventBus.once('submit6', callBackFn)
    eventBus.emit('submit6', 1, 2, 3, 4)
    eventBus.emit('submit6', 1, 2, 3, 4)
    eventBus.emit('submit6', 1, 2, 3, 4)
    eventBus.emit('submit6', 1, 2, 3, 4)
    eventBus.emit('submit6', 1, 2, 3, 4)
    expect(i).toBe(1)
  })
})
