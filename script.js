document.querySelector('#plus').addEventListener('click', function () {
    document.querySelector('.form').style.display = 'block';
});

document.querySelector('#cancel').addEventListener('click', function () {
    document.querySelector('.form').style.display = 'none';
});

var createBtn = document.querySelector('#create');
var inpName = document.querySelector('#name');
var inpSection = document.querySelector('#section');

createBtn.addEventListener('click', function () {
    if (inpName.value !== "" && inpSection.value !== "") {
        var cardHTML = `  
            <div class="card">
                <div class="top">
                    <div class="txt">
                        <h2>${inpName.value}</h2> 
                        <span>${inpSection.value}</span>
                    </div>
                    <div class="icon">
                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M">
                            <path fill="#fff" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                    </div>
                </div>
                <div class="middle"></div>
                <div class="bottom">
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M hhikbc">
                        <path d="M16 6v2h2.58l-5.17 5.17-4-4L2 16.59 3.41 18l6-6 4 4L20 9.42V12h2V6z"></path>
                    </svg>
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
                    </svg>
                </div>
            </div>`;

        document.querySelector('.hero').innerHTML += cardHTML;

        inpName.value = "";
        inpSection.value = "";

        // Hiding the form
        document.querySelector('.form').style.display = 'none';
    }
});

function validateInputs() {
    if (inpName.value == "" && inpSection.value == "") {
        createBtn.disabled = true;
        createBtn.style.color = '#dadada';
    } else {
        createBtn.disabled = false;
        createBtn.style.color = 'rgba(0, 0, 0, 0.7)';
    }
}


inpName.addEventListener('input', validateInputs);
inpSection.addEventListener('input', validateInputs);
