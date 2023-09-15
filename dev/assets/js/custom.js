const building = document.querySelectorAll('.building');
const adressValue = document.querySelector('#adress-value');
const floorsValue = document.querySelector('#floors-value');
const apartmentsValue = document.querySelector('#apartments-value');
const descriptionValue = document.querySelector('#description');

building.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataBuildingAdress = item.getAttribute('data-building-adress');
        const dataFloorsNumber = item.getAttribute('data-floors-number');
        const dataApartmensNumber = item.getAttribute('data-apartments-number');
        const dataDescription = item.getAttribute('data-description');

        adressValue.innerHTML = dataBuildingAdress;
        floorsValue.innerHTML = dataFloorsNumber;
        apartmentsValue.innerHTML = dataApartmensNumber;
        descriptionValue.innerHTML = dataDescription;
    })

    // *An option where, upon removing the mouse from the building, 
    // the descriptions in the fields of the buildings will revert 
    // to their default state*

    // item.addEventListener('mouseout', function() {
        // adressValue.innerHTML = '';
        // floorsValue.innerHTML = '';
        // apartmentsValue.innerHTML = '';
        // descriptionValue.innerHTML = 'We will gladly describe our buildings.';
    // })
    
});