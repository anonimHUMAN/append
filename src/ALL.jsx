import "./section.css"
export default () => {
    let inp1Value = ""
    function getInp1(e) {
        inp1Value = e
        console.log(e.target.value);
    }
    function createH1(a){
        return (
            <h1>{a}</h1>
        )
    }
    console.log(createH1("salom"));
    createH1("salom")
    // console.log(inp1Value);
    function del() {
        console.log("Salom");
        // console.log(h1);
    }
    // let div = document.createElement("div")
    // let h1 = document.getElementById("inp2")
    // let h2 = document.querySelector("#inp2")
    // console.log(h1);
    // console.log(h2);
    // div.append("Какой-то текст")
    // console.log(div.innerHTML)
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
                <h1>All Tasks</h1>
                <input onChange={getInp1} type="search" placeholder="Add a new task insdie ‘All’ category" /><br />
                <div className="all">
                    <input id="inp2" type="checkbox" className="inp2" />
                    <h2>Get a new helmet</h2>
                    <span><p>Uncategorized </p><i onClick={del}><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Purchase Milk & Corn Flakes</h2>
                    <span><p>Uncategorized </p><i onClick={del}><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Pay mortgage</h2>
                    <span><p>Uncategorized </p><i onClick={del}><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Complete Assignments</h2>
                    <span><p>Uncategorized </p><i onClick={del}><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
                <div className="all">
                    <input type="checkbox" className="inp2" />
                    <h2>Replace laptop's screen</h2>
                    <span><p>Uncategorized </p><i onClick={del}><ion-icon name="trash-outline"></ion-icon></i></span>
                </div>
            </div>
        </div>
    )
}