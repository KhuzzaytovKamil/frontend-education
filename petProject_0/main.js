let horizontalSize = 21;
let verticalSize = 101;

let noobVerticalLayer = 1;
let noobHorizontalLayer = 11;

let constVerticalIndent = 150;
let horizontalIndent = 64;
let horizontalStartIndentForNoob = 64 * noobHorizontalLayer;
let verticalIndent = 64;

let namesOfBlockSprite = ["grass", "dirt", "stone", "coal", "iron", "gold", "diamond", "emerald"];

let noob;
let noobX = 0;
let noobY = 0;

let blocks = [];
let thisBlock;
let horizontalScreenType = "more, than 1399";

let moveUp;
let moveDown;
let moveLeft;
let moveRight;

let resources = [0, 0, 0, 0, 0, 0, 0, 0];
let textsOfResources = [];
let arrayOfBlockTypes = [];
let lineOfArrayOfBlockTypes = [];

function FrequencyOfHeight(minHeight, maxHeight, frequencyOfBropoutOfType)
{
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.frequencyOfBropoutOfType = frequencyOfBropoutOfType;
}

function generateBlock(n0, n1, n2, n3, n4, n5, n6, n7, j)
{
    let frequencyOfBropoutOfType = [n0, n1, n2, n3, n4, n5, n6, n7];
    let block = document.createElement('block');
    
    let numberOfTypeOfThisBlock = 2;
    let selectionIntervalOfBlockType = Math.random() * 101;
    for (let i = 0; i < 8; i++)
    {
        if (selectionIntervalOfBlockType <= frequencyOfBropoutOfType[i])
        {
            numberOfTypeOfThisBlock = i;
            break;
        }
    }
    
    
    block.innerHTML = 
    `
        <img src="Blocks/${namesOfBlockSprite[numberOfTypeOfThisBlock]}.png" class="layoutСontroller">
    `;
    document.body.append(block);

    if (j === 0)
    {
        arrayOfBlockTypes.push(lineOfArrayOfBlockTypes);
        lineOfArrayOfBlockTypes = [numberOfTypeOfThisBlock];
    }
    else
    {
        lineOfArrayOfBlockTypes.push(numberOfTypeOfThisBlock);
    }
    return block;
}

function generateGameSpace()
{
    console.log("game space creating is started");
    
    for (let i = 0; i <= verticalSize; i++)
    {
        lineOfBlocks = [];

        if (101 <= i && 102 > i)
        {
            noobVerticalLayer = blocks.length;

            noob = document.createElement('noob');
    
            noob.innerHTML = 
            `
                <img src="noob.png" class="layoutСontroller">
            `;

            noob.style =
            `
            position: absolute;
            left: ${horizontalStartIndentForNoob}px;
            top: ${constVerticalIndent}px;
            z-index: 2;
            `;
            UpdateNoobPosition();
            document.body.append(noob);
            break;
        }

        for (let j = 0; j <= horizontalSize; j++)
        {
            if (1 <= i && 21 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 85, 91, 97, 1000, j));
            }
            else if (21 <= i && 36 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 87, 95, 97, 1000, j));
            }
            else if (36 <= i && 51 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 90, 97, 1000, 0, j));
            }
            else if (51 <= i && 66 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 89, 91, 96, 99, 1000, 0, j));
            }
            else if (66 <= i && 81 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 88, 93, 98, 1000, 0, 0, j));
            }
            else if (81 <= i && 96 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 90, 94, 1000, 0, 0, 0, j));
            }
            else if (96 <= i && 98 > i)
            {
                lineOfBlocks.push(generateBlock(-1, 75, 97, 99, 1000, 0, 0, 0, j));
            }
            else if (98 <= i && 100 > i)
            {
                lineOfBlocks.push(generateBlock(-1, 1000, 0, 0, 0, 0, 0, 0, j));
            }
            else if (100 <= i && 101 > i)
            {
                lineOfBlocks.push(generateBlock(1000, 0, 0, 0, 0, 0, 0, 0, j));
            }
        }
        blocks.push(lineOfBlocks);
    }

    
    console.log("game space has been created");
    console.log("");
}

function generateUI()
{

    console.log("UI creating is started");

    let UI = document.createElement('UI');
    UI.innerHTML = 
    `
    <div class="moveButtons">
        <img src="UI/moveButtons/moveUp.png" class="moveUp">
        <img src="UI/moveButtons/moveDown.png" class="moveDown">
        <img src="UI/moveButtons/moveLeft.png" class="moveLeft">
        <img src="UI/moveButtons/moveRight.png" class="moveRight">
    </div>

    <div class="blockOfResource">
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[2]}.png" class="resourceImage">
            <p id="stone">${resources[0]}</p>
        </div>
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[3]}.png" class="resourceImage">
            <p id="coal">${resources[1]}</p>
        </div>
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[4]}.png" class="resourceImage">
            <p id="iron">${resources[2]}</p>
        </div>
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[5]}.png" class="resourceImage">
            <p id="gold">${resources[3]}</p>
        </div>
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[6]}.png" class="resourceImage">
            <p id="diamond">${resources[4]}</p>
        </div>
        <div class="resource">
            <img src="Blocks/${namesOfBlockSprite[7]}.png" class="resourceImage">
            <p id="emerald">${resources[5]}</p>
        </div>
    </div>
    `;
    UI.classList.add('UI');
    document.body.append(UI);
    
    textsOfResources.push(document.querySelector('#stone'));
    textsOfResources.push(document.querySelector('#coal'));
    textsOfResources.push(document.querySelector('#iron'));
    textsOfResources.push(document.querySelector('#gold'));
    textsOfResources.push(document.querySelector('#diamond'));
    textsOfResources.push(document.querySelector('#emerald'));

    moveUp = document.querySelector('.moveUp');
    moveDown = document.querySelector('.moveDown');
    moveLeft = document.querySelector('.moveLeft');
    moveRight = document.querySelector('.moveRight');

    moveUp.addEventListener('click', (event) => 
    {
        if (noobY > 0)
        {
            --noobY;
            ++noobVerticalLayer;
            UpdateNoobPosition();
            if (arrayOfBlockTypes[noobVerticalLayer] ?? false)
            {
                resources[arrayOfBlockTypes[noobVerticalLayer][noobHorizontalLayer]]++;
            }
            UpdateTextsOfResources();
        }
    });

    moveDown.addEventListener('click', (event) => 
    {
        if (noobY < verticalSize - 1)
        {
            ++noobY;
            --noobVerticalLayer;
            UpdateNoobPosition();
            if (arrayOfBlockTypes[noobVerticalLayer] ?? false)
            {
                resources[arrayOfBlockTypes[noobVerticalLayer][noobHorizontalLayer]]++;
            }
            UpdateTextsOfResources();
        }
    });

    moveRight.addEventListener('click', (event) => 
    {
        if (noobX < (horizontalSize - 1) / 2)
        {
            ++noobX;
            ++noobHorizontalLayer;
            UpdateNoobPosition();
            if (arrayOfBlockTypes[noobVerticalLayer] ?? false)
            {
                resources[arrayOfBlockTypes[noobVerticalLayer][noobHorizontalLayer]]++;
            }
            UpdateTextsOfResources();
        }
    });

    moveLeft.addEventListener('click', (event) => 
    {
        if (noobX > (-horizontalSize) / 2)
        {
            --noobX;
            --noobHorizontalLayer;
            UpdateNoobPosition();
            if (arrayOfBlockTypes[noobVerticalLayer] ?? false)
            {
                resources[arrayOfBlockTypes[noobVerticalLayer][noobHorizontalLayer]]++;
            }
            UpdateTextsOfResources();
        }
    });
    UpdateTextsOfResources();

    console.log("UI has been created");
    console.log("");
    generateGameSpace();
}

function UpdateNoobPosition()
{
    noob.style =
    `
    position: absolute;
    left: ${horizontalStartIndentForNoob}px;
    top: ${constVerticalIndent}px;
    z-index: 2;
    `;
    for (let i = 1; i <= 100; i++)
    {
        for (let j = 0; j <= 21; j++)
        {
            blocks[i][j].style =
            `
            position: absolute;
            left: ${(j - noobX) * horizontalIndent}px;
            top: ${(101 - i - noobY) * verticalIndent + constVerticalIndent}px;
            z-index: 2;
            `;
        }
    }

    if (blocks[noobVerticalLayer] ?? false)
    {
        thisBlock = blocks[noobVerticalLayer][noobHorizontalLayer];
        thisBlock.innerHTML = 
        `
            <img src="Ladder.png" class="layoutСontroller">
        `;
    }
}

function UpdateTextsOfResources()
{
    for (let i = 0; i < 6; i++)
    {
        textsOfResources[i].textContent = resources[i + 2];
    }
}

generateUI();

const Update = setInterval(() =>
{
    moveUp.style =
    `
    top: ${window.innerHeight - 200}px;
    `;
    moveDown.style =
    `
    top: ${window.innerHeight - 65}px;
    `;
    moveLeft.style =
    `
    top: ${window.innerHeight - 140}px;
    `;
    moveRight.style =
    `
    top: ${window.innerHeight - 140}px;
    `;
    
    if (window.innerWidth >= 1400 && horizontalScreenType == "755 - 1399")
    {
        constVerticalIndent *= 2;
        horizontalIndent *= 2;
        horizontalStartIndentForNoob *= 2;
        verticalIndent *= 2;
        horizontalScreenType = "more, than 1399";
    }
    else if (window.innerWidth >= 755 && window.innerWidth < 1400 && horizontalScreenType == "more, than 1399")
    {
        constVerticalIndent /= 2;
        horizontalIndent /= 2;
        horizontalStartIndentForNoob /= 2;
        verticalIndent /= 2;
        horizontalScreenType = "755 - 1399";
    }
    else if (window.innerWidth >= 755 && window.innerWidth < 1400 && horizontalScreenType == "less, than 755")
    {
        constVerticalIndent *= 2;
        horizontalIndent *= 2;
        horizontalStartIndentForNoob *= 2;
        verticalIndent *= 2;
        horizontalScreenType = "755 - 1399";
    }
    else if (window.innerWidth < 755 && horizontalScreenType == "755 - 1399")
    {
        constVerticalIndent /= 2;
        horizontalIndent /= 2;
        horizontalStartIndentForNoob /= 2;
        verticalIndent /= 2;
        horizontalScreenType = "less, than 755";
    }
    else if (window.innerWidth >= 1400 && horizontalScreenType == "less, than 755")
    {
        constVerticalIndent *= 4;
        horizontalIndent *= 4;
        horizontalStartIndentForNoob *= 4;
        verticalIndent *= 4;
        horizontalScreenType = "more, than 1399";
    }
    else if (window.innerWidth < 755 && horizontalScreenType == "more, than 1399")
    {
        constVerticalIndent /= 4;
        horizontalIndent /= 4;
        horizontalStartIndentForNoob /= 4;
        verticalIndent /= 4;
        horizontalScreenType = "less, than 755";
    }
    UpdateNoobPosition();
}, 20);