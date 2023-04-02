function findLocalstorage () {
    let data = localStorage.getItem('cardsJson')
    if (data) {
        createCard(JSON.parse(data))
    } 
}


function createCard (obj) {

    let cards = '';

    obj.forEach(item => {
        const cardBlock = `
            <div class="card">
                <img
                    src="${item.download_url}"
                    class="card-image"
                />
            </div>
        `
        cards = cards + cardBlock;
    });

    content.innerHTML = cards
}


const useRequest = (request) => { 

    fetch (request)

    .then((response) => { return response.json(); })

    .then((data) => {
        localStorage.setItem('cardsJson', JSON.stringify(data))
        createCard (data)
    })
    .catch(() => {console.log('error')});

}


const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => {
    const val1 = document.querySelector('.val1').value;
    const val2 = document.querySelector('.val2').value;
   
        if(val1 < 1 || val1 > 10) {
            content.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
        } else if (val2 < 1 || val2 > 10) {
            content.innerHTML = 'Лимит вне диапазона от 1 до 10'
        } else {
            useRequest(`https://picsum.photos/v2/list?page=${val1}&limit=${val2}`)
        }
})


findLocalstorage ()



// async function start(){
//     let data = localStorage.getItem('cardsJson')
//     if(data){
//         doCard(JSON.parse(data))        
//     }
    
// }

// async function useRequest(request){
//     let data = await (await fetch (request)).json()
//     localStorage.setItem('cardsJson', JSON.stringify(data))
//     doCard(data)
// }
// function doCard(data){
//     let cards = ''
//     data.forEach(item => {
//         const cardBlock = `
//             <div class="card">
//                 <img
//                     src="${item.download_url}"
//                     class="card-image"
//                 />
//             </div>
//         `
//         cards = cards + cardBlock;
//     });
//     content.innerHTML = cards
// }

// start()

































