// Function to get Hijri date
function getHijriDate() {
    const hijriDate = new Intl.DateTimeFormat('en-u-ca-islamic', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date());
    document.getElementById('hijri-date').textContent = hijriDate;
}

// Function to get Gregorian date
function getGregorianDate() {
    const gregorianDate = new Date().toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('gregorian-date').textContent = gregorianDate;
}

// Call the functions
getHijriDate();
getGregorianDate();