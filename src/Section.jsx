import "./section.css"
import { Routes, Route } from 'react-router'
import ALL from "./ALL"
import Groceries from "./Groceries"
import College from "./College"
import Payments from "./Payments"
export default () => {
    return (
        <>
            <Routes>
                <Route path="/all" element={<ALL />}></Route>
                <Route path="/groceries" element={<Groceries />}></Route>
                <Route path="/college" element={<College />}></Route>
                <Route path="/payments" element={<Payments />}></Route>
            </Routes>
            <div className="container">
                <div className="left">
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
                </div>
                <div className="right">
                    <h1>Choose what you need</h1>
                    <input type="search" placeholder="Add a new task insdie ‘All’ category" /><br />
                </div>
            </div>
        </>
    )
}