import "./section.css"
export default () => {
    return (
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
                <h1>Groceries Tasks</h1>
                <input type="search" placeholder="Add a new task insdie ‘All’ category" /><br />
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Get a new helmet</h2>
                    <span><p>Uncategorized </p><i><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
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
                    <h2>Replace laptop’s screen</h2>
                    <span><p>Uncategorized </p><i className="del"><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
            </div>
        </div>
    )
}