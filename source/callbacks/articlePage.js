module.exports = ({ $tag, asset }) => {
    $tag.find("h1.article__title").append(asset.matter.data.articleTitle);
    $tag.find("div.article__date").append(asset.articleDate);
    $tag.find("section.article__content").append(asset.matter.content);
};