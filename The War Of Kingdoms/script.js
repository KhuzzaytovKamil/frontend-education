let container = document.createElement('container');
container.innerHTML = 
`
<div class="skirmishButton">
    skirmish
</div>
<div class="editorButton">
    editor
</div>
<div class="loadButton">
    load
</div>
`;
container.classList.add('container');
document.body.append(container);

let skirmishButton = document.querySelector('.skirmishButton');

skirmishButton.addEventListener('click', (event) => {
    container.remove();
    
    let xPosition = 50;
    let yPosition = 50;
    let provinces = [];

    function generateProvince(position, provinceType)
    {
        switch (position)
        {
            case "top":
                yPosition -= 100;
                break;
            case "top-right":
                yPosition -= 48;
                xPosition += 92;
                break;
            case "top-left":
                yPosition -= 48;
                xPosition -= 92;
                break;
            case "bottom":
                yPosition += 100;
                break;
            case "bottom-right":
                yPosition += 48;
                xPosition += 92;
                break;
            default:
                yPosition += 48;
                xPosition -= 92;
                break;
        }

        let province = document.createElement('province');
        province.innerHTML = 
        `
            <img src="Free-province.png">
        `;
        province.style =
        `
        position: absolute;
        left: ${xPosition}px;
        top: ${yPosition}px;
        `;
        document.body.append(province);
        province = null;
        
    }

    for (let i = 0; i < 5; i++) 
    {
        generateProvince("bottom-right");
    }

    for (let i = 0; i < 3; i++) {
        generateProvince("bottom");
    }

    
});
//<img src="province.png">