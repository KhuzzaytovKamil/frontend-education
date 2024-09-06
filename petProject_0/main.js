
let xPosition = 100;
let yPosition = 27400;
let dataOfBlockChances = [];
let namesOfBlockSprite = ["grass", "dirt", "stone", "coal", "iron", "gold", "diamond", "emerald"];
let arrayOfBlockStrength = [0.45, 0.45, 1.5, 2.25, 2.25, 2.25, 2.25, 2.25]

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
    console.log(selectionIntervalOfBlockType);
    for (let i = 0; i < 8; i++)
    {
        if (selectionIntervalOfBlockType <= frequencyOfBropoutOfType[i])
        {
            numberOfTypeOfThisBlock = i;
            console.log(numberOfTypeOfThisBlock);
            break;
        }
    }
    
    
    block.innerHTML = 
    `
        <img src="Blocks/${namesOfBlockSprite[numberOfTypeOfThisBlock]}.png">
    `;
    // let blockStrength = localFrequencyOfHeight.blockStrength[numberOfTypeOfThisBlock];
    // let restBlockStrength = blockStrength;
    
    xPosition += 256;
    block.style =
    `
    position: absolute;
    left: ${xPosition}px;
    top: ${yPosition}px;
    z-index: 1;
    `;
    document.body.append(block);
}

function generateGameSpace()
{
    console.log("game space is being creating");

    dataOfBlockChances.push(new FrequencyOfHeight(0, 21, [-1, -1, 85, 85, 85, 91, 97, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(21, 36, [-1, -1, 85, 85, 87, 95, 97, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(36, 51, [-1, -1, 85, 85, 90, 97, 100, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(51, 65, [-1, -1, 89, 91, 96, 99, 100, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(66, 81, [-1, -1, 88, 93, 98, 100, 100, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(81, 96, [-1, -1, 90, 94, 100, 100, 100, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(96, 98, [-1, 75, 97, 99, 100, 100, 100, 100]));
    dataOfBlockChances.push(new FrequencyOfHeight(98, 100, [-1, 100, 100, 100, 100, 100, 100, 100]));
    
    for (let i = 0; i <= 101; i++)
    {
        for (let j = 0; j <= 61; j++)
        {
            if (0 <= i && 21 > i)
            {
                generateBlock(-1, -1, 85, 85, 85, 91, 97, 1000);
            }
            else if (21 <= i && 36 > i)
            {
                generateBlock(-1, -1, 85, 85, 87, 95, 97, 1000);
            }
            else if (36 <= i && 51 > i)
            {
                generateBlock(-1, -1, 85, 85, 90, 97, 1000, 0);
            }
            else if (51 <= i && 66 > i)
            {
                generateBlock(-1, -1, 89, 91, 96, 99, 1000, 0);
            }
            else if (66 <= i && 81 > i)
            {
                generateBlock(-1, -1, 88, 93, 98, 1000, 0, 0);
            }
            else if (81 <= i && 96 > i)
            {
                generateBlock(-1, -1, 90, 94, 1000, 0, 0, 0);
            }
            else if (96 <= i && 98 > i)
            {
                generateBlock(-1, 75, 97, 99, 1000, 0, 0, 0);
            }
            else if (98 <= i && 100 > i)
            {
                generateBlock(-1, 1000, 0, 0, 0, 0, 0, 0);
            }
            else if (100 <= i && 101 > i)
            {
                generateBlock(1000, 0, 0, 0, 0, 0, 0, 0);
            }
            else if (101 <= i && 102 > i)
            {
                if (j == 31)
                {
                    let noob = document.createElement('noob');
    
                    noob.innerHTML = 
                    `
                        <img src="noob.png">
                    `;
                    noob.style =
                    `
                    position: absolute;
                    left: ${xPosition}px;
                    top: ${yPosition}px;
                    z-index: 1;
                    `;
                    document.body.append(noob);
                }
                else
                {
                    xPosition += 256;
                }
            }
        }
        yPosition -= 256;
        xPosition = 100;
    }
    
    console.log("game space generation has been created");
    console.log("");
}

generateGameSpace();