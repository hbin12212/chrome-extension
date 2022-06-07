const intervalForBackgroundChange = setInterval(() => {
    const isBodyLoaded = !!document.body;
    if (isBodyLoaded) {
        clearInterval(intervalForBackgroundChange);
        // document.body.style.backgroundColor = "white";
        document.body.insertAdjacentHTML(
            "afterbegin",
            ` <div
        style="
            width: 70px;
            height: 70px;
            border-radius: 60%;
            color: white;
            background-color: #4285f4;
            position: fixed;
            right: 50px;
            top: 150px;
            cursor:pointer;
            z-index: 9999;
            display:flex;
            align-items:center;
            justify-content:center;
            -webkit-box-shadow: 4px 4px 10px 0px rgba(118,118,118,0.65); 
box-shadow: 4px 4px 10px 0px rgba(118,118,118,0.65);
        "
    >
        <div style="font-size:18px;">프밍</div>
    </div>`
        );
    }
}, 10);
