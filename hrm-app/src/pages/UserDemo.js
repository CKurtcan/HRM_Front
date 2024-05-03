function UserDemo(){
    return(
        <div className="container border border-black mt-5" style={{width: 800, height: 600}}>
            <div class="row align-items-center border border-success" style={{height: 50}}>
                <div class="column object-fit-fill border rounded" style={{width: 148, height: 50}}>
                    1
                </div>
                <div class="column border rounded" style={{width: 600, height: 50}}>
                    2
                </div>
                <div class="column border rounded" style={{width: 48, height: 50}}>
                    3
                </div>
            </div>
            <div class="row align-items-center border border-success" style={{height: 200}}>
                <div class="column border rounded" style={{width: 598, height: 200}}>
                    4
                </div>  
                <div class="column border rounded" style={{width: 198, height: 200}}>
                    <div className="row border rounded" style={{width: 198, height: 125}}>
                        <div class="col-3 border">
                            5
                        </div>
                        <div class="col-6 border">
                            6
                        </div>
                        <div class="col-3 border">
                            7
                        </div>
                    </div>
                    <div className="row border rounded" style={{width: 198, height: 75}}>
                        <div className="row border rounded" style={{width: 198, height: 35, marginLeft: 0}}>
                            8
                        </div>
                        <div className="row border rounded" style={{width: 198, height: 40, marginLeft: 0}}>
                            9
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center border border-success" style={{height: 350}}>
                <div class="column object-fit-fill border rounded" style={{width: 398, height: 350}}>
                    10
                </div>  
                <div class="column object-fit-fill border rounded" style={{width: 398, height: 350}}>
                    11
                </div>
            </div>
        </div>
    )
}

export default UserDemo;
