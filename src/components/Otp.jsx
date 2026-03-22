import { useState, useRef, useEffect } from "react"

export function Otp(){
    let size = 5;
    const [mfa, setMfa] = useState(new Array(size).fill(""))
    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0].focus()
    },[])

    const enterOtp = (e,index) => {
        console.log(e)
        const newOtp = [...mfa]
        newOtp[index] = e.target.value?.trim();
        setMfa(newOtp);
        if(e.target.value?.trim() && mfa.length > index+1){
            refArr.current[index+1].focus()
        }
    }

    const handleOnKeyDown = (e,index) => {
        if(!e.target.value?.trim() && e.key == "Backspace"){
            refArr.current[index-1]?.focus()
        }
        console.log(e)
    }

    return (
        <>
            {
                mfa.map((digit,index) => (
                <input type="text" 
                key={index} 
                ref = {(el) => refArr.current[index] = el}
                value={mfa[index]} 
                maxLength="1" 
                onChange={(e) => enterOtp(e,index)} style={{
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    fontSize: "18px",
                    margin: "2px"
                  }}
                onKeyDown={(e) => handleOnKeyDown(e,index)}
                />))
            }
        </>
    )
}