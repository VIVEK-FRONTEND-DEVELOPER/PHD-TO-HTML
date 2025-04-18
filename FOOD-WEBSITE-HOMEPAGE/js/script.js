document.getElementById("toggleBtn").addEventListener("click", function(){
    const moreText = document.getElementById("moreText")
    const btn = document.getElementById("toggleBtn")

    if (moreText.style.display === "none"){
        moreText.style.display  = "inline";
        btn.textContent = "Read Less";
    }else{
        moreText.style.display = "none"
        btn.textContent = "Read More"
    }
})