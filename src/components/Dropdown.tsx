import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
    const [show, setShow] = useState(false)
    const parent = useRef(null)
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = () => setShow(!show)

    return <div ref={parent}>
        <strong onClick={reveal}>Click me to open!</strong>
        {show && <p  >Lorum ipsum...</p>}
    </div>
}

export default Dropdown
