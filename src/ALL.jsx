import { useState } from "react"
import { useRef } from "react"
import data from "./data"
import "./section.css"
export default () => {
    const [data1, setData] = useState([])
    const inp2 = useRef(null)

    function getNamePhone() {
        console.log(inp2.current.value);
        data1.push(inp2.current.value)
    }
    // console.log(data);
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            getNamePhone()
            // console.log("Hello");
        }
    })
    return (
        <div className="container">
            {/* <div className="left">
                <a href="/">Cetegory</a><br /><br />
                <input type="search" placeholder="Add Category" />
                <div className="all">
                    <div className="first-c"></div>
                    <a href="/all">All</a>
                </div>
                <div className="all">
                    <div className="second-c"></div>
                    <a href="/groceries">Groceries</a>
                </div>
                <div className="all">
                    <div className="third-c"></div>
                    <a href="/college">College</a>
                </div>
                <div className="all">
                    <div className="fourth-c"></div>
                    <a href="/payments">Payments</a>
                </div>
            </div> */}


            <div className="right">
                <h1>All Tasks</h1>
                <div className="div">
                    <input ref={inp2} type="search" placeholder="Add a new task insdie ‘All’ category" /><br />
                    <button onClick={getNamePhone}>Click</button>
                </div>
                {data.map(item => {
                    console.log(data);
                    console.log(item.name);
                    <div className="all">
                        <input id="inp2" type="checkbox" className="inp2" />
                        <h2>{item.name}</h2>
                        <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                    </div>
                })}




                {/* <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Purchase Milk & Corn Flakes</h2>
                    <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Pay mortgage</h2>
                    <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Complete Assignments</h2>
                    <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Replace laptop's screen</h2>
                    <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                </div> */}
            </div>
        </div>
    )
}