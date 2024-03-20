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
})
