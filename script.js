const block = document.getElementById('bruh')
const massphone = ['img/imgvalue.png','img/imgvalue2.png','img/imgvalue3.png']


function imgDetected(blockdetected,massphonevalue){
    blockdetected.attributes[2].value = massphonevalue[1]
    console.log(blockdetected)
}

imgDetected(block,massphone)

let delay = 5000;
let currentIndex = 0;
setInterval(function() {
    const block = document.getElementById('bruh')
    const massphone = ['img/imgvalue.png','img/imgvalue2.png','img/imgvalue3.png']
    block.src = massphone[currentIndex];
    currentIndex++;
    if(currentIndex >= massphone.length) {
        currentIndex = 0;
    }
}, delay);

function colorimg(color){
    let greenmass = ['img/1g.png','img/2g.png','img/3g.png','img/4g.png','img/5g.png','img/6g.png']
    let bluemass = ['img/1b.png','img/2b.png','img/3b.png','img/4b.png','img/5b.png','img/6b.png']
    let pinkmass = ['img/1p.png','img/2p.png','img/3p.png','img/4p.png','img/5p.png','img/6p.png']
    let whitemass = ['img/1w.png','img/2w.png','img/3w.png','img/4w.png','img/5w.png','img/6w.png']

    let rainbowBlock1 = document.getElementById('1f')
    let rainbowBlock2 = document.getElementById('2f')
    let rainbowBlock3 = document.getElementById('3f')
    let rainbowBlock4 = document.getElementById('4f')
    let rainbowBlock5 = document.getElementById('5f')
    let rainbowBlock6 = document.getElementById('6f')
    
    if(color == 'green'){
        rainbowBlock1.attributes[1].value = greenmass[0]
        rainbowBlock2.attributes[1].value = greenmass[1]
        rainbowBlock3.attributes[1].value = greenmass[2]
        rainbowBlock4.attributes[1].value = greenmass[3]
        rainbowBlock5.attributes[1].value = greenmass[4]
        rainbowBlock6.attributes[1].value = greenmass[5]
    }
    if(color == 'pink'){
        rainbowBlock1.attributes[1].value = pinkmass[0]
        rainbowBlock2.attributes[1].value = pinkmass[1]
        rainbowBlock3.attributes[1].value = pinkmass[2]
        rainbowBlock4.attributes[1].value = pinkmass[3]
        rainbowBlock5.attributes[1].value = pinkmass[4]
        rainbowBlock6.attributes[1].value = pinkmass[5]
    }
    if(color == 'blue'){
        rainbowBlock1.attributes[1].value = bluemass[0]
        rainbowBlock2.attributes[1].value = bluemass[1]
        rainbowBlock3.attributes[1].value = bluemass[2]
        rainbowBlock4.attributes[1].value = bluemass[3]
        rainbowBlock5.attributes[1].value = bluemass[4]
        rainbowBlock6.attributes[1].value = bluemass[5]
    }
    if(color == 'white'){
        rainbowBlock1.attributes[1].value = whitemass[0]
        rainbowBlock2.attributes[1].value = whitemass[1]
        rainbowBlock3.attributes[1].value = whitemass[2]
        rainbowBlock4.attributes[1].value = whitemass[3]
        rainbowBlock5.attributes[1].value = whitemass[4]
        rainbowBlock6.attributes[1].value = whitemass[5]
    }
}

