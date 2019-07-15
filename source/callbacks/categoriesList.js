module.exports = ({ $tag, site }) => {
    site.categoriesCatalog.forEach(item =>
        $tag.append(/* html */ `
            <a class="blog-categories-list__item" href="${site.frags.find(frag => frag.matter.data.forCategory && frag.matter.data.forCategory[0] === item.category).url}">${item.category}</a>
    `));
};