let noobVerticalLayer = 1;
let noobHorizontalLayer = 11;

let constVerticalIndent = 500;
let horizontalIndent = 64;
let horizontalStartIndentForNoob = 64 * noobHorizontalLayer;
let verticalIndent = 64;

let namesOfBlockSprite = ["grass", "dirt", "stone", "coal", "iron", "gold", "diamond", "emerald"];

let noob;
let noobX = 0;
let noobY = 0;

let blocks = [];
let thisBlock;

function FrequencyOfHeight(minHeight, maxHeight, frequencyOfBropoutOfType)
{
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.frequencyOfBropoutOfType = frequencyOfBropoutOfType;
}

function generateBlock(n0, n1, n2, n3, n4, n5, n6, n7)
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
        <img src="Blocks/${namesOfBlockSprite[numberOfTypeOfThisBlock]}.png">
    `;
    document.body.append(block);
    return block;
}

function generateGameSpace()
{
    console.log("game space creating is started");
    
    for (let i = 0; i <= 101; i++)
    {
        lineOfBlocks = [];

        if (101 <= i && 102 > i)
        {
            noobVerticalLayer = blocks.length;

            noob = document.createElement('noob');
    
            noob.innerHTML = 
            `
                <img src="noob.png">
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

        for (let j = 0; j <= 21; j++)
        {
            if (1 <= i && 21 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 85, 91, 97, 1000));
            }
            else if (21 <= i && 36 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 87, 95, 97, 1000));
            }
            else if (36 <= i && 51 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 85, 85, 90, 97, 1000, 0));
            }
            else if (51 <= i && 66 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 89, 91, 96, 99, 1000, 0));
            }
            else if (66 <= i && 81 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 88, 93, 98, 1000, 0, 0));
            }
            else if (81 <= i && 96 > i)
            {
                lineOfBlocks.push(generateBlock(-1, -1, 90, 94, 1000, 0, 0, 0));
            }
            else if (96 <= i && 98 > i)
            {
                lineOfBlocks.push(generateBlock(-1, 75, 97, 99, 1000, 0, 0, 0));
            }
            else if (98 <= i && 100 > i)
            {
                lineOfBlocks.push(generateBlock(-1, 1000, 0, 0, 0, 0, 0, 0));
            }
            else if (100 <= i && 101 > i)
            {
                lineOfBlocks.push(generateBlock(1000, 0, 0, 0, 0, 0, 0, 0));
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
        <div class="moveUp">
            <img src="UI/moveButtons/moveUp.png">
        </div>
        <div class="moveDown">
            <img src="UI/moveButtons/moveDown.png">
        </div>
        <div class="moveLeft">
            <img src="UI/moveButtons/moveLeft.png">
        </div>
        <div class="moveRight">
            <img src="UI/moveButtons/moveRight.png">
        </div>
    </div>
    `;
    UI.classList.add('UI');
    document.body.append(UI);
    
    let moveUp = document.querySelector('.moveUp');
    let moveDown = document.querySelector('.moveDown');
    let moveLeft = document.querySelector('.moveLeft');
    let moveRight = document.querySelector('.moveRight');

    moveUp.addEventListener('click', (event) => 
    {
        noobY -= 64;
        ++noobVerticalLayer;
        UpdateNoobPosition();
    });

    moveDown.addEventListener('click', (event) => 
    {
        noobY += 64;
        --noobVerticalLayer;
        UpdateNoobPosition();
    });

    moveRight.addEventListener('click', (event) => 
    {
        noobX += 64;
        ++noobHorizontalLayer;
        UpdateNoobPosition();
    });

    moveLeft.addEventListener('click', (event) => 
    {
        noobX -= 64;
        --noobHorizontalLayer;
        UpdateNoobPosition();
    });

    console.log("UI has been created");
    generateGameSpace();
    console.log("");
}

generateUI();

function UpdateNoobPosition()
{
    for (let i = 1; i <= 100; i++)
    {
        for (let j = 0; j <= 21; j++)
        {
            blocks[i][j].style =
            `
            position: absolute;
            left: ${j * horizontalIndent - noobX}px;
            top: ${(101 - i) * verticalIndent + constVerticalIndent - noobY}px;
            z-index: 2;
            `;
        }
    }

    console.log(blocks[noobVerticalLayer]);
    if (blocks[noobVerticalLayer] ?? false)
    {
        thisBlock = blocks[noobVerticalLayer][noobHorizontalLayer];
        thisBlock.innerHTML = 
        `
            <img src="transparentSprite.png">
        `;
    }
}