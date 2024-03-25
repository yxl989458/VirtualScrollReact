import { describe, it, expect } from "vitest";

describe("test", () => {
  it("test", () => {
   
    let isRead = true
    while(isRead){
        console.log("test")
    }
    setTimeout(()=>{
      isRead=false
    },1000)
  })
})
