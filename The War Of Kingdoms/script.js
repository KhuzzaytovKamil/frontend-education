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

        let province = document.createElement('province');
        if (provinceType != "void")
        {
            province.innerHTML = 
            `
                <img src="provinces/${provinceType}.png">
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
        
    }

    for (let i = 0; i <= 11; i++)
        {
            switch (i)
            {
                case 1:
                    for (let j = 0; j < 4; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    for (let j = 0; j < 10; j++) 
                    {
                        generateProvince("bottom", "Free-province");
                    }
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
                    for (let j = 0; j < 7; j++) {
                        generateProvince("top", "Free-province");
                    }
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    generateProvince("top", "MediumSlateBlue-province");
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
                        generateProvince("bottom", "Free-province");
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
                    for (let j = 0; j < 13; j++) 
                    {
                        generateProvince("top", "Free-province");
                    }
                    generateProvince("top", "void");
                    generateProvince("top-right", "void");
                    break;
                case 5:
                    generateProvince("bottom", "void");
                    generateProvince("bottom", "Free-province");
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "RoseRed-province");
                    }
                    for (let j = 0; j < 7; j++) 
                    {
                        generateProvince("bottom", "Free-province");
                    }
                    generateProvince("bottom", "MediumSlateBlue-province");
                    generateProvince("bottom", "Free-province");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 6:
                    generateProvince("top", "void");
                    generateProvince("top", "Free-province");
                    generateProvince("top", "MediumSlateBlue-province");
                    generateProvince("top", "Free-province");
                    generateProvince("top", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "Free-province");
                    }
                    generateProvince("top", "void");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "Free-province");
                    }
                    generateProvince("top", "void");
                    generateProvince("top", "Free-province");
                    generateProvince("top", "RoseRed-province");
                    generateProvince("top", "Free-province");
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
                    generateProvince("bottom", "Free-province");
                    generateProvince("bottom", "RoseRed-province");
                    for (let j = 0; j < 7; j++) 
                    {
                        generateProvince("bottom", "Free-province");
                    }
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "MediumSlateBlue-province");
                    }
                    generateProvince("bottom", "Free-province");
                    generateProvince("bottom", "void");
                    generateProvince("bottom-right", "void");
                    break;
                case 8:    
                    for (let j = 0; j < 13; j++) 
                    {
                        generateProvince("top", "Free-province");
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
                        generateProvince("bottom", "Free-province");
                    }
                    for (let j = 0; j < 3; j++) 
                    {
                        generateProvince("bottom", "void");
                    }
                    generateProvince("bottom-right", "void");
                    break;
                case 10:    
                    generateProvince("top", "void");
                    generateProvince("top", "RoseRed-province");
                    for (let j = 0; j < 2; j++) 
                    {
                        generateProvince("top", "void");
                    }
                    for (let j = 0; j < 7; j++) 
                    {
                        generateProvince("top", "Free-province");
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
                    for (let j = 0; j < 10; j++) 
                    {
                        generateProvince("bottom", "Free-province");
                    }
                    break;
            }
        }
    
    
});
//<img src="province.png">