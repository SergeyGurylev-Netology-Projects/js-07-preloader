const xhr = new XMLHttpRequest();
xhr.addEventListener("loadstart", onLoadEvent);
xhr.addEventListener("loadend", onLoadEvent);
xhr.addEventListener("load", onLoad);
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

function onLoadEvent(e) {
    switch (e.type) {
        case 'loadstart': {
            document.getElementById('loader').classList.add('loader_active');
            break;
        }
        case 'loadend': {
            document.getElementById('loader').classList.remove('loader_active')
            break;
        }
    }
}

function onLoad() {
    const valute = JSON.parse(this.responseText).response.Valute;
    for(key in valute) {
        insertValuteItemHTML(valute[key].CharCode, valute[key].Value);
    }
}

function insertValuteItemHTML(charCode, value) {
    document.getElementById('items').insertAdjacentHTML(
        'beforeend', `
        <div class="item">
            <div class="item__code">
                ${charCode}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `
    )
}
