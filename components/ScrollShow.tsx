import { useEffect, useRef, useState } from "react"

export default function ScrollShow(props: { children: React.ReactNode}) {
    const io = useRef<IntersectionObserver | null>(null)
    const element = useRef<any>()
    const [show, setShow] = useState(true)
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        if(!element.current) return

        // Remove IntersectionObservers running for no good reason
        if(io.current) io.current.disconnect()

        io.current = new IntersectionObserver((intersections) => {
            if(animated) return
            setShow(intersections[0].isIntersecting)
            if(intersections[0].isIntersecting) {
                setAnimated(true)
            }
        }, {
            threshold: 0.8
        })

        io.current.observe(element.current)

        return () => {
            io.current ? io.current.disconnect() : null
        }
    })

    return (<div style={{
        margin: "0",
        padding: "0"
    }} ref={element}>
        <div style={{
            transform: show ? "translateX(0)" : "translateX(-150%)",
            opacity: show ? "1" : "0",
            filter: show ? "blur(0)" : "blur(50px)",
            transition: show ? "all 1s" : ""
        }}>
            {props.children}
        </div>
    </div>)
}
