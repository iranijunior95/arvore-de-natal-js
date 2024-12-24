(function() {
    const $arvore = document.querySelector('.arvore');
    const $tronco = document.querySelector('.tronco');

    const leafColor = ['sheet-green', 'sheet-red', 'sheet-blue'];

    function drawTree(posicion) {
        let sheet = ``;
        let color = `<div class="${leafColor[posicion]}"></div>`;

        for (let index = 1; index < 15; index++) {
            sheet += `<span>${color.repeat(index * 2 - 1)}</span>`;
        }

        $arvore.innerHTML = sheet;
    }

    function drawTrunk() {
        const test = '<div class="stem"></div>';
        let stem = ``;

        for (let index = 0; index < 7; index++) {
            stem += `<span>${test.repeat(5)}</span>`;
        }

        $tronco.innerHTML = stem;
    }

    function draw() {
        let count = 0;
        drawTree(count);
        drawTrunk();
        
        setInterval(function() {
            count++;
            count == 3 ? count = 0 : null;

            drawTree(count);
        }, 5000);
    }

    draw();
}());