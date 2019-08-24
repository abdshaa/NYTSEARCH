let searchTerm = `soda`;
let searchLimit;
let printArticle = $(`#articlesHere`);
let max = 5;
const queryHeadlineURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=headline.search=${searchTerm}&api-key=zyNBBFFZHJCKjx1MzXZWyB3f2y9DWxMr`;
$.ajax({
  url: queryHeadlineURL,
  method: "GET"
}).then(function(xx) {
  console.log(xx.response);
  const results = xx.response.docs;
  for (let hl = 0; hl < max; hl++) {
    // let headlineDiv = $(`<div>`);

    const headline = results[hl].headline.main;
    const leadParagraph = results[hl].lead_paragraph;
    const resultP = $(`<p>`).text(`"${headline}"`);
    resultP.css("font-weight", "700");
    const resultLP = $(`<p>`).text(`"${leadParagraph}.."`);
    resultLP.css("padding-left", "2.5%");

    printArticle.append(resultP);
    printArticle.append(resultLP);
    console.log(headline);
  }
});
