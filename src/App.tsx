import React, { useState } from "react"



function App() {
  const [dataTotal] = useState(1000000)
  const itemHeight = 28
  const itemoffset = 8
  const containerHeight = 400
  const [showDataNumber] = useState(Math.round(containerHeight / (itemHeight + itemoffset)))
  const offsetTotal = (showDataNumber * itemoffset) 
  const [list] = useState(Array.from({ length: dataTotal }, (_, index) => index + 1))
  const [showData, setShowData] = useState(list.slice(0, showDataNumber))

  const onScrollContainer = (e: React.UIEvent<HTMLDivElement>) => {
    //虚拟列表
    const scrollTop = e.currentTarget.scrollTop
    const start = Math.round(scrollTop / itemHeight)
    const end = Math.round(start + containerHeight / itemHeight)
    const newShowData = list.slice(start, end + 1)
    setShowData(newShowData)
  }
  // function onchangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  //   const value = Number(e.target.value)
  //   setDataTotal(value)
  // }
  return (
    <>
      <div className="mb-10">
        <div>数据总数: {dataTotal}</div>
        <div></div>
      </div>
      <div style={{ height: containerHeight }} className="w-[500px]  overflow-hidden   relative   gap-2 flex flex-col" >
        <div className="  w-[500px]  absolute left-0 right-4   overflow-auto" onScroll={onScrollContainer} style={{ zIndex: 100, height: containerHeight }}>
          <div
            className="w-full"
            style={{ height: list.length * itemHeight + offsetTotal }}
          ></div>
        </div>
        <div className="absolute left-0 right-4">
          {
            showData.map(item => <div style={{ height: itemHeight, marginBottom: itemoffset }} className=" rounded-md    bg-yellow-600 text-teal-200 text-center shadow-md shadow-yellow-600" key={item}>{item}</div>)
          }
        </div>
      </div>
    </>
  )
}

export default App
