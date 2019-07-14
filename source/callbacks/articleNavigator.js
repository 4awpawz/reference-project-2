module.exports = ({ $tag, asset }) => {
    if (asset.nextArticleUrl.length > 0) {
        $tag.append(/* html */`
            <a class="navigator__newer" href="${asset.nextArticleUrl}">Newer</a>
        `);
    } else {
        $tag.append(/* html */`
            <span class="navigator__empty">Newer</span>
        `);
    }
    if (asset.previousArticleUrl.length > 0) {
        $tag.append(/* html */`
            <a class="navigator__older" href="${asset.previousArticleUrl}">Older</a>
        `);
    } else {
        $tag.append(/* html */`
            <span class="navigator__empty">Older</span>
        `);
    }
};