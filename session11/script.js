function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('gif01'));
dragElement(document.getElementById('gif02'));
dragElement(document.getElementById('gif03'));
dragElement(document.getElementById('gif04'));
dragElement(document.getElementById('gif05'));
dragElement(document.getElementById('gif06'));
dragElement(document.getElementById('gif07'));
dragElement(document.getElementById('gif08'));
dragElement(document.getElementById('gif09'));
dragElement(document.getElementById('gif10'));
dragElement(document.getElementById('gif11'));
dragElement(document.getElementById('gif12'));
dragElement(document.getElementById('gif13'));
dragElement(document.getElementById('gif14'));