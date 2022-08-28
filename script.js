const items = [
    'cherries',
    'seven',
    'watermelon',
    'star',
    'crown',
    'apple',
        
    'star',
    'crown',
    'apple',

    'star',
    'crown',
    'apple'
    ,
    
    'star',
    'crown',
    'apple',

    'star',
    'crown',
    'apple'
        
        
        
]

const icons = [
    
'👍',
'🦇',
'⛳',
'😚',
'🐟',
'💵',
'7️⃣',
'🐪',        
    
'🦇',
'⛳',
'😚',
'🐟',
'💵',
    '7️⃣', 

'🦇',
'⛳',
'😚',
'🐟',
'💵',
    '7️⃣',
   
        
]
document.querySelector('button').addEventListener('click', () => {

    
        
    document.querySelectorAll('img').forEach((eItems, index) => {
        const randomTime = 1000 + 1000 * index;
        randomizeImgs(eItems, randomTime);
        // setTimeout(() => {
        //     chooseRandom(eItems);
        // }, randomTime);


    })
})
        const randomizeImgs = (eItems, time) => {
            const timeInterval = setInterval(() => {
                eItems.classList.remove('animate');
                chooseRandom(eItems);
            }, 150);
            setTimeout(() => {
                eItems.classList.remove('animate');

                clearInterval(timeInterval);
            }, time);
        }


        const chooseRandom = (eItems) => {
            const random = Math.floor(Math.random(items) * items.length);
            const selectItems = items[random];
            eItems.src = `./slot_items/${selectItems}.png`;
            eItems.classList.add('animate');
           
        }
    
