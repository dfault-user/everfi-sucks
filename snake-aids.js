// ==UserScript==
// @name        everfi-sucks
// @description i hate this and so do you, why not make it easier?
// @match       *://platform.everfi.net/curriculum/*
// @grant       GM_addStyle
// @version     0.5-dev
// ==/UserScript==

// accelerate button,m this calls the buttonclickaction function
var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'accelerate</button>'
                ;
zNode.setAttribute ('id', 'myContainer', 'class', 'row');
document.body.appendChild (zNode);
//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

// next chapter button
var chNext = document.createElement('div');
chNext.innerHTML = '<button id="chapButt" type="button">'
                + 'next chapter</button>'
                ;
chNext.setAttribute ('id', 'chapCont', 'class', 'row');
document.body.appendChild (chNext);

// next page button
var pgNext = document.createElement('div');
pgNext.innerHTML = '<button id="pgButt" type="button">'
                + 'next page</button>'
                ;
pgNext.setAttribute ('id', 'pgCont', 'class', 'row');
document.body.appendChild (pgNext);

// function for accelerate button
function ButtonClickAction (zEvent) {
    var buttonAmount = document.querySelectorAll("button.button");
    for(let i=0;i<buttonAmount.length;i++){
        document.getElementsByClassName("button")[i].removeAttribute("disabled");
    }
    //! THIS IS VERY BUGGY BUT I'M INCLUDING IT ANYWAY -------------------------------------------------
    // force active dialog options to be always visible, i hate this delay
    if(document.getElementsByClassName("dialogue-response active")!=null){
        var dialOpts = document.getElementsByClassName("dialogue-response active");
        for(let j=0;j<dialOpts.length;j++){
            document.getElementsByClassName("dialogue-response active")[j].removeAttribute('style');
            document.getElementsByClassName("dialogue-response active")[j].style.visbility = 'visible';
            document.getElementsByClassName("dialogue-response active")[j].style.opacity = 'initial';
            document.getElementsByClassName("dialogue-response active")[j].style.display = 'block';
        }
    }
    // force dialog message to be shown
    if(document.getElementsByClassName("dialog dialogue-prompt")!=null){
       var dialogMsg = document.getElementsByClassName("dialog dialogue-prompt");
       for(let msg=0;msg<dialogMsg.length;msg++){
            document.getElementsByClassName("dialog dialogue-prompt")[msg].removeAttribute('style');
            document.getElementsByClassName("dialog dialogue-prompt")[msg].style.visbility = 'visible';
            document.getElementsByClassName("dialog dialogue-prompt")[msg].style.opacity = 'initial';
            document.getElementsByClassName("dialog dialogue-prompt")[msg].style.display = 'block';
       }
    }
    //! ------------------------------------------------------------------------------------------------
    // enable dialog buttons
    var dialogButtons = document.querySelectorAll("button.dialogue-button");
    for(let o=0;o<dialogButtons.length;o++){
        document.getElementsByClassName("dialogue-button")[o].removeAttribute("disabled");
    }
}



document.onmousedown=disableclick;
function disableclick(event)
{
if(event.button==2)
  {
      return false;
  }
}

//--- Style our newly added elements using CSS.
GM_addStyle ( `
    #myContainer, #chapCont, #pgCont {
            position: fixed;
    top: 0;
    left: 0;
    font-size: 20px;
    margin: 0px;
    opacity: 0.9;
    z-index: 1100;
    width: 100%;
    text-align: center;
    }
    #chapCont {
    top: 37px;
    width:50%;
    right:0;
    left:unset;
    }
    #pgCont {
    top: 37px;
    width:50%;
    right:unset;
    left:0;
    }
    #myButton, #chapButt, #pgButt {
        cursor:                 pointer;
        background:none;
        color:white;
        border:none;
        padding:                5px 20px;
        background:             black;
        border:                 3px solid white;
        -webkit-box-shadow: 0px 0px 50px -12px #000000;
        box-shadow: 0px 0px 50px -12px #000000;
        font-family: Helvetica Neue, monospace;
        width:100%;
    }
    #chapButt {
    border-left: 1.5px solid white;
    }
    #pgButt {
    border-right: 1.5px solid white;
    }
    /* span / a buttons */
#site-container .disabled, #site-container [disabled=disabled] {
    cursor: initial!important;
    pointer-events: initial!important;
    opacity: unset!important;
}
#site-container .navigate-links a.forward-link {
    background-color: #ea472c !important;
    color: #fff !important;
}
#site-container .hide-until-page-complete {
display:block!important;
opacity:unset!important;
pointer-events:unset!important;
visibility: visible!important;
}
/*#site-container .horizontal-scroll-layout>.region>.block-list div {
overflow:hidden;
}*/
#site-container .horizontal-scroll-layout>.region>.block-list button{
    bottom: 75px !important;
    left: 0 !important;
    right: unset !important;
    z-index: 5000 !important;
    max-width:32% !important;
    width:100% !important;
}
` );
