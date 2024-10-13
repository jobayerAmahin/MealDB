const getApiData=async()=>{
    try{
        const res=await fetch('https://themealdb.com/api/json/v1/1/categories.php')
        const data=await res.json()
        createCard(data.categories)
    }
    catch(error){
        console.log('Error is found',error)
    }
}

const getCategoryData=async(categ)=>{
    try{
        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`)
        const data=await res.json()
        console.log(data.meals)
    }
    catch(e){
        console.log('Error is found',e)
    }
}

const createCard=(apiArray)=>{
    apiArray.forEach(eachObj => {
        const {idCategory,strCategory,strCategoryDescription,strCategoryThumb}=eachObj
        
        const newCard=document.createElement('div')
        newCard.innerHTML=`
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure class="px-5 pt-5">
                <img
                src=${strCategoryThumb}
                alt="Shoes"
                class="rounded-xl bg-cover" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${strCategory}</h2>
                <div class="card-actions flex justify-between items-center">
                    <button class="btn btn-md bg-blue-300 font-bold" onclick="getCategoryData('${strCategory}')">Show More</button>
            
                    <button id=${idCategory} class='btn btn-md bg-green-300 text-black font bold' onclick='addToCart(${idCategory})'>Add To Cart</button>
                </div>
            </div>
        </div>
        `
        document.getElementById('contentArea').appendChild(newCard)
    });
}

const addToCart=(id)=>{
    const addToCartBtn=document.getElementById(id)

    addToCartBtn.innerText='Added'
    addToCartBtn.setAttribute('disabled',true)

    
}

getApiData()
