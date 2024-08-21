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

    function generateProvince(position, provinceType, objectType)
    {
        switch (position)
        {
            case "top":
                yPosition -= 100;
                break;
            case "top-right":
                yPosition -= 50;
                xPosition += 92;
                break;
            case "top-left":
                yPosition -= 50;
                xPosition -= 92;
                break;
            case "bottom":
                yPosition += 100;
                break;
            case "bottom-right":
                yPosition += 50;
                xPosition += 92;
                break;
            default:
                yPosition += 50;
                xPosition -= 92;
                break;
        }

        if (provinceType != "void")
        {
            let province = document.createElement('province');
            province.innerHTML = 
            `
                <img src="provinces/${provinceType}.png">
            `;
            province.style =
            `
            position: absolute;
            left: ${xPosition}px;
            top: ${yPosition}px;
            z-index: 1;
            `;
            document.body.append(province);
            province = null;

            if (objectType != "void")
            {
                let object = document.createElement('object');
                object.innerHTML = 
                `
                    <img src="objects/${objectType}.png">
                `;
                object.style =
                `
                position: absolute;
                left: ${xPosition}px;
                top: ${yPosition}px;
                z-index: 2;
                `;
                document.body.append(object);
                object = null;
            }
        }
    }

    for (let i = 1; i <= 11; i++)
        {
            switch (i)
            {
                case 1:
                    for (let j = 0; j < 4; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom", "Free-province", "void");
                    generateProvince("bottom", "Free-province", "tree (0)");
                    for (let j = 0; j < 6; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "Free-province", "tree (0)");
                    generateProvince("bottom", "Free-province", "void");
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 2:
                    for (let j = 0; j < 4; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    for (let j = 0; j < 4; j++) {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "Free-province", "tree (0)");
                    for (let j = 0; j < 2; j++) {
                        generateProvince("top", "Free-province", "void");
                    }
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top", "MediumSlateBlue-province", "graveyard");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top-right", "void");
                    break;
                case 3:
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    for (let j = 0; j < 10; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 4:
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    for (let j = 0; j < 5; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "Free-province", "tree (1)");
                    for (let j = 0; j < 7; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "void");
                    generateProvince("top-right", "void");
                    break;
                case 5:
                    generateProvince("bottom", "void");
                    generateProvince("bottom", "Free-province", "void");
                    generateProvince("bottom", "RoseRed-province", "farm");
                    generateProvince("bottom", "RoseRed-province", "landCapital");
                    generateProvince("bottom", "RoseRed-province", "tower (0)");
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "Free-province", "unit (0)");
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "MediumSlateBlue-province", "void");
                    generateProvince("bottom", "Free-province", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 6:
                    generateProvince("top", "void");
                    generateProvince("top", "Free-province", "void");
                    generateProvince("top", "MediumSlateBlue-province", "farm");
                    generateProvince("top", "Free-province", "tree (1)");
                    generateProvince("top", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "void");
                    generateProvince("top", "Free-province", "tree (1)");
                    generateProvince("top", "RoseRed-province", "farm");
                    generateProvince("top", "Free-province", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top-right", "void");
                    break;
                case 7:
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom", "Free-province", "void");
                    generateProvince("bottom", "RoseRed-province", "void");
                    
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "Free-province", "unit (0)");
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "MediumSlateBlue-province", "tower (0)");
                    generateProvince("bottom", "MediumSlateBlue-province", "landCapital");
                    generateProvince("bottom", "MediumSlateBlue-province", "farm");
                    generateProvince("bottom", "Free-province", "void");
                    generateProvince("bottom", "void");
                    generateProvince("bottom-right", "void");
                    break;
                case 8:    
                for (let j = 0; j < 5; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "Free-province", "tree (1)");
                    for (let j = 0; j < 7; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top-right", "void");
                    break;
                case 9:
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    for (let j = 0; j < 10; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 10:    
                    generateProvince("top", "void");
                    generateProvince("top", "RoseRed-province", "graveyard");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    generateProvince("top", "Free-province", "tree (0)");
                    for (let j = 0; j < 4; j++) 
                    {
                        generateProvince("top", "Free-province", "void");
                    }
                    for (let j = 0; j < 5; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top-right", "void");
                    break;
                case 11:    
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom", "Free-province", "void");
                    generateProvince("bottom", "Free-province", "tree (0)");
                    for (let j = 0; j < 6; j++) 
                    {
                        generateProvince("bottom", "Free-province", "void");
                    }
                    generateProvince("bottom", "Free-province", "tree (0)");
                    generateProvince("bottom", "Free-province", "void");
                    break;
            }
        }
    
    
});
//<img src="province.png">