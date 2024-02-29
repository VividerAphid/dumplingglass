function loadPics(){
    let picList = [
        {src:"img/Cabinet accent.png", width: 400, height: 400},
        {src:"img/Finished wedding gift.png", width: 400, height: 400},
        {src:"img/Half Bath Transom w_light.png", width: 400, height: 400},
        {src:"img/Half Bath Transom.png", width: 400, height: 400},
        {src:"img/Modern Transom .png", width: 400, height: 400},
        {src:"img/Modern Transom in sunlight.png", width: 400, height: 400},
        {src:"img/Number piece closed door.png", width: 400, height: 400},
        {src:"img/Number piece open door and light.png", width: 400, height: 400},
        {src:"img/Number piece in progress.png", width: 400, height: 400},
        {src:"img/Number piece in progress pt 2.png", width: 400, height: 400},
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
    
    for(let r = 0; r < picList.length; r++){
        let picDiv = addElement("picDiv"+r, "div", holder);
        let picc = addElement("pic"+r, "img", picDiv);
        picc.width = picList[r].width;
        picc.height = picList[r].height;
        picc.src = picList[r].src;
        picDiv.className = "img-box";
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