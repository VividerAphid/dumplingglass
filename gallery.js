function loadPicElements(){
    let picList = [
        {src:"img/Cabinet accent.png", width: 400, height: 400},
        {src:"img/Finished wedding gift.png", width: 400, height: 400},
        {src:"img/Half Bath Transom w_light.png", width: 400, height: 400},
        {src:"img/Half Bath Transom.png", width: 400, height: 400},
        {src:"img/Modern Transom .png", width: 400, height: 400, rotate: -90},
        {src:"img/Modern Transom in sunlight.png", width: 400, height: 400},
        {src:"img/Number piece closed door.png", width: 400, height: 400},
        {src:"img/Number piece open door and light.png", width: 400, height: 400},
        {src:"img/Number piece in progress.png", width: 400, height: 400, rotate: -90},
        {src:"img/Number piece in progress pt 2.png", width: 400, height: 400, rotate: -90},
        {src:"img/Triplets .png", width: 400, height: 400},
        {src:"img/Triplets with light.png", width: 400, height: 400},
    ];

    let errList = ["Uh oh, looks like this image walked away...", 
    "Oh no! This image fell out of its frame!", 
    "Oh dear, this image got lost on the way here...",
    "Oops, looks like this picture hasn't been taken yet!"
    ];

    let altList = ["Majestic stained glass picture",      
    ];

    //class='img-box'

    let holder = document.getElementById("picHolder");
    let imgList = [];
    
    for(let r = 0; r < picList.length; r++){
        let picc = addElement("pic"+r, "img", holder);
        picc.width = picList[r].width;
        picc.height = picList[r].height;
        picc.src = picList[r].src;
        picc.className = "img-holder";
        picc.alt = altList[0];
        if(picList[r].rotate){
            picc.style.transform = `rotate(${picList[r].rotate}deg)`;
        }
        imgList.push(picc);
    }

    return imgList;

}

function loadTileElements(tileSize, imgs){
    let holder = document.getElementById("tileHolder");
    for(let r = 0; r < imgs.length; r++){
        let can = addElement("can"+r, "canvas", holder);
        let ctx = can.getContext('2d');
        let img = document.getElementById("pic"+r);
        can.width = tileSize;
        can.height = tileSize;
        ctx.drawImage(img, 0, 0, tileSize, tileSize);
        can.className = "img-tile";
    }
}

function toggleEnlarge(){
    
}

function addElement(id, type, parent, innards){
	var child = document.createElement(type);
	child.id = id;
	parent.appendChild(child);
	child.innerHTML = innards || "";
    return child;
}