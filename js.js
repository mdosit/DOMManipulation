function showFilter() {

    let filter = document.getElementById("filterContent");
    let addNew = document.getElementById("newContent");

    addNew.style.display = "none";

    filter.style.display = "block";
}

function showAddNew() {

    let filter = document.getElementById("filterContent");
    let addNew = document.getElementById("newContent");

    filter.style.display = "none";

    addNew.style.display = "flex";

}

function addNewArticle() {

    let article = document.createElement("article");
    let marker = document.createElement("span");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let link = document.createElement("p");
    let anchor = document.createElement("a");

    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;
    let type = "";
    
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }
    
    article.className = type;
    marker.className = "marker";
    marker.textContent = type;

    h2.textContent = title;
    p.textContent = text;

    anchor.href = "moreDetails.html";
    anchor.textContent = "Read more...";

    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(link);
    article.append(anchor);
    document.getElementById("articleList").appendChild(article);

}

function filterArticles() {

    let opinion = document.getElementById("opinionCheckbox").checked;
    let recipe = document.getElementById("recipeCheckbox").checked;
    let update = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article")

    for (const article of articles) {
        if ((article.classList.contains("opinion") && !opinion) || (article.classList.contains("recipe") && !recipe) || (article.classList.contains("update") && !update)) {
            article.style.display = "none";
        } else {
            article.style.display = "block";
        }
    }
}