var test = `virkar`;

var container = document.querySelector("#container");



var cards = [
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803977_01.jpg`,
        title:`Nike Air Presto Off White`,
        price: 850.00,
        inStock: false,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],
    },
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804113_01.jpg`,
        title:`Nike Air Presto Off White`,
        price: 695.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    },    
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803238_01.jpg`,
        title:`Nike Air Vapormax fk "Off White"`,
        price: 740.00, 
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    },
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/801866_01.jpg`,
        title:`Nike Air Vapormax fk "Off White"`,
        price: 665.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    }, 
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804892_01.jpg`,
        title:`Nike Air Max 97 OG "Off White"`,
        price: 785.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    }, 
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802441_01.jpg`,
        title:`Nike Air Max 97 OG "Off White"`,
        price: 1045.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    },
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803168_01.jpg`,
        title:`Air Force 1 '07 Virgil X Moma "Off White X Moma"`,
        price: 1250.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    },
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802566_01.jpg`,
        title:`Air Force 1 '07 "Off White"`,
        price: 2500.00,
        inStock: true,
        limited: true,
        condition: true,
        sizes:['40', ' -', ' 46'],

    }, 
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/801781_01.jpg`,
        title:`Air Jordan 1 "Off White"`,
        price: 3150.00,
        inStock: true,
        limited: true,
        condition: true,
        sizes:['40', ' -', ' 46'],

    }, 
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803424_01.jpg`,
        title:`Air Jordan 1X Off White NRG (GS) "Off White"`,
        price: 2260.00,
        inStock: true,
        limited: true,
        condition: true,
        sizes:['40', ' -', ' 46'],

    }, 
    {
        img: `https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/804093_01.jpg`,
        title:`Jordan 1 Retro High Off-White "Off White UNC"`,
        price: 1125.00,
        inStock: true,
        limited: false,
        condition: true,
        sizes:['40', ' -', ' 46'],

    },  

]

var store ={
    currency: `$`
}

var prump = 'Albert';


//búa til function sem tekur inn array og kallar á functionið með cards, kallar líka á functionið með searchResults.
function displayCards(array){
    console.log('keyrt')
    console.log(array)
    container.innerHTML = '';

    for(var i = 0; i<array.length;i++){
    
        var inStock;
        var sizes = '';
    
    
    
        var limited = '';
            if(array[i].limited){
                for(var r=0; r <array[i].limited.length; r++){
    
                }
                limited = `Limited Edition`
            }
            else{
                limited = `Common`
            }
    
            var condition = '';
            if(array[i].condition){
                for(var r=0; r <array[i].condition.length; r++){
    
                }
                condition = `New`
            }
            else{
                condition = `Used`
            }
            if(array[i].inStock){
                for(var s=0; s < array[i].sizes.length; s++){
                    sizes += array[i].sizes[s] + ''
                }
                inStock = `In stock`
            } 
            else {
                inStock = `Not in stock`
                limited = '';
                condition = '';
        
            }  
    
        container.innerHTML +=`
            <div id="card">
                <img src="${array[i].img}"/>
                <div id="card-text">
                    <div id="card-title">
                        <h1>${array[i].title}</h1>
                    </div>
                    <div id="card-price">
                        <h2>${array[i].price} ${store.currency}</h2>
                    </div>
                    <div id="card-instock">
                        <h3>${inStock}</h3>
                    </div>
                    <div id="card-size">
                        <h3>${sizes}</h3>
                    </div>
                    <div id="card-limited">
                        <h3>${limited}</h3>
                    </div>
                    <div id="card-condition">
                    <h3>${condition}</h3>
                </div>
                </div>
                ${array[i].inStock?'<a href="#"><button id="buy-btn">Buy</button></a>':""}
            <div>
         `
        console.log(i)
     }


}

displayCards(cards)


 function searchForTitle (){
     var title;
     var searchResults = [];
    var searchBar = document.querySelector("#search-bar")
    for(i=0; i<cards.length; i++){

        if(cards[i].title.toLowerCase().search(searchBar.value.toLowerCase()) !==-1){
            searchResults.push(cards[i])
        title = cards[i].title;
        }   
    else
    {
        title =`Search returned nothing`;
    }
 }

    displayCards(searchResults)
}


