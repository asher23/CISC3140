window.onload = async function onLoadFunction() {
    let i = 20;
    while (i-- > 0) {
        const response = await fetch('https://randomuser.me/api/');        
        const jsonResp = await response.json();
        const LInode = document.createElement("LI");
        LInode.appendChild(document.createTextNode(jsonResp.results[0].email));
        document.getElementById("apiList").appendChild(LInode);
    }
}