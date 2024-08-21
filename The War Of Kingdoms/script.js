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

    function generateProvince(typeOfGeneration)
    {
        let isItPositionBlock = true;
        if (isItPositionBlock)
        {
            if (typeOfGeneration == "top") {
                yPosition -= 100;
            }
            else if (typeOfGeneration == "top-right") {
                yPosition -= 48;
                xPosition += 92;
            }
            else if (typeOfGeneration == "top-left") {
                yPosition -= 48;
                xPosition -= 92;
            }
            else if (typeOfGeneration == "bottom") {
                yPosition += 100;
            }
            else if (typeOfGeneration == "bottom-right") {
                yPosition += 48;
                xPosition += 92;
            }
            else if (typeOfGeneration == "bottom-left") {
                yPosition += 48;
                xPosition -= 92;
            }
        }

        let isItBlockOfGeneration = true;
        if (isItBlockOfGeneration)
        {
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