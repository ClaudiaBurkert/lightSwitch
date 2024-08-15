title = document.getElementById('website_title'); 

console.log(title.innerHTML);

title.innerHTML = "Lichtschalter"; 

// test comment for git

function lightSwitch() {
    let body =  document.getElementsByTagName('body')[0];
    let button = document.getElementById('light'); 
    let eyes = document.getElementById('eyes'); 

   body.classList.toggle('light'); 

    if(body.classList.contains('light')) {
        button.innerText = 'Licht an'; 
        eyes.classList.remove('d-none');

    } else {
        button.innerText = 'Licht aus'; 
        eyes.classList.add('d-none');
    }
}

// document.getElementById('test-input').setAttribute('type', 'text');

document.getElementById('test-input').value = 456;