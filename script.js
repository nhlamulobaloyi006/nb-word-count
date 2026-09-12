const textarea = document.getElementById("textarea");
const characterCount = document.getElementById("characterCount");
const themeBtn = document.getElementById("themeBtn");
const icon = document.getElementById("icon");
const body = document.querySelector("body");


let isDark = false;
const icons = ["/icons/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg","/icons/dark_mode_24dp_0000000_FILL0_wght400_GRAD0_opsz24.svg"]
let userPref = []
let storeValue;

function userPreference() {
    const loadTheme = localStorage.getItem("userPreference");

    if (loadTheme) {
        const convert = JSON.parse(localStorage.getItem("userPreference"));
        userPref = [...convert];
        console.log(userPref);

        body.style.backgroundColor = userPref[0]["styles"]
        icon.src = userPref[0]["icon"]

    }
    
}

userPreference()

function storedCharacters() {
    const loadCharacters = localStorage.getItem("value");

    if (loadCharacters) {
        const convert = JSON.parse(localStorage.getItem("value"));
        storeValue =  [...convert]
        const characters = storeValue[0]["char"]
        textarea.value = characters;
        characterCount.textContent = `${textarea.value.length} Characters`; 
        console.log(storeValue)
    }

    
}

storedCharacters()

function darkTheme() {
    isDark = !isDark

    !isDark ? body.classList.remove("dark-mode") : body.classList.add("dark-mode");
    !isDark ? icon.src = icons[1] : icon.src = icons[0];

    if (isDark) {
        const userTheme = 
        {
            theme: "dark",
            styles: "#343541",
            icon: "/icons/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
        }
        userPref = [userTheme]
    }

    if (!isDark) {
         const userTheme = 
        {
            theme: "light",
            styles: "#ffffff",
            icon: "/icons/dark_mode_24dp_0000000_FILL0_wght400_GRAD0_opsz24.svg"
        }
        userPref = [userTheme]
    }
    
    
    localStorage.setItem("userPreference", JSON.stringify(userPref));
    console.log(userPref)
    userPreference()
    
}

themeBtn.addEventListener("click", function() {
    darkTheme()
});

textarea.addEventListener("input", (e) => {
    const value = e.target.value;
    const characterLength = value.length;
    characterCount.textContent = `${characterLength} Characters`;

    const characters =
    {
        char: value
    }
    storeValue = [characters]
    localStorage.setItem("value", JSON.stringify(storeValue));

});

textarea.addEventListener("keydown", (e)=>{
    if (e.key === "Control") {
        textarea.value = "";
        characterCount.textContent = `${textarea.value.length} Characters`;
        localStorage.removeItem("value")
    }
    console.log(e.key);
    
});

