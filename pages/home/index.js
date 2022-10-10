function generateCards(items) {

    const liCard         = document.createElement('li');
    const divImg         = document.createElement('div');
    const img            = document.createElement('img');
    const divInfo        = document.createElement('div');
    const pName          = document.createElement('p');
    const pYear          = document.createElement('p');
    const h2Title        = document.createElement('h2');
    const divBtnAndPrice = document.createElement('div');
    const pPrice         = document.createElement('p');
    const btnBuy         = document.createElement('button');

    liCard.classList.add('card');
    liCard.id          = `${items.id}`;

    divImg.classList.add('img-container');

    img.src  = `${items.img}`;
    img.alt  = 'foto do album';

    divInfo.classList  = 'album-author flex direction-row gap-20 text-2 grey-2';

    pName.innerText    = `${items.band}`;
    
    pYear.innerText    = `${items.year}`;

    h2Title.classList  = 'text-1 grey-1';
    h2Title.innerText  = `${items.title}`;

    divBtnAndPrice.classList = 'product-price-btn flex direction-row align-items-center justify-content-sb';

    pPrice.classList.add('grey-1');
    pPrice.innerText    = `R$ ${items.price},00`;

    btnBuy.classList = 'grey-7-bg grey-2-btn';
    btnBuy.innerText = 'Comprar';

    liCard.append(divImg,divInfo,h2Title,divBtnAndPrice);
    divImg.appendChild(img);
    divInfo.append(pName,pYear);
    divBtnAndPrice.append(pPrice,btnBuy);

    return liCard;
}

function insertCards (arr) {

    const tagUl       = document.querySelector('#album-list');

    tagUl.innerHTML   = '';

        arr.forEach((element)=> {

            const card = generateCards(element);
            tagUl.append(card);
            return card;
        })

}
insertCards(products)

const buttonFilterAll   = document.querySelector('#all');
const buttonFilterPop = document.querySelector('#pop');
const buttonFilterMPB  = document.querySelector('#mpb');
const buttonFilterForro  = document.querySelector('#forro');
const buttonFilterSamba  = document.querySelector('#samba');
const buttonFilterBaiao  = document.querySelector('#baiao');
const buttonFilterRap  = document.querySelector('#rap');
const buttonFilterHipHop  = document.querySelector('#hip-hop');
const buttonFilterRock  = document.querySelector('#rock');
const buttonFilterReggae  = document.querySelector('#reggae');
const buttonFilterCountry  = document.querySelector('#country');
const buttonFilterGospel  = document.querySelector('#gospel');

buttonFilterAll.addEventListener('click', (event) => {
    event.preventDefault();

    filterPrice(products);
    insertCards(products);
})

buttonFilterPop.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterPop = products.filter((element) => {
       
        return element.category == 0;
    })
    filterPrice(arrayFilterPop);
    insertCards(arrayFilterPop);
})

buttonFilterMPB.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterMPB = products.filter((element) => {

        return element.category == 1;
    })
    filterPrice(arrayFilterMPB)
    insertCards(arrayFilterMPB);
})

buttonFilterForro.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterForro = products.filter((element) => {

        return element.category == 2;
    })
    filterPrice(arrayFilterForro);
    insertCards(arrayFilterForro);
})

buttonFilterSamba.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterSamba = products.filter((element) => {

        return element.category == 3;
    })
    filterPrice(arrayFilterSamba);
    insertCards(arrayFilterSamba);
})

buttonFilterBaiao.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterBaiao = products.filter((element) => {

        return element.category == 4;
    })
    filterPrice(arrayFilterBaiao);
    insertCards(arrayFilterBaiao);
})

buttonFilterRap.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterRap = products.filter((element) => {

        return element.category == 5;
    })
    filterPrice(arrayFilterRap);
    insertCards(arrayFilterRap);
})

buttonFilterHipHop.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterHipHop = products.filter((element) => {

        return element.category == 6;
    })
    filterPrice(arrayFilterHipHop);
    insertCards(arrayFilterHipHop);
})

buttonFilterRock.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterRock = products.filter((element) => {

        return element.category == 7;
    })
    filterPrice(arrayFilterRock);
    insertCards(arrayFilterRock);
})

buttonFilterReggae.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterReggae = products.filter((element) => {

        return element.category == 8;
    })
    filterPrice(arrayFilterReggae);
    insertCards(arrayFilterReggae);
})

buttonFilterCountry.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterCountry = products.filter((element) => {

        return element.category == 9;
    })
    filterPrice(arrayFilterCountry);
    insertCards(arrayFilterCountry);
})

buttonFilterGospel.addEventListener('click', (event) => {
    event.preventDefault();
    const arrayFilterGospel = products.filter((element) => {

        return element.category == 10;
    })
    filterPrice(arrayFilterGospel);
    insertCards(arrayFilterGospel);
})

function filterPrice(arr) {
    const inputFilterRange = document.querySelector('#filter-price');
    let  valuePriceFilter  = document.querySelector('#value-price');
    const price              = arr.forEach((element) => {
        element.price;
    });
    
    inputFilterRange.addEventListener('input',(event) => {
      let filterPrice =  valuePriceFilter.textContent = `Até R$ ${inputFilterRange.value},00`;

      const arrFilterPrice = arr.filter((element) => element.price <= inputFilterRange.value)
      insertCards (arrFilterPrice)
      
      if(filterPrice) {
        
        return +inputFilterRange.value;
      }
    })
}
filterPrice(products);

