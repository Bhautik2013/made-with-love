import React, {useState}  from 'react'

export default function About(props) {

    const [btnDarkMode,setbtnDarkMode] = useState("Enable Dark Mode");
    const [myStyle,setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    });

    const toggleDarkMode = ()=>{
        if(myStyle.color === "black")
        {
        setmyStyle({
            color:'white',
            backgroundColor:"black",
            border:"1px solid white"
        });

        setbtnDarkMode("Enable Light Mode");
        }
        else{
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        });

        setbtnDarkMode("Enable Dark Mode");
        }
    }

  return (
    <div className={`my-3 container pb-5 ${props.mode}`}>
        <h4 className={props.colorMode==null?(props.mode==="dark"?'text-light':'text-dark'):'text-light'}>About TextUtils</h4>
        <div className={`accordion ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} id="accordionExample">
            <div className={`accordion-item ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`}>
                <h2 className="accordion-header" id="headingOne">
                <button className={`accordion-button ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className={`accordion-collapse collapse  ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree" style={myStyle}>
                <button className={`accordion-button collapsed ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className={`accordion-collapse collapse  ${props.colorMode==null?(props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'):props.colorMode.bgClass==='darkblue'?'bg-primary text-dark':'bg-dark text-light'}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>

            <button className={`btn ${props.colorMode==null?'btn-outline-success':'btn-outline-light'} my-3`} onClick={toggleDarkMode} type="submit">
            {btnDarkMode}
          </button>
    </div>
  )
}
