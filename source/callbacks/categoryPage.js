module.exports = ({ $tag, asset, site }) => {
    site.categoriesCatalog
        .find(item => item.category === asset.matter.data.forCategory[0])
        .related.forEach(article => $tag.append(/* html */`
            <li class="category__list-item">
                <a class="category__list-item-link" href="${article.url}">
                    ${site.articlesCatalog.find(item => item.url === article.url).matter.data.articleTitle}
                </a>
            </li>
    `));
};