let inp=document.querySelector('#inp')
let btn=document.querySelector('.btn')
let container=document.querySelector('.container')
let arr=new Array;
let dele='To be Added';
let ol=document.createElement('ol')

btn.addEventListener(('click'),(e)=>
{
    e.preventDefault();
    let value=inp.value;
    arr.push(value)
    console.log(value)
  
    let li = document.createElement('li')
    li.innerText=value;
    let div=document.createElement('div')
    div.className='list'
    div.appendChild(li)
    console.log(li)
    ol.appendChild(div)
    container.appendChild(ol)




    /*to delete*/
    let del=document.createElement('button')
    del.className='delete'
    del.innerText='Delete'
    div.appendChild(del)
    del.addEventListener('click',(e)=>
    {     
        ol.removeChild(div)
    })
})




// function create()
// {
//     let value=inp.value;
//     arr.push(value)
//     // console.log("Printing Array")
//     console.log(arr)
//     // console.log(value)
//     let elem= document.createElement("div")
//     elem.setAttribute("class","elem")
//     // console.log(elem)
//     let addText=document.createElement("h3")
//     addText.setAttribute("class","para")
//     addText.innerText=value;
//     elem.appendChild(addText)
//     // console.log(addText)
//     let del=document.createElement("button")
//     del.setAttribute("class","btn2")
//     del.innerText="Delete"
//     dele=del;
//     // console.log("Button Added here",dele)
//     // console.log(del)
//     container.appendChild(elem)
//     container.appendChild(del)
//     // console.log(arr[0])
// }

// btn.addEventListener('click',(e)=>
// {
//     e.preventDefault();
//    create();
// })
// dele.addEventListener('click',(e)=>
// {
//     console.log('Clicked on delete button')
// })


