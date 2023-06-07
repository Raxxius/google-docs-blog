function StarLoop(colour, stars, number1, number2) {
    const starNum = number1 + Math.floor(Math.random() * number2);
    for (let star = 0; star < starNum; star++) {
        let starX = Math.floor(Math.random() * 100)
        let starY = Math.floor(Math.random() * 80)
        stars.push(starX + "vw " + starY + "vh " + colour);
    };
    return stars;
}

function StarMap() {
    let smallstars = StarGeneration("small", 200, 400);
    let medstars = StarGeneration("med", 100, 200);
    let largestars = StarGeneration("large", 10, 10);
    return (
        [smallstars, medstars, largestars]
    );
}

function StarGeneration(size, number1, number2) {
    let number3 = number1 / 4;
    let stars = [];
    let starsize = size + "stars";
    stars = StarLoop("#6e6a95", stars, number1, number2);
    stars = StarLoop("#4d4a68", stars, number3, number3);
    const starStyle = stars.join(", ");
    return (
        <div key={starsize} className={starsize} style={{ 'boxShadow': starStyle }}></div >
    )
};

function Background() {
    return (
        <div className="starmap">
            <StarMap />
        </div >
    );

}

export default Background;