let inp=document.querySelector('#inp')
let btn=document.querySelector('.btn')
let form = document.querySelector('form')
let container=document.querySelector('.container')
let arr=new Array;
let ol=document.createElement('ol')

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    let value=inp.value.trim();
    if(value !== ""){
        arr.push(value)
        console.log(value)
        ol.classList.add("list")
        let li = document.createElement('li')
        li.classList.add("listItem")
        li.innerHTML = `
            <label class="leftOfItem">
                <input type="checkbox" name="checker" id="checker">
                <span></span>
                <p class="taskText">${value}</p>
            </label>
            <button class="delete">
                <img class="btnImg" src="./resources/icons/bin.png" alt="">
            </button>
        `
        ol.appendChild(li)
        container.appendChild(ol)
        


        // let li = document.createElement('li')
        // li.innerText=value;
        // let div=document.createElement('div')
        // div.className='list'
        // div.appendChild(li)
        // console.log(li)
        // ol.appendChild(div)
        // container.appendChild(ol)

        /*to delete*/
        let del = li.querySelector('.delete');
        del.addEventListener('click', (e) => {
            li.remove();
        });

        // task check-uncheck

        let checker = li.querySelector('#checker')
        checker.addEventListener('change', (e)=>{
            if (checker.checked) {
                li.style.backgroundColor = "#465146f5"
                li.querySelector('.taskText').style.textDecoration = "line-through";
                del.disabled = true
                del.style.backgroundColor = '#d3d3d3';
                del.style.cursor = 'not-allowed';
                del.style.pointerEvents = 'none';
            } else{
                li.style.backgroundColor = "#232327f5"
                li.querySelector('.taskText').style.textDecoration = "none";
                del.disabled = false
                del.style.backgroundColor = '';
                del.style.cursor = 'pointer';
                del.style.pointerEvents = '';
            }
        })
        inp.value = ""
    }
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


