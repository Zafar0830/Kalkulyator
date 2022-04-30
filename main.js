let elTds=document.querySelectorAll('td');
let elMonitor=document.querySelector('.monitor')

elTds.forEach(function (evt) {
    evt.addEventListener('click',function (item) {
        let belgi=item.target.innerText;
        if (belgi=="c") {
            elMonitor.value=""
        }else if(belgi== "="){
            elMonitor.value=eval(elMonitor.value)
        }
        else{
            elMonitor.value+=belgi
        }
    })
})

