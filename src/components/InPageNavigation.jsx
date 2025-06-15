import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


function InPageNavigation({ teams, children }) {
    const [index, setIndex] = useState(0)
    let tabLineRef = useRef()
    let btnRef = useRef()

    function toggleBtn(btn, i) {
        let { offsetWidth, offsetLeft } = btn
        tabLineRef.current.style.width = offsetWidth + 'px'
        tabLineRef.current.style.left = offsetLeft + 'px'
        setIndex(i)
    }
    useEffect(() => {
        toggleBtn(btnRef.current, 0)
        
    }, [])
    return (
        <>
            <div>
                {
                    teams.length > 2 ? teams.map(({ path, title }, i) => (
                        <Link to={path}>
                            <button ref={i == 0 ? btnRef : null} className={"bg-gray-200 mr-1 px-10 " + (index == i ? "text-black" : "text-gray-400")} onClick={(e) => (
                                toggleBtn(e.target, i)
                            )
                            }>{title}</button>
                        </Link>



                    )) : teams.map((data, i) => (
                        <button ref={i == 0 ? btnRef : null} className={"bg-gray-200 mr-1 px-10 " + (index == i ? "text-black" : "text-gray-400")} onClick={(e) => (
                            toggleBtn(e.target, i)
                        )
                        }>{data}</button>
                    ))
                }
                <hr ref={tabLineRef} className='border-black absolute duration-700' />
            </div>

            {teams.length > 2 ? "" : children[index]}
        </>
    )
}

export default InPageNavigation
